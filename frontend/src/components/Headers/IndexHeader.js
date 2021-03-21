/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components
import header from '../Headers/header.jpg';
import nowlogo from '../Headers/now-logo.png';

function IndexHeader() {
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
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + header + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={nowlogo}
            ></img>
            <h1 className="h1-seo"><b>Seeking Online Investments</b></h1>
            {/* <h3>Enjoy Tech. Enjoy Investing.</h3> */}
          </div>
          
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
