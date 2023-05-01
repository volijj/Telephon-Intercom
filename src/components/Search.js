import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

const Search = () => {
  return (
    <div className="search">
      
      <AiOutlineSearch/><input className="form-control form-control-sm ml-3 w-75 search-input" type="text" placeholder="Search" aria-label="Search" />
        <label>כתובת הבניין</label>
    </div>
    
  );
}

export default Search;