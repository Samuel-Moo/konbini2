import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "containers/hocs/layouts/layout"
import Login from "components/LogInCreate/Login"
import SignUp from "components/LogInCreate/SignUp"
import animebg from "assets/images/animebg.jpg"


function LoginCreate(){
    return(
        
        <Layout>
            {/*<div className="absolute">
                <img src={animebg} alt="bganime" className="Background-image">
                </img>
            </div>*/}
            <Navbar>
                <div className="grid grid-cols-2">
                    
                    <div><SignUp/></div>
                
                    <div><Login/></div>
                </div>
                <Footer/>
            </Navbar>

        </Layout>
    )
}

export default LoginCreate