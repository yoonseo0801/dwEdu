import {Link} from "react-router-dom";
import {useState} from "react";

export default function DataList(){
    const names = [
        {id:1, name:"이순신"}, 
        {id:2, name:"강감찬"},
        {id:3, name:"이성계"},
        {id:100, name:"박문수"},
        {id:154, name:"문익점"},
        {id:7, name:"최영"}
    ];

    for (var n of names){
        `<div>${n}</div>`
    } /* --> 포문으로 만들려면 이렇게, n이라는 변수에 저장 map이 이 포문과 비슷. 
    이 포문을 map의 ()괄호 안에 넣음*/

    if(names.length == 0)
        return <div>저장된 데이터가 없습니다.</div>;
    return(
        <>
            <ul> {/* ul 사용할 때는 <ul>안에 변수.map); 넣기 */}
                 {/* names.map ( () => () ) 실행할 명령이 하나
                     names.map ( () => {} ) 
                     이 두가지 형태로 만듬 
                     map 함수는 배열을 순회 할 수 있는 함수이다.
                     map 안의 화살표 함수에는 매개변수를 두어야 배열의 데이터 하나씩
                     하나씩 꺼내올 수 있다.*/}
                {names.map( (n) => ( <li key={n.id}>{n.name}</li> ) ) } {/* 리액트는 태그안에서 자바스크립트 사용할 때는 중괄호 사용 */}
            </ul>
        </>
 );
}

/* 

names.map( () => () ) 

        function a(){ // 함수의 이름 임의로 a
            return 10;
        } 
            화살표 함수로 바꾸면 : () => ( 10 );
            
            names.map ( () => {  } )

            function a(){
            let tot = 10+20+30+40;
            let result = tot < 50;
            return result;
            }
            화살표 함수로 변경하면  : () => {
                let tot = 10+20+3;
                let result = tot<50;
                return result;
                }
                
*/