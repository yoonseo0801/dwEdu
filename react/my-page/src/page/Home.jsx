import React from "react";
import {Link, Routes, Route, Outlet} from "react-router-dom";
// import "./Home.css";
import HomeIndex from "./HomeIndex";
import About from "./About";
import Contact from "./Contact";


export default function Home (){
    return(
        <div>
            <div className="topMenu">
                <Link to={"/"}>HOME</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
            </div>
            
            <Outlet/> {/* 라우트 자식 나오는 곳 
            아래와 같은 방법으로 사용하면 주소가 꼬일 수 있기 때문에
            이 방법으로 사용해야 함 (App.jsx에서 라우트의 자식 입력함.)
            나중에는 배열을 사용해서 더 간단히 배울 예정*/}
            {/* <Routes>
                <Route path="/" element={<HomeIndex/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/Contact" element={<Contact/>}/>
            </Routes> */}
        </div>
    )
}