

export default function ScheduleForm({time, text, setTime, setText, onAdd}){
    return(
        <div style={{display:"grid", gap : 8, gridTemplateColumns:"140px 1fr auto"}}>
            <input type="date" value={time} onChange={(e)=>setTime(e.target.value)}/>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="내용입력"/>
            <button onClick={onAdd}>등록</button>
        </div>
    )
}