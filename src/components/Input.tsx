import React from "react";

const Input = (props: React.ComponentPropsWithoutRef<"input">) => {
  return (
    <input
      type="text"
      {...props}
      className="rounded border border-gray-800 px-4 py-2 dark:text-gray-800"
    />
  );
};

export default Input;
