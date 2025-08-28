import { cn } from "@/lib/utils";

export const Section = ({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section
    id={id}
    className={cn("w-full px-4 sm:px-6 lg:px-8 scroll-mt-24", className)}
  >
    {children}
  </section>
);
