import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"

import TopAiringAnime from "components/Animecard/TopAiringAnime"
import AnimeMovies from "components/Animecard/AnimeMovies"
import RecentReleases from "components/Animecard/RecentReleases"
import PopularAnime from "components/Animecard/PopularAnime"

function Anime(){
    return(
        <Layout>
            <Navbar>
                <div className="py-4"><h1 className="text-3xl text-center font-bold">Recent Releases</h1></div>
                <RecentReleases/>

                <div className="py-4"><h1 className="text-3xl text-center font-bold">Popular</h1></div>
                <PopularAnime/>

                <div className="py-4"><h1 className="text-3xl text-center font-bold">Anime Movies</h1></div>
                <AnimeMovies/>
                
                <div className="py-4"><h1 className="text-3xl text-center font-bold">Top Airing Anime</h1></div>
                <TopAiringAnime/>

            <Footer/> 
            </Navbar>
        </Layout>
    )
}

export default Anime 