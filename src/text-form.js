import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    // console.log("text is changing")
    setText(event.target.value);
  };
  const upper = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    // console.log("Changed to uppercase" +text)
    props.showAlert("Text converted to Upper-case","success")
  };
  const lower = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Text converted to lower-case","success")

  };
  const clear = () => {
    setText("");
    props.showAlert("Text removed","success")

  };
  const handleExtraSpace = () => {
    let newt = text.split(/[ ]+/);
    setText(newt.join(" "));
    props.showAlert("Extra spaces removed from the text","success")

  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text is copied to the clipboard","success")

  };
  //   const handlePast=()=>{
  //     let x=navigator.clipboard.readText
  //     setText(x)
  //   }
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.head}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleChange}
            cols="100"
            rows="10"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "# 144677",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={upper}
          style={{ color: props.mode === "light" ? "black" : "white" }}
          disabled={text.length===0}
        >
          Uppercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={lower}
          style={{ color: props.mode === "light" ? "black" : "white" }}
          disabled={text.length===0}
          >
          Lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={clear}
          style={{ color: props.mode === "light" ? "black" : "white" }}
          disabled={text.length===0}
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpace}
          style={{ color: props.mode === "light" ? "black" : "white" }}
          disabled={text.length===0}

        >
          Remove extra space
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
          style={{ color: props.mode === "light" ? "black" : "white" }}
          disabled={text.length===0}

        >
          Copy Text
        </button>
        {/* <button className="btn btn-primary mx-1 my-1" onClick={handlePast}> Past Text</button> */}
        <hr />
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Text Description</h1>
        <p>
          <strong>
            Number of words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} | Number of
            charachters: {text.length}
          </strong>
        </p>
        <hr />
        <h6>
          Time required to read: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length * 0.811}{" "}
          minutes
        </h6>
        <hr />
        <h3>Preview</h3>
        <h6>
          <p>{text.length > 0 ? text : "Enter somthing to preview it here"}</p>
        </h6>
        <hr />
      </div>
    </>
  );
}

TextForm.defaultProps = {
  head: "Enter the text below",
};
TextForm.propTypes = {
  head: PropTypes.string,
};
