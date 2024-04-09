"use client";
import React, { useEffect, useRef } from "react";

const UseRefExample = () => {
 
  return (
    <div className="useRefExample">
      <input ref={inputRef} type="text" placeholder="focus here" />
      <input ref={usernameInputRef} type="text" placeholder="username" />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};

export default UseRefExample;
