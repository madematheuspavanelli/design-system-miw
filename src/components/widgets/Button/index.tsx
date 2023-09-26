import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "link";
};

export function Button({ children, size = "md", variant = "primary" }: Props) {
  return (
    <button
      className={`text-sm rounded-md 
      ${size === "sm" && "px-2.5 py-1"}
      ${size === "md" && "px-4 py-2"} 
      ${size === "lg" && "px-5 py-3"}  
      ${variant === "primary" && "bg-blue text-white"}
      ${variant === "secondary" && "bg-grey text-graphite"}
      ${variant === "link" && "bg-tag-blue text-blue"}
      `}
    >
      {children}
    </button>
  );
}
