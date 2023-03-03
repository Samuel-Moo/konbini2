import { connect } from "react-redux";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import perfil from "assets/images/perfil.jpg";
import Cookies from 'js-cookie';

function Perfil(){
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const csrftoken = Cookies.get('mycsrftoken'); // Get the csrf token from cookies
        const response = await axios.get('http://127.0.0.1:8000/profile', {
          headers: {'X-CSRFToken': csrftoken}
        });
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return(
    <div className="card">
        <div className="w-24 rounded-xl">
          <img src={perfil} alt="Foto de perfil" className="rounded-full"/>
        </div>
        <header className="profile-header">
          <h1>Nombre de usuario: {user.username} </h1>
        </header>
        <section className="profile-body">
          <p>Nombre:  </p>
          <p>Apellido: </p>
          <p>Email: {user.email} </p>
        </section>
      </div>
    
    )
}



const mapStateToProps=state=>({

})
export default connect(mapStateToProps,{

}) (Perfil)

