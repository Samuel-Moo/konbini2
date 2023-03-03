import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"
import Perfil from "components/users/Perfil"

function Profile(){
    return(
        <Layout>
          <Navbar>
          <Perfil/>
          <Footer/> 
          </Navbar>
        </Layout>
    )
}



export default Profile