"use client";
import React, { useEffect, useRef } from "react";

const UseRefExample = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const userNameInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('user name is :' + userNameInputRef.current?.value);

  }





  return (
    <div className="useRefExample">
      <input ref={inputRef} type="text" placeholder="focus here" />
      <input ref={userNameInputRef} type="text" placeholder="username" />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};

export default UseRefExample;
