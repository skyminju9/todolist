const MyInput = ({title, type, text}) => {
    return(
        <div className="input_box_component">
            <p>{title}</p>
            <input type={type} placeholder={text}/>
        </div>
    )
}

export default MyInput;