import React,{useState} from "react";
import MovieCard from "./MovieCard";
import Addmovie from "./Addmovie";
import {Route} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import MovieDescription from "./MovieDescription";

function MovieList ({text,newRating})  {
  
    let [films, setFilms]= useState([
      {
        id:uuidv4(),
        title: "The Dark Knight",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        posterUrl:
          "https://images-na.ssl-images-amazon.com/images/I/91KkWf50SoL._SL1500_.jpg",
        rate: "5",
      },
      {
        id:uuidv4(),
        title: "THE Matrix (1999)",
        description:
          "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        posterUrl:
          "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR84,0,630,1200_AL_.jpg",
        rate: "4",
      },
      {
        id:uuidv4(),
        title: "Joker (2019)",
        description:
          "Comedian Arthur is disregarded & mistreated by society.He then embarks on a downward spiral of revolution & bloody crime.It brings him face-to-face with his alter-ego:The Joker.",
        posterUrl:
          "https://bunker158.com/wp-content/uploads/2020/05/the-joker-2019-arthur-fleck-prime1-blitzway-bunker158-statue-1.jpg",
        rate: "5",
      },
      {
        id:uuidv4(),
        title: "Logan (2017)",
        description:
          "elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.",
        posterUrl:
          "https://images-na.ssl-images-amazon.com/images/I/81HhqhB2lKL._SL1500_.jpg",
        rate: "2",
      },
      {
        id:uuidv4(),
        title: "Kill Bill Vol. 1 (2003)",
        description:
          "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
        posterUrl:
          "https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Kill_Bill_Volume_1.png/220px-Kill_Bill_Volume_1.png",
        rate: "1",
      },
    ],)
  


   let  addMovies=(newMovie)=>{
    setFilms(films => [...films, newMovie])
    console.log(newMovie)
  }
  
    return (
      <div>
      <div className="List">
        {films.filter(el=>el.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()) && el.rate >= newRating).map((el) => (
          <MovieCard
            id = {el.id}
            title={el.title}
            description={el.description}
            posterUrl={el.posterUrl}
            rate={el.rate}
          />
        ))}
        
      </div>
      <Route path="/MovieDescription/:id" render={(props)=><MovieDescription {...props} movies={films}/>}></Route>
      <Addmovie addMovies={addMovies}/>
     
      </div>
    );
  }


export default MovieList;
