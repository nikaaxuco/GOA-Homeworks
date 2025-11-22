import React from "react";


  const el1 = React.createElement("div", null, "Hello from createElement!");


  const numbers = [1, 2, 3];

  const users = [
    { id: 1, name: "Nika" },

    { id: 2, name: "Gio" },

    { id: 3, name: "Ana" }

  ];

  return (
    <div style={{ padding: "20px", fontSize: "20px" }}>


      <h2>Map Example 1</h2>
      {numbers.map((num) => (
        <p key={num}>Number: {num}</p>

      ))}

    </div>
  );

export default App;

