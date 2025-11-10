import React, {useState} from "react";

function Toggle(props) {
    const [isToogleOn, setIsToggleOn] = useState(true);

    // 방법 1. 함수안에 함수를 사용
    // function handleClick() {
    //     console.log('---->')
    //     setIsToggleOn(
    //         (isToogleOn) => !isToogleOn);
    // }

    // 방법 2. 화살표 함수를 사용 (고차함수)
    const handleClick = () => {
        console.log('---->')
        setIsToggleOn(
            (isToogleOn) => !isToogleOn);
    };

    return (
        <button onClick={handleClick}>
            {isToogleOn ? "켜짐" : "꺼짐"}
        </button>
    );
}

export default Toggle;