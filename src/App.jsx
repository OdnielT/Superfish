import React from "react";
import User from "./User";

function App() {
  const userData = {
    name: "Odniel",
    age: 25,
    phone: "07766786727",
    email: "odnieldev@gmail.com",
  };

  return (
    <div>
      <h1>Hello World!</h1>
      <User
        name={userData.name}
        age={userData.age}
        phone={userData.phone}
        email={userData.email}
      />
    </div>
  );
}

export default App;
