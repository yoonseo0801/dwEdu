import {useState} from "react";

export default function Counter(){
    const [count, setCount] = useState(0); // 기본값 0

    return(
        <div>
            <h3>현재 숫자 : {count}</h3>
            <button onClick={() =>setCount(count + 1)}>+ 증가</button>
            <button onClick={() =>setCount(count - 1)}>- 감소</button>
        </div>
    )
}