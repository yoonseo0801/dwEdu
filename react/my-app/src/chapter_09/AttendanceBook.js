import React from "react";

const students = [
    {
        name : "인제"
    },
    {
        name : "철수"
    },
    {
        name : "영희"
    },
    {
        name : "민제"
    },
];

function AttendanceBook(props){
    return(
        <ul>
            {
                students.map((student,index)=>{
                    return <li key={`${student.id}+index`}> {index+1} : {student.name}</li>
                })
            }
        </ul>
    );
}
export default AttendanceBook;