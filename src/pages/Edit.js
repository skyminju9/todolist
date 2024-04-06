import React, { useState } from "react";
import { RatingStars } from "../components/Edit/RatingStars";
import TagInput from "../components/Edit/TagInput";
import "../css/Edit.css";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Once");
  const [memo, setMemo] = useState("");
  const [rating, setRating] = useState(0);
  const [tags, setTags] = useState([]);
  const [submittedData, setSubmittedData] = useState(null); // 제출된 데이터를 저장할 상태

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      day: startDate,
      title,
      rating,
      category,
      tags,
      memo,
    };

    console.log(data);

    // 제출된 데이터를 상태에 저장, "여기서 로컬로 저장"
    setSubmittedData(data);

    // 필드 초기화
    setStartDate(new Date());
    setTitle("");
    setRating(0);
    setCategory("Once");
    setTags([]);
    setMemo("");
    console.log(submittedData);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="Edit">
      <div className="Header">
        <button onClick={handleCancel}>취소</button>
        <button onClick={handleSubmit}>완료</button>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <section className="Date">
          {/*기존 달력 데이터 활용할 것인지 차후 토의*/}
        </section>
        <section className="Title">
          <h4>할일</h4>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목"
            name="title"
          />{" "}
        </section>
        <section className="Rating">
          <h4>중요도</h4>
          <RatingStars setRating={setRating} />{" "}
          {/* RatingStars 컴포넌트를 사용합니다. */}
        </section>
        <section className="Category">
          <h4>할 일 유형</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="Selection"
            name="category"
          >
            <option value="Once">한 번만</option>
            <option value="Repeat">반복 설정</option>
            <option value="In the End">종료일 시 설정</option>
          </select>
        </section>
        <section className="Tag">
          <h4>
            태그
            <i className="fas fa-tag"></i>
          </h4>
          <TagInput tags={tags} setTags={setTags} />
        </section>
        <section className="Memo">
          <h4>메모</h4>
          <input
            type="text"
            value={memo}
            className="memo"
            onChange={(e) => setMemo(e.target.value)}
          />
        </section>
      </form>
    </div>
  );
};

export default Edit;
