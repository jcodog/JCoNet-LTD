export const DecorativeBackground = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base color wash - light mode */}
      <div className="absolute inset-0 block dark:hidden bg-[radial-gradient(80%_60%_at_20%_0%,rgba(59,130,246,0.10)_0%,transparent_60%),radial-gradient(80%_60%_at_100%_10%,rgba(236,72,153,0.10)_0%,transparent_60%),radial-gradient(80%_60%_at_0%_60%,rgba(16,185,129,0.10)_0%,transparent_60%)]" />

      {/* Base color wash - dark mode */}
      <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(80%_60%_at_20%_5%,rgba(59,130,246,0.12)_0%,transparent_60%),radial-gradient(80%_60%_at_90%_0%,rgba(168,85,247,0.12)_0%,transparent_60%),radial-gradient(70%_60%_at_0%_70%,rgba(236,72,153,0.10)_0%,transparent_60%)]" />

      {/* Vignette to anchor content while keeping transparency */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,transparent_40%,rgba(0,0,0,0.05)_100%)] dark:bg-[radial-gradient(90%_80%_at_50%_-10%,transparent_30%,rgba(0,0,0,0.5)_100%)]" />

      {/* Refined gradient blobs */}
      <div className="absolute -top-24 -right-20 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-50 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.20),transparent_60%)] dark:opacity-30 dark:bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.20),transparent_60%)]" />
      <div className="absolute -bottom-24 -left-20 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.18),transparent_60%)] dark:opacity-25 dark:bg-[radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.16),transparent_60%)]" />

      {/* Soft conic ring accent */}
      <div className="absolute left-1/2 top-[22%] -translate-x-1/2 size-[68rem] rounded-full bg-[conic-gradient(var(--ring)_0deg,transparent_120deg,transparent_240deg,var(--ring)_360deg)] opacity-[0.08] [mask-image:radial-gradient(closest-side,#000_50%,transparent_75%)]" />

      {/* Subtle grid - light */}
      <div className="absolute inset-0 block dark:hidden opacity-[0.25] mix-blend-multiply [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(75%_75%_at_50%_50%,#000_50%,transparent_100%)]" />
      {/* Subtle grid - dark */}
      <div className="absolute inset-0 hidden dark:block opacity-[0.12] mix-blend-screen [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(75%_75%_at_50%_50%,#000_50%,transparent_100%)]" />

      {/* Grain / Speckle */}
      <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.04] mix-blend-overlay [background-image:radial-gradient(circle,rgba(0,0,0,0.25)_1px,transparent_1.4px),radial-gradient(circle,rgba(255,255,255,0.25)_1px,transparent_1.4px)] [background-size:3px_3px,3px_3px] [background-position:0_0,1.5px_1.5px]" />
    </div>
  );
};
