import {Link} from "react-router-dom";
import MemberInfo from "./MemberInfo";
import {useState} from "react";

export default function Member(){  //주소 : member
    const [userId, setUserId] = useState("");
    const [age, setAge] = useState(1); 
    
    return(
        <>
            <Link to="/" className="home">HOME</Link>

            아이디 : <input type="text" onChange={(e) => setUserId(e.target.value)}/>
            나이 : <input type="number" onChange={(e) => setAge(e.target.value)}/>

            <MemberInfo user={ { userId, age } }/>
        </>

    )
}