import React, { useState } from "react"; // React를 임포트합니다.
import "@fortawesome/fontawesome-free/css/all.min.css";

const RatingStars = ({ setRating }) => {
  const [localRating, setLocalRating] = useState(0); // 상태 초기화

  // 사용자가 별점을 클릭했을 때 실행될 핸들러 함수
  const handleRating = (rate) => {
    setLocalRating(rate); // 로컬 상태 업데이트
    setRating(rate); // 상위 컴포넌트의 상태를 업데이트
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        // 변경: 'star' 변수를 '_'로 변경하여 사용하지 않는 변수임을 명시
        const ratingValue = index + 1; // 변경: 'index += 1'을 이 라인으로 변경
        return (
          <button
            type="button"
            key={ratingValue}
            className={
              ratingValue <= localRating ? "text-warning" : "text-muted"
            }
            onClick={() => handleRating(ratingValue)} // 변경: 'index' 대신 'ratingValue' 사용
            style={{ background: "none", border: "none", cursor: "pointer" }} // 추가: 커서 스타일 추가
          >
            <i
              className={
                ratingValue <= localRating ? "fas fa-star" : "far fa-star"
              }
            />
          </button>
        );
      })}
    </div>
  );
};

export default RatingStars;
