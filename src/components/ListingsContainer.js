import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDeleteListing}) {
  
  function handleDeleteClick(id){
    fetch(`http://localhost:6001/listings/${id}`,{
      method: "Delete"
    })
    .then(res => res.json())
    .then(listingData => onDeleteListing(id))
  }
  
  const listingsToDisplay = listings.map(listing => <ListingCard key={listing.id} id={listing.id} description={listing.description} image={listing.image} location={listing.location} onDelete={handleDeleteClick} />)
  
  return (
    <main>
      <ul className="cards">
        {listingsToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
