import { connect } from "react-redux"
import loveiswar from "assets/images/loveiswar.jpg"
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
        <div class="grid grid-cols-6 px-2 py-2">
        {results.map((anime) => (
             <div key={anime.animeId} className="card-compact w-48 bg-base-100 group flex" top>
                <a href="/Drstonea">
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
    </div>
    )
}

const mapStateToProps=state=>({

})
export default connect(mapStateToProps,{

}) (SearchResult)