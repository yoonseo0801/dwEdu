import React from "react";
import img1 from "./img/dog.jpg";
import img2 from "./img/dog2.jpg"
import './Img.css'


function Img() {

    return(
        <div className="imgBox">
            <img src={img1} alt="왼쪽 이미지" className="image"/>
            <img src={img2} alt="오른쪽 이미지" className="image"/>
        </div>
    );
}

export default Img;