import { connect } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function AnimeEpList(){
    const navigate = useNavigate();
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
      const handleAnimeCardClick = (episodeId) => {
        navigate(`/AVideo/${episodeId}`);
      };

    return(
       

    <div class="grid grid-rows-2 grid-col-5">

        <div className="row-start-1 row-end-1 px-2 py-2">
                    
            <figure><img src={anime.animeImg} alt="anime" className=" rounded-lg box-content h-80 w-64 border-4"/></figure>
            
            <div className="px-10 py-4 ">
                <button className="btn btn-info bg-warning ">
                Add to favorites +
                </button>          
            </div>        
        </div>
        <div class="col-start-2 col-end-6 row-start-1 row-end-1 bg-secondary rounded">
            <h1 className="text-3xl font-bold">{anime.animeTitle}</h1>
            <p className="badge badge-base-100">Other Names: {anime.otherNames} </p>
            <p className="badge badge-accent">Total Episodes: {anime.totalEpisodes}</p>
                    
            <h2 className="text-2xl italic underline">Sinapsis</h2>
            <p>{anime.synopsis}
            </p>
            <h2 className="text-xl italic underline text-accent list-disc">Status</h2>
            <p className="italic badge badge-success">{anime.status}
            </p>
            <h2 className="text-xl italic underline text-neutral">Release Date</h2>
            <p className="italic badge badge-neutral">{anime.releasedDate}
            </p>
            <h2 className="text-xl italic underline text-error">Genres</h2>
            {genres.map(genre => (
          <p className="badge badge-error" key={genre} > {genre} </p> 
        ))}

        </div>

        <div className="overflow-y-auto col-start-2 col-end-5 row-end-3 h-80 w-full static py-3">
                    <table className="table w-full static">
                        <thead className="static">
                            <tr className="">

                                <td className="">Episodes</td>
                            </tr>
                        </thead>
                        <tbody className="static">
                            {episodes.map(eps => (
                            <tr className="static">
                                <div onClick={() => handleAnimeCardClick(eps.episodeId)} className="hover:text-warning">

                                <td className="static">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 static">

                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                    </svg>
                                </td>
                                
                                <td  key={eps.episodeId}>Episode {eps.episodeNum}</td>
                                
                                </div>
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