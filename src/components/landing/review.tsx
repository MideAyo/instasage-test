import {userReviews} from "@/utils/data";
import UserReview from "@/components/landing/user-review";

const Review= ()=>{
    return(
        <section className={`pt-16 bg-lightTint`}>
            <div>
                <header>
                   <article className={`flex flex-col space-y-3 text-center max-w-md md:max-w-xl mx-auto`}>
                       <h2 className={`font-700 text-md sm:text-lg lg:text-2xl font-dmSans`}>What Our Users Say</h2>
                       <p>
                           Our mission at Instasage is to elevate the pursuit of knowledge and expand the boundaries of understanding.
                       </p>
                   </article>
                </header>
                <article className={`mt-4 lg:flex container p-12 lg:px-10 max-w-5xl lg:space-x-6 `}>
                    {userReviews.map((reviews, )=>{
                        return (
                            <UserReview eachReview = {reviews} key={reviews.id}/>
                        )
                    })}
                </article>
            </div>
        </section>
    )
}
export default Review