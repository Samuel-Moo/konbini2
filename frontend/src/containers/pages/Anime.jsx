import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"

import Animecard from "components/Animecard/Animecard"


function Anime(){
    return(
        <Layout>
            <Navbar>
                <div className="py-4"><h1 className="text-3xl text-center font-bold">Anime</h1></div>
                <Animecard/>
            <Footer/> 
            </Navbar>
        </Layout>
    )
}

export default Anime 