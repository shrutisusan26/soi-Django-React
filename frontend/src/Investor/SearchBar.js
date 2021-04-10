import React from "react";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

const SearchBar = () => {
  return (
    <MDBCol md="12">
      <MDBFormInline className="md-form mr-auto mb-4">
        <input className="form-control mr-sm-2"  type="text" placeholder="Search" aria-label="Search" />
        <MDBBtn rounded color = "success"  rounded size="sm" type="submit" className="mr-auto" rounded>
          Search
        </MDBBtn>
      
      </MDBFormInline>
    </MDBCol>
  );
}

export default SearchBar;