import React,{useState} from "react";

function Total(){

    const [values, setValues] = useState({a:0,b:0,c:0});

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setValues((prev)=>({
            ...prev,
            [name] : Number(value),
        }));
    };

    //총점 처리
    const total = values.a + values.b + values.c; 
    //평균 처리
    const average = total/3;
    let pass = "";

     if (values.a !== 0 || values.b !== 0 || values.c !== 0) {
        if (average >= 60){
            pass = "합격";
        } else {
            pass = "불합격";
        }
    }
    

    return(
        <div>
            <h2>합계 계산기</h2>
            <div>
                <label htmlFor="">국어 : </label>
                <input type="number" value={values.a} onChange={handleChange} name="a" onClick={handleChange}/>
            </div>
            <div>
                <label htmlFor="">영어 : </label>
                <input type="number" value={values.b} onChange={handleChange} name="b" onClick={handleChange}/>
            </div>
            <div>
                <label htmlFor="">수학 : </label>
                <input type="number" value={values.c} onChange={handleChange} name="c" onClick={handleChange}/>
            </div>
            <h3> 총합 : {total} </h3>
            <h3> 평균 : {average.toFixed(1)} </h3>
            <h3> 패스여부 : {pass} </h3>

        </div>
    )

    
}

export default Total;