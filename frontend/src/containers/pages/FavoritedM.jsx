import Footer from "components/navigation/Footer"
import Favorites from "components/Favorited/Favorites"
import Navbar from "components/navigation/Navbar"
import Layout from "containers/hocs/layouts/layout"
import FavoriteCardM from "components/Favorited/FavoriteCardM"


function FavoritedM(){
    return(
        <Layout data-theme="mosquera">
                <Navbar>
                <div className="py-4"><h1 className="text-3xl text-center font-bold">Favorited</h1></div>
                    
                    <Favorites/>
                    
                    <FavoriteCardM/>
                    
               
                <Footer/> 
                </Navbar>     
        </Layout>
    )
}

export default FavoritedM