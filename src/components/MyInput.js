import "../css/MyInput.css";

const MyInput = ({title, type, text, onChange}) => {
    return(
        <div className="input_box_component">
            <p>{title}</p>
            <input type={type} placeholder={text} onChange={onChange}/>
        </div>
    )
}

export default MyInput;