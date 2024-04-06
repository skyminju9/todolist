import React from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ShowStar from "../components/Detail/ShowStar";
import "../css/Detail.css";
/* dummy todo */

const Detail = ({ id }) => {
  const dummyTodo = [
    {
      id: 1,
      date: 1708487204189,
      name: "팀 회의",
      dropdownMenu: "한 번 만",
      time: "오후 9시", //toLocaleTimeString()
      tag: "학교",
      star: 4,
      memo: "줌, 늦으면 벌금 5천원",
    },
    {
      id: 2,
      date: 1708487204190,
      name: "운동",
      dropdownMenu: "매일",
      time: "오후 8시", //toLocaleTimeString()
      tag: "건강",
      star: 3,
      memo: "줌, 늦으면 벌금 5천원",
    },
    {
      id: 3,
      date: 1708487204191,
      name: "운동",
      dropdownMenu: "매일",
      time: "오후 8시", //toLocaleTimeString()
      tag: "건강",
      star: 5,
      memo: "줌, 늦으면 벌금 5천원",
    },
  ];
  //해당하는 item을 찾습니다.
  const targetTodo = dummyTodo.find((item) => item.id === id);

  //item의 월을 조회합니다.
  const todoMonth = () => {
    return new Date(parseInt(targetTodo.date)).getMonth() + 1;
  };

  //item의 날짜를 조회합니다.
  const todoDate = () => {
    return new Date(parseInt(targetTodo.date)).getUTCDate();
  };

  //item의 요일을 조회합니다.
  const todoDay = () => {
    const day = ["일", "월", "화", "수", "목", "금", "토"];
    return day[new Date(parseInt(targetTodo.date)).getDay()];
  };

  //item의 연도를 조회합니다.
  const todoYear = () => {
    return new Date(parseInt(targetTodo.date)).getFullYear();
  };

  const navigate = useNavigate();

  return (
    <div className="TodoDetail">
      <section className="todo_date_wrapper">
        <div className="header">
          <div className="closeWrapper">
            <button className="close" onClick={navigate(-1)}>
              닫기
            </button>
          </div>
          <div className="header_date">
            <div className="todo_date">
              {`${todoMonth()}월 
                        ${todoDate()}일
                        ${todoDay()}요일`}
            </div>
            <div className="todo_year">{`${todoYear()}년`}</div>
          </div>
        </div>
      </section>
      <section className="detail_button">
        <button
          class="btn_edit"
          onClick={() => {
            navigate("/Edit");
          }}
        >
          수정하기
        </button>
        <button class="btn_delete" onClick={() => alert("삭제하기")}>
          삭제하기
        </button>
      </section>
      <section className="todo">
        <div className="summary">
          <div>{targetTodo.name}</div>
          <div> {targetTodo.tag} </div>
          <ShowStar number={targetTodo.star} />
        </div>
        <div className="dropdownMenu">{targetTodo.dropdownMenu}</div>
        <div>{targetTodo.time}</div>
      </section>
      <section className="memo-wrapper">
        <div className="memo-title">메모</div>
        <div className="detail-memo">{targetTodo.memo}</div>
      </section>
    </div>
  );
};

export default Detail;
