import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  size?: "h1" | "h2" | "h3";
  variant?: "regular" | "bold";
};

export function Title({ children, size = "h1", variant = "regular" }: Props) {
  return (
    <p
      className={`${variant === "bold" && "font-bold"}
      ${size === "h1" && "text-2xl"}
      ${size === "h2" && "text-3xl"}
      ${size === "h3" && "text-4xl"}
      `}
    >
      {children}
    </p>
  );
}
