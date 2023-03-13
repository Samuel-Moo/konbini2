import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "containers/hocs/layouts/layout"
import drpiedrota from "assets/images/drpiedrota.jpg"


function AVideo(){
    return(
        <Layout>
            <Navbar>
            <iframe id="ifr" allow="fullscreen" src="https://www011.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.5.1677608038.m3u8" width="1024" height="650" ></iframe>
            <Footer/> 
            </Navbar>
        </Layout>
    )
}

export default AVideo  