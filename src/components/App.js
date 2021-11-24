import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [searchListings, setSearchListings] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(res => res.json())
      .then(listingsData => {
        setListings(listingsData)
        setIsLoaded(true)
      })
  }, [])

  function handleDeleteListing(id) {
    const updatedListings = listings.filter(listing => listing.id !== id)
    setListings(updatedListings)
  }

  function handleSearch(searchText) {
    if (searchText === "") {
      setSearchListings([])
    } else {
      const updatedListings = listings.filter(listing => listing.description.toLowerCase().includes(searchText.toLowerCase()))
      setSearchListings(updatedListings)
    }
  }


  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      {!isLoaded ? <h1>Loading....</h1> : <ListingsContainer listings={searchListings.length === 0 ? listings : searchListings} onDeleteListing={handleDeleteListing} />}
    </div>
  );
}

export default App;
