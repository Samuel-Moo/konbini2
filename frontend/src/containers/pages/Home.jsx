import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"
import sergio from "assets/images/sergio.jpg"
import animebg from "assets/images/animebg.jpg"



function Home(){
    return(
        <Layout data-theme="mosquera">
                <Navbar>
                <div className="py-4"><h2 className="text-3xl text-center font-bold">Konnichiwa</h2></div>
                {/*<div>*/}
                <div className="carousel w-full">
                        <div id="1" className="carousel-item relative w-full">
                            <img src = {animebg} alt = "sergio" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#4" className="btn btn-circle">❮</a> 
                                <a href="#2" className="btn btn-circle">❯</a>
                            </div>
                         </div> 
                        <div id="2" className="carousel-item relative w-full">
                            <img src = {sergio} alt = "sergio" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#1" className="btn btn-circle">❮</a> 
                                <a href="#3" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="3" className="carousel-item relative w-full">
                            <img src = {sergio} alt = "sergio" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#2" className="btn btn-circle">❮</a> 
                                <a href="#4" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="4" className="carousel-item relative w-full">
                            <img src = {sergio} alt = "sergio" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#3" className="btn btn-circle">❮</a> 
                                <a href="#1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    {/*</div> el carusel tiene que ajustar las dimensiones de las imagenes*/} 
                    
                    
                                        
               
                <Footer/> 
                </Navbar>     
        </Layout>
    )
}

export default Home 