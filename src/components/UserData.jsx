import React from "react";
// const UserData =(props) => {
const UserData =(props) => {
    return(
        <div>   
            <p>FirstName: {props.fName}</p>     
            <p>LastName: {props.lName}</p>     
            <p>Age: {props.age}</p>
            <button onClick={() => {
                props.increaseTheAge(props.id);
            }}>
                Increase Age</button>     


            <button onClick={() => {
                props.decreaseTheAge(props.id);
            }}>
                Decrease Age</button> 

                <br/>  <br/>
            <button onClick={() => {
                props.deleteTheUser(props.id);
            }}>
                Delete User</button>     
        </div>
    );
}
export default UserData;