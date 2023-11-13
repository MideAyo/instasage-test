import Image from "next/image";

const AppDownload= ()=>{
    return (
        <article className={`flex space-x-5`}>
         <div>
             <Image src={`/images/appstore.svg`} alt={`download on appstore`}
             width={0}
             height={0}
             className={`w-28 lg:w-40`}
             loading={"lazy"}/>
         </div>
            <div>
             <Image src={`/images/playstore.svg`} alt={`download on appstore`}
             width={0}
             height={0}
             className={`w-32 lg:w-44`}
             loading={"lazy"}/>
         </div>
        </article>
    )
}
export default AppDownload