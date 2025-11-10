

export default function ResultInfo(props){
    return(
        <>
            <div>
                <p>이름 - {props.Name}</p>
                <p>나이 - {props.Age}</p>
                <p>이메일 - {props.Email}</p>
            </div>
        </>
    )
}