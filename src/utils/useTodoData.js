import React, { useState } from "react";

export function useTodoData() {
  const [data, setData] = useState([
    {
      id: 1,
      text: "Uyga vazifani bajarish kerak",
    },
    {
      id: 2,
      text: "Imtixonga tayyorlanish kerak",
    },
  ]);

  return {
    data,
    setData,
  };
}
