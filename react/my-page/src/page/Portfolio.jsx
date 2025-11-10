import React from "react";
import {Link} from "react-router-dom";
import img1 from "../img/sweet_folie.png";
import img2 from "../img/olive_young.png";

export default function Portfolio (){
    return(
        <div>
            <div>
                <Link to={"/"}>HOME</Link>
            </div>
            <div>
                <h1>포트폴리오 (나의 작품)</h1>
            </div>
            <div>
                <img src={img1} alt="포트폴리오1"/>
                <img src={img2} alt="포트폴리오2"/>
            </div>
        </div>
    )
}