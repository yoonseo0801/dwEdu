import { Link } from "react-router-dom";
import {useState} from "react";

export default function Attend(){
    const [studentId, setStudentId] = useState(0);
    const [name, setName] = useState("");
    const [student, setStudent] = useState("");
    const [add, setAdd] = useState(true);

    const chulseogbu = [
        {id:1  ,name:"짱구" , className: "name1" },
        {id:2  ,name:"짱아" , className: "name2" },
        {id:3  ,name:"철수" , className: "name3" },
        {id:4  ,name:"유리" , className: "name4" },
        {id:5  ,name:"훈이" , className: "name5" },
        {id:6  ,name:"맹구" , className: "name6" },
        {id:7  ,name:"수지" , className: "name7" },
        {id:8  ,name:"흰둥이" , className: "name8" }
    ]

    const chulseogbu2 = chulseogbu.filter( (u) =>  [u.id, u.name].join("").includes(student))
                                    .sort((a,b) => 
                                        add ? a.name.localeCompare(b.name) :
                                              b.name.localeCompare(a.name)
)
    return(
        <>
        <Link to ="/home" className="home">HOME</Link>

        <input type="text" placeholder="검색어를 입력하세요." onChange={(e) => setStudent(e.target.value)}/>&nbsp;
        <button onClick={() => setAdd(true)}>오름차순</button>&nbsp;
        <button onClick={() => setAdd(false)}>내림차순</button>

        {chulseogbu2.length === 0 ? (
                <p style={{marginTop : 12}}>검색 결과가 없습니다.</p>
            ) : (
                <ul>
                    {chulseogbu2.map( (u) => (<li key={u.id}>
                        <br/>
                        이름 : {u.name} <br/>
                    </li>) )}
                </ul>
            )}

        </>
    )
}