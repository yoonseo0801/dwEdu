import { useState } from "react";

export default function Save() {
  const [inputName, setInputName] = useState("");
  const [savedName, setSavedName] = useState("");

  const handleChange = (e) => {
    setInputName(e.target.value);
  };

  const handleClick = () => {
    setSavedName(inputName);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <br/>
      <input
        type="text"
        value={inputName}
        onChange={handleChange}
        placeholder="이름을 입력하세요"
      />
      <button onClick={handleClick} style={{ marginLeft: "10px" , marginBottom:20}}>
        이름 저장
      </button>
      {savedName && <p style={{fontWeight:"bold"}}> 당신의 이름은 {savedName}입니다.</p>}
    </div>
  );
}