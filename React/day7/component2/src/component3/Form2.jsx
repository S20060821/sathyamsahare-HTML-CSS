import React from "react";

export default function Form2({ text, value }) {
  return (
    <div>
      <form action="">
        <label htmlFor="">NAME:</label>
        <input
          type="text"
          id="name"
          placeholder="enter your name"
          name="name"
          value={value}
        />
      </form>
      <h1>{text}</h1>
      <p>{value}</p>
    </div>
  );
}
