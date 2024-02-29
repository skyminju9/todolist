import React, {useState} from "react";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import {ReactComponent as SmallLogo} from '../small_logo.svg';
import { useNavigate } from "react-router-dom";

const SignInPage = ({onSignIn}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignIn = () => {
        console.log('handleSignIn Clicked');
        console.log(email);
        console.log(password);
        

        if(email && password){
            const storedUser = JSON.parse(localStorage.getItem(JSON.stringify(email)));
            console.log(storedUser);
            if(storedUser.email === email && storedUser.password === password){
                onSignIn();
                alert('로그인 성공!');
                navigate('/home');
            }else{
                alert('아이디 또는 비밀번호가 올바르지 않습니다.');
            }
        }
    }

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
            <div className="signin_info">
                <div className="signin_input_email">
                    <MyInput title={"EMAIL ADDRESS"} type={"id"} text={"userid@email.com"} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="signin_input_password">
                    <MyInput title={"PASSWORD"} type={"password"} text={"password"} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
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
                <MyButton text="SIGN IN" onClick={handleSignIn}/>
            </div>
        </div>
    )
}

export default SignInPage;