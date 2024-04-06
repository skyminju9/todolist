import Icon from "../components/Icon";
import "../css/Icon.css";

import { ReactComponent as SearchIcon } from "../assets/search.svg";
import { useEffect, useState } from "react";
import { TodoCard } from "../components/Search/TodoCard";

import "../css/SearchPage.css";

const sortOptionList = [
  { value: "lastest", name: "최신순" },
  { value: "name", name: "이름순" },
  { value: "bestest", name: "중요순" },
];

const dummySearchData = [
  {
    title: "운동",
    rating: "3",
    date: "1575529698",
    content: "1575529698",
    tag: "건강",
  },
  {
    title: "어깨운동",
    rating: "4",
    date: "1709276400",
    content: "1709276400",
    tag: "건강",
  },
  {
    title: "가슴운동",
    rating: "5",
    date: "1709265600",
    content: "1709265600",
    tag: "건강",
  },
  {
    title: "등운동",
    rating: "1",
    date: "1709274800",
    content: "1709274800",
    tag: "건강",
  },
  {
    title: "허벅지운동",
    rating: "2",
    date: "1709274000",
    content: "1709274000",
    tag: "건강",
  },
  {
    title: "이두운동",
    rating: "3",
    date: "1709273200",
    content: "1709273200",
    tag: "건강",
  },
  {
    title: "삼두운동",
    rating: "4",
    date: "1709272400",
    content: "1709272400",
    tag: "건강",
  },
];

const Search = () => {
  const [isData, setIsData] = useState(false);
  const [todoListData, setTodoListData] = useState([]);
  const [sortType, setSortType] = useState("lastest");
  const [recentSearchData, setRecentSearchData] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    const localSearchData = JSON.stringify(dummySearchData);
    window.localStorage.setItem("todolist", localSearchData);

    if (!window.localStorage.getItem("recentsearchdata")) {
      const localRecentSearchData = "[]";
      window.localStorage.setItem("recentsearchdata", localRecentSearchData);
    } else {
      setRecentSearchData(
        JSON.parse(window.localStorage.getItem("recentsearchdata"))
      );
    }
  }, []);

  // 정렬 방식 변경 시
  useEffect(() => {
    let sortedData = [];
    if (sortType === "lastest") {
      sortedData = [...todoListData].sort(
        (a, b) => parseInt(b.date) - parseInt(a.date)
      );
    } else if (sortType === "name") {
      sortedData = [...todoListData].sort((a, b) =>
        a.title < b.title ? -1 : 1
      );
    } else {
      sortedData = [...todoListData].sort(
        (a, b) => parseInt(b.rating) - parseInt(a.rating)
      );
    }

    setTodoListData(sortedData);
  }, [sortType]);

  //검색 핸들러
  const searchHandler = (data) => {
    setTodoListData([]);
    const result = JSON.parse(window.localStorage.getItem("todolist"));

    if (data && result) {
      result.map((it) =>
        it.title.search(data) >= 0
          ? setTodoListData((prevData) => [...prevData, it])
          : ""
      );
      recentSearchHandler(data);
      setIsData(true);
    } else {
      setIsData(false);
    }
  };

  //최근 검색 결과 핸들러
  const recentSearchHandler = (data) => {
    if (!recentSearchData.includes(data)) {
      const localsearchData = [data, ...recentSearchData].slice(0, 5);
      setRecentSearchData(localsearchData);
      window.localStorage.setItem(
        "recentsearchdata",
        JSON.stringify(localsearchData)
      );
    }
  };

  return (
    <div className="SearchPage">
      <div className="top_bar">
        <SearchIcon
          width="24px"
          height="24px"
          fill="#5A5A5A"
          className="search_icon"
          onClick={() => {
            searchHandler(searchData);
          }}
        />
        <input
          type="text"
          placeholder="검색"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
      </div>
      <div className="body_content">
        <h6>최근 검색어</h6>
        <div className="recent_search">
          {recentSearchData.map((it, idx) => (
            <div
              className="recent_search_list"
              key={idx}
              onClick={(e) => searchHandler(it)}
            >
              {it}
            </div>
          ))}
        </div>
        <div className="search_data">
          <div className="search_top">
            <h6>검색 결과</h6>
            <div className="sort_control">
              <select
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
              >
                {sortOptionList.map((it, idx) => (
                  <option value={it.value} key={idx}>
                    {it.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <article
            className={["search_main", `search_result_${isData}`].join(" ")}
          >
            {isData ? (
              <div>
                {todoListData.map((it, idx) => (
                  <TodoCard todoData={it} key={idx} />
                ))}
              </div>
            ) : (
              <div>검색결과가 없어요 😅</div>
            )}
          </article>
        </div>
      </div>
      <Icon />
    </div>
  );
};

export default Search;
