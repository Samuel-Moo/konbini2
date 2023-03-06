import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"

import AnimeEpList from "components/AnimeEpList/AnimeEpList"

function Drstonea(){
    return(
        <Layout>
            <Navbar>
            
                {/*las listas de anime necesitan un arreglo en que no pase encima la navbar*/}
                
                
                
                <AnimeEpList/>
            
            <Footer/> 
            </Navbar>
        </Layout>
    )
}

export default Drstonea 