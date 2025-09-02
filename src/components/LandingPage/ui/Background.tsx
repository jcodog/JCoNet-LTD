export const DecorativeBackground = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Enhanced base color wash with higher chroma and depth */}
      <div className="absolute inset-0 block dark:hidden bg-[radial-gradient(90%_70%_at_15%_0%,oklch(0.88_0.13_250/_0.55)_0%,transparent_60%),radial-gradient(90%_70%_at_95%_10%,oklch(0.9_0.16_350/_0.55)_0%,transparent_60%),radial-gradient(90%_70%_at_5%_65%,oklch(0.9_0.15_160/_0.5)_0%,transparent_60%)]" />

      {/* Dark mode wash: richer, cooler chroma */}
      <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(90%_70%_at_20%_5%,oklch(0.55_0.2_270/_0.6)_0%,transparent_60%),radial-gradient(85%_65%_at_90%_0%,oklch(0.6_0.22_320/_0.55)_0%,transparent_60%),radial-gradient(75%_60%_at_0%_75%,oklch(0.62_0.2_20/_0.5)_0%,transparent_60%)]" />

      {/* Vignette to anchor content while keeping transparency */}
      <div className="absolute inset-0 bg-[radial-gradient(130%_90%_at_50%_-10%,transparent_35%,oklch(0.96_0_0/_0.6)_100%)] dark:bg-[radial-gradient(100%_85%_at_50%_-10%,transparent_30%,oklch(0.2_0_0/_0.72)_100%)]" />

      {/* Animated gradient blobs - subtle movement */}
      <div className="absolute -top-28 -right-24 h-[34rem] w-[34rem] rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle_at_30%_30%,oklch(0.86_0.22_260/_0.9),transparent_60%)] dark:opacity-45 dark:bg-[radial-gradient(circle_at_30%_30%,oklch(0.6_0.25_290/_0.9),transparent_60%)] mix-blend-screen animate-blob-slow" />

      <div className="absolute -bottom-28 -left-24 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-55 bg-[radial-gradient(circle_at_70%_70%,oklch(0.9_0.18_150/_0.9),transparent_60%)] dark:opacity-40 dark:bg-[radial-gradient(circle_at_70%_70%,oklch(0.62_0.24_20/_0.9),transparent_60%)] mix-blend-screen animate-blob-delayed" />

      <div className="absolute top-[45%] left-[60%] h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_50%_50%,oklch(0.92_0.14_350/_0.9),transparent_60%)] dark:opacity-35 dark:bg-[radial-gradient(circle_at_50%_50%,oklch(0.58_0.22_340/_0.9),transparent_60%)] mix-blend-screen animate-blob-alt" />

      {/* Soft conic ring accent with very slow rotation */}
      <div className="absolute left-1/2 top-[22%] -translate-x-1/2 size-[72rem] rounded-full bg-[conic-gradient(oklch(0.92_0_0/_0.0)_0deg,oklch(0.8_0.06_250/_0.25)_90deg,oklch(0.8_0.06_0/_0.0)_180deg,oklch(0.8_0.06_320/_0.25)_270deg,oklch(0.92_0_0/_0.0)_360deg)] opacity-[0.18] [mask-image:radial-gradient(closest-side,#000_46%,transparent_70%)] animate-slow-spin" />

      {/* Refined grid with slow parallax drift */}
      <div className="absolute inset-0 block dark:hidden opacity-[0.20] mix-blend-multiply [background-image:linear-gradient(to_right,rgba(0,0,0,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.07)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(75%_75%_at_50%_50%,#000_55%,transparent_100%)] animate-grid-pan" />
      <div className="absolute inset-0 hidden dark:block opacity-[0.14] mix-blend-screen [background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(75%_75%_at_50%_50%,#000_55%,transparent_100%)] animate-grid-pan" />

      {/* Grain / speckle with ultra-subtle motion to avoid banding */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.04] mix-blend-overlay [background-image:radial-gradient(circle,rgba(0,0,0,0.28)_1px,transparent_1.5px),radial-gradient(circle,rgba(255,255,255,0.22)_1px,transparent_1.5px)] [background-size:3px_3px,3px_3px] [background-position:0_0,1.5px_1.5px] animate-grain" />
    </div>
  );
};
