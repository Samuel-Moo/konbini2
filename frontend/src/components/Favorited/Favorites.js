import { connect } from "react-redux"

function Favorites(){
    return(
            <div className="flex">
                <div className="btn-group">
                    <button className="btn">Anime</button>
                    <button className="btn">Manga</button>
                </div>
            </div>
                

    )


}
const mapStateToProps=state=>({

})
export default connect(mapStateToProps,{

}) (Favorites)