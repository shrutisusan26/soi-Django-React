import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components


import bg5 from "../Headers/investor.jpg";

function InvestorLoginHeader() {
  let pageHeader = React.createRef();
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + bg5 + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
        
          <br/>
          
          <div className="content">
            <div className="social-description">

            </div>
            <div className="social-description">
             
            </div>
            <div className="social-description">
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default InvestorLoginHeader;
