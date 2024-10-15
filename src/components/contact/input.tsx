"use client";

interface InputProps {
  label?: string;
  input?: boolean;
  textarea?: boolean;
  id: string;
  type: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

export const Input = ({
  label,
  input = false,
  textarea = false,
  id,
  type,
  state,
  setState,
}: InputProps) => {
  if (label && input) {
    return (
      <div className="relative z-0 mb-10 w-full group">
        <input
          className="block py-2.5 px-0 w-full text-sm dark:text-black text-white bg-transparent border-0 border-b-2 dark:border-black border-white appearance-none focus:outline-none focus:ring-0"
          type={type}
          name={id}
          id={id}
          onChange={(e) => setState(e.target.value)}
        />
        <label className={`absolute -bottom-4 text-2xl dark:text-black text-white transform -translate-y-6 scale-75 -z-10 ${state ? "opacity-0" : "opacity-100"}`} htmlFor={id}>
          {label}
        </label>
      </div>
    );
  } else if (label && textarea) {
    return (
      <div className="relative z-0 mb-10 w-full group">
        <textarea
          rows={4}
          className="block py-2.5 px-0 w-full text-sm dark:text-black text-white bg-transparent border-0 border-b-2 dark:border-black border-white appearance-none focus:outline-none focus:ring-0"
          name={id}
          id={id}
          onChange={(e) => setState(e.target.value)}
        />
        <label className={`absolute top-6 text-2xl dark:text-black text-white transform -translate-y-6 scale-75 -z-10 ${state ? "opacity-0" : "opacity-100"}`} htmlFor={id}>
          {label}
        </label>
      </div>
    );
  }
};
