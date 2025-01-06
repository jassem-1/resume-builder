import React from "react";
import Navbar from "./Navbar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}

export default layout;
