import React from "react";
import {Link, Routes, Route} from "react-router-dom";
import "./ExhibitionHome.css";
import HomeIndex from "./HomeIndex";
import SignUp from './SignUp';
import SignIn from './SignIn';

export default function ExhibitionHome (){

    return(
        <div>
            <div className="topMenu">
                <Link to={"/place"}>전시장</Link>
                <Link to={"/dir"}>작가</Link>
                <Link to={"/signup"}>로그인</Link>
            </div>
            
            <Routes>
                <Route path="/" element={<HomeIndex/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/signin" element={<SignIn/>}/>
            </Routes>
        </div>
    )
}

