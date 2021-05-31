import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import fcon from "../config.js";

const signup = () => {

    const [currentUser, setCurrentUser] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = e.target.elements;

        try{
            fcon.auth().createUserWithEmailAndPassword(email.value,password.value);
            setCurrentUser(true);
        }
        catch(error){
            alert(error);
        }
    };

    if (currentUser)
    {
        return <Redirect to="/dashboard"/>;
    }

    return (
        <>
        <h1>Sign UP</h1>
        <form onSubmit={handleSubmit}>
            <label for="email">Email</label>
            <input type="email" name="email" placeholder="Email"/>
            <label for="password">Password</label>
            <input type="password" name="password" placeholder="Password"/>
            <button type="submit">Submit</button>
            </form>
            </>
    );
};

export default signup;