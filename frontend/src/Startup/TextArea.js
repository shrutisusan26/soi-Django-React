import React from 'react'
import {useEffect,useState} from 'react';

const TextArea = (props) => {
    return (
        <div className="input-group">
            
            <div style={centerElem}>
                <div className="mb-4">
                    <label for="startup_name"> New Name of the Startup:</label>
                    <input className="form-control"  type="text"  name="startup_name" onChange={(e)=>props.parentCallback(e.target.value,"title")}/>
                </div>
                <div >
                    <label for="desc" style={{fontFamily:"Helveltica"}} >Update Description:</label>
                    <textarea name="desc" className="form-control" rows="40"  onChange={(e)=>props.parentCallback(e.target.value,"desc")}></textarea>
                </div>
                
            </div>
        </div>
    )
}

export default TextArea;

const centerElem = {
    margin: "auto",
    width: "50%",
    padding: "30px",
   
}