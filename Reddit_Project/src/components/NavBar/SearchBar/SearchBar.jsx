import React from "react";
import "./SearchBar.css"


function SearchBar() {
    return (
        <div className="searchBar_holder">
            <div className="inner">
                <input className="searchBar" type="text" placeholder="Search for Cool Stuff Here"/>
            </div>
        </div>
    )
}

export default SearchBar;