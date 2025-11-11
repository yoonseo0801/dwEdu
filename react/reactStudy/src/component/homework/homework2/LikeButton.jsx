import { useState } from "react"

export default function LikeButton() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div id="like">
                <h2 style={{fontWeight:"bold"}}>좋아요 수 : {count}</h2>
                <br/>
                <button onClick={() => setCount(count + 1)}>+ 증가</button> &nbsp;
                <button onClick={() => setCount(count - 1)}>- 증가</button>
                <br/><br/>
                {count >= 10 && <p>많은 사랑을 받고 있습니다 ♥</p>}
            </div>
        </>
    )
}