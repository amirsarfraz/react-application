import React, {useState} from "react";
function TextForm(props) {
    const [text, setText] = useState('Enter Text here');
    const handleUpClick =() =>{
        let newText = text.toLocaleUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const  handleUpClear = () =>{
        setText('');
    }
    const handleInClick = () =>{
        setText(text.toLocaleLowerCase());
    }
    return(
        <>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="3"></textarea>
        </div>
        <button className="btn btn-primary mb-13" onClick={handleUpClick}>Convert to uppercase</button><br /><br/>
        <button className="btn btn-primary" onClick={handleInClick}>Convert to lowercase</button><br /><br/>
        <br /><br/>
        <button className="btn btn-primary" onClick={handleUpClear}>Clear all text</button>

        <div className="container my-3">
        <h1>your text Summary</h1>
        <p>{text.split(" ").length} words and{text.length} character</p>
        <p>{0.008 * text.split("").length} Minutes read</p>
        <h3>preview</h3>
        <p>{text}</p>
        </div>
        </>

    );
}
export default TextForm;