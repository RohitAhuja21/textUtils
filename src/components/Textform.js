import React, {useState} from 'react'

export default function Textform(props) {
    const [text,setText] = useState('');
    const handleUpClick = ()=>{
        
        let newtext = text.toUpperCase();
        setText(newtext);
       {props.showAlert(' UPPER CASING OF SENTENCE WAS DONE','success')};
    }

    const handleLowClick = ()=>{
        setText(text.toLowerCase());
        {props.showAlert(' lower casing of sentence was done','success')};
    }
    const handleOnChange = (event)=>{
      
        setText(event.target.value);
    }
    const handleClearClick = ()=>{
        console.log("Clear was Clicked");
        setText("");
        {props.showAlert("Text was cleared",'success')}

    }
    const handleCopy = ()=>{
        var text = document.getElementById('textArea');
        text.select();
        navigator.clipboard.writeText(text.value);
        {props.showAlert('Copied to clipboard','success')}
    }
    return (
        <>
        <div className='mb-3 container' style={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading} </h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'#e7e7e7':'grey',color:props.mode==='light'?'black':'white'}} id="textArea" rows="8"></textarea>
        <button className={`btn btn-primary mt-3 mx-1`} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className={`btn btn-primary mt-3 mx-1`} onClick={handleLowClick}>Convert to lowercase</button>
        <button className={`btn btn-primary mt-3 mx-1`} onClick={handleClearClick}>clear</button>
        <button className={`btn btn-primary mt-3 mx-1`} onClick={handleCopy}>Copy</button>
       
        </div>
        <div className='container' style={{color:props.mode==='light'?'black':'white'}} >
            <h2>Your text summary</h2>
            <p>{text.split(' ').length} words and {text.length} character</p>
            <p>{0.008 * text.split(' ').length} minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length===0?'Enter your text in textbox above to preview it':text}</p>
        </div>
        </>
    )
}
