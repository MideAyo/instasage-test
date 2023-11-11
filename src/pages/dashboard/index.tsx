import DashboardLayout from "@/components/dashboard-layout";
import {justIn, recommendedBooks, sageCircle} from "@/utils/data";
import Spotlight from "@/components/dashboard/spotlight";
import ContinueReading from "@/components/dashboard/continue-reading";
import Slide from "@/components/dashboard/Slide";


const Dashboard = ()=>{
    return (
        <DashboardLayout navChange={`Home`} link={``}>
            <div className={`lg:flex`}>
            <div className={` lg:w-[68%] xl:w-[74%] px-0 mt-1`}>
                <Slide name={`Top Recommended Books`} sage={undefined} recommendedBooks={recommendedBooks} link={`/dashboard/top-recommendations`}/>
                <Spotlight/>
                <Slide name={`Featured Sage Circles`} sage={sageCircle} recommendedBooks={undefined} link={`/dashboard/featured-sage-circles`} />
                <Slide name={`Just In`} sage={undefined} recommendedBooks={justIn} link={``}/>
            </div>
                <div className={`lg:w-[40%]`}>
                <ContinueReading/>
                </div>
            </div>
        </DashboardLayout>
    )
}
export default Dashboard