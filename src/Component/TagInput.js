import React, { useState, useEffect } from "react";

const TagInput = ({ tags, setTags }) => {
  const [inputTag, setInputTag] = useState("");
  const [tagHistory, setTagHistory] = useState([]);

  // 컴포넌트 마운트 시 로컬 스토리지에서 태그 히스토리 로드
  useEffect(() => {
    const loadedHistory = JSON.parse(localStorage.getItem("tagHistory")) || [];
    setTagHistory(loadedHistory);
  }, []);

  const handleAddTag = () => {
    if (!inputTag.trim()) return;

    if (!tags.includes(inputTag)) {
      setTags((prevTags) => [...prevTags, inputTag]);
    }

    // 태그 히스토리 업데이트 (중복 제거 및 최근 5개 유지)
    const updatedHistory = [...new Set([inputTag, ...tagHistory])].slice(0, 5);
    setTagHistory(updatedHistory);

    setInputTag("");
  };

  // 태그 히스토리가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    // tagHistory가 비어 있지 않은 경우에만 로컬 스토리지에 저장
    if (tagHistory.length > 0) {
      localStorage.setItem("tagHistory", JSON.stringify(tagHistory));
    }
  }, [tagHistory]);
  const handleSelectTag = (selectedTag) => {
    setInputTag(selectedTag);
  };

  return (
    <div>
      <input
        type="text"
        value={inputTag}
        onChange={(e) => setInputTag(e.target.value)}
        placeholder="태그를 입력하세요"
      />
      <button type="button" onClick={handleAddTag}>
        태그 추가
      </button>
      <div>
        <h4>현재 태그:</h4>
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>최근 태그:</h4>
        <ul>
          {tagHistory.map((tag, index) => (
            <li
              key={index}
              onClick={() => handleSelectTag(tag)}
              style={{ cursor: "pointer" }}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TagInput;
