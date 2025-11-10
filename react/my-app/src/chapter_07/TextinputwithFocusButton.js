import React,{useRef} from "react";

function TextInputwithFocusButton(props){

    const inputElem = useRef(null);
    const onButtonClick = ()=>{
        inputElem.current.focus();
    }

    return(
        <div>
            <input ref={inputElem} type="text"></input>
            <button onClick={onButtonClick}>focus the Input</button>
        </div>
    )
}

export default TextInputwithFocusButton;