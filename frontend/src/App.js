import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import store from "store";
import { Provider } from "react-redux";
import Anime from "containers/pages/Anime";
import Manga from "containers/pages/Manga";
import Buscar from "containers/pages/Buscar";
import LoginCreate from "containers/pages/LoginCreate";
/* import {LoginButton, LogoutButton} from "containers/pages/login"; */
import Favorited from "containers/pages/Favorited";
import Profile from "containers/pages/Profile";
import Settings from "containers/pages/Settings";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404 />} />

          {/* Home Display */}
          <Route path="/" element={<Home />} />

          {/*Anime page */}
          <Route path="/Anime" element={<Anime />} />

          {/*Manga page */}
          <Route path="/Manga" element={<Manga />} />

          {/*Favorites page */}
          <Route path="/Favorited" element={<Favorited />}/>

          {/*Buscar page */}
          <Route path="/Buscar" element={<Buscar />} />

          {/*Login page */}
          <Route path="/LoginCreate" element={<LoginCreate />} />

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

