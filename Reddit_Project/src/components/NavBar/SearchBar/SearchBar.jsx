import React from "react";
import "./SearchBar.css"
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../../features/search/searchSlice";
import { useSelector } from "react-redux";
import { addRecent } from "../../../features/recents/recentsSlice";
import { setSelectedSubReddit } from "../../../features/subReddits/subRedditsSlice";


function SearchBar() {

    const [ searchValue, setSearchValue ] = useState("");

    const dispatch = useDispatch();

    function handleChange(event) {
        setSearchValue(event.target.value);
    }

    const subredditData = useSelector(
        state => state.subReddits.subReddits
    );

    const matchedSubreddit = searchValue
        ? subredditData.find(
            sub => sub.name.toLowerCase() === searchValue.toLowerCase()
        )
        : null;

    function handleSearch() {
        //meaning there is a match and we can set the selected subreddit as this and add it to recents
        if (matchedSubreddit) {
            dispatch(setSelectedSubReddit(matchedSubreddit.name))
            dispatch(addRecent(matchedSubreddit.name))
        }
        else {
            alert("No SubReddit found, please search again")
        }

    }

    return (
        <div className="searchBarHolder">
            <div className="searchBar">
            <input  
                type="text" 
                placeholder="Search for Cool Stuff Here" 
                value={searchValue} 
                onChange={handleChange}
            />
            <button className="button" onClick={handleSearch}>Search</button>
            </div>
        </div>
    )
}

export default SearchBar;