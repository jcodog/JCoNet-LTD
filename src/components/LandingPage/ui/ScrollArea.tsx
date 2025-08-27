import { cn } from "@/lib/utils";

export const ScrollArea = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex-1 overflow-y-auto no-scrollbar scroll-smooth",
        className
      )}
    >
      <div className="min-h-full">{children}</div>
    </div>
  );
};
