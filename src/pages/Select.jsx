import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Select() {
  // 변수에 select에 들어갈 값들을 저장한다.
  const selectList = ["선택하세요", "검은색바지", "파란색바지", "빨간색바지"];
  // 선택한 값에 따라 값이 변경되어야하니까 useState를 사용함.
  const [Selected, setSelected] = useState("");
  const navigate = useNavigate();
  // 변경된 값들을 실제로 화면에 보여주기 위해 setSelected에다 입력한 값들을 불러온다.
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  return (
    <div>
      {/* 선택한 값이 value에 들어가고 onChange함수를 통해 값들이 바뀔 수 있도록 한다. */}
      <select onChange={handleSelect} value={Selected}>
        {/* 위에 배열값을 map으로 돌리고 Options를 통해 key는 warning방지 value는 map으로 돌린 값들 가져온다. */}
        {selectList.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <hr />
      <p>
        Selected: <b>{Selected}</b>
      </p>
      <button
        style={{
          marginTop: "20px",
          width: "70px",
          height: "30px",
        }}
        onClick={() => navigate("/")}
      >
        TodoList
      </button>
      <button
        style={{
          marginTop: "20px",
          width: "90px",
          height: "30px",
        }}
        onClick={() => navigate("/dark")}
      >
        Dark Mode
      </button>
    </div>
  );
}

export default Select;
