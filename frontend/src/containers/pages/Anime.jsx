import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"
import sergio from "assets/images/sergio.jpg"
import platinum from "assets/images/platinum.jpg"
import drpiedrota from "assets/images/drpiedrota.jpg"
import logo_1 from "assets/images/logo_1.jpg"
import Logo_2 from "assets/images/Logo_2.jpg"
import cosahermosa from "assets/images/cosahermosa.jpg"


function Anime(){
    return(
        <Layout>
            <Navbar>
                <div className="py-4"><h1 className="text-3xl text-center font-bold">Anime</h1></div>
            <div class="grid grid-cols-6 gap-4">
                <div className="card-compact w-48 bg-warning rounded-lg" top>
                    <figure><img src={sergio} alt="anime" className=" rounded-t-lg box-content h-64 w-48" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Sergio 
                            <div className="badge badge-info">NEW</div>
                        </h2>
                        
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Anime</div> 
                            
                        </div>
                    </div>
                </div>

                <div className="card-compact w-48 bg-base-100 group">
                    <a href="/">
                    <figure><img src={drpiedrota} alt="anime" className=" rounded-t-lg box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title group-hover:text-warning">
                        dr stone
                            <div className="badge badge-info">NEW</div>
                        </h2>
                        <p>"las piedras no son misticas pero el crack es eterno".</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Anime</div> 
                            
                        </div>
                    </div>
                    </a>
                </div>

                <div className="card-compact w-48 bg-base-100">
                    <figure><img src={platinum} alt="anime" className=" rounded-t-lg box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        platinum end
                            <div className="badge badge-info">NEW</div>
                        </h2>
                        <p>anime demo 3</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Anime</div> 
                            
                        </div>
                    </div>
                </div>
            
                <div className="card-compact w-48 bg-base-100" top>
                    <figure><img src={cosahermosa} alt="anime" className=" rounded-t-lg box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Elden Ring
                            <div className="badge badge-info">NEW</div>
                        </h2>
                        <p>Anime demo 4</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Anime</div> 
                            
                        </div>
                    </div>
                </div>

                <div className="card-compact w-48 bg-base-100">
                    <figure><img src={logo_1} alt="anime" className=" rounded-t-lg box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        bellaca wa
                            <div className="badge badge-info">NEW</div>
                        </h2>
                        <p>anime demo 5</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Anime</div> 
                            
                        </div>
                    </div>
                </div>

                <div className="card-compact w-48 bg-base-100">
                    <figure><img src={Logo_2} alt="anime" className=" rounded-t-lg box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        konbi life
                            <div className="badge badge-info">NEW</div>
                        </h2>
                    
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Anime</div> 
                            
                        </div>
                    </div>
                </div>
                <div className="card-compact w-48 bg-warning rounded-lg" top>
                    <figure><img src={sergio} alt="anime" className=" rounded-t-lg box-content h-64 w-48" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Sergio 
                            <div className="badge badge-info">NEW</div>
                        </h2>
                        <p>"Sergio es el ninja de mi colegio que enfrenta demonios para encontrar paz y al enemigo que lo despojo de su amada".</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Anime</div> 
                            
                        </div>
                    </div>
                </div>
            
            </div>
            <Footer/> 
            </Navbar>
        </Layout>
    )
}

export default Anime 