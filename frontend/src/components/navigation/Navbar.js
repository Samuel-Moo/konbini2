import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import Logo1 from 'assets/images/logo_1.jpg'
import Logo2 from 'assets/images/Logo_2.jpg'
import sergio from 'assets/images/sergio.jpg'


function Navbar({children}){
    return(
      <div className="drawer sticky"> 
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
                  <li><a href="/Favorited">Favorited</a></li>
                  <li><a href="/LoginCreate">Log in</a></li>
                  

              </ul>
          </div>
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered bg-secondary" />
          </div>
          <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={sergio} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-primary rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
          </div>
      {children}{/*no le metan contenido aqui */}
      
      </div> 
      <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 bg-base-100">
      {/* Sidebar content here */}
                <li><a href="/">Home</a></li>
                <li><a href="/Anime">Anime</a></li>
                <li><a href="/Manga">Manga</a></li>
                <li><a href="/Favorited">Favorited</a></li>
                <li><a href="/Log in">Log in</a></li>
              

          </ul>

      </div>
  </div>
    )
    
}



const mapStateToProps=state=>({

})
export default connect(mapStateToProps,{

}) (Navbar)
