import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "containers/hocs/layouts/layout"
import { connect } from "react-redux";
import React, {useState, useEffect} from 'react';
import axios from 'axios';



function Profile() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/user/`, { withCredentials: true }).then((response) => {
        setUser(response.data);
        console.log(response.data);
      });
  }, [])

  return (
    <Layout>
           
            <Navbar>
    <div className=" font-sans h-screen w-full flex flex-row justify-center items-center">
      <div className="card w-96 mx-auto   shadow-xl hover:shadow">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="group hover bg-success w-32 mx-auto rounded-full -mt-20 border-8 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
       
        <div className="text-center mt-2 text-3xl font-medium">{user.username}</div>
        <div className="text-center mt-2 font-light text-sm">{user.email} </div>

        <hr className="mt-8" />
        <div className="flex p-4">
          <div className="w-1/2 text-center">
            <span className="font-bold">Editar Perfil</span>
          </div>
          <div className="w-0 border border-gray-300"></div>
          <div className="w-1/2 text-center">
            <span className="font-bold">Borrar Cuenta</span>
          </div>
        </div>
      </div>
      </div> 
      <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    </div>
    <Footer/>
    </Navbar>
</Layout>
  );
}

export default Profile;