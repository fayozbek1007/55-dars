import clsx from "clsx";
import React from "react";

function Button({ children, variant = "white", className }) {
  return (
    <button
      className={clsx(
        "border-[1px] border-orange-400 px-5 py-3",
        variant === "dark"
          ? "bg-orange-400 text-white hover:text-black hover:bg-white"
          : "bg-white text-black hover:bg-orange-400 hover:text-white",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
