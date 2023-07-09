import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dark() {
  // useState 초기값을 False로 주고 변경되는 값들을 적용시키기 위해 사용된다.
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  // checkbox 체크여부 변경되었는지 확인한다.
  const handleCheck = () => {
    setChecked(!checked);
  };
  return (
    <>
      {/* onChange함수를 통해 체크여부를 확인하고 value에 체크여부에 대한 true/false값을 불러온다. */}
      <input type="checkbox" onChange={handleCheck} value={checked} />
      <div>
        {/* 체크 여부에 따라 화이트/다크모드 구현 */}
        {!checked ? (
          <p>화이트모드!</p>
        ) : (
          <p style={{ background: "#000000", color: "#ffffff" }}>다크모드!</p>
        )}
      </div>
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
          width: "70px",
          height: "30px",
        }}
        onClick={() => navigate("/select")}
      >
        Select
      </button>
    </>
  );
}

export default Dark;
