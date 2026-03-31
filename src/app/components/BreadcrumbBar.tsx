import sparkles from "../../assets/sparkles.svg";
import shadowAndGlare from "../../assets/shadow-and-glare.svg";
import circleIcon from "../../assets/circle-icon.svg";
import sparksContainer from "../../assets/sparks-container.svg";
import { Headset, Sun, Moon } from "lucide-react";
import { cn } from "./ui/utils";

function LeoIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.12px)] size-[30px] top-1/2">
        <img alt="" className="block max-w-none size-full" src={shadowAndGlare} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2">
        <img alt="" className="absolute block max-w-none size-full" src={circleIcon} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.13px)] size-[14px] top-1/2">
        <img alt="" className="absolute block max-w-none size-full" src={sparksContainer} />
      </div>
    </div>
  );
}

type BreadcrumbBarProps = {
  chromeDark?: boolean;
  onChromeDarkChange?: (value: boolean) => void;
};

export default function BreadcrumbBar({ chromeDark = false, onChromeDarkChange }: BreadcrumbBarProps) {
  return (
    <div
      className={cn(
        "border-b border-solid relative w-full h-[52px] shrink-0 transition-colors duration-200",
        chromeDark ? "bg-zinc-950 border-zinc-800" : "bg-white border-[#d2d5db]",
      )}
    >
      {/* Left Side */}
      <div className="absolute flex flex-col h-[18px] items-start justify-center left-[16px] top-1/2 -translate-y-1/2 w-[150px]" />
      {/* Center - Leo Bar */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[8px] flex gap-[4px] items-center">
        <button
          type="button"
          className={cn(
            "border border-solid flex gap-[12px] h-[36px] items-center pl-[12px] pr-[8px] py-[4px] rounded-[12px] w-[480px] cursor-pointer bg-transparent transition-colors",
            chromeDark && "border-zinc-600 bg-zinc-800/90",
          )}
          style={
            chromeDark
              ? undefined
              : {
                  borderColor: "#a5b4fc",
                  backgroundImage:
                    "linear-gradient(90deg, rgb(241, 245, 249) 0%, rgb(241, 245, 249) 100%), linear-gradient(90deg, rgba(191, 219, 254, 0.4) 0%, rgba(219, 234, 254, 0.4) 100%)",
                }
          }
        >
          <div className="relative shrink-0 size-[16px]">
            <img alt="" className="absolute block max-w-none size-full" src={sparkles} />
          </div>
          <p
            className={cn(
              "font-['Inter:Regular',sans-serif] font-normal text-[12px] text-left whitespace-nowrap overflow-hidden text-ellipsis leading-none",
              chromeDark ? "text-zinc-300" : "text-[#475569]",
            )}
          >
            Ask Leo
          </p>
          <div className="flex-[1_0_0] h-[12px]" />
        </button>
        <div className="bg-[#1c244e] border border-[#a5b4fc] border-solid flex gap-[8px] items-center p-[6px] rounded-[12px] shrink-0">
          <LeoIcon />
        </div>
      </div>
      {/* Right Side - Support + Theme toggle */}
      <div className="absolute flex items-center gap-[8px] right-[16px] top-1/2 -translate-y-1/2">
        <div
          className={cn(
            "border border-solid flex gap-[4px] h-[36px] items-center justify-center overflow-clip pl-[6px] pr-[12px] py-[6px] rounded-[12px] transition-colors",
            chromeDark ? "bg-zinc-800 border-zinc-600" : "bg-white border-[#a5b4fc]",
          )}
        >
          <div className="relative shrink-0 size-[24px] flex items-center justify-center">
            <Headset className={cn("w-4 h-4", chromeDark ? "text-zinc-200" : "text-[#1e293b]")} />
          </div>
          <p
            className={cn(
              "font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none text-[12px] whitespace-nowrap",
              chromeDark ? "text-zinc-200" : "text-[#1e293b]",
            )}
          >
            Support
          </p>
        </div>
        {onChromeDarkChange && (
          <button
            type="button"
            onClick={() => onChromeDarkChange(!chromeDark)}
            className={cn(
              "flex items-center justify-center size-[36px] rounded-[12px] cursor-pointer border border-solid transition-all duration-150",
              chromeDark
                ? "bg-zinc-800 border-zinc-600 text-zinc-400 hover:text-zinc-200"
                : "bg-white border-[#a5b4fc] text-slate-400 hover:text-slate-600",
            )}
            aria-label={chromeDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {chromeDark ? (
              <Sun className="h-4 w-4" strokeWidth={2} />
            ) : (
              <Moon className="h-4 w-4" strokeWidth={2} />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
