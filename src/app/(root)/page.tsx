import { ThemeToggle } from "@/components/ThemeToggle";

export default async function Home() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-background text-foreground">
      <h1>JCoNet LTD</h1>
      <ThemeToggle />
    </section>
  );
}
