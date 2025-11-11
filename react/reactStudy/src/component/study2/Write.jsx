

export default  function Write({board, setBoard}){

    return(
        <>
            제목 : <input type="text" value={board.title} onChange={(e) => setBoard((prev)=>({...prev,title:e.target.value}))}/>
            내용 입력창 : <textarea value={board.content} onChange={(e) => setBoard((prev) => ({...prev,content:e.target.value}))}/>
            
        </>
    )
}