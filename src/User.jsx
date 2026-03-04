import React from "react";

function User({name, age, phone, email}) {
  return <div>
    <h1>{name}</h1>
    <h1>{age}</h1>
    <h1>{phone}</h1>
    <h1>{email}</h1>
  </div>;
}

export default User;
