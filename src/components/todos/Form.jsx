import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

const Form = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispath = useDispatch();

  return (
    <>
      <div>
        <h2>My Todo List</h2>
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
