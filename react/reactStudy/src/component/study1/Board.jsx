import {Link} from "react-router-dom";
import {useState} from "react";
import Boardview from "./Boardview";


// 문제. 게시글 작성 만들기 - 제목, 내용, 작성자, 비밀번호 입력 하고 화면 출력까지
// 화면 출력 컨포넌트 명 : Boardview.jsx
export default function Board(){
    const [title, setTitle] = useState(""); // 초기화 안하면 오류 발생할 수 있음
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [password, setPassword] = useState("");
    
    return(
        <>
            <Link to="/" className="home">HOME</Link>


            <div>
                제목 : <input type="text" onChange={ (e) => setTitle(e.target.value)}/><br/>
                내용 : <textarea type="text" onChange={ (e) => setContent(e.target.value)}/><br/>
                작성자 : <input type="text" onChange={ (e) => setAuthor(e.target.value)}/><br/>
                비밀번호 : <input type="password" onChange={ (e) => setPassword(e.target.value)}/><br/>
            </div>


            <Boardview Title={title} Content={content} Author={author} Password={password}/>
               
        </>
    )
}