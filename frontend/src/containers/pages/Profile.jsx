import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"
import perfil from "assets/images/perfil.jpg";

function Profile(){
    return(
        <Layout>
            <Navbar>
            <div className="card">
            <div className="w-24 rounded-xl">

        <img src={perfil} alt="Foto de perfil" className="rounded-full"/>
      </div>
      <header className="profile-header">
        <h1>Nombre de usuario</h1>
        <p>Estado</p>
      </header>
      <section className="profile-body">
        <p>Información del perfil</p>
      </section>
    </div>
            <Footer/> 
            </Navbar>
        </Layout>
    )
}



export default Profile