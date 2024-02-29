import './../App.css';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ShowStar from '../componenets/ShowStar';

const Detail = () =>{
    /* dummy todo */ 
    const dummyTodo = 
    {   date: 1708487204189,
        name:"팀 회의",
        dropdownMenu: "한 번 만",
        time: "오후 9시",//toLocaleTimeString()
        tag:"학교",
        star: 3,
        memo: "줌, 늦으면 벌금 5천원"
    };

    //const year= new Date().getFullYear;
    const todoMonth = (dummyTodo)=>{
        return new Date(parseInt(dummyTodo.date)).getMonth()+1;
    }

    const todoDate = (dummyTodo) =>{
        return new Date(parseInt(dummyTodo.date)).getUTCDate();
    }
    
    const todoDay = (dummyTodo) =>{
        const day = ['일','월', '화', '수', '목', '금', '토'];
        return day[new Date(parseInt(dummyTodo.date)).getDay()];
    }
    
    const todoYear = (dummyTodo)=>{
        return new Date(parseInt(dummyTodo.date)).getFullYear();
    }

    const navigate = useNavigate();
    

    
    return (
        <div className='TodoDetail'>
            <section className = 'todo_date_wrapper'>
                <button className='close' onClick={navigate(-1)}>닫기</button>
                <div className='todo_date'>
                    {`${todoMonth(dummyTodo)}월 
                    ${todoDate(dummyTodo)}일
                    ${todoDay(dummyTodo)}요일`}
                </div>
                <div className='todo_year'>
                    {`${todoYear(dummyTodo)}년`}
                    </div>
            </section>
            <section className = "detail_button">
                <button class='btn_edit' onClick={()=>{navigate("/edit")}}>수정하기</button>
                <button class ='btn_delete' onClick={()=>alert("삭제하기")}>삭제하기</button>
            </section >
            <section className ='todo'>
                <div className='summary'>
                    <div >{dummyTodo.name}</div>
                    <div> {dummyTodo.tag} </div>
                    <ShowStar number={dummyTodo.star}/>
                </div>
                <div >{dummyTodo.dropdownMenu}</div>
                <div>{dummyTodo.time}</div>
            </section>
            <section className="memo-wrapper">
                <div className = "memo-title">메모</div>
                <div className='detail-memo'>{dummyTodo.memo}</div>
            </section>
        </div>
    );
}

export default Detail