import React from"react";
import Child from './Child';

function Parent(props){
    return(
        <>
            <Child name="홍길동" birthday="2000-03-03" title="첫째(장남)" gender="남자"/>
            <Child name="홍미나" birthday="2002-06-13" title="둘째" gender="여자"/>
            
            
        </>
    );
}

export default Parent;