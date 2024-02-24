import React from "react";
import RatingStars from "../Component/RatingStars"; // RatingStars 컴포넌트를 임포트합니다.
import TagInput from "../Component/TagInput";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../New.css";
const New = () => {
  return (
    <div className="New">
      <header>Todo list 작성</header>
      <section className="Date">
        <input type="datetime-local" name="day" />
      </section>
      <section className="Title">
        <h4>할일</h4>
        <input type="text" placeholder="제목" />
      </section>
      <section className="Rating">
        <h4>중요도</h4>
        <RatingStars /> {/* RatingStars 컴포넌트를 사용합니다. */}
      </section>
      <section className="Category">
        <label>할일 유형</label>
        <select className="Selection">
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
        <TagInput /> {/* TagInput 컴포넌트 사용 */}
      </section>
      <section className="Memo">
        <h4>메모</h4>
        <input type="text" name="memo" placeholder="메모를 입력하세요" />
      </section>
      <section className="Submit">
        <button type="submit">제출하기</button>
      </section>
    </div>
  );
};

export default New;
