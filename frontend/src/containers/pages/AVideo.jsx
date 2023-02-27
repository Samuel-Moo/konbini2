import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"
import drpiedrota from "assets/images/drpiedrota.jpg"


function AVideo(){
    return(
        <Layout>
            <Navbar>
                <figure><img src={drpiedrota} alt="anime" className="box-content h-64 w-48"></img></figure>

            <Footer/> 
            </Navbar>
        </Layout>
    )
}

export default AVideo  