import clsx from "clsx";
import React, { type ComponentPropsWithoutRef } from "react";

const Button = (
  props: ComponentPropsWithoutRef<"button"> & {
    variant?: "primary" | "secondary";
  }
) => {
  const variant =
    (props.variant ?? "primary") === "primary"
      ? "bg-blue-400 hover:bg-blue-500"
      : "bg-gray-400 hover:bg-gray-500";
  return (
    <button className={clsx("rounded px-4 py-2", variant)} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
