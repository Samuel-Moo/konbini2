import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"

import AnimeMovies from "components/Animecard/AnimeMovies"

import PopularAnime from "components/Animecard/PopularAnime"

function Anime(){
    return(
        <Layout>
            <Navbar>
                

                <div className="py-4"><h1 className="text-3xl text-center font-bold">Popular</h1></div>
                <PopularAnime/>

                <div className="py-4"><h1 className="text-3xl text-center font-bold">Anime Movies</h1></div>
                <AnimeMovies/>
                
                

            <Footer/> 
            </Navbar>
        </Layout>
    )
}

export default Anime 