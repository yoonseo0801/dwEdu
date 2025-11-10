

export default function Boardview(props){
    return(
        <>
            <div>
                <p>제목 - {props.Title}</p>
                <p>내용 - {props.Content}</p>
                <p>작성자 - {props.Author}</p>
                <p>패스워드 - {props.Password}</p>
            </div>
        </>
    )
}

