import sparkles from "../../assets/sparkles.svg";
import shadowAndGlare from "../../assets/shadow-and-glare.svg";
import circleIcon from "../../assets/circle-icon.svg";
import sparksContainer from "../../assets/sparks-container.svg";
import { Headset } from "lucide-react";
import { useVersion } from "../versioning/VersionContext";

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

export default function BreadcrumbBar() {
  const { currentConfig } = useVersion();
  const { breadcrumbBar } = currentConfig;
  return (
    <div className="border-b border-solid relative w-full h-[52px] shrink-0" style={{ backgroundColor: breadcrumbBar.barBgColor, borderColor: breadcrumbBar.borderColor }}>
      {/* Left Side */}
      <div className="absolute flex flex-col h-[18px] items-start justify-center left-[16px] top-1/2 -translate-y-1/2 w-[150px]" />
      {/* Center - Leo Bar */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[8px] flex gap-[4px] items-center">
        <button className="border border-solid flex gap-[12px] h-[36px] items-center pl-[12px] pr-[8px] py-[4px] rounded-[12px] w-[480px] cursor-pointer bg-transparent" style={{ borderColor: breadcrumbBar.inputBorderColor, backgroundImage: "linear-gradient(90deg, rgb(241, 245, 249) 0%, rgb(241, 245, 249) 100%), linear-gradient(90deg, rgba(191, 219, 254, 0.4) 0%, rgba(219, 234, 254, 0.4) 100%)" }}>
          <div className="relative shrink-0 size-[16px]">
            <img alt="" className="absolute block max-w-none size-full" src={sparkles} />
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-[#475569] text-left whitespace-nowrap overflow-hidden text-ellipsis leading-none">{breadcrumbBar.askLeoPlaceholder}</p>
          <div className="flex-[1_0_0] h-[12px]" />
        </button>
        <div className="bg-[#1c244e] border border-[#a5b4fc] border-solid flex gap-[8px] items-center p-[6px] rounded-[12px] shrink-0">
          <LeoIcon />
        </div>
      </div>
      {/* Right Side - Support Button */}
      <div className="absolute flex items-center justify-end right-[16px] top-1/2 -translate-y-1/2">
        <div className="bg-white border border-[#a5b4fc] border-solid flex gap-[4px] h-[36px] items-center justify-center overflow-clip pl-[6px] pr-[12px] py-[6px] rounded-[12px]">
          <div className="relative shrink-0 size-[24px] flex items-center justify-center">
            <Headset className="w-4 h-4 text-[#1e293b]" />
          </div>
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none text-[12px] text-[#1e293b] whitespace-nowrap">{breadcrumbBar.supportButtonLabel}</p>
        </div>
      </div>
    </div>
  );
}
