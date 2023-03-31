import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "containers/hocs/layouts/layout"
import sergio from 'assets/images/sergio.jpg'

function Profile() {
  return (
    <Layout>
           
            <Navbar>
    <div className=" font-sans h-screen w-full flex flex-row justify-center items-center">
      <div className="card w-96 mx-auto   shadow-xl hover:shadow">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="group hover bg-success w-32 mx-auto rounded-full -mt-20 border-8 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
       {/*<img className="w-32 mx-auto rounded-full -mt-20 border-8 " src={sergio} alt="" />*/} 
        <div className="text-center mt-2 text-3xl font-medium">Juan Escutia</div>
        <div className="text-center mt-2 font-light text-sm">Aventandomealvacio1847@gmail.com</div>
        <div className="text-center font-normal text-lg">SenpaiMasterNekitoKawaii2008</div>
        <div className="px-6 text-center mt-2 font-light text-sm">
          <p>
            Terror/Acción/Shonen/Yaoi/JoJo/Shonen
          </p>
        </div>
        <hr className="mt-8" />
        <div className="flex p-4">
          <div className="w-1/2 text-center">
            <span className="font-bold">Anime Elitist</span>
          </div>
          <div className="w-0 border border-gray-300"></div>
          <div className="w-1/2 text-center">
            <span className="font-bold">Shoujo Enjoyer</span>
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