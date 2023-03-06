import { connect } from "react-redux"
import loveiswar from "assets/images/loveiswar.jpg"
import drstone from "assets/images/drstone.jpg"
import oshi from "assets/images/oshi.jpg"

function Mangacard(){
    return(
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

                
            </div>
    )
}

const mapStateToProps=state=>({

})
export default connect(mapStateToProps,{

}) (Mangacard)