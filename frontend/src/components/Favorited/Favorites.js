import { connect } from "react-redux"

function Favorites(){
    return(
            <div className="h-64 grid grid-rows-1 grid-flow-col gap-4">
                <div>Favorited</div>
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