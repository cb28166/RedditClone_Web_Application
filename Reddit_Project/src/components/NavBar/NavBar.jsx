import React from "react";
import "./NavBar.css";
import SearchBar from "./SearchBar/SearchBar";

function NavBar() {

    return (
        <div className="navBar">
            <h1 className="logo">FakeReddit</h1>   
            <SearchBar />    
        </div>
    )

    
}

export default NavBar;