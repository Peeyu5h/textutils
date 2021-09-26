import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpclick = ()=>{
        // console.log('Clicked');
        let newText = text.toUpperCase();
        setText(newText);
        // setText('You have clicked on the button');
        props.showAlert("Converted to Upper Case", "success");
    }

    const handleLowclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }

    const handleOnchange = (event)=>{
        // console.log('on change');
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    // text = 'newtext' Worng way to change the state
    // setText(newtext) Correct way to change the state

    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'?'#001c46':'white', color:props.mode === 'dark'?'white':'black' }} onChange={handleOnchange} id="mybox" rows="15"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowclick}>Convert to LowerCase</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p> {text.split(' ').length} words and {text.length} characters. </p>
            <p> {0.008 * text.split(' ').length} Minutes to read.</p>
            <h2>Preview:</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
