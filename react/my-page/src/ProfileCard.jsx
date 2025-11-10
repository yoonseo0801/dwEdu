

export default function ProfileCard(props){
    return(
        <div>
            <p>
                안녕하세요. 저는 {props.name}입니다.<br/>
                나이는 {props.age}살이고, 취미는 {props.hobby}입니다.
            </p>
        </div>
    )
}