type Props = {
  placeholder?: string;
  variant?: "regular" | "compact";
  searchable?: boolean;
  disabled?: boolean;
  error?: boolean;
};

export function Input({
  placeholder = "Placeholder",
  disabled,
  variant,
  searchable,
  error,
}: Props) {
  return (
    <input
      placeholder={placeholder}
      disabled={disabled}
      className={`py-2.5 px-2 border-grey border-2 border-solid rounded-[3px] text-sm disabled:cursor-not-allowed
        outline-none focus:border-blue
        ${variant === "compact" && "py-1.5"}
        ${error && "border-priority-red"}
        ${disabled && "border-grey"}
        `}
    />
  );
}
