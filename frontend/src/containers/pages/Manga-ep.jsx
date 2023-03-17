import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "containers/hocs/layouts/layout"

import MangaEpList from "components/MangeEpList/MangaEpList"
function Mangas(){
    return(
        <Layout>
            <Navbar>
            
                
                <MangaEpList/>
            
            <Footer/> 
            </Navbar>
        </Layout>
    )
}

export default Mangas 