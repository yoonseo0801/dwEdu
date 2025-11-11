import {useState} from "react";
import {Link} from "react-router-dom";

export default function Memo(){
    const [memoText, setMemoText] = useState("");

    return(
        <>
        <Link to="/" className="home" >HOME</Link>

            <h3>입력</h3>
            <input type="text" placeholder="내용을 입력하세요." onChange={(e)=>setMemoText(e.target.value)}/>

            <h3>출력</h3>
            <p>{memoText}</p>

        </>
    )
}