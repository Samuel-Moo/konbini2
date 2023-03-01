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
import Favorited from "containers/pages/Favorited";
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

          {/*Favorites page */}
          <Route path="/Favorited" element={<Favorited />}/>

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

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

