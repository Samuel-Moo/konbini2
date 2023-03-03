import { connect } from "react-redux"

import drpiedrota from "assets/images/drpiedrota.jpg"

function Animecard(){
    return(
<div class="grid grid-cols-6 py-2 px-2">
                    <div className="card-compact w-48 bg-base-100 group flex" top>
                    <a href="/Drstonea">
                    <figure><img src={drpiedrota} alt="anime" className=" rounded-t-lg box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title group-hover:text-warning">
                        Dr Stone
                            <div className="badge badge-info">NEW</div>
                        </h2>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Anime</div> 
                            
                        </div>
                    </div>
                    </a>
                </div>
                

                <div className="card-compact w-48 bg-base-100 group flex">
                    <a href="/Drstonea">
                    <figure><img src={drpiedrota} alt="anime" className=" rounded-t-lg box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title group-hover:text-warning">
                        Dr Stone
                            <div className="badge badge-info">NEW</div>
                        </h2>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Anime</div> 
                            
                        </div>
                    </div>
                    </a>
                </div>
            
            </div>
    )
}

const mapStateToProps=state=>({

})
export default connect(mapStateToProps,{

}) (Animecard)