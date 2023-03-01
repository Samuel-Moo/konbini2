import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"
import loveiswar from "assets/images/loveiswar.jpg"
import drstone from "assets/images/drstone.jpg"
import oshi from "assets/images/oshi.jpg"


function Manga(){
    return(
        <Layout>
           
            <Navbar>
            <div className="py-4"><h1 className="text-3xl text-center font-bold">Manga</h1></div>
            <div class="grid grid-cols-6 px-2 py-2">
                <div className="card-compact w-48 bg-base-100 group" top>
                    <a href="/KaguyaM">
                    <figure><img src= {loveiswar} alt="manga" className="box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title group-hover:text-warning">
                            Love is War 
                            <div className="badge badge-info ">NEW</div>
                            
                        </h2>
                        
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Manga</div> 
                           
                        </div>
                    </div>
                    </a>
                </div>

                <div className="card-compact w-48 bg-base-100">
                    <figure><img src={drstone} alt="manga" className="box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Dr. Stone
                            <div className="badge badge-info">NEW</div>
                            
                        </h2>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Manga</div> 
                          
                        </div>
                    </div>
                </div>

                <div className="card-compact w-48 bg-base-100">
                    <figure><img src={oshi} alt="manga" className="box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Oshi No Ko
                            <div className="badge badge-info">NEW</div>
                            
                        </h2>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Manga</div> 
                           
                        </div>
                    </div>
                </div>
                <div className="card-compact w-48 bg-base-100" top>
                    <figure><img src= {loveiswar} alt="manga" className="box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Love is War 
                            <div className="badge badge-info">NEW</div>
                            
                        </h2>
                        
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Manga</div> 
                           
                        </div>
                    </div>
                </div>

                <div className="card-compact w-48 bg-base-100">
                    <figure><img src={drstone} alt="manga" className="box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Dr. Stone
                            <div className="badge badge-info">NEW</div>
                            
                        </h2>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Manga</div> 
                          
                        </div>
                    </div>
                </div>

                <div className="card-compact w-48 bg-base-100">
                    <figure><img src={oshi} alt="manga" className="box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Oshi No Ko
                            <div className="badge badge-info">NEW</div>
                            
                        </h2>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Manga</div> 
                           
                        </div>
                    </div>
                </div>
                <div className="card-compact w-48 bg-base-100" top>
                    <figure><img src= {loveiswar} alt="manga" className="box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Love is War 
                            <div className="badge badge-info">NEW</div>
                            
                        </h2>
                        
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Manga</div> 
                           
                        </div>
                    </div>
                </div>

                <div className="card-compact w-48 bg-base-100">
                    <figure><img src={drstone} alt="manga" className="box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Dr. Stone
                            <div className="badge badge-info">NEW</div>
                            
                        </h2>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Manga</div> 
                          
                        </div>
                    </div>
                </div>

                <div className="card-compact w-48 bg-base-100">
                    <figure><img src={oshi} alt="manga" className="box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Oshi No Ko
                            <div className="badge badge-info">NEW</div>
                            
                        </h2>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Manga</div> 
                           
                        </div>
                    </div>
                </div>
            </div>
            <Footer/> 
            </Navbar>
        </Layout>
    )
}

export default Manga 