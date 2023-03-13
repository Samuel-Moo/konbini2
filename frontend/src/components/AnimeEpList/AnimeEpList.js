import { connect } from "react-redux"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function AnimeEpList(){
    const { id } = useParams();
    const [anime, setAnime] = useState([]);
    const [genres, setGenres] = useState([]);
    const [episodes, setEpisodes] = useState([]);


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/anime/details/${id}/`).then((response) => {
            setAnime(response.data);
            setGenres(response.data.genres);
            setEpisodes(response.data.episodesList);
          });
      }, [id])

    return(
       

    <div class="grid grid-rows-2 grid-col-5">

        <div className="row-start-1 row-end-1 px-2 py-2">
                    
            <figure><img src={anime.animeImg} alt="anime" className=" rounded-lg box-content h-80 w-64 border-4"/></figure>
                        
                    
        </div>
        <div class="col-start-2 col-end-6 row-start-1 row-end-1 bg-secondary">
            <h1 className="text-3xl font-bold">{anime.animeTitle}</h1>
            <p>Other Names: {anime.otherNames} </p>
            <p>Total Episodes: {anime.totalEpisodes}</p>
                    
            <h2 className="text-2xl italic underline">Sinapsis</h2>
            <p>{anime.synopsis}
            </p>
            <h2 className="text-xl italic underline">Status</h2>
            <p>{anime.status}
            </p>
            <h2 className="text-xl italic underline">Release Date</h2>
            <p>{anime.releasedDate}
            </p>
            <h2 className="text-xl italic underline">Genres</h2>
            {genres.map(genre => (
          <p key={genre}>{genre} </p> 
        ))}

        </div>
        <div className="overflow-y-auto col-start-2 col-end-5 row-end-3 h-80 w-120">
                    <table className="table w-full ">
                        <thead>
                            <tr>
                                <th className="fixed">Episodes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {episodes.map(eps => (
                            <tr>
                                <a href="/AVideo" className="hover:text-warning">
                                <th>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                    </svg>
                                </th>
                                <td key={eps.episodeId}>Episode {eps.episodeNum}</td>
                                <td></td>
                                </a>
                            </tr>
                            ))}
                            
                            
                        </tbody>
                    </table>
                </div>  
            </div>
            
           
                )
            }
const mapStateToProps=state=>({

})
export default connect(mapStateToProps,{
                
}) (AnimeEpList)