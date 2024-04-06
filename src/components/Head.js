import "../css/Head.css";

const Head = ({ text }) => {
  return (
    <div className="Head">
      {/* 헤더 부분입니다. TO DO 텍스트를 표시합니다. */}
      <div className="head_title">
        <h2 className="head_text">{text}</h2>
      </div>
    </div>
  );
};

export default Head;
