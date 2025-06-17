import React from "react";
import clsx from "clsx";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export const Input: React.FC<InputProps> = ({ className = "", ...rest }) => {
  const baseClass =
    "w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-150";

  return (
    <input
      className={clsx(baseClass, className)}
      {...rest} // Inherit all other props (value, onChange, type, etc.)
    />
  );
};
