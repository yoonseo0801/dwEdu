import {useState} from "react";

export default function ProductForm({/* product, price, setPrice, setProduct,  */add}){
    const [name, setName] = useState ("");
    const [price, setPrice] = useState(0);

    const submit = (e) => {
        e.preventDefault();
        if(!name.trim() || !price) return; // 상품명과 가격이 입력되지 않았다면 실행노
        add ({name : name.trim(), price : price});
       console.log(name +"  "+ price);
        setName("");
        setPrice(0);
    };
    return(
        <>
            <form onSubmit={submit}>
                <br/>
                상품명 : <input type="text" value={name/* product */} onChange={((e) => setName(e.target.value))}/>&nbsp;
                가격 : <input type="number" value={price} onChange={((e) => setPrice(e.target.value))}/>&nbsp;
                <button>등록</button>
            </form>
        </>
    )
}