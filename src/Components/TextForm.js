import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnChange = (event)=>{
       // console.log("Handle onChange");
        setText(event.target.value);
    }

    const convertUp =()=>{
       // console.log("Convert to uppercase was clicked");
        let newText =text.toUpperCase();
        setText(newText);
    }

    const convertLow =()=>{
      // console.log("Convert to lowercase was clicked");
       let newText =text.toLowerCase();
       setText(newText);
   }
   
   const clear =()=>{
    let newText ="";
    setText(newText);
   }

    const [text,setText] = useState('');
    let numberofWord = text.split(" ").length;
    let numberofCh = text.length - numberofWord +1;
    console.log(text[text.length-1])
    if (text[0] === undefined || text[text.length-1] === " ") {
      numberofWord = numberofWord-1;
      
    }
    //note that setText must be used to update text we can not update text directly
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <div className='container'>
      <div className="mb-3">
       <h1>{props.header}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#143d78':'white',color:props.mode==='dark'?'white':'black'}} id="TextForm" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-1" onClick = {convertUp}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2 my-1" onClick = {convertLow}>Convert to lowercase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={clear}>Clear</button>
</div>
<div className="container my-3">
  <h2>Your text summary</h2>
  <p>No. of words are {numberofWord} and no. of characters are {numberofCh}</p>
  <p>{0.008*numberofWord} minutes are required for an average person to read the given text.</p>
</div>
</div>
</>
  )
}
