import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { ReactComponent as ExpandMore } from "../assets/expand_more.svg";
import { useState } from "react";
import { BottomBar } from "../component/Bottombar";

const recentSearchData = [
  "코딩테스트",
  "유산소 운동",
  "프로젝트 회의",
  "저녁 약속",
  "졸업식 참석",
];

const dummySearchData = [
  {
    title: "운동",
  },
];

const SearchPage = () => {
  const [isData, setIsData] = useState(false);

  return (
    <div className="SearchPage">
      <div className="top_bar">
        <SearchIcon
          width="24px"
          height="24px"
          fill="#5A5A5A"
          className="search_icon"
          onClick={() => {
            alert("검색");
          }}
        />

        <input type="text" placeholder="검색" />
      </div>
      <div className="body_content">
        <h6>최근 검색어</h6>
        <div className="recent_search">
          {recentSearchData.map((it, idx) => (
            <div className="recent_search_list" key={idx}>
              {it}
            </div>
          ))}
        </div>
        <div className="search_data">
          <div className="search_top">
            <h6>검색 결과</h6>
            <div
              onClick={() => {
                alert("설정");
              }}
              className="sort_control"
            >
              <h6>최근순</h6>
              <ExpandMore width="18px" height="18px" />
            </div>
          </div>
          <article className="search_main">
            <div>검색결과가 없어요 😅</div>
          </article>
          <div className="bottom_bar">
            <BottomBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
