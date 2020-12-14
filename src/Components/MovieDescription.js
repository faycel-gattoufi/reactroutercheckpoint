import React ,{useState, useEffect} from 'react'


function MovieDescription(props) {
    console.log(props)
    const [movie, setMovie]= useState([]);
    useEffect(()=>{
        setMovie(props.movies.filter(el => el.id === (props.match.params.id)))
    },[props.movies,props.match.params.id])
    console.log(movie)
    return (
        <div>
             <p>{movie && <p>{movie.title}</p>}</p>
           
        </div>

    )
}

export default MovieDescription