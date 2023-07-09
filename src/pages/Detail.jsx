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
          width: "200px",
          height: "150px",
          padding: "10px",
          margin: "10px",
        }}
      >
        <span>shortID : {todo.id}</span>
        <br />
        <span>제목 : {todo.title}</span>
        <br />
        <span>내용 : {todo.body}</span>
        <br />
        <span>좋아요 : {todo.like} </span>
        <br />
        <button onClick={() => navigate("/")}>뒤로가기</button>
      </div>
    </div>
  );
};

export default Detail;
