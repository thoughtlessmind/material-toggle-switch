import React, { useEffect, useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import "./styles.css";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [toggleState, setToggleState] = useState(true);



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



  useEffect(() => console.log("loading state", loading), [loading]);

  return (
    <div className="App" style={{ height: "100vh" }}>
      <h1 className="heading">Toggle switch with loading animation inside</h1>
      <div className='container'>
        <ToggleSwitch loading={loading} onChange={fn1} checked={toggleState} />
        <div style={{ textAlign: "left" }}>
          <h4>Loading state: {`${loading}`}</h4>
          <h4>Checked: {`${toggleState}`}</h4>
        </div>
      </div>
    </div>
  );
}
