import React from 'react';
import TextArea from "./TextArea";
import {useState} from 'react';
import {useCookies} from 'react-cookie';
import ls from 'local-storage'
import {useHistory} from 'react-router-dom'
import APIService from "../APIService"
import {
    TheSidebar,
    TheHeader,
  } from  '../containers/index'
function DescriptionForm(){
    const [token,setToken]=useCookies(['mytoken'])
    const [desc,setDesc] = useState({startup_name:'',startup_description:''});
    const username = ls.get('username'); //username, can be used as pk
    let history=useHistory()

    const handleCallback = (childData,type) =>{ //To get form data from child component, passing function which setDesc
        type=='title'?  //Checks what has to be updated, title or description
        setDesc(function(desc){ //Written in brief for better understanding, can be cut short
            return(
                {
                    ...desc,
                    startup_name:childData
                }
            )
        }):
        setDesc(function(desc){
            return(
                {
                    ...desc,
                    startup_description:childData
                }
            )
        });

    }

    const DescriptionButton=()=>{
        APIService.UpdateDescriptionStartUp(desc,username)
        .then(resp=> {
            history.push('/startup/dashboard')
        })
        .catch(error=> console.log(error))
    }

    return(
    <div>
         <div className="c-app c-default-layout">
            <TheSidebar/>
            <div className="c-wrapper">
            <TheHeader/>
            <div className="c-body">
            <TextArea parentCallback={handleCallback}/>
            <button className="btn btn-primary" onClick={DescriptionButton} style={centerElem}>Update Description</button>
            </div>
            </div>
            
        </div>
       
    </div>
    );
}
const centerElem = {
    margin: "0px 450px ",
    width: "15%",
    padding: "10px"
}
export default DescriptionForm;

