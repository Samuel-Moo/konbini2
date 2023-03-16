import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "containers/hocs/layouts/layout"
import { connect } from "react-redux"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function AVideo(){

    const { idEp } = useParams();
    const [ video, setVideo ] = useState([]);

    useEffect(() => {
      axios.get(`http://127.0.0.1:8000/anime/episodes/${idEp}/`).then((response) => {
            setVideo(response.data);
        });
    }, [idEp])

    return(
        <Layout>
            <Navbar>
            
            <iframe className="w-2/3 aspect-video self-center" src={video.Referer} allowFullScreen ></iframe> 
            <Footer/> 
            </Navbar>
        </Layout>
    )
}

export default AVideo  