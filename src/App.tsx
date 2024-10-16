import React from "react";
import Content from "./layout/content/Content";
import Main from "./layout/main/Main";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-around p-3 lg:p-10 transform transition-all">
      <Content />
      <Main />
    </div>
  );
}

export default App;
