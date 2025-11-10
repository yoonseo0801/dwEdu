import {Link} from "react-router-dom";
import {useState} from "react";

export default function DataList2(){
    const member = [
      {id:56 , userId:"skyblue" , age:45 , tel:"01012123333" },
      {id:1 , userId:"gold119"  , age:35, tel:"01034456789"},
      {id:2 , userId:"kfteam1"  , age:23, tel:"01023648576"},
      {id:3 , userId:"asdfg"  , age:38, tel:"01012222222"},
      {id:4 , userId:"qwer112"  , age:15, tel:"01054679876"},
      {id:5 , userId:"hahaha66"  , age:20, tel:"01012345678"},
    ];

    const [age, setAge] = useState(0);
    const [userId, setUserId] = useState(0);
    const [keyword, setKeyword] = useState("");

    // 첫 페이지에서는 map출력2 라고 출력, 주소는 /map2

    const member2 = member.filter( u => u.age >= 30); 
    //u.age < 40 && u.age >= 25 나이 40이상, 25이하

    const member3 = member.filter( u => u.age >= age);
    const member4 = member.filter( u => u.userId.includes(userId));
    const member5 = member.filter( u => [u.userId, u.age, u.tel].join("").includes(keyword));
    
 
    if(member.length == 0)
        return <div>저장된 데이터가 없습니다.</div>;

    return (
        <>
            <Link to="/" className="home">HOME</Link>

            {/* 나이검색 <input type="number" onChange={ (e) => setAge(e.target.value)} style={{border:"2px solid #333"}}/> */}
            {/* ID검색 <input type="text" onChange={ (e) => setUserId(e.target.value)} style={{border:"2px solid #333"}}/> */}
            키워드 검색 <input type="text" onChange={ (e) => setKeyword(e.target.value)} style={{border:"2px solid #333"}}/>

            
            <ul>
                {/* 첫번째 방법 : member 사용*/}
                {/* 4번째 방법 : member4 사용 (ID검색)*/}
                {/* 5번째 방법 : member5 사용 (키워드검색) */}
                {member5.map( (m) => (<li key={m.id}>
                    유저 아이디 : {m.userId}<br/>
                    나이 : {m.age}<br/>
                    전화번호 : {m.tel}<br/><br/></li>))}

                {/* 두번째 방법 */}
                {/* {member.map( (m) => {
                    if(m.age>=30)
                    return<li key={m.id}>
                    유저 아이디 : {m.userId}<br/>
                    나이 : {m.age}<br/>
                    전화번호 : {m.tel}<br/><br/></li>})} */}

                {/* 세번째 방법 */}
                {/* {member.map( (m) => (<li key={m.id} className="mb-4">
                    유저 아이디 : {m.userId}<br/>
                    나이 : {m.age}<br/>
                    전화번호 : {m.tel}<br/><br/></li>))} */}
            </ul>
            
        </>
    )
}