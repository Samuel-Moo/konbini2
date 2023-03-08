import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"

import AnimeEpList from "components/AnimeEpList/AnimeEpList"

function Animes(){
    return(
        <Layout>
            <Navbar>                
                <AnimeEpList/>
            <Footer/> 
            </Navbar>
        </Layout>
    )
}

export default Animes 