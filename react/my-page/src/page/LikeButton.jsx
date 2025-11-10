import {useState} from "react";

export default function LikeButton(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>좋아요 ♥ {count}</p>
            <button onClick={() => setCount(count + 1)}>좋아요♥</button>
        </div>
    )
}