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
      className={`relative rounded-[3px] border-2 border-solid border-grey px-2 py-2.5 pr-6 text-sm outline-none
        focus:border-blue disabled:cursor-not-allowed
        ${variant === "compact" && "py-1.5"}
        ${error && "border-priority-red"}
        ${disabled && "border-grey"}
        ${searchable && `bg-[url(/search.svg)] bg-[9.75rem] bg-no-repeat`}
        `}
    />
  );
}
