import "chart.js/auto"; // auto 다양한 파일 자동으로 불러오기
import {Bar} from "react-chartjs-2";

export default function ChartBasic1(){
    const data = {
        labels:["1월","2월","3월"],
        datasets :[
            {
            label : "매출",
            data: [100,50,200],
            backgroundColor: "rgba(99,102,241,0.5)",//백그라운드의 컬러는 막대의 색
            borderColor:"rgba(99,102,241,1",
            borderWidth:1 //보더의 선 굵기
            }
        ]
    };
    const options = {
        responsive : true, // 창의 크기에 따라 그래프가 자동으로 크기조절
        maintainAspecRatio : true, // 그래프의 가로세로 비율 유지
        plugins:{ // 차트의 제목, 범례, 툴팁 등 설정 (범례: 어떤 종류의 데이터인지)
            title:{
                display:true, // 이걸 넣어줘야 화면이 나옴
                text : "월별현황"
            },
            legend:{display:true, position:"left"}, // 범례 위치
            tooltip : {enabled:true, mode:"index", intersect:false} //intersect : false 막대그래프? 근처에 마우스를 올리면 정보 뜨게
        },
        scales : {
            x:{
                title : {display:true, text:"월"}
            },
            y:{
                title:{display:true, text:"매출액(만원)"}
            }
        }//x축, y축의 제목 설정
    };
    return(
        <>
            <Bar data={data} options={options}/>
        </>
    )
}
