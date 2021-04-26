import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import bg6 from "../Headers/bg6.jpg"
// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  return (
    <>
      <div className="page-header page-header-small">
        
        <div
          className="page-header-image"
          style={{
           
            backgroundImage: "url(" + bg6 + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <div className="text-center">
             
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
