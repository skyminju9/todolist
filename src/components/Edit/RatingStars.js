import React, { useState } from "react"; // React를 임포트합니다.
import Star from "@mui/icons-material/Star";
import StarBorder from "@mui/icons-material/StarBorder";
// 별점을 설정하는 컴포넌트
const RatingStars = ({ setRating }) => {
  const [localRating, setLocalRating] = useState(0);

  const handleRating = (rate) => {
    setLocalRating(rate);
    setRating(rate);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <button
            type="button"
            key={ratingValue}
            onClick={() => handleRating(ratingValue)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            {ratingValue <= localRating ? (
              <Star color="warning" />
            ) : (
              <StarBorder color="disabled" />
            )}
          </button>
        );
      })}
    </div>
  );
};

// 별점을 단순히 표시하는 컴포넌트
const DisplayStars = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <span key={ratingValue}>
            {ratingValue <= rating ? (
              <Star color="warning" />
            ) : (
              <StarBorder color="disabled" />
            )}
          </span>
        );
      })}
    </div>
  );
};

export { RatingStars, DisplayStars };
