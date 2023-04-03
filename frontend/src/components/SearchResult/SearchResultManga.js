import { connect } from "react-redux"
import { useEffect, useState } from "react";
import axios from 'axios';
import tohime from "assets/images/tohime.png";
import { useNavigate } from "react-router-dom";

function SearchResultManga(){
    const navigate = useNavigate();

    const [query, setQuery] = useState('');
    const [mangas, setManga] = useState([]);

    const handleSubmit = async (event) => {
      event.preventDefault();
      const response = await axios.get(`http://127.0.0.1:8000/manga/search/${query}`);
      setManga(response.data.results);

    };
    
    const handleAnimeCardClick = (mangaId) => {
        navigate(`/Mangas/${mangaId}`);
      };
    



    return(
        
        <div>
        <div className="flex py-4 justify-center">
            <div className="btn-group">
                <a href="/SearchPage"><button className="btn btn-info text-neutral">Anime</button></a>
                <a href="/SearchManga"><button className="btn btn-accent text-neutral">Manga</button></a>
                </div>
        </div>
                

        <form onSubmit={handleSubmit}>
            <div className="form-control px-2 py-2 place-items-center">
                <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Check out our big manga library" className="input input-bordered input-warning bg-secondary  box-content w-80 " />   
                <input type="submit" value="submit" className="" hidden/>
            </div>
        </form>
        {mangas.length === 0 ? (
                <div className="alert shadow-lg flex flex-col">
                    
                <div className=" box-border w-1/4 static inset-x-0 ">

                    <img src={tohime} alt="error"  className=""/>
                    
                  </div>
                  
                  <div className="static inset-x-0 bottom-0">
                    No Result Found, please check again the name for any misspelling.
                    </div>
                
                
                
              </div>
        ) : ( <div class="grid grid-cols-6 px-2 py-2">
        {mangas.map((manga) => (
             <div onClick={() => handleAnimeCardClick(manga.id)}>
             <div key={manga.id} className="card-compact w-48 bg-base-100 group z-0" top>
                    <figure><img src={`https://api.consumet.org/utils/image-proxy?url=${manga.image}&referer=http://www.mangahere.cc/`} alt={manga.title} className=" rounded-t-lg box-content h-64 w-48"/></figure>
                    <div className="card-body">
                        <h2 className="card-title group-hover:text-warning">
                            {manga.title}
                        </h2>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Manga</div> 
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

}) (SearchResultManga)