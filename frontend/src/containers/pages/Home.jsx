import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"
import Slider from "components/slider/Slider"



function Home(){
    return(
        <Layout data-theme="mosquera">
                <Navbar>
                <Slider />
                    
                    
                    
                                        
               
                <Footer/> 
                </Navbar>     
        </Layout>
    )
}

export default Home 