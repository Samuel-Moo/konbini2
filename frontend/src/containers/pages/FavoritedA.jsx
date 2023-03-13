import Footer from "components/navigation/Footer"
import Favorites from "components/Favorited/Favorites"
import Navbar from "components/navigation/Navbar"
import Layout from "containers/hocs/layouts/layout"
import FavoriteCardA from "components/Favorited/FavoriteCardA"


function FavoritedA(){
    return(
        <Layout data-theme="mosquera">
                <Navbar>
                <div className="py-4"><h1 className="text-3xl text-center font-bold">Favorited</h1></div>
                    
                    <Favorites/>
                    
                    <FavoriteCardA/>
                    
               
                <Footer/> 
                </Navbar>     
        </Layout>
    )
}

export default FavoritedA 