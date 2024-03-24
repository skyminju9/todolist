import React from "react";
import { useNavigate } from "react-router-dom";
import {ReactComponent as Logo} from "../logo.svg";
import MyButton from "../components/MyButton";
import "../css/MainPage.css";

const MainPage = () => {
    const navigate = useNavigate();

    const handleSignInButton = () => {
        navigate('/SignIn');
    }

    return(
        <div className="MainPage">
            <div className="mainpage_logo">
                <Logo/>
            </div>
            <div className="mainpage_title">
                <p>
                    COLLECT <br/>
                    YOUR <br/>
                    TODOs <br/>
                    EVERYDAY <br/>
                </p>
                    
            </div>
            <div className="mainpage_description">
                <p>
                    make your schedule better
                </p>
            </div>
            <div className="mainpage_signin_button">
                <MyButton text={"SIGN IN"} onClick={handleSignInButton}/>
            </div>
        </div>
    )
}

export default MainPage;