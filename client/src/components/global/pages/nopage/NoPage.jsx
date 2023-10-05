import React from "react";

const NoPage = () => {
  return (
    <div className="container page nopage">
      <h1>"{window.location.pathname}" does not exist.</h1>
    </div>
  );
};

export default NoPage;
