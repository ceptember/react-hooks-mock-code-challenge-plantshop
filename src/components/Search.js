import React, {useState} from "react";

function Search({onSearch}) {

  const [searchInput, setSearchInput] = useState("")

  function handleSearch(e){
    setSearchInput(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value = {searchInput}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
