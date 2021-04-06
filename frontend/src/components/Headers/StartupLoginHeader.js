import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

import ryan from "../Headers/ryan.jpg";
import bg5 from "../Headers/startup.jfif";

function StartupLoginHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
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
          {/* <div className="photo-container">
          
          </div> */}
          <br/>
          {/* <h3 className="category">Abhishek Rai</h3>
          <h2 className="category">CEO</h2> */}
          <div className="content">
            <div className="social-description">
              {/* <h2>1K</h2>
              <p>Investments</p> */}
            </div>
            <div className="social-description">
              {/* <h2>2K</h2>
              <p>Trading</p> */}
            </div>
            <div className="social-description">
              {/* <h2>10K</h2>
              <p>Interested</p> */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default StartupLoginHeader;
