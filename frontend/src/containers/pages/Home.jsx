import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"
import sergio from "assets/images/sergio.jpg"


function Home(){
    return(
        <Layout data-theme="mosquera">
                <Navbar>
                <div className="py-4"><h2 className="text-3xl text-center font-bold">Konnichiwa</h2></div>

                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src = {sergio} alt = "sergio" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a> 
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                         </div> 
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src = {sergio} alt = "sergio" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a> 
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src = {sergio} alt = "sergio" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a> 
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src = {sergio} alt = "sergio" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a> 
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                                        
               
                <Footer/> 
                </Navbar>     
        </Layout>
    )
}

export default Home 