import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import store from "store";
import { Provider } from "react-redux";
import Anime from "containers/pages/Anime";
import Manga from "containers/pages/Manga";
import Buscar from "containers/pages/Buscar";
import Drstonea from "containers/pages/Anime-ep";
import LoginCreate from "containers/pages/LoginCreate";
/* import {LoginButton, LogoutButton} from "containers/pages/login"; */
import FavoritedA from "containers/pages/FavoritedA";
import FavoritedM from "containers/pages/FavoritedM";
import Profile from "containers/pages/Profile";
import Settings from "containers/pages/Settings";

import AVideo from "containers/pages/AVideo";
import MangaLec from "containers/pages/MangaLec";
import KaguyaM from "containers/pages/Manga-ep";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404 />} />

          {/* Home Display */}
          <Route path="/" element={<Home />} />

          {/*Anime directory */}
          <Route path="/Anime" element={<Anime />} />

          {/*Dr stone Anime page*/}
          <Route path="/Drstonea" element={<Drstonea />} />

          {/*Manga page */}
          <Route path="/Manga" element={<Manga />} />

          {/*Favorite anime page */}
          <Route path="/FavoritedA" element={<FavoritedA />}/>

          {/*Favorites manga page */}
          <Route path="/FavoritedM" element={<FavoritedM />}/>

          {/*Buscar page */}
          <Route path="/Buscar" element={<Buscar />} />

          {/*Login page */}
          <Route path="/LoginCreate" element={<LoginCreate />} />

          {/*Anime Player*/}
          <Route path="/AVideo" element={<AVideo />} />

          {/*Manga Lector */}
          <Route path="/MangaLec" element={<MangaLec />} />

          {/*Manga page*/}
          <Route path="/KaguyaM" element={<KaguyaM />} />


          {/* 
          <Route path="/login" element={< LoginButton /> }/>


          <Route path="/logout" element={< LogoutButton /> }/>

          <Route path="/counter" element={< Counter />}/>  */}

          <Route path="/Profile" element={<Profile />} />

          <Route path="/Settings" element={<Settings />} />

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

