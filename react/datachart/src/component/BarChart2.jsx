import 'chart.js'
import {Bar} from "react-chartjs-2"


export default function BarChart2(){
    const score = [
        {name:"강호현", score1 : 78, score2:98},
        {name:"김정원", score1 : 65, score2:55},
        {name:"박승찬", score1 : 31, score2:22},
        {name:"이예준", score1 : 99, score2:89},
        {name:"이윤서", score1 : 67, score2:56}
    ];

    /* const names = ;
    const score1 = ;
    const score2 = ; 이렇게 따로 해도 되고*/

    const [names, score1, score2] = [ // 이렇게 묶어서 만들어줘도 됨.
        score.map ( (u) => u.name),
        score.map ( (u) => u.score1),
        score.map ( (u) => u.score2)
    ]

    const data = { // 모양이나 색
        labels:names,
        datasets : [
            {
                label:"중간고사",
                data: score1, 
                yAxisID:"y" // 가로막대 -> 수치 값이 y축에 있기 때문에
            },
            {
                label:"기말고사",
                data: score2,
                yAxisID:"y1" //축 id값 : y1 등 자기 맘대로 정하면 됨
            }
        ]
    }
    const options = {
        scales:{
            y:{
                position:"left"
            },
            y1:{
                position:"right",
                grid:{drawOnChartArea:false} // 격자 중복 방지 : 보조축은 선이 안들어감
            }
        }
    }
    return(
        <>
            <Bar data={data} options={options}/>
        </>
    )
}