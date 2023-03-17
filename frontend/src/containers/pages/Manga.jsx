import Mangacard from "components/Mangacard/Mangacard"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "containers/hocs/layouts/layout"




function Manga(){
    return(
        <Layout>
           
            <Navbar>
            <div className="py-4"><h1 className="text-3xl text-center font-bold">Manga</h1></div>
            <Mangacard/>
            <Footer/> 
            </Navbar>
        </Layout>
    )
}

export default Manga 