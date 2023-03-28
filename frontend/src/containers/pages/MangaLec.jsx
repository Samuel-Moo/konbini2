import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "containers/hocs/layouts/layout"
import loveiswar from "assets/images/loveiswar.jpg"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


function MangaLec(){

    const { idChapter } = useParams();
    const [images, setImages ] = useState([]);
    const [header, setHeader] = useState([]);
//https://api.consumet.org/manga/mangahere/read?chapterId=/one_piece/v98/c1079
    useEffect(() => {
        axios.get(`https://api.consumet.org/manga/mangahere/read?chapterId=/${idChapter}`).then((response) => {
            console.log(response.data);
            setImages(response.data);
            setHeader(response.data.headerForImage);
          });
      }, [idChapter])

    return(
        <Layout>
            <Navbar>
            <div class="grid grid-cols-6 px-2 py-2">
            {images.map((img) => (
                    <div className="card-compact w-48 bg-base-100 group z-0" top>
                    <figure><img src={`https://api.consumet.org/utils/image-proxy?url=${img.img}&referer=${header.Referer}`} alt={img.page} className=" rounded-t-lg box-content h-64 w-48"/></figure>
            </div>
            ))}
            </div>
            <Footer/> 
            </Navbar>
        </Layout>
    )
}

export default MangaLec  