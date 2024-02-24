import React, { useState, useEffect } from "react";

const TagInput = () => {
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState("");

  // 컴포넌트가 마운트될 때 로컬 스토리지에서 태그를 로드합니다.
  useEffect(() => {
    const loadedTags = JSON.parse(localStorage.getItem("tags")) || [];
    setTags(loadedTags);
  }, []);

  // 태그를 로컬 스토리지에 저장하는 함수
  const saveTags = (newTags) => {
    localStorage.setItem("tags", JSON.stringify(newTags));
  };

  const addTag = (tag) => {
    const newTags = [...tags, tag].slice(-5); // 최근 5개 태그만 유지
    setTags(newTags);
    saveTags(newTags);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // 입력값이 없으면 추가하지 않음
    addTag(input.trim());
    setInput(""); // 입력 필드 초기화
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="태그 추가..."
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>
            <i className="fas fa-tag"></i>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagInput;
