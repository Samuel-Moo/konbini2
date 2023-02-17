import Footer from "components/navigation/Footer"
import Favorites from "components/Favorited/Favorites"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"
import sergio from "assets/images/sergio.jpg"
import platinum from "assets/images/platinum.jpg"
import drpiedrota from "assets/images/drpiedrota.jpg"
import logo_1 from "assets/images/logo_1.jpg"
import Logo_2 from "assets/images/Logo_2.jpg"
import cosahermosa from "assets/images/cosahermosa.jpg"

function Favorited(){
    return(
        <Layout data-theme="mosquera">
                <Navbar>
                <div className="py-4"><h1 className="text-3xl text-center font-bold">Favorited</h1></div>
                    
                    <Favorites/>
                    
                    <div class="grid grid-cols-6 gap-4">
                <div className="card-compact w-48 bg-base-100 shadow-xl" top>
                    <figure><img src={sergio} alt="anime" className=" rounded-t-lg box-content h-64 w-48" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Sergio 
                        </h2>
                        <p>Anime demo</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>

                <div className="card-compact w-48 bg-base-100 shadow-xl">
                    <figure><img src={drpiedrota} alt="anime" className=" rounded-t-lg box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        dr stone
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>anime demo 2</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Anime</div> 
                            <div className="badge badge-outline">Fresh</div>
                        </div>
                    </div>
                </div>

                <div className="card-compact w-48 bg-base-100 shadow-xl">
                    <figure><img src={platinum} alt="anime" className=" rounded-t-lg box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        platinum end
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>anime demo 3</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Anime</div> 
                            <div className="badge badge-outline">Fresh</div>
                        </div>
                    </div>
                </div>
            
                <div className="card-compact w-48 bg-base-100 shadow-xl" top>
                    <figure><img src={cosahermosa} alt="anime" className=" rounded-t-lg box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Elden Ring
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Anime demo 4</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Anime</div> 
                            <div className="badge badge-outline">Fresh</div>
                        </div>
                    </div>
                </div>

                <div className="card-compact w-48 bg-base-100 shadow-xl">
                    <figure><img src={logo_1} alt="anime" className=" rounded-t-lg box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        wa
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>anime demo 5</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Anime</div> 
                            <div className="badge badge-outline">Fresh</div>
                        </div>
                    </div>
                </div>

                <div className="card-compact w-48 bg-base-100 shadow-xl">
                    <figure><img src={Logo_2} alt="anime" className=" rounded-t-lg box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        konbi life
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>anime demo 6</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Anime</div> 
                            <div className="badge badge-outline">Fresh</div>
                        </div>
                    </div>
                </div>
            
            </div>
                    
               
                <Footer/> 
                </Navbar>     
        </Layout>
    )
}

export default Favorited 