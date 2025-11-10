import React from "react";
import img from '../img/dog.jpg';
import {Link} from "react-router-dom";

export default function HomeIndex(){
    return(
        <div>
            <div>
                <Link to={"/portfolio"}>포트폴리오</Link>
            </div>
            <div className="imgBox">
                <img src={img} alt="이미지"/>
            </div>
        </div>
    )
}