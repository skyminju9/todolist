import { Rating } from "@mui/material";
import "../../css/TodoCard.css";

export const TodoCard = ({ todoData }) => {
  const dateChange = (date) => {
    const newDate = new Date(parseInt(todoData.date) * 1000);
    return newDate.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="TodoCard">
      <div className="todo-top">
        <div className="todo-top-left">
          <div className="todo-title">{todoData.title}</div>
          <div className="todo-rating">
            <Rating
              name="read-only"
              value={parseFloat(todoData.rating)}
              readOnly
              size="small"
            />
          </div>
        </div>
        <div className="todo-top-right">
          <div className="todo-date">{dateChange()}</div>
        </div>
      </div>
      <div className="todo-bottom">
        <div className="todo-content">{todoData.content}</div>
        <div className="todo-tag">
          <div className="todo-tag-text">{todoData.tag}</div>
        </div>
      </div>
    </div>
  );
};
