import { cn } from "@/lib/utils";

interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm";
  children: React.ReactNode;
  className?: string;
}

export function Heading({
  as: Component = "h2",
  size = "lg",
  children,
  className,
}: HeadingProps) {
  const sizeClasses = {
    xl: "text-4xl sm:text-5xl lg:text-6xl font-extrabold",
    lg: "text-3xl sm:text-4xl font-bold",
    md: "text-2xl sm:text-3xl font-bold",
    sm: "text-xl sm:text-2xl font-semibold",
  };

  return (
    <Component className={cn(sizeClasses[size], className)}>
      {children}
    </Component>
  );
}
