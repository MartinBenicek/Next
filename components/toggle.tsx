import * as React from "react";
import { Check, X } from "lucide-react";

export default function Toggle({
  toggled,
  onToggle,
}: {
  toggled: boolean;
  onToggle: Function;
}) {
  return (
    <button
      role="switch"
      aria-checked={toggled}
      onClick={() => onToggle()}
      className={`relative w-16 h-8 rounded-full transition-colors duration-200 ${
        toggled ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <span className="sr-only">{toggled ? "On" : "Off"}</span>
      <span
        className={`
          absolute right-1 top-1 w-6 h-6 rounded-full bg-white transition-transform duration-200 ${
            toggled ? "-translate-x-8" : ""
          }
        `}
      />
      <span className="absolute inset-0 flex items-center justify-between px-2">
        <X className="h-5 w-5 text-white" />
        <Check className="h-5 w-5 text-white" />
      </span>
    </button>
  );
}
