import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "containers/hocs/layouts/layout"
import Slider from "components/Slider/Slider"




function Home(){
    return(
        <Layout data-theme="mosquera">
                <Navbar>
                    
                <Slider />
                <div className="py-4"><h1 className="text-3xl text-error text-center font-bold">About Us</h1></div>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 ...">01</div>
                    <div class="col-span-2 ...">02</div>
                    <div class="row-span-2 col-span-2 ...">03</div>
                </div>
                    
                    
                                        
               
                <Footer/> 
                </Navbar>     
        </Layout>
    )
}

export default Home 