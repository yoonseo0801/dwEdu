import {useState,useEffect} from "react";
import BarChartCard from "./BarChartCard"


export default function ExpendListInput(){
    const [money, setMoney] = useState("");
    const [detail,setDetail] = useState("");
    const [day, setDay] = useState("");
    const [expendList,setExpendList] = useState([]);
    const [showChart, setShowChart] = useState(false);
    const [chartData, setChartData] = useState(null); // 막대 차트 컴포넌트에 보낼꺼!

    useEffect(()=>{
      const jsonData = localStorage.getItem("expendList");
      if(jsonData){
        setExpendList(JSON.parse(jsonData))
      }
    },[] );

    const addList = () => {
      if(!money || !day){
        alert("금액과 날짜는 반드시 입력"); return;
      }

      const newItem = {
        id:Date.now(),money:Number(money), detail, day
      };
      setExpendList((p) => {
        const newData = [...p,newItem]
        // 금액, 내용, 날씨 로컬스토리지에 저장
        localStorage.setItem("expendList",JSON.stringify(newData) );
        return newData;
      });
      setMoney(0);
      setDetail("");
      console.log(expendList);
    }

    //차트버튼을 클릭하면 동작할 함수
    const chartActive = () => {
        if(expendList.length === 0){
            alert("등록된 내역이 없다!")
            return;
        }

        //날짜별 지출 총 금액을 막대 그래프로 표현
        const totalByDate = expendList.reduce((a,c) => { 
          if(!a[c.day]) a[c.day] = 0;
          a[c.day] += c.money;
          return a; // "2025-11-09" : 150000

        },{} );



        const labels = Object.keys(totalByDate).sort();
        const data = labels.map ((d) => totalByDate[d]);
        const label = "날짜별 지출 합계";

        setChartData({labels,data,label});

        setShowChart(true);
    }

    return(
            <div style={{width:800}}>
              <div style={{backgroundColor:"#FFD9EC", width:300, padding:10, margin:50}}>
                금액 : <input type="number" value={money} onChange={(e)=> setMoney(e.target.value)}/><br/>
                내용 : <input type="text" value={detail} onChange={(e)=> setDetail(e.target.value)}/><br/>
                날짜 : <input type="date" value={day} onChange={(e)=> setDay(e.target.value)}/><br/>
                <button onClick={addList} style={{backgroundColor:"#FFB2D9", padding:5,width:100,borderRadius:5, marginTop:5}}>등록</button>
              </div>
        
              {
                showChart ? 
                <BarChartCard labels={chartData.labels} data={chartData.data} label={chartData.label} expendList={expendList}/> :
                <button onClick={chartActive} 
                 style={{float:"right", position:"absolute", top:200, padding:20, backgroundColor: "#F361A6", borderRadius:5, color:"white", fontWeight:"bold"}}>차트</button>
                
                }
            </div>
    )
}

/* 
  num = [1,2,3,4,5]  1부터 5까지 총합 1-5까지 총합을 구할 때 0+1=1 +2=3 +3=9 +4=13 +5=18 a(처음은 초기값, 그다음부터는 누적값, c는 더해야 할 값)
  num.reduce ( (a,c) => {
    a+=c;
    return a;
    })

*/