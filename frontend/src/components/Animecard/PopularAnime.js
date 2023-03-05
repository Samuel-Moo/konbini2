import { connect } from "react-redux"
import axios from "axios";
import React, { useState, useEffect } from 'react';

function PopularAnime(){
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/anime/PopularAnime')
      .then(response => setAnimeList(response.data))
      .catch(error => console.log(error));
  }, [])

    return(
            <div class="grid grid-cols-6 py-2 px-2">
                {animeList.map(anime => (
                <div key={anime.animeId} className="card-compact w-48 bg-base-100 group flex" top>
                    <a href="/Drstonea">
                  <figure><img src={anime.animeImg} alt={anime.animeTitle} className=" rounded-t-lg box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title group-hover:text-warning">
                        {anime.animeTitle}
                        <div className="badge badge-info">NEW</div>
                        </h2>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Anime</div> 
                            
                        </div>
                    </div>
                    </a>
                </div>
                ))}
            </div>
    )
}

const mapStateToProps=state=>({

})
export default connect(mapStateToProps,{

}) (PopularAnime)