import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispath = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div style={{ display: "flex" }}>
        <h2>My Todo List</h2>
        <button
          style={{
            marginTop: "20px",
            marginLeft: "10px",
            width: "100px",
            height: "30px",
          }}
          onClick={() => navigate("/select")}
        >
          Select Page
        </button>
        <button
          style={{
            marginTop: "20px",
            marginLeft: "10px",
            width: "100px",
            height: "30px",
          }}
          onClick={() => navigate("/dark")}
        >
          Dark Mode
        </button>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          dispath({
            type: "ADD_TODO",
            payload: {
              id: shortid.generate(),
              title,
              content,
              isDone: false,
            },
          });

          setTitle("");
          setContent("");
        }}
      >
        <label>제목 : </label>
        <input
          type="text"
          value={title}
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        &nbsp;<label>내용 : </label>
        <input
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          required
        ></input>
        <button>추가</button>
      </form>
    </>
  );
};

export default Form;
