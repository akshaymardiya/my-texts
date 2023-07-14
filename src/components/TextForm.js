import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnchange = (e) => {
    setText(e.target.value);
  };

  const handleUpchange = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('success','Converted to UpperCase');
  };
  const handleLowchange = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('success','Converted to LowerCase');
  };
  const handleClearchange = () => {
    setText("");
    props.showAlert('success','Text Clear Successfully');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('success','Text Copy Successfully');
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ");
    setText(newText);
    props.showAlert('success','Extra Spaces Remove Successfully');
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="textbox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpchange}>
          Convert to Upper-Case
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowchange}>
          Convert to Lower-Case
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-danger mx-1 my-1 float-end"
          onClick={handleClearchange}
        >
          Clear
        </button>
      </div>
      <div className="container my-4">
        <h1>Your Text Summery</h1>
        <p>
          <b>{text.split(" ").filter((element)=>{return element.length!==0})}</b> words and <b>{text.length}</b>{" "}
          characters
        </p>
        <p>
          <b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minutes read
        </p>

        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
