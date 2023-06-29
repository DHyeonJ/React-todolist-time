import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  const todo = todos.filter((todo) => todo.id === id)[0];
  console.log(todo);
  return (
    <div>
      <div
        style={{
          border: "1px solid gray",
          width: "120px",
          height: "120px",
          textAlign: "center",
          padding: "10px",
          margin: "10px",
        }}
      >
        {todo.id}
        <br />
        {todo.title}
        <br />
        {todo.content}
        <br />
        <button onClick={() => navigate("/")}>뒤로가기</button>
      </div>
    </div>
  );
};

export default Detail;
