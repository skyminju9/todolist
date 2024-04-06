// TodoCard.js
import { useNavigate } from "react-router-dom";
import React from "react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

const TodoCard = ({ title, stars, time, content, tag, status }) => {
  const renderStars = () => {
    return Array.from({ length: stars }, (_, index) => (
      <StarBorderOutlinedIcon key={index} fontSize="" />
    ));
  };

  const navigate = useNavigate();

  const handleNewClick = () => {
    navigate("/new");
  };

  return (
    <div
      onClick={handleNewClick}
      className={`todo_timeline_card${status ? `_${status}` : ""}`}
    >
      <div className={`todo_timeline_card_head${status ? `_${status}` : ""}`}>
        <div
          className={`todo_timeline_card_title${status ? `_${status}` : ""}`}
        >
          {title}
        </div>
        <div className={`todo_timeline_card_star${status ? `_${status}` : ""}`}>
          {renderStars()}
        </div>
        <div className={`todo_timeline_card_time${status ? `_${status}` : ""}`}>
          {time}
        </div>
      </div>
      <div className={`todo_timeline_card_bottom${status ? `_${status}` : ""}`}>
        <p
          className={`todo_timeline_card_content${status ? `_${status}` : ""}`}
        >
          {content}
        </p>
        <div className={`todo_timeline_card_tag${status ? `_${status}` : ""}`}>
          <span
            className={`todo_timeline_card_tag_text${
              status ? `_${status}` : ""
            }`}
          >
            {tag}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
