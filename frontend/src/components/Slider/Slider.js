import { connect } from "react-redux"
import sergio from "assets/images/sergio.jpg"
import animebg from "assets/images/animebg.jpg"

function Slider(){
    return(
        <div className="box-content w-full h-3/4">
            <img src={animebg} alt="animebg" className="w-full h-full" />
            
        </div>
        
    )
}

const mapStateToProps=state=>({

})
export default connect(mapStateToProps,{

}) (Slider)