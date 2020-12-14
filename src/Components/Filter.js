import React from "react";


import StarRatingComponent from "react-star-rating-component";

function Filter({ filtredText, filtredRating }) {
 


  return (
    <div style={{ display: "flex" , flexDirection:"row" , justifyContent:"center"}}>
      <input placeholder ="search" onChange={(e) => filtredText(e.target.value)} />
      <span>By star Rate</span>     
        <StarRatingComponent 
        onStarClick={(nextValue)=>filtredRating(nextValue)}
      />

    </div>
  );
}

export default Filter;
