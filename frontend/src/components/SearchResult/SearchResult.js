import { connect } from "react-redux"
import loveiswar from "assets/images/loveiswar.jpg"

function SearchResult(){
    return(
        <div class="grid grid-cols-6 px-2 py-2">
                <div className="card-compact w-48 bg-base-100 group" top>
                    <a href="/KaguyaM">
                    <figure><img src= {loveiswar} alt="Image_Result" className="box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title group-hover:text-warning">
                            Search result demo
                            
                            
                        </h2>
                        
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Manga</div> 
                           
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

}) (SearchResult)