import React, { useState } from 'react';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("")
    
    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
      }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }
    return(
        <form className="search">
            <input 
                onChange={handleSearchInputChanges}
                value={searchValue}
                type="text" />
            <input 
                onClick={callSearchFunction}
                type="submit" setValue="Search" />
        </form>
    )
}
export default Search;