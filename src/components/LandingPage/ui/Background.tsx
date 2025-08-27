export const DecorativeBackground = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* subtle vignette */}
      <div className="absolute inset-0 [mask-image:radial-gradient(75%_75%_at_50%_50%,#000_60%,transparent_100%)] bg-gradient-to-b from-accent/40 via-transparent to-transparent dark:from-primary/20" />

      {/* gradient blobs */}
      <div className="absolute -top-24 -right-20 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-40 dark:opacity-30 bg-gradient-to-br from-primary/25 via-[var(--chart-2)]/20 to-transparent dark:from-[var(--chart-1)]/25 dark:via-[var(--chart-4)]/20" />
      <div className="absolute -bottom-24 -left-20 h-[26rem] w-[26rem] rounded-full blur-3xl opacity-35 dark:opacity-25 bg-gradient-to-tr from-secondary/60 via-accent/40 to-transparent dark:from-[var(--chart-5)]/25 dark:via-[var(--chart-3)]/20" />

      {/* soft ring */}
      <div className="absolute left-1/2 top-[22%] -translate-x-1/2 size-[68rem] rounded-full bg-[conic-gradient(var(--ring)_0deg,transparent_120deg,transparent_240deg,var(--ring)_360deg)] opacity-[0.07] [mask-image:radial-gradient(closest-side,#000_55%,transparent_75%)]" />

      {/* texture (CSS-only speckle, no SVG) */}
      <div className="absolute inset-0 mix-blend-overlay opacity-[0.04] [background-image:radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1.3px),radial-gradient(circle,rgba(0,0,0,0.12)_1px,transparent_1.3px)] [background-size:3px_3px,3px_3px] [background-position:0_0,1.5px_1.5px]" />
    </div>
  );
};
