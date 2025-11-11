import "chart.js/auto"
import {Bar} from "react-chartjs-2" //선은 line, 원형이 도넛
import {useState} from "react";

export default function BarChart1(){
    const score = [
        {name:"이순신", avg:87},{name:"강감찬", avg:98},
        {name:"장보고", avg:66},{name:"정도전", avg:99},
        {name:"정약용", avg:81},{name:"한석봉", avg:54}
        ];

        const data={
            labels : score.map( (u)=> u.name ),
            datasets : [
                {
                    label : "기말성적",
                    data : score.map( (u) => u.avg ),

                }
            ]
        };

        const options={};

    return(
        <>
            <Bar data={data} options={options} />
        </>
    )
}