import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"
import Slider from "components/Slider/Slider"
import RecentReleases from "components/Animecard/RecentReleases"
import TopAiringAnime from "components/Animecard/TopAiringAnime"



function Home(){
    return(
        <Layout data-theme="mosquera">
                <Navbar>
                    
                <Slider />
                <div className="py-4"><h1 className="text-3xl text-center font-bold">Recent Releases</h1></div>
                <RecentReleases/>
                <div className="py-4"><h1 className="text-3xl text-center font-bold">Top Airing Anime</h1></div>
                <TopAiringAnime/>
                    
                    
                                        
               
                <Footer/> 
                </Navbar>     
        </Layout>
    )
}

export default Home 