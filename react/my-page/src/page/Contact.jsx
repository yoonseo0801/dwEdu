import React from "react";
import {useState} from "react";

export default function Contact(){
    const [name, setName] = useState("");
    //setName은 name이라는 변수를 저장하는데 사용

    return(
        <div>
            <p>연락처 : 010-9138-0362</p>
            <p>이메일 : lyoonseo3@naver.com</p>
            <p>git 주소 : https://github.com/yoonseo0801/yoonseo-repository.git</p>

            <input type="text" onChange={(e) => setName(e.target.value)}/>
            {/* e는 input태그를 말함. */}

            <p>당신의 이름은? {name}</p>
        </div>
    )
}