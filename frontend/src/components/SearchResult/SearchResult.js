import { connect } from "react-redux"
import { useEffect, useState } from "react";
import axios from 'axios';
import tohime from "assets/images/tohime.png";
import { useNavigate } from "react-router-dom";

function SearchResult(){
    const navigate = useNavigate();

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSubmit = async (event) => {
      event.preventDefault();
      const response = await axios.get(`http://127.0.0.1:8000/anime/search/${query}`);
      setResults(response.data);

    };
    
    const handleAnimeCardClick = (animeId) => {
        navigate(`/Animes/${animeId}`);
      };

    return(
        
        <div>
        <form onSubmit={handleSubmit}>
            <div className="form-control px-2 py-2 place-items-center">
                <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Look anime, movies, and OVAS" className="input input-bordered bg-secondary  box-content w-80 " />   
                <input type="submit" value="submit" className="" hidden/>
            </div>
        </form>
        {results.length === 0 ? (
                <div className="alert shadow-lg flex flex-col">
                    
                <div className=" box-border w-1/4 static inset-x-0 ">

                    <img src={tohime} alt="error"  className=""/>
                    
                  </div>
                  
                  <div className="static inset-x-0 bottom-0">
                    No Result Found, please check again the name for any misspelling.
                    </div>
                
                
                
              </div>
        ) : ( <div class="grid grid-cols-6 px-2 py-2">
        {results.map((anime) => (
             <div onClick={() => handleAnimeCardClick(anime.animeId)}>
             <div key={anime.animeId} className="card-compact w-48 bg-base-100 group z-0" top>
                    <figure><img src={anime.animeImg} alt={anime.animeTitle} className=" rounded-t-lg           box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title group-hover:text-warning">
                            {anime.animeTitle}
                        </h2>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Anime</div> 
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    ) }
    </div>
        
  
    )

    
 
}

const mapStateToProps=state=>({

})
export default connect(mapStateToProps,{

}) (SearchResult)