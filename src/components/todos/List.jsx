import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const List = () => {
  const todos = useSelector((state) => {
    return state.todos;
  });

  const dispath = useDispatch();

  return (
    <div>
      <div>
        <h2>TodoList</h2>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo) => {
            console.log(todo);
            return (
              <div
                key={todo.id}
                style={{ border: "1px solid", padding: "10px", margin: "10px" }}
              >
                <Link to={`/${todo.id}`}>상세페이지</Link>
                <br />
                <span>shortID : {todo.id}</span>
                <br />
                <span>제목 : {todo.title}</span>
                <br />
                <span>내용 : {todo.body}</span>
                <br />
                <span>좋아요 : {todo.like} </span>
                <br />
                <button
                  onClick={() => {
                    dispath({
                      type: "SWITCH_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  완료
                </button>
                <button
                  onClick={() => {
                    dispath({
                      type: "DELETE_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    dispath({
                      type: "LIKE_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  좋아요
                </button>
              </div>
            );
          })}
      </div>
      <div>
        <h2>DoneList</h2>
        {todos
          .filter((todo) => todo.isDone !== false)
          .map((todo) => {
            return (
              <div
                key={todo.id}
                style={{ border: "1px solid", padding: "10px", margin: "10px" }}
              >
                <Link to={`/${todo.id}`}>상세페이지</Link>
                <br />
                <span>shortID : {todo.id}</span>
                <br />
                <span>제목 : {todo.title}</span>
                <br />
                <span>내용 : {todo.body}</span>
                <br />
                <span>좋아요 : {todo.like} </span>
                <br />
                {/* {todo.isDone.toString()} */}
                <br />
                <button
                  onClick={() => {
                    dispath({
                      type: "SWITCH_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  취소
                </button>
                <button
                  onClick={() => {
                    dispath({
                      type: "DELETE_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    dispath({
                      type: "LIKE_TODO",
                      payload: todo.id,
                    });
                  }}
                >
                  좋아요
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default List;
