"use client";

import { forwardRef, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextInput } from "../inputs/textInput";
import { InputProps } from "./input";
import { cn } from "@/lib/utils";

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const disabled =
      props.value === "" || props.value === undefined || props.disabled;

    const value = props.value !== undefined ? props.value : "";

    return (
      <div className="relative">
        <TextInput
          type={showPassword ? "text" : "password"}
          label="Password"
          className={cn(className)}
          value={value} // Pass down value prop
          autoComplete="current-password"
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute right-0 top-[27px]  px-3 py-2 hover:bg-transparent"
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={disabled}
        >
          {showPassword && !disabled ? (
            <EyeIcon className="h-4 w-4" aria-hidden="true" />
          ) : (
            <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
          )}
          <span className="sr-only">
            {showPassword ? "Hide password" : "Show password"}
          </span>
        </Button>

        {/* hides browsers password toggles */}
        <style>{`
          .hide-password-toggle::-ms-reveal,
          .hide-password-toggle::-ms-clear {
            visibility: hidden;
            pointer-events: none;
            display: none;
          }
        `}</style>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
