import React from "react";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import {ReactComponent as SmallLogo} from '../small_logo.svg';
import { useNavigate } from "react-router-dom";

const SignIn = () => {

    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/signup');
    }

    return(
        <div className="SignIn">
            <div className="signin_logo">
                <SmallLogo/>
            </div>
            <div className="signin_title">
                <h4>
                    COLLECT <br/>
                    YOUR <br/>
                    TODOs <br/>
                    EVERYDAY <br/>
                </h4>
            </div>
            <div className="signin_input_email">
                <p>EMAIL ADDRESS</p>
                <MyInput type={"id"} text={"userid@email.com"}/>
            </div>
            <div className="signin_input_password">
                <p>PASSWORD</p>
                <MyInput type={"password"} text={"password"}/>
            </div>
            <div className="signup_container">
                <div className="signup_text">
                    New to our website?
                </div>
                <div className="buttonContainer">
                    <button className="signup_button" onClick={handleSignUp}>sign up</button>
                </div>
            </div>
            <div className="signin_button">
                <MyButton text="SIGN IN"/>
            </div>
        </div>
    )
}

export default SignIn;