import clsx from "clsx";
import React from "react";

function Button({ children, variant = "white", className, onClick }) {
  return (
    <button
      className={clsx(
        "border-[1px] border-orange-400 px-5 py-3 rounded-[12px]",
        variant === "dark"
          ? "bg-orange-400 text-white hover:text-black hover:bg-white"
          : variant === "danger"
            ? "bg-red-500 text-white hover:bg-red-700"
            : "bg-white text-black hover:bg-orange-400 hover:text-white",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
