import React from "react";
import { FirstName , lastname}  from "./App";
const CompB = () =>{
    return (
        <>
        <FirstName.Consumer>
        {(fname)=>{
            return (
            <lastname.Consumer>
                {(lname)=>{
                    return <>
                    <h1>My first name is {fname} </h1>
                    <h1>My last name is {lname} </h1>
                    </> 
                }}
            </lastname.Consumer>
            )
        }}
        </FirstName.Consumer>
        </>
    );
};
export default CompB;