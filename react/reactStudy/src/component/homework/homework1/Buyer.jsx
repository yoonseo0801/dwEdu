import {useState} from "react";
import CartList from "./CartList";
import ProductForm from "./ProductForm";
import {Link, Routes, Route} from "react-router-dom";

export default function Buyer (){
    // const [product, setProduct] = useState("");
    // const [price, setPrice] = useState(0);
    const [cart, setCart] = useState([]);

    const addCart = (item) => {
        setCart( (p) => [...p, {id:Date.now(), ...item } ] );
    };
    // const add = (item) =>{
    //     // if(!product || !price ) return;
    //     // const newItem = {id : Date.now(), product, price};
    //     setCart( (p) => [...p, {id:Date.now(), ...item}/* newItem */]/* .sort((a,b) => a.product.localeCompare(b.product) ) */ );
    //     // setProduct(""); setPrice("");
    //     console.log(cart);
    // };

    const removeCart = (id) => { // 배열의 값을 제거하는 방법중에 하나 filter
        setCart( (p) => p.filter((i)=> i.id !==id));
    };

    return(
        <>
            <Link to="/" className="home">HOME</Link>

            <h1>상품등록 & 장바구니</h1>
            <Link to="/buyer/form" style={{marginRight:50}}>입력</Link>
            <Link to="/buyer/list">출력</Link>

            <Routes>
                <Route path="/form" element={<ProductForm /* product={product} price={price} setPrice={setPrice} setProduct={setProduct}  */add={addCart}/>}/>
                <Route path="/list" element={<CartList cart={cart} onRemove={removeCart}/>}/>
            </Routes>

        </>
    )
}