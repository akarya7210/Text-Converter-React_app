import React, { useState } from 'react'

export default function Textarea(props) {
    const uppercase = () => {
        let capital = text.toUpperCase();
        newText(capital);
        props.createAlert('Coverted to upperCase!')
    }
    const lowercase = () => {
        let capital = text.toLowerCase();
        newText(capital);
        props.createAlert('Coverted to lowerCase!')
    }
    const copy = () => {
        let copy = document.getElementById('myBox');
        copy.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text);
        props.createAlert('Text copy to clipboard!')
    }
    const clear = () => {
        let clear = "";
        newText(clear);
    }
    const onChange = (event) => {
        newText(event.target.value)
    }
    const [text, newText] = useState("");
    return (
        <>
            <div className='my-3'>
                <div className="mb-3 container" style={{ color: props.mode === 'dark' ? '#fff' : 'black' }}>
                    <h2>{props.heading}</h2>
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? "#fff" : '#686d73', color: props.mode === 'dark' ? '#fff' : 'black' }} id="myBox" value={text} onChange={onChange} rows="6"></textarea>
                    <button disabled ={text.length ===0} className={`btn btn-${props.mode === 'dark' ? 'primary' : 'dark'} mx-1 my-3`} onClick={uppercase}>Uppercase</button>
                    <button disabled ={text.length ===0} className={`btn btn-${props.mode === 'dark' ? 'primary' : 'dark'} mx-1`} onClick={lowercase}>Lowercase</button>
                    <button disabled ={text.length ===0} className={`btn btn-${props.mode === 'dark' ? 'primary' : 'dark'} mx-1`} onClick={copy}>Copy Text</button>
                    <button disabled ={text.length ===0} className={`btn btn-${props.mode === 'dark' ? 'primary' : 'dark'} mx-1`} onClick={clear}>Clear Text</button>
                </div>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? '#fff' : 'black' }}>
                <h2>Your text Summary</h2>
                <p><b>{text.split(" ").filter((element)=>{return element!=0}).length} words and {text.length} characters</b></p>
                <p><b>{0.008 * text.split(" ").filter((element)=>{return element!=0}).length} min to read this</b></p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter a text to preview here"}</p>
            </div>
        </>
    )
}
