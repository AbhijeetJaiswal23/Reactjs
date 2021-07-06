import React from 'react';
import './SearchBox.css';

const Searchbar=(props)=>{

    return(

        <div className="Search-container">

            <input onChange={(event)=>props.oninputChange(event.target.value)} placeholder="Enter Keywords.." className="Searchbar-text"/>

        </div>
    )
}

export default Searchbar;