import React from "react";
import "./SearchBar.css"
import { useState, useEffect } from "react";


function SearchBar() {
    const [searchBarInput, setSearchBarInput] = useState("");

    function handleChange(event) {
        setSearchBarInput(event.target.value)
        console.log(searchBarInput);
    }

    return (
        <div className="searchBarHolder">
            <div className="searchBar">
            <input  
                type="text" 
                placeholder="Search for Cool Stuff Here" 
                value={searchBarInput} 
                onChange={handleChange}
                sub
            />
            <button className="button">Search</button>
            </div>
        </div>
    )
}

export default SearchBar;