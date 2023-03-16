import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "containers/hocs/layouts/layout"
import VideoJS from 'components/content/Video'
import React from "react"
import { render } from 'react-dom'
import ReactAwesomePlayer from 'react-awesome-player'

function AVideo(){
    const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'https://www019.vipanicdn.net/streamhls/3156f3d297890e087320879cdfce8e23/ep.1.1677608214.m3u8',
      type: 'application/x-mpegURL',
      withCredentials: true
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      VideoJS.log('player is waiting');
    });

    player.on('dispose', () => {
      VideoJS.log('player will dispose');
    });
  };

    return(
        <Layout>
            <Navbar>
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            <Footer/> 
            </Navbar>
        </Layout>
    )
}

export default AVideo  