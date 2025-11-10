import React from "react";
import {Link} from "react-router-dom";
// import "./SignIn.css";

function SignIn(){

    return(
        <div className="SignInBox">
            <h1>가입 페이지</h1>
            <form>
                <label>아이디 : </label><input type="text"/><br></br>
                <label>암호 : </label><input type="password"/><br></br>
                <label>이름 : </label><input type="text"/><br></br>
                <label>생년월일 : </label><input type="date"/><br></br><br></br>
            </form>
            <Link to="/">Home</Link>
        </div>
    )
}

//Link와 button을 통해 이동처리 하는거 언제 누구를??

//리액트는 SPA(Single Page Application) 구조이기 때문에 새로운 페이지가 열리면
//기존 리액트로 작성한 코드를 다시 불러오기 때문에 데이터라든지 태그들 재활용이 안된다.
//페이지를 리로드 하지않는 방식이 리액트

//리액트에서 a태그와 form태그를 이용하여 전송 및 이동을 할 수도 있음.
//하지만 페이지가 새로고침 되기 때문에 기존의 모든 것을 다시 처음부터 해야 함.
//a태그 대신 Link를 사용하고 form태그를 사용해야 한다면
//<form onsubmit={navigate}> navigate를 이용한다.

//button
//  주용도 : 이벤트기반 동작(버튼클릭, form 데이터 제출, 함수실행 등)
//  적용방식 : useNavigate로 코드내에서 이동
//  코드형태 : <button onClick={ () => navigate("/write") }>작성</button>
//  접근성(웹표준) : 액션용으로 적합
//  js함수적용 : 가능

//Link
//  주용도 : 단순한 페이지 이동
//  작동방식 : React Router가 내부적으로 처리
//  코드 : <Link to={"/save"}>저장</Link>
//  접근성(웹표준) : 경로이동 등
//  HTML적 의미 : 다른 페이지로 이동하는 링크 

export default SignIn;