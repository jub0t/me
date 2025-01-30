import { cn } from "@/lib/cn";

import { LogoResizeAnimation } from "./LogoResizeAnimation";

export const ChanhDaiCoverGrid = () => {
  return (
    <div
      className={cn(
        "aspect-h-1 aspect-w-2 border-grid relative flex w-full border-x select-none",
        "after:bg-grid after:absolute after:-bottom-px after:-left-[100vw] after:h-px after:w-[200vw]",
        "before:bg-grid before:absolute before:-top-px before:-left-[100vw] before:h-px before:w-[200vw]",
        "bg-zinc-950/0.75 bg-[image:radial-gradient(var(--pattern-foreground)_1px,_transparent_0)] bg-[size:10px_10px] [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
      )}
    >
      <div className="border-grid top-1/2 box-content h-16 w-full -translate-y-1/2 border-y sm:h-20" />

      <div className="flex items-center justify-center text-black dark:text-white">
        <div className="border-grid h-full border-r"></div>

        <div className="h-16 w-32 sm:hidden">
          <LogoResizeAnimation minWidth={104} maxWidth={128} />
        </div>

        <div className="hidden h-20 w-40 sm:block">
          <LogoResizeAnimation minWidth={128} maxWidth={160} />
        </div>

        <div className="border-grid h-full border-r"></div>
      </div>
    </div>
  );
};
