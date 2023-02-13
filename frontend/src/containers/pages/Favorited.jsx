import Footer from "components/navigation/Footer"
import Favorites from "components/Favorited/Favorites"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"

function Favorited(){
    return(
        <Layout data-theme="mosquera">
                <Navbar>
                    
                    <Favorites/>
                    
                    
               
                <Footer/> 
                </Navbar>     
        </Layout>
    )
}

export default Favorited 