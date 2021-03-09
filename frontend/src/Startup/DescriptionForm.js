import React from 'react';
import TextArea from "../TextArea";
import {useState} from 'react';

function DescriptionForm(){
    const [desc,setDesc] = useState({startup_name:'',description:''});

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
                    description:childData
                }
            )
        });
        console.log(desc);
    }

    return(
    <div>
        <TextArea parentCallback={handleCallback}/>
    </div>
    );
}

export default DescriptionForm;

