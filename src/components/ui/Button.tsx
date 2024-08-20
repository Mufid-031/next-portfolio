"use client";
import { cn } from "@/lib/utils";

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button className={cn("rounded-md dark:text-white text-black", className)} {...props}>
            {children}
        </button>
    )
}