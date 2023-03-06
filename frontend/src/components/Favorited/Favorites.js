import { connect } from "react-redux"

function Favorites(){
    return(
            <div className="flex py-4 justify-center">
                <div className="btn-group">
                    <a href="/FavoritedA"><button className="btn">Anime</button></a>
                    <a href="/FavoritedM"><button className="btn">Manga</button></a>
                </div>
            </div>
                

    )


}
const mapStateToProps=state=>({

})
export default connect(mapStateToProps,{

}) (Favorites)