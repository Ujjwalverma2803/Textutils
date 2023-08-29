import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Enter text here');

    // we cannot directly change the setText like text="new text" instead we will do like setText("New text")

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
        // setText("You have click on handleOnClick")
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLowClick = ()=>{
        console.log("Uppercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }
    const handleClearClick = ()=>{
        console.log("Clear was clicked"+text);
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared","success")
    }
    const handleCopy = ()=>{
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied To Clipboard","success")
    }
    const handleExtraspaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed","success")
    }
    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value);
    }
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <div>
        <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control" value ={text}onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="3"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>
      Convert to upper case
    </button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}>
      Convert to lower case
    </button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>
      Clear text
    </button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>
      Copy text
    </button>
<button className="btn btn-primary mx-1" onClick={handleExtraspaces}>
      Remove extra spaces
    </button>
    </div>
    </div>
    {/* my-4 is used to give margin between two containers in y direction in bootstrap higher the number higher is margin */}
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}> 
        <h1>Your text summary</h1>
        <p>
            {text.split(" ").length}  words and {text.length} characters
        </p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
            {text.length>0?text:"Enter something to preview"}
        </p>
    </div>
    </>
  )
}
