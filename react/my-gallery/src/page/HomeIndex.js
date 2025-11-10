import img1 from "../img/exhibition-hall1.jpg";
import img2 from "../img/exhibition-hall2.jpg";

export default function HomeIndex(){
    return (
        <div className="imgBox">
            <img src={img1} alt="이미지1" className="image"/>
            <img src={img2} alt="이미지2" className="image"/>
        </div>
    )
}