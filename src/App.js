import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [type, setType] = useState("password")
  const [toggle, setToggle] = useState(true)
  return (
    <>
      <div id="container">
        <div class="passInput"><span>Password:</span><input type={type} /></div>
        <div class="icon" onClick={() => {
          setToggle(!toggle);
          (toggle) ? setType("text") : setType("password")
        }}>{toggle ? <img src={"./eye_icon.png"} /> : <img src={"./eye_close.png"} />}</div>
      </div>
    </>
  );
}
