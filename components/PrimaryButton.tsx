import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
  variant?: "solid" | "outline";
  wide?: boolean;
  icon?: boolean;
  href?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  ariaLabel?: string;
};

export function PrimaryButton({
  children,
  variant = "solid",
  wide,
  icon,
  href,
  type = "button",
  ariaLabel
}: PrimaryButtonProps) {
  const className = `button ${variant === "outline" ? "button-outline" : ""} ${wide ? "button-wide" : ""}`;
  const content = (
    <>
      <span>{children}</span>
      {icon ? <ArrowRight size={18} strokeWidth={1.6} aria-hidden="true" /> : null}
    </>
  );

  if (href) {
    return (
      <Link className={className} href={href} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button className={className} type={type} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
