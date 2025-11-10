import {Link} from "react-router-dom";
import {useState, useEffect} from "react";

export default function UserInfo(){

    const [users, setUsers] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [ad, setAd] = useState("");
    useEffect(
        ()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then( (response)=> response.json() ) // json으로 변환
            .then ( (data) => setUsers(data) );

        },[]
    );

    const users2 = users.filter( 
        u => [u.name, u.email, u.company.name].join("").includes(keyword))

    const users3 = users.filter( 
        u => [u.name, u.email, u.company.name].join("").includes(keyword)
    ).sort( (a,b) => (a.name.localeCompare(b.name)*ad) ); 

    
    // a.name.localeCompare(b.name) !== 0 ?
    // a.name.localeCompare(b.name) : a.email.localeCompare(b.email) 이름이 같을 때 이메일의 오름차순으로
    

    if(users.length == 0)
        return <div>저장된 데이터가 없습니다.</div>;


    return(
        <>
            <Link to="/" className='home'>HOME</Link>

            통합검색 <input type="text" placeholder="키워드를 입력하세요." style={{border:"2px solid #333"}}/>
            <button onClick={ () => setAd(1)}>오름차순</button>
            <button onClick={ () => setAd(-1)}>내림차순</button>

            <button onClick={() => setAd(ad * -1)}>
                {ad==1 ? "오름차순" : "내림차순"}
            </button>

            {users2.length === 0 ? (
                <p style={{marginTop : 12}}>검색 결과가 없습니다.</p>
            ) : (
                <ul>
                    {users3.map( (u) => (<li key={u.id}>
                        <br/>
                        이름 : {u.name} <br/>
                        이메일 : {u.email} <br/>
                        {/* 폰 넘버: {u.phone} <br/> */}
                        회사 이름 : {u.company.name}<br/>
                    </li>) )}
                </ul>
            )}

            
        </>
    )
}