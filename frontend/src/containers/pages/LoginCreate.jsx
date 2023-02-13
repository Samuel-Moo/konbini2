import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"
import Login from "components/LogInCreate/Login"
import SignUp from "components/LogInCreate/SignUp"

function LoginCreate(){
    return(
        <Layout>
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