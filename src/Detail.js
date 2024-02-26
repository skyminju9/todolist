import './App.css';


const Detail = () =>{
    /* dummy todo */ 
    const dummyTodo = 
    {   date: 1708487204189,
        name:"팀 회의",
        dropdownMenu: "한 번 만",
        time: "오후 9시",//toLocaleTimeString()
        tag:"학교",
        star: 5,
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
    
    return (
        <div className='TodoDetail'>
            <section className = 'todo_date_wrapper'>
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
                <button onClick={()=>alert("수정하기")}>수정하기</button>
                <button onClick={()=>alert("삭제하기")}>삭제하기</button>
            </section >
            <section className ='todo'>
                <div >{dummyTodo.name}</div>
                <div> {dummyTodo.tag} </div>
                <div>{dummyTodo.star}</div>
                {/* ratingstar 참고할 예정 */}
                <div >{dummyTodo.dropdownMenu}</div>
                <div>{dummyTodo.time}</div>
                
            </section>
            <section className="todo-memo">메모
                <div className='detail-memo'>{dummyTodo.memo}</div>
            </section>
        </div>
    );
}

export default Detail