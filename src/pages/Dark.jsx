import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dark() {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheck = () => {
    setChecked(!checked);
  };
  return (
    <>
      <input type="checkbox" onChange={handleCheck} value={checked} />
      <div>
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
