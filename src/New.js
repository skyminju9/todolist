import React from "react";
import RatingStars from "./RatingStars"; // RatingStars 컴포넌트를 임포트합니다.
import "@fortawesome/fontawesome-free/css/all.min.css";
const New = () => {
  return (
    <div>
      <header>Todo list 작성</header>
      <section>
        <input type="datetime-local" name="day" />
      </section>
      <section>
        <h4>할일</h4>
        <input type="text" placeholder="제목" />
      </section>
      <section>
        <h4>중요도</h4>
        <RatingStars /> {/* RatingStars 컴포넌트를 사용합니다. */}
      </section>
      <section>
        <label htmlFor="dropdownMenu">할일 유형</label>
        <select id="dropdownMenu" name="dropdownMenu">
          <option value="option1">한 번만</option>
          <option value="option2">반복 설정</option>
          <option value="option3">종료일 시 설정</option>
        </select>
      </section>
      <section>
        <h4>
          태그
          <i class="fas fa-tag"></i>
        </h4>
        <input type="text" name="tag" />
        <div>최근 태그:</div>
      </section>
      <section>
        <button type="submit">제출하기</button>
      </section>
    </div>
  );
};

export default New;
