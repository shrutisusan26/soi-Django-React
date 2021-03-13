import React from 'react'
import {useEffect,useState} from 'react';

const TextArea = (props) => {
    return (
        <div className="input-group">
            <h1 style={centerElem}>Update Description</h1>
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon">
                <i className="fas fa-pencil-alt prefix"></i>
                </span>
            </div>
            <div style={centerElem}>
                <div className="mb-3">
                    <label for="startup_name"> New Name of the Startup:</label>
                    <input className="form-control"  type="text"  name="startup_name" onChange={(e)=>props.parentCallback(e.target.value,"title")}/>
                </div>
                <div className="mb-3">
                    <label for="desc">Update Description:</label>
                    <textarea name="desc" className="form-control" rows="15"  onChange={(e)=>props.parentCallback(e.target.value,"desc")}></textarea>
                </div>
            </div>
        </div>
    )
}

export default TextArea;

const centerElem = {
    margin: "auto",
    width: "50%",
    padding: "10px"
}