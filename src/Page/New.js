import React, { useState } from "react";
import RatingStars from "../Component/RatingStars";
import TagInput from "../Component/TagInput";
import "../New.css";
const New = () => {
  const [day, setDay] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Once"); // 초기값 'Once'
  const [memo, setMemo] = useState("");
  const [rating, setRating] = useState(0); // 초기값 0
  const [tags, setTags] = useState([]); // 초기값 빈 배열

  // 폼 제출 핸들러
  const handleSubmit = (event) => {
    event.preventDefault(); // 폼의 기본 제출 동작 방지

    // 여기서 사용자 입력 데이터 처리 (예: 콘솔에 출력)
    console.log({
      day,
      title,
      rating,
      category,
      tags,
      memo,
    });

    // 필드 초기화
    setDay("");
    setTitle("");
    setRating(0);
    setCategory("Once");
    setTags([]);
    setMemo("");
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <header>Todo list 작성</header>
        <section className="Date">
          <input
            type="datetime-local"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            name="day"
          />{" "}
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
          <label htmlFor="category">할일 유형</label>
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
          <TagInput tags={tags} setTags={setTags} />{" "}
          {/* TagInput 컴포넌트 사용 */}
        </section>
        <section className="Memo">
          <h4>메모</h4>
          <input
            type="text"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="메모를 입력하세요"
            name="memo"
          />
        </section>
        <section className="Submit">
          <button type="submit">제출하기</button>
        </section>
      </form>
    </div>
  );
};

export default New;
