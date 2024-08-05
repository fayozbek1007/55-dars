import React, { useState } from "react";

export function useTodoData() {
  const [data, setData] = useState([
    {
      id: 1,
      firstName: "Abdisalom",
      lastName: "Bahodirov",
      age: "21",
      city: "Buxoro"
    },
    {
      id: 2,
      firstName: "Hasan",
      lastName: "Husonov",
      age: "26",
      city: "Toshkent"
    },
  ]);

  return {
    data,
    setData,
  };
}
