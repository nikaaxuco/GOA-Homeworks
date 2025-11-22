import React from "react";

export default function Product({ price, inStock }) {
  return (
    <div>
      <p>ფასი: {price}₾</p>
      <p>{inStock ? "ხელმისაწვდომია" : "არ არის ხელმისაწვდომი"}</p>
    </div>
  );
}
