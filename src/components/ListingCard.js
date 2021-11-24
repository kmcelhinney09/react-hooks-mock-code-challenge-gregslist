import React, { useState } from "react";

function ListingCard({ id, description, image, location, onDelete }) {
  const [isLiked, setIsLiked] = useState(false)

  function handleLikeClick(){
    setIsLiked(!isLiked)
  }

  

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image? image:"https://via.placeholder.com/300x300"} alt={"description"} />
      </div>
      <div className="details">
        {isLiked ? (
          <button className="emoji-button favorite active" onClick={handleLikeClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleLikeClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => onDelete(id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
