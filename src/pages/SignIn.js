import React from "react";
import MyButton from "../components/MyButton";
import {ReactComponent as SmallLogo} from '../small_logo.svg';

const SignIn = () => {
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
        </div>
    )
}

export default SignIn;