import React, { ComponentPropsWithoutRef } from "react";

const Button = (props: ComponentPropsWithoutRef<"button">) => {
  return (
    <button
      className="rounded bg-blue-400 px-4 py-2 hover:bg-blue-500"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
