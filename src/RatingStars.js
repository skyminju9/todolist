import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // FontAwesome 아이콘을 사용하기 위해 추가

const RatingStars = () => {
  const [rating, setRating] = useState(0); // 사용자가 선택한 별의 수를 저장하는 상태

  const handleRating = (rate) => {
    setRating(rate); // 사용자가 클릭한 별의 수를 상태로 설정
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            key={index}
            className={index <= rating ? "text-warning" : "text-muted"}
            onClick={() => handleRating(index)}
            style={{ background: "none", border: "none" }}
          >
            <i className={index <= rating ? "fas fa-star" : "far fa-star"}></i>
          </button>
        );
      })}
    </div>
  );
};
export default RatingStars;
