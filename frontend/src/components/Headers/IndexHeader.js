/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import styled from "styled-components";
// core components
import header from '../Headers/header.jpg';
import nowlogo from '../Headers/now-logo.png';
import SplitPane, { Pane } from 'react-split-pane';

const Wrapper = styled.div`
.Resizer {
	background: #000;
	opacity: 0.2;
	z-index: 1;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	-moz-background-clip: padding;
	-webkit-background-clip: padding;
	background-clip: padding-box;
  }
   
  .Resizer:hover {
	-webkit-transition: all 2s ease;
	transition: all 2s ease;
  }
   
  .Resizer.horizontal {
	height: 11px;
	margin: -5px 0;
	border-top: 5px solid rgba(255, 255, 255, 0);
	border-bottom: 5px solid rgba(255, 255, 255, 0);
	cursor: row-resize;
	width: 100%;
  }
   
  .Resizer.horizontal:hover {
	border-top: 5px solid rgba(0, 0, 0, 0.5);
	border-bottom: 5px solid rgba(0, 0, 0, 0.5);
  }
   
  .Resizer.vertical {
	width: 11px;
	margin: 0 -5px;
	border-left: 5px solid rgba(255, 255, 255, 0);
	border-right: 5px solid rgba(255, 255, 255, 0);
	cursor: col-resize;
  }
   
  .Resizer.vertical:hover {
	border-left: 5px solid rgba(0, 0, 0, 0.5);
	border-right: 5px solid rgba(0, 0, 0, 0.5);
  }
  .Resizer.disabled {
	cursor: not-allowed;
  }
  .Resizer.disabled:hover {
	border-color: transparent;
  }
`;

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
			<SplitPane
			split="vertical"
			defaultSize="50%"
			>
				<div>
					<a href="/investorlogin" className="btn btn-xl js-scroll-trigger" style={splitBtnStyle}>Investor</a>
				</div>
				<div>
					<a href="/startuplogin" className="btn btn-xl js-scroll-trigger" style={splitBtnStyle}>Startup</a>
				</div>
			</SplitPane>
		  
		</Container>
	  </div>
	</>
  );
}

export default IndexHeader;


const splitBtnStyle = {
	marginTop:"50%", 
	backgroundColor:"grey"
}