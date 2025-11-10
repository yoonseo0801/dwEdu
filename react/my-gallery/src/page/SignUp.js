import React from "react";
import "./SignUp.css";
import {useNavigate} from "react-router-dom";

export default function SignUp () {
    const navigate = useNavigate();
    return(
        <div className="loginBox">
            <div className="inputBox">
            <label>ID : </label>
            <input type="text" placeholder="아이디를 입력하세요."/>
            </div>
            <div className="inputBox">
            <label>PW : </label>
            <input type="password" placeholder="비밀번호를 입력하세요."/>
            </div>
            <div>
                <button>로그인</button><br></br>
                <button onClick={  () => navigate("/SignIn") }>회원가입</button>
            </div>
        </div>
    )
}