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
            <div className="py-4"><h1 className="text-3xl text-center font-bold underline">Name</h1></div>
        
            <iframe className="w-2/3 aspect-video self-center" src={video.Referer} allowFullScreen ></iframe> 
            <div className="py-4 flex flex-row  place-content-center gap-4">
            <button className="btn btn-accent outline outline-offset-2 outline-3">
                episode list
                </button>
            <button className="btn btn-accent basis-1/4 outline outline-offset-2 outline-4">
                Prev
                </button>
                <button className="btn btn-accent basis-1/4 outline outline-offset-2 outline-3">
                Next
                </button>
            </div>
            <Footer/> 
            </Navbar>
        </Layout>
    )
}

export default AVideo  