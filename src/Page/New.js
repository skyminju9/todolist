import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko"; // 한국어 로케일 임포트
import RatingStars from "../Component/RatingStars";
import TagInput from "../Component/TagInput";
import "../New.css";
registerLocale("ko", ko); // 한국어 로케일 등록

const New = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Once");
  const [memo, setMemo] = useState("");
  const [rating, setRating] = useState(0);
  const [tags, setTags] = useState([]);
  const [submittedData, setSubmittedData] = useState(null); // 제출된 데이터를 저장할 상태

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

    // 제출된 데이터를 상태에 저장
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
    // 취소 로직, 필요에 따라 구현
  };
  return (
    <div className="New">
      <div className="Header">
        <button onClick={handleCancel}>취소</button>
        <button onClick={handleSubmit}>완료</button>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <section className="Date">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            locale="ko" // 한국어 로케일 사용
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={1} // 시간 선택 간격을 1분으로 설정
            timeCaption="시간"
            dateFormat="MMMM d, yyyy h:mm aa" // 날짜와 시간 형식을 설정
          />
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

export default New;
