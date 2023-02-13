import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"

function Buscar(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Buscar
            </div>
            <Footer/> 
        </Layout>
    )
}

export default Buscar