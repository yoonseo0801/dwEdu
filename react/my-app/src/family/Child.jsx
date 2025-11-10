import React from "react";
import './Child.css';

function Child(props){
    return(
            <>
            <h1>{`${props.title}의 이름은 ${props.name}입니다.`}</h1>
            <h2>{`성별은 ${props.gender}이고, 생일은 ${props.birthday}입니다`}</h2>
            </>
    )
}

export default Child;
