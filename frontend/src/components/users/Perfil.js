import { connect } from "react-redux";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import perfil from "assets/images/perfil.jpg";


function Perfil(){
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/user/`, { withCredentials: true }).then((response) => {
        setUser(response.data);
        console.log(response.data);
      });
  }, [])

  return(

    <div className="card">
        <div className="w-24 rounded-xl">
          <img src={perfil} alt="Foto de perfil" className="rounded-full"/>
        </div>
        <header className="profile-header">
          <h1>Nombre de usuario: {user.username} </h1>
        </header>
        <section className="profile-body">

          <p>Email: {user.email} </p>
        </section>
      </div>
    
    )
}



const mapStateToProps=state=>({

})
export default connect(mapStateToProps,{

}) (Perfil)

