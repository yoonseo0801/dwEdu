import 'chart.js'
import {Line} from "react-chartjs-2"

export default function LineChart2(){
    const elecGas =[
        {month : "1월", electric:280, gas:40},
        {month : "2월", electric:230, gas:50},
        {month : "3월", electric:224, gas:32},
        {month : "4월", electric:250, gas:27},
        {month : "5월", electric:280, gas:20},
        {month : "6월", electric:300, gas:29},
        {month : "7월", electric:320, gas:14},
    ];

    const [month, electric, gas] = [
        elecGas.map((d) => d.month),
        elecGas.map((d) => d.electric),
        elecGas.map((d) => d.gas)
    ];
    const data = {
        labels:month,
        datasets:[
            {
                label:"전기사용량(kwh)",
                data:electric,
                pointHoverRadius:15
            },
            {
                label:"가스사용량(㎡)",
                data:gas,
                yAxisID:"y1"
            }
        ]
    };

    return(
        <>
            <Line data={data} options={{
                scales:{
                    y:{position:"left"},
                    y1:{position:"right", grid:{drawOnChartArea:false}}
                }
            }}/>
        </>
    )
}