import React from "react";
import {useNavigate} from "react-router-dom";
import {ReactComponent as Logo} from "../logo.svg";
import MyButton from "../components/MyButton";

const MainPage = () => {
    return(
        <div className="mainpage_container">
            <div className="mainpage_logo">
                <Logo/>
            </div>
            <div className="mainpage_title">
                <h4>
                    COLLECT <br/>
                    YOUR <br/>
                    TODOs <br/>
                    EVERYDAY <br/>
                </h4>
                    
            </div>
            <div className="mainpage_description">
                
                make your schedule better
                
            </div>
            <div className="mainpage_signin_button">
                <MyButton text={"SIGN IN"}/>
            </div>
        </div>
    )
}

export default MainPage;