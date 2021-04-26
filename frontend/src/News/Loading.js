import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const Loading = () => {
  return (
    <div className="loading">
     <Loader style={{marginLeft:'125px'}}
    type="ThreeDots"
    color="#1F2DB2"
    height={600}
    width={500}
  
  />
    </div>
  );
};

export default Loading;