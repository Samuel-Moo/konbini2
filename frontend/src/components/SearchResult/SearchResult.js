import { connect } from "react-redux"
import { useEffect, useState } from "react";
import axios from 'axios';

function SearchResult(){
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSubmit = async (event) => {
      event.preventDefault();
      const response = await axios.get(`http://127.0.0.1:8000/anime/search/${query}`);
      setResults(response.data);

    };
    

    return(
        
        <div>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search" className="input input-bordered bg-secondary" />   
                <input type="submit" value="submit" className="btn" />
            </div>
        </form>
        {results.length === 0 ? (
                <div className="alert shadow-lg">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>No Result Found</span>
                </div>
              </div>
        ) : ( <div class="grid grid-cols-6 px-2 py-2">
        {results.map((anime) => (
             <div key={anime.animeId} className="card-compact w-48 bg-base-100 group flex" top>
                <a href="/Animes">
                    <figure><img src={anime.animeImg} alt={anime.animeTitle} className=" rounded-t-lg           box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title group-hover:text-warning">
                            {anime.animeTitle}
                        </h2>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Anime</div> 
                        </div>
                    </div>
                </a>
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