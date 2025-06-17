import React from "react";
import clsx from "clsx";

type SelectProps = {
  className?: string;
  children: React.ReactNode;
};

export const Select: React.FC<SelectProps> = ({ className = "", children }) => {
  const baseClass = "border rounded px-2 py-1 text-sm";

  return <select className={clsx(baseClass, className)}>{children}</select>;
};
