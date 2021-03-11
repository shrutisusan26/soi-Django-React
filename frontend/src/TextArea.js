import React from 'react'
import {useEffect,useState} from 'react';

const TextArea = (props) => {
    const [desc,setDesc] = useState('')
    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon">
                <i className="fas fa-pencil-alt prefix"></i>
                </span>
            </div>
            <div style={centerElem}>
                <div className="mb-3">
                    <label for="startup_name">Name of the Startup:</label>
                    <input className="form-control"  type="text" name="startup_name" onChange={(e)=>props.parentCallback(e.target.value,"title")}/>
                </div>
                <div className="mb-3">
                    <label for="desc">Update Description:</label>
                    <textarea name="desc" className="form-control" rows="30" onChange={(e)=>props.parentCallback(e.target.value,"desc")}></textarea>
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