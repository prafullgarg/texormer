import React from "react";

export default function About(props) {
  const mode = {
    color: props.mode === "light" ? "black" : "white",
    backgroundColor: props.mode === "light" ? "white" : "#2C3639",
  };
  return (
    <div className="container" style={mode}>
      <h2>About Texomer</h2>
      <p>
        This is an web application which provides functionalities to transform
        text and return text related information.
      </p>
      <div className="accordion" id="accordionExample" style={mode}>
        <div className="accordion-item" style={mode}>
          <h2 className="accordion-header" id="headingOne" style={mode}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mode}
            >
              Upper
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={mode}
          >
            <div className="accordion-body" style={mode}>
              Upper button converts text to upper-case.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mode}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mode}
            >
              Lower
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={mode}
          >
            <div className="accordion-body" style={mode}>
              Lower button converts text to lower-case.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mode}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mode}
            >
              Clear
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={mode}
          >
            <div className="accordion-body" style={mode}>
              Clear button removes the written text.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
