import Layout from "@/components/layout";
import {Hero,Download, ShareKnowledge, Review, PremiumFeatures} from "@/components/landing/index"


function LandingPage() {
    return (
        <Layout>
            <Hero/>
            <PremiumFeatures/>
            <ShareKnowledge/>
            <Download/>
            <Review/>
        </Layout>
    )
}

export default LandingPage
