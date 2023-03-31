import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "containers/hocs/layouts/layout"
import Slider from "components/Slider/Slider"
import Logo_2 from "assets/images/Logo_2.jpg"




function Home(){
    return(
        <Layout data-theme="mosquera">
                <Navbar>
                <div className="py-4"><h1 className="text-3xl text-accent text-center font-bold">Welcome and Konnichiwa to Konbini Anime!!</h1></div>    
                <Slider />
                <div className="py-4"><h1 className="text-3xl text-error text-center font-bold">About Us</h1></div>
                <div class="flex flex-col place-items-center">
                <div><p className="font-bold px-8 py-4">Konbini Anime is an online platform dedicated to anime lovers, providing a space for them to discover, discuss, and share their passion for anime. This community is built upon a set of core values, including creativity, inclusivity, and authenticity. Konbini Anime's vision is to become the go-to destination for anime fans around the world, providing an engaging and dynamic environment that fosters innovation and a sense of community among its users. As a company, Konbini Anime recognizes its social responsibilities and is committed to promoting a culture of respect, kindness, and empathy, both within its community and in society at large.</p></div>
                <div><img src={Logo_2} alt="Konbini2"></img></div>
                <div><p className="font-bold px-8 py-4">Konbini Anime provides an exciting platform for anime lovers to connect with like-minded individuals, discover new anime series and movies, and engage in lively discussions about their favorite anime topics. The company's values of creativity, inclusivity, and authenticity are at the heart of the community, which aims to foster a sense of belonging among its users. Konbini Anime is committed to responsible business practices and social responsibilities and strives to make a positive impact on society as a whole. With its dedication to providing an engaging and dynamic space for anime fans, Konbini Anime is well on its way to becoming the leading online destination for anime enthusiasts worldwide.</p></div>
                <div className="py-4"><button className="btn btn-warning text-white font-bold"><a href="/SearchPage">Go and search for anime and manga now!!</a></button></div>
                </div>
                    
                    
                                        
               
                <Footer/> 
                </Navbar>     
        </Layout>
    )
}

export default Home 