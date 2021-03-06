import React, {useContext} from "react";
import {Redirect} from "react-router-dom";
import {AuthContext} from "./auth.js";
import fcon from "../config.js";

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = e.target.elements;
        try{
            fcon.auth().signInWithEmailAndPassword(email.value, password.value);

        } catch(error)
        {
            alert(error);
        }
    };
    const {currentUser} = useContext(AuthContext);
    if(currentUser){
        return <Redirect to="/dashboard"/>;
    }
    return (
        <>
        <h1>Login</h1>
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

export default Login;