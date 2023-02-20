import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"

function Error404(){
    return(
        <Layout>
            <Navbar/>
                <div className='pt-32'>
                    Error404
                </div>
            <Footer/>
        </Layout>
    )
}
export default Error404