import { ChanhDaiLockup } from "@/components/brand";
import { cn } from "@/utils/cn";

export const Plus = ({ className }: { className?: string }) => {
  return (
    <div className={cn("h-6 w-6", className)}>
      <span className="absolute left-0 top-0 box-content flex h-[11.5px] w-6 border-b border-zinc-300 dark:border-zinc-700" />
      <span className="absolute top-0 box-content flex h-6 w-[11.5px] border-r border-zinc-300 dark:border-zinc-700" />
    </div>
  );
};

export const ChanhDaiCoverGrid = () => {
  return (
    <div className="aspect-h-1 aspect-w-2 relative flex w-full select-none border border-zinc-100 bg-white dark:border-zinc-900 dark:bg-zinc-950">
      <div className="absolute inset-0 z-10">
        <Plus className="absolute -left-[12.5px] -top-[12.5px]" />
        <Plus className="absolute -right-[12.5px] -top-[12.5px]" />
        <Plus className="absolute -bottom-[12.5px] -right-[12.5px]" />
        <Plus className="absolute -bottom-[12.5px] -left-[12.5px]" />
      </div>

      <div className="top-1/2 box-content h-16 w-full -translate-y-1/2 border-y border-zinc-100 dark:border-zinc-900 sm:h-20" />

      <div className="flex items-center justify-center text-black dark:text-white">
        <div className="h-full border-r border-zinc-100 dark:border-zinc-900"></div>
        <div className="relative">
          <ChanhDaiLockup className="h-16 text-black dark:text-white sm:h-20" />

          <div className="absolute -bottom-px -left-px -right-px -top-px border border-blue-500 dark:border-zinc-600" />
          <div className="absolute -left-[5px] -top-[5px] size-[9px] border border-blue-500 bg-background dark:border-zinc-600" />
          <div className="absolute -right-[5px] -top-[5px] size-[9px] border border-blue-500 bg-background dark:border-zinc-600" />
          <div className="absolute -bottom-[5px] -left-[5px] size-[9px] border border-blue-500 bg-background dark:border-zinc-600" />
          <div className="absolute -bottom-[5px] -right-[5px] size-[9px] border border-blue-500 bg-background dark:border-zinc-600" />
          <div className="absolute -top-[9px] left-1/2 -translate-x-1/2 -translate-y-full transform rounded bg-blue-600 px-1 text-sm text-white after:content-['128_x_64'] dark:bg-zinc-600 sm:after:content-['160_x_80']" />
        </div>
        <div className="h-full border-r border-zinc-100 dark:border-zinc-900"></div>
      </div>
    </div>
  );
};
