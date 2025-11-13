import "chart.js/auto"
import {Chart} from "react-chartjs-2"

export default function MixChart(){
    const data={
        labels: ["1월","2월","3월","4월","5월","6월"],
        datasets:[
            { // 선 그래프
                type:"line",
                label : "성장률 (%)",
                data : [5,8,6,11,13],
                yAxisID : "y1"
            },
            { // 막대자료
                type:"bar",
                label:"매출액(만원)",
                data : [320,410,380,460,520,610],
                yAxisID : "y" //주축 - 왼쪽
            }
            
        ]
    }

    const options={ 
        plugins:{
            title:{ // 차트 제목
                display:true,
                text:"월별 매출액 및 성장률",
                font:{size:20,wetight:"bold"}
            },
            legend:{ // 범례 (주로 아래쪽에 많이 넣음)
                position:"bottom"
            },
            tooltip:{ // 데이터를 보여주는 말풍선
                callbacks:{
                    label : (ctx/* 매개변수(datasets의 label) */) => {
                        const label = ctx.dataset.label;
                        const value = ctx.parsed.y;
                        return ctx.dataset.type === "bar" ?
                        `${label} : ${value.toLocaleString()}만원`
                        : `${label} : ${value}%`;
                    }
                }
            }
        },
        scales:{ // 축 설정 - x축, y축
            x:{
                title:{display:true, text:"월"}
            },
            y:{
                position:"left",
                title:{text:"매출액(만원)", display:true, rotation:0}
            },
            y1:{
                position:"right",
                grid:{drawOnChartArea:false},
                title:{text:"성장률(%)", display:true},
                title:{},
                beginAtZero:true //y축 0부터 안나오면 이거 쓰면 됨.
            }
        }
    }
    return(
        <div className="bg-white">
         <Chart data = {data} type="bar" options={options}/>
        </div>
    )
}