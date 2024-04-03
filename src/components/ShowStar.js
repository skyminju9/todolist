import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';

const ShowStar = ({number}) =>{
    const star = Array.from({ length: number }, (_, index) => (
        <i class="fas fa-star" key={index} ></i>
    ));

    
    
    return (
        <div className="star-container">
            {/* 칠해진 아이콘을 먼저 렌더링합니다. */}
            {[...Array(number)].map((_, index) => (
                <i className="fas fa-star " key={index}></i>
            ))}
            {/* 테두리만 있는 아이콘을 렌더링합니다. */}
            {[...Array(5-number)].map((_, index) => (
                <i className="far fa-star " key={number + index}></i>
            ))}
        </div>
    );
}

export default ShowStar;