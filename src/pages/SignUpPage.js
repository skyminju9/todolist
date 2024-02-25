import React from "react";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SmallLogo} from '../small_logo.svg';

const SignUpPage = () => {
    return(
        <div className="SignUp">
            <div className="signup_logo">
                <SmallLogo/>
            </div>
            <div className="signup_title">
                <h4>
                    COLLECT <br/>
                    YOUR <br/>
                    TODOs <br/>
                    EVERYDAY <br/>
                </h4>
            </div>
            <div className="signup_info">
                <div className="signup_input_email">
                    <MyInput title={"EMAIL ADDRESS"} type={"id"} text={"Enter Email Address"}/>
                </div>
                <div className="signup_input_password">
                    <MyInput title={"PASSWORD"} type={"password"} text={"Enter Password"}/>
                </div>
                <div className="signup_input_passwordcheck">
                    <MyInput title={"CHECK PASSWORD"} type={"password"} text={"Check Password"}/>
                </div>
            </div>
            <div className="signup_button">
                <MyButton text="SIGN UP"/>
            </div>
        </div>
    )
}

export default SignUpPage;