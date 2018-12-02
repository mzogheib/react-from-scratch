import React from "react";
import ReactDOM from "react-dom";
import './style.scss';

const Index = () => {
  return <div className='my-class'>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
