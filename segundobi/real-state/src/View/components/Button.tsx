import type { HTMLProps } from "react";
import { tw } from "../../lib/tw";

interface ButtonProps {
    text: string;
    primary: boolean;
    onClick?: void;
    className?: HTMLProps<HTMLAnchorElement>["className"];
}

export function Button({ text, primary, className = "" }: ButtonProps) {
    return (
        primary ? (
            <button className={tw("relative group px-6 py-2 border border-gold-light rounded-pill overflow-hidden text-size-body", className)}>
                <span className="
                    absolute inset-0
                    bg-gold-light
                    scale-x-0
                    group-hover:scale-x-100
                    transition-transform duration-450 ease-in-out
                    origin-left
                    -z-10
                "></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 text-size-body">
                    {text}
                </span>
            </button>
        ) : (
            <button className={tw("bg-gold-light rounded-pill hover:bg-charcoal font-bold", className)}>
                {text}
            </button>
        )
    );
}