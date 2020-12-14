import React from "react";
import { Card } from "react-bootstrap";
import './MovieListe.css';
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom';


function MovieCard({ id, title, description, posterUrl, rate }) {
  return (
    <div className="corp ">
      <Card style={{ width: "200px", height:"400px" ,backgroundColor:"white",margin:"20px"}}>
        <Card.Img variant="top" src={posterUrl} style={{ width: "180px", height:"190px" }} />
        <Card.Body >
          <Card.Title style={{ color:"red" ,fontSize:"25px" }}>{title}</Card.Title>
            
                  
              <Link to={`/MovieDescription/${id}`}>Read more...</Link>
          

          <StarRatingComponent value={rate}/>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
