import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20",
        secondary:
          "bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80",
        outline: "border border-border text-foreground hover:bg-secondary",
        ghost: "text-muted-foreground hover:text-foreground hover:bg-secondary",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export function Badge({ className, variant, ...props }) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
