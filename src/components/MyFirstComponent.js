import React from "react";

const MyFirstComponent = () => {
  const greeting = () => alert("hello");
  const user = {
    name: "ilyes",
    email: "ilyes@gmail.com",
    age: 26,
  };
  // <p style='color:red; text-align:center;> hello</p>
  return (
    <div>
      <h1 style={{ color: "red", textAlign: "center" }}>{user.name}</h1>
      <p style={{ marginLeft: "200px" }} className="email">
        {user.email}
      </p>
      <p>{user.age}</p>
      <button onClick={() => greeting()}>Click me</button>
    </div>
  );
};

export default MyFirstComponent;
