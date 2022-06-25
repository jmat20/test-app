import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Shrek");
  const [post, setPost] = useState("Shrek is love, Shrek is life");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangePost = (e) => {
    setPost(e.target.value);
  };
  return (
    <>
      <input type="text" placeholder="Post Here" onChange={handleChangePost} />
      <input
        type="text"
        placeholder="Change Username Here"
        onChange={handleChangeName}
      />

      <div className="post-container">
        <img src={require("./shrek-is-love.png")} />
        <div>{name} @Shrek007</div>
        <div>{post}</div>
      </div>
    </>
  );
}

export default App;
