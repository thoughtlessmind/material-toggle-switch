import React, { useEffect, useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [toggleState, setToggleState] = useState(true);

  const clickHandler = () => {
    setLoading(!loading);
    setTimeout(() => {
      setLoading(!loading);
    }, 2000);
  };

  const a = () => {
    setToggleState(!toggleState);
  };

  const fn1 = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // setToggleState(true)
      a();
    }, 2000);
  };

  const getCall = () => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      setLoading(false);
      console.log(res.data);
    });
  };

  useEffect(() => console.log("loading state", loading), [loading]);

  return (
    <div className="App" style={{ height: "100vh" }}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div style={{margin: '20px 40%'}}>
        <ToggleSwitch loading={loading} onChange={fn1} checked={toggleState} />
        <div style={{ textAlign: "left" }}>
          <h4>Loading state: {`${loading}`}</h4>
          <h4>Checked: {`${toggleState}`}</h4>
        </div>
      </div>
    </div>
  );
}
