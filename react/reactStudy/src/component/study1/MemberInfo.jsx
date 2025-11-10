

export default function MemberInfo({user : {useId, age}}){
    return(
        <>
            아이디 : {useId}<br/>
            나이 : {age}
        </>
    )
}