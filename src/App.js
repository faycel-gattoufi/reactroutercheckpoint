import React,{useState} from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter }  from  "react-router-dom";



function App() {
  let [newText, setText] = useState("");
  let [rating, setRating] = useState("");

  let filtredText=(text)=>{
    setText(text)
  }
  let filtredRating=(rating)=>{
    setRating(rating)
  }
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1>React Hooks Checkpoint By Gattoufi Faycel </h1>
        <Filter filtredText={filtredText} filtredRating={filtredRating}/>
        <MovieList text={newText} newRating={rating}/>
       
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
