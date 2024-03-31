import React, { useState, useEffect } from "react";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined"; // Label 아이콘의 Outline 버전을 import

const TagInput = ({ tags, setTags }) => {
  const [inputTag, setInputTag] = useState("");
  const [tagHistory, setTagHistory] = useState([]);

  useEffect(() => {
    const loadedHistory = JSON.parse(localStorage.getItem("tagHistory")) || [];
    setTagHistory(loadedHistory);
  }, []);

  // 입력 필드에서 엔터 키를 누르면 태그를 추가하는 함수
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputTag.trim()) {
      e.preventDefault(); // 폼 제출 방지

      // 새 태그 추가 로직
      if (!tags.includes(inputTag)) {
        setTags([...tags, inputTag]);
      }

      const updatedHistory = [...new Set([inputTag, ...tagHistory])].slice(
        0,
        5
      );
      setTagHistory(updatedHistory);

      setInputTag(""); // 입력 필드 초기화
    }
  };

  useEffect(() => {
    if (tagHistory.length > 0) {
      localStorage.setItem("tagHistory", JSON.stringify(tagHistory));
    }
  }, [tagHistory]);

  const handleSelectTag = (selectedTag) => {
    setInputTag(selectedTag);
  };
  const TagItem = ({ tag, handleSelectTag }) => {
    return (
      <div className="list-item" onClick={() => handleSelectTag(tag)}>
        <LabelOutlinedIcon
          className="list-item-icon"
          style={{ fontSize: 60 }}
        />
        <span className="list-item-text">{tag}</span>
      </div>
    );
  };

  return (
    <div>
      <input
        type="text"
        value={inputTag}
        onChange={(e) => setInputTag(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="태그를 입력하세요(최대 2글자)"
        maxLength="2" // 최대 입력 가능한 문자 수를 2로 설정
      />
      {/* 현재 태그 리스트를 표시하는 부분 제거 */}
      <div>
        <div className="list-container">
          <h4>최근 태그:</h4>
          {tagHistory.map((tag, index) => (
            <TagItem key={index} tag={tag} handleSelectTag={handleSelectTag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagInput;
