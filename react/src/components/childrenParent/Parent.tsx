import React from "react";

//! use typescript in components
const Parent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>This is the parent</h1>
      {children}
    </div>
  );
};

export default Parent;
