import { connect } from "react-redux"
import sergio from 'assets/images/sergio.jpg'
import axios from "axios";
import Cookies from "js-cookie";


function Navbar({children}){



  const handleLogout = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/logout/', {withCredentials : true})
    .then(response => {
      console.log(response.status);
      console.log("Deslogueo Completo");
      Cookies.remove('sessionid'); // remove sessionid cookie
      alert("Se ha deslogueado");
    })
    .catch(error => {
      console.log("Hubo un error: ")
      console.log(error)
    });
  };

    return(
      <div className="drawer static"> 
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
      <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="sticky top-0 w-full navbar bg-primary py-10">
              <div className="flex-none lg:hidden">
                  <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                  </label>
              </div> 
          <div className="flex-1 px-2 mx-2">
            <a href="/">
                <button className="px-10">Konbini Anime</button>
            </a>    
          </div>
          <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
           {/* Navbar menu content here */}
                  <li><a href="/">Home</a></li>
                  <li><a href="/Anime">Anime</a></li>
                  <li><a href="/Manga">Manga</a></li>
                  <li><a href="/FavoritedA">Favorited</a></li>
                  <li><a href="/SearchPage">Search</a></li>
                  <li><a href="/LoginCreate">Log in</a></li>
              </ul>
          </div>

{/*"/SearchPage" es la pagina*/}

{/*End Of SearchBar*/}

          <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="group hover bg-success">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>

        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-primary rounded-box w-52">
        <li>
          <a href="/Profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a href="/Settings" className="justify-between">
          Settings </a></li>
        <li><a onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>
          </div>
      {children}
      
      </div> 
      <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 bg-primary">
      {/* Sidebar content here */}
                <li><a href="/">Home</a></li>
                <li><a href="/Anime">Anime</a></li>
                <li><a href="/Manga">Manga</a></li>
                <li><a href="/FavoritedA">Favorited</a></li>
                <li><a href="/SearchPage">Search</a></li>
                <li><a href="/LoginCreate">Log in</a></li>
              

          </ul>

      </div>
  </div>
    )
    
}



const mapStateToProps=state=>({

})
export default connect(mapStateToProps,{

}) (Navbar)
