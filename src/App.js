import "./App.css";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { HomePage } from "./Pages/HomePage";
import { MoviePage } from "./Pages/MoviePage";
import { RegisterPage } from "./Pages/RegisterPage";
import { SignInPage } from "./Pages/SignInPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  let movies = [
     {
        sno : 1,
        name : "Tomb Raider",
        imgurl : "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
        backgroundurl : "https://fsmedia.imgix.net/cd/c9/5e/ba/4817/4d9a/93f0/c776ec32ecbc/lara-crofts-neck-looks-unnatural-in-the-new-poster-for-tomb-raider.png",
        year : "2018, Roar Uthaug",
        time : "125 min",
        movieType : "Action, Fantasy",
        movieDesc : "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
     },
     {
      sno : 2,
      name : "Black Panther",
      imgurl : "https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg",
      backgroundurl : "https://www.gannett-cdn.com/-mm-/c03fd140debe8ad4c05cf81a5cad7ad61a12ce52/c=0-1580-2985-3266&r=x803&c=1600x800/local/-/media/2017/06/09/USATODAY/USATODAY/636326272873599176-Black-Panther-Teaser.jpg",
      year : "2018, Ryan Coogler",
      time : "134 min",
      movieType : "Action, Adventure, Sci-Fiy",
      movieDesc : "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
   },
   {
    sno : 3,
    name : "Blacandkfc sdk Panther",
    imgurl : "https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg",
    backgroundurl : "https://www.gannett-cdn.com/-mm-/c03fd140debe8ad4c05cf81a5cad7ad61a12ce52/c=0-1580-2985-3266&r=x803&c=1600x800/local/-/media/2017/06/09/USATODAY/USATODAY/636326272873599176-Black-Panther-Teaser.jpg",
    year : "2018, Ryan Coogler",
    time : "134 min",
    movieType : "Action, Adventure, Sci-Fiy",
    movieDesc : "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
 }
  ]

  return (
    <>
      <Router>
          <Header/>
          <Routes>
          <Route path="/" element={
            <>
              <HomePage movies={movies}/>
            </>
            } 
          />
          <Route path="/signin" element={
            <>
              <SignInPage/>
            </>
            } 
          />
          <Route path="/movie" element={<>
            <MoviePage movies={movies}/>
          </>
          } />
          <Route path="/register" element={
            <>
              <RegisterPage/>
            </>
            } 
          />
          </Routes>
  
          <Footer/>
      </Router>
    </>
  );
}

export default App;
