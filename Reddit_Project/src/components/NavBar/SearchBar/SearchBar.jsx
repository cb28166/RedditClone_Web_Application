import React from "react";
import "./SearchBar.css"


function SearchBar() {
    return (
        <div className="searchBar_holder">
            <input className="searchBar" type="text" placeholder="Search for Cool Stuff Here"/>
        </div>
    )
}

export default SearchBar;