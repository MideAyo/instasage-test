import Svg from "@/components/global/svg";
import {chevronRight, darkChevronRight, chevronLeft} from "@/svg/icons";
import SwiperCore from "swiper";
import "swiper/css";
import React, {useRef, useState} from "react";
import "swiper/css/navigation";
import { Swiper, SwiperSlide,} from "swiper/react";
import Recommended from "@/components/dashboard/recommended";
import Circles from "@/components/dashboard/Circle";
import PageButton from "@/components/inputs/page-button";

export type SlideProps = {
    recommendedBooks?: {
        id: number,
        bookName : string
        bookInfo : string,
        authorName :string,
        bookImage :string,
        authorImage :string
    }[] ,
    sage?: {
        id: number;
        circleName: string;
        members: number;
        info: string;
        circleImage: string
    }[];
    name: string,
    link: string
}

const Slide: React.FC<SlideProps> = (props)=>{
    const{name, sage, recommendedBooks, link} = props
    const swiperRef
        = useRef<SwiperCore | null>(null);
    const[prevActive, setPrevActive] = useState(true)
    const[nextActive, setNextActive] = useState(true)
    const handlePrev = ()=>{
        setNextActive(false)
    }
    const handleNext = ()=>{
        setPrevActive(false)
    }

    return (
                    <article className={` border border-t-0 border-l-0  py-6`}>
                        <div className={`flex justify-between pl-5 items-center`}>
                            <h2 className={`font-inter font-600 text-md md:text-lg`}>{name}</h2>
                            <PageButton title={`See more`} icon={chevronRight} link={link}/>
                        </div>
                        {/*swiper */}
                        <div className={`w-full mt-4 pl-5 relative`}>
                            <div onClick={handlePrev} className={prevActive ? 'block' : 'hidden'} >
                            <button className={`absolute chev-inset z-20  bg-white rounded-full shadow-md`} onClick={() => swiperRef.current?.slidePrev()}>
                                <Svg icon={chevronLeft} className={`text-[#65676B]`}/>
                            </button>
                            </div>
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1.2}
                                loop={true}
                                onSwiper={(swiper: SwiperCore) => {
                                    swiperRef.current = swiper;
                                }}
                                breakpoints={{
                                    360: {
                                        width: 360,
                                        slidesPerView:  1,
                                    },
                                    480: {
                                        width: 580,
                                        slidesPerView: 2,
                                    },
                                    1176: {
                                        width: 1120,
                                        slidesPerView: 3.2,
                                    },
                                    1280: {
                                        width: 1120,
                                        slidesPerView: 3,
                                    },
                                }}
                            >
                                {name === `Featured Sage Circles` ?
                                    sage?.map((circle)=> {
                                            return (
                                                <SwiperSlide key={circle.id}>
                                                 <Circles circle={circle}/>
                                                </SwiperSlide>)}
                                        )
                                    :
                                    recommendedBooks?.map((book)=> {
                                    return (
                                        <SwiperSlide key={book.id}>
                                           <Recommended book={book} />
                                        </SwiperSlide>
                                )})}
                            </Swiper>
                            <div onClick={handleNext} className={nextActive ? 'block' : 'hidden'}>
                            <button className={`absolute inset bg-white rounded-full shadow-md`} onClick={() => swiperRef.current?.slideNext()}>
                                <Svg icon={darkChevronRight} className={`text-[#65676B]`}/>
                            </button>
                            </div>
                        </div>
                    </article>
    )
}
export default Slide