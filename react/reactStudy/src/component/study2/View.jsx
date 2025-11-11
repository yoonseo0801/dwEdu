

export default function View(props){
    
    return (
        <>
            <h3>제목 : {props.board.title}</h3>
            <p>내용: {props.board.content}</p>
            

        </>
    )
}