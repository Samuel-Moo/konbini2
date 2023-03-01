import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"
import loveiswar from "assets/images/loveiswar.jpg"


function MangaLec(){
    return(
        <Layout>
            <Navbar>
                <figure><img src={loveiswar} alt="mangaimg" className="box-content h-64 w-48"></img></figure>

            <Footer/> 
            </Navbar>
        </Layout>
    )
}

export default MangaLec  