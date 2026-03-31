import image_6d8d8e56fc2a3fadd872208b1c1b87d147722a97 from 'figma:asset/6d8d8e56fc2a3fadd872208b1c1b87d147722a97.png'
import svgPaths from "../../imports/svg-ip0hnle7dz";
import imgGeminiGeneratedImageOxxu3Xoxxu3Xoxxu1 from "figma:asset/3d70a6bd4a1bf1504c2c7f6bded1128a8be8f988.png";
import { imgEffects } from "../../imports/svg-nl4k0";
import leoOrbHero from "../../assets/leo-orb-hero.png";
import supportCardBg from "../../assets/support-card-bg.png";
import brokerCardBg from "../../assets/broker-card-bg.png";
import pirateCardBg from "../../assets/pirate-card-bg.png";
import supportCardBgExpanded from "../../assets/support-card-bg-expanded.png";
import brokerCardBgExpanded from "../../assets/broker-card-bg-expanded.png";
import pirateCardBgExpanded from "../../assets/pirate-card-bg-expanded.png";
import { useState } from "react";
import { History, X, ChevronRight } from "lucide-react";

const CONFIG = {
  header: {
    titleText: "Leo",
    titleFontSize: "14px",
    headerBgColor: "#050e3d",
    borderColor: "#2d355c",
  },
  panel: {
    panelBgGradient:
      "linear-gradient(90deg, rgb(5, 14, 61) 0%, rgb(5, 14, 61) 100%), linear-gradient(-90deg, rgb(5, 68, 101) 8.9636%, rgb(5, 14, 61) 4.4818%)",
    companionSectionTitle: "Choose your Leo companion",
    companionSectionSubtitle: "Leo adapts to your needs.",
  },
  welcomeMessage: { userName: "Jane", notificationCount: 3 },
  notification: {
    visible: true,
    content: "This is a notification that a user must complete",
    buttonLabel: "Generate",
    buttonBgColor: "#00fbf0",
    buttonTextColor: "#050e3d",
    seeAllCount: 20,
  },
  companionCards: [
    { title: "Support", description: "Your expert real estate assistant", bgImage: supportCardBg, bgImageExpanded: supportCardBgExpanded },
    { title: "Broker", description: "Your right hand in transaction related questions", bgImage: brokerCardBg, bgImageExpanded: brokerCardBgExpanded },
    { title: "Spring Bunny", description: "Arrrr let's set sail to your next closing.", bgImage: pirateCardBg, bgImageExpanded: pirateCardBgExpanded },
  ],
};

function ChevronArrows() {
  return (
    <div className="relative size-[16px]" data-name="Chevron/Arrows">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron/Arrows">
          <path d={svgPaths.p9835100} fill="var(--fill-0, white)" id="chevron-down" />
          <path d={svgPaths.pe5b7580} fill="var(--fill-0, white)" id="chevron-down_2" />
        </g>
      </svg>
    </div>
  );
}

function Circle() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="Circle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Circle">
          <g clipPath="url(#clip0_1_2082)">
            <rect fill="var(--fill-0, #050E3D)" height="20" rx="10" width="20" />
            <path d={svgPaths.p1a839d00} fill="url(#paint0_radial_1_2082)" fillOpacity="0.1" id="Gradient" />
          </g>
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(10 10) rotate(90) scale(10)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_2082" r="1">
            <stop stopColor="#F84C6C" />
            <stop offset="1" stopColor="#4967FD" />
          </radialGradient>
          <clipPath id="clip0_1_2082">
            <rect fill="white" height="20" rx="10" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SparksContainer() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Sparks Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Sparks Container">
          <path d={svgPaths.p38460ef0} fill="var(--fill-0, white)" id="Sparkles" />
        </g>
      </svg>
    </div>
  );
}

function LeoContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center py-[8px] relative rounded-[100px] shrink-0 size-[24px]" data-name="Leo Container">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Leo Icon">
        <div className="absolute flex inset-[26.58%_2.09%_1.19%_27.98%] items-center justify-center">
          <div className="flex-none h-[13.841px] rotate-[128.63deg] w-[18.527px]">
            <div className="relative size-full" data-name="Glare">
              <div className="absolute inset-[-28.9%_-21.59%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.5269 21.8408">
                  <g filter="url(#filter0_f_1_2091)" id="Glare">
                    <path d={svgPaths.p376e2c00} fill="var(--fill-0, #4967FD)" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="21.8408" id="filter0_f_1_2091" width="26.5269" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_1_2091" stdDeviation="2" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[20.51%_32.34%_10.34%_-1.73%] items-center justify-center">
          <div className="flex-none h-[16.006px] rotate-[128.63deg] w-[15.535px]">
            <div className="relative size-full" data-name="Glare">
              <div className="absolute inset-[-24.99%_-25.75%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.535 24.0056">
                  <g filter="url(#filter0_f_1_2080)" id="Glare">
                    <path d={svgPaths.pc367f0} fill="var(--fill-0, #321268)" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24.0056" id="filter0_f_1_2080" width="23.535" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_1_2080" stdDeviation="2" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[0.33%_8.99%_23.66%_15%] items-center justify-center">
          <div className="flex-none rotate-[128.63deg] size-[17.305px]">
            <div className="relative size-full" data-name="Glare">
              <div className="absolute inset-[-23.11%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.305 25.305">
                  <g filter="url(#filter0_f_1_2093)" id="Glare">
                    <path d={svgPaths.p1f879480} fill="url(#paint0_linear_1_2093)" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="25.305" id="filter0_f_1_2093" width="25.305" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_1_2093" stdDeviation="2" />
                    </filter>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2093" x1="12.6525" x2="11.3396" y1="4" y2="22.6947">
                      <stop stopColor="#5B9AFF" />
                      <stop offset="1" stopColor="#00FBF0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[22.667px] top-1/2" data-name="Shadow">
          <div className="absolute inset-[-4.41%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6667 24.6667">
              <g filter="url(#filter0_f_1_2085)" id="Shadow">
                <path d={svgPaths.p3fe05d40} fill="var(--fill-0, #050E3D)" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24.6667" id="filter0_f_1_2085" width="24.6667" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_1_2085" stdDeviation="0.5" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <Circle />
        <SparksContainer />
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Title">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] not-italic relative shrink-0 text-white whitespace-nowrap" style={{ fontSize: CONFIG.header.titleFontSize }}>{CONFIG.header.titleText}</p>
    </div>
  );
}

function LeoTitle() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Leo Title">
      <LeoContainer1 />
      <Title />
    </div>
  );
}

function LeoIconContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Leo icon container">
      <LeoTitle />
    </div>
  );
}

function HistoryIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]">
      <div className="absolute flex flex-col inset-0 items-center justify-center">
        <History className="w-4 h-4 text-white" />
      </div>
    </div>
  );
}

function ChevronRightIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]">
      <div className="absolute flex flex-col inset-0 items-center justify-center">
        <ChevronRight className="w-4 h-4 text-white" />
      </div>
    </div>
  );
}

function ExpandIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[12px]">
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.21875 5.71875L13.4375 1.5H10.75C10.3125 1.5 10 1.1875 10 0.75C10 0.34375 10.3125 0 10.75 0H15.2188C15.6562 0 15.9688 0.34375 15.9688 0.75V5.25C15.9688 5.6875 15.6562 6 15.2188 6C14.8125 6 14.4688 5.6875 14.4688 5.25V2.5625L10.25 6.78125C9.96875 7.09375 9.5 7.09375 9.21875 6.78125C8.90625 6.5 8.90625 6.03125 9.21875 5.71875ZM6.78125 10.2812L2.53125 14.5H5.25C5.65625 14.5 6 14.8438 6 15.25C6 15.6875 5.65625 16 5.25 16H0.75C0.3125 16 0 15.6875 0 15.25V10.75C0 10.3438 0.3125 10 0.75 10C1.15625 10 1.5 10.3438 1.5 10.75V13.4688L5.71875 9.25C6 8.9375 6.46875 8.9375 6.78125 9.25C7.0625 9.53125 7.0625 10 6.78125 10.2812Z" fill="white"/>
      </svg>
    </div>
  );
}

function TopIcons({ onClose, onToggleExpand }: { onClose?: () => void; onToggleExpand?: () => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-h-px min-w-px relative" data-name="Top Icons">
      <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[24px]" data-name="Icon Button">
        <HistoryIcon />
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[24px]" data-name="Icon Button">
        <ExpandIcon />
      </div>
      <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[24px] cursor-pointer" data-name="Icon Button" onClick={onClose}>
        <ChevronRightIcon />
      </div>
    </div>
  );
}

function ClipboardCheckIcon() {
  return (
    <div className="content-stretch flex flex-col h-full items-center relative shrink-0 w-[16px]" data-name="icon-buttons">
      <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.53125 2.125C4.46875 2.375 4.28125 2.5 4.0625 2.5H3.5C3.21875 2.5 3 2.75 3 3V4H6L9 4V3C9 2.75 8.75 2.5 8.5 2.5L7.9375 2.5C7.6875 2.5 7.5 2.375 7.4375 2.125C7.28125 1.5 6.6875 1 6 1C5.28125 1 4.6875 1.5 4.53125 2.125ZM6 0C7 0 7.90625 0.625 8.28125 1.5H8.5C9.125 1.5 9.6875 1.9375 9.90625 2.5H10C11.0938 2.5 12 3.40625 12 4.5L12 14C12 15.125 11.0938 16 10 16H2C0.875 16 0 15.125 0 14L0 4.5C0 3.40625 0.875 2.5 2 2.5H2.0625C2.28125 1.9375 2.84375 1.5 3.5 1.5H3.6875C4.09375 0.625 4.96875 0 6 0ZM10 3.5V4C10 4.5625 9.53125 5 9 5L6 5H3C2.4375 5 2 4.5625 2 4V3.5C1.4375 3.5 1 3.96875 1 4.5L1 14C1 14.5625 1.4375 15 2 15H10C10.5313 15 11 14.5625 11 14L11 4.5C11 3.96875 10.5312 3.5 10 3.5ZM6.5 2.5C6.5 2.78125 6.25 3 6 3C5.71875 3 5.5 2.78125 5.5 2.5C5.5 2.25 5.71875 2 6 2C6.25 2 6.5 2.25 6.5 2.5ZM9.34375 7.875L5.34375 11.875C5.15625 12.0625 4.8125 12.0625 4.625 11.875L2.625 9.875C2.4375 9.6875 2.4375 9.34375 2.625 9.15625C2.8125 8.96875 3.15625 8.96875 3.34375 9.15625L5 10.8125L8.625 7.15625C8.8125 6.96875 9.15625 6.96875 9.34375 7.15625C9.53125 7.34375 9.53125 7.6875 9.34375 7.875Z" fill="white"/>
      </svg>
    </div>
  );
}

function NotificationsContainer() {
  const { notification } = CONFIG;

  if (!notification.visible) return null;

  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-full" data-name="Notifications Container">
      {/* Notification Card */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Notification Prompts">
        <div className="bg-[#1c244e] border border-[#2d355c] border-solid content-stretch cursor-pointer flex flex-col gap-[12px] items-center justify-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Homepage Notifications_Mobile">
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
            {/* Notification Content Row */}
            <div className="content-stretch flex min-h-[44px] items-start min-h-[32px] relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative self-stretch">
                <div className="content-stretch flex flex-[1_0_0] gap-[12px] min-h-[44px] items-center min-w-px relative">
                  <div className="flex flex-row items-center self-stretch">
                    <ClipboardCheckIcon />
                  </div>
                  <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-full justify-center min-h-px min-w-px not-italic relative text-[16px] text-white">
                    <p className="leading-[22px]">{notification.content}</p>
                  </div>
                </div>
                {/* Close Button */}
                <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[24px]" data-name="Icon Button">
                  <div className="overflow-clip relative shrink-0 size-[16px]">
                    <div className="absolute flex flex-col inset-0 items-center justify-center">
                      <X className="w-4 h-4 text-[#f2f2f4]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Generate Button */}
            <div className="content-stretch flex gap-[10px] items-start pt-[8px] relative shrink-0 w-full" data-name="Button group mobile">
              <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative">
                <div className="content-stretch cursor-pointer flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Buttons">
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[32px] items-center justify-center min-h-px min-w-px overflow-clip p-[12px] relative rounded-[6px]" data-name="Button" style={{ backgroundColor: notification.buttonBgColor }}>
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap" style={{ color: notification.buttonTextColor }}>{notification.buttonLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* See All Link */}
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[14px] text-[#00fbf0] text-right w-full cursor-pointer">{`See All (${notification.seeAllCount}) `}</p>
    </div>
  );
}

function LeoWindowContent() {
  const { welcomeMessage } = CONFIG;
  return (
    <div className="flex-[1_0_0] min-h-0 relative w-full overflow-y-auto" data-name="Leo Window Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Leo Welcome Message">
          <div className="relative shrink-0 size-[48px]" data-name="Leo's UI Bubble">
            <img src={leoOrbHero} alt="Leo" className="absolute inset-0 size-full object-cover rounded-full" />
          </div>
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[16px] text-white">
            <span className="leading-[1.25]">Hi {welcomeMessage.userName}</span>
            <span className="leading-[1.25] text-[#94a3b8]">{`, you have `}</span>
            <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.25] text-[#94a3b8]">{welcomeMessage.notificationCount}</span>
            <span className="leading-[1.25] text-[#94a3b8]">{` notifications.`}</span>
          </p>
        </div>
        <NotificationsContainer />
      </div>
    </div>
  );
}


function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 w-full">
      <p className="font-['PP_Telegraf:Medium',sans-serif] leading-[22px] relative shrink-0 text-[20px] text-white text-center">{CONFIG.panel.companionSectionTitle}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#bfc3ca] text-[14px] text-center">{CONFIG.panel.companionSectionSubtitle}</p>
    </div>
  );
}


function LeoOrb() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-[calc(50%-1.33px)]" data-name="Leo Orb">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute blur-[16.667px] left-1/2 opacity-50 rounded-[531.125px] size-[133.333px] top-[calc(50%-1.33px)]" data-name="BG Blur as a shadow">
        <video autoPlay className="absolute max-w-none object-cover rounded-[531.125px] size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/e2c18b650d52aa899882838cc6528bdf929676b5" />
        </video>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[531.125px] shadow-[0px_0px_9.333px_0px_white] size-[105.495px] top-1/2" data-name="Main Blob">
        <video autoPlay className="absolute max-w-none object-cover rounded-[531.125px] size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/e2c18b650d52aa899882838cc6528bdf929676b5" />
        </video>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 mix-blend-plus-lighter size-[105.495px] top-1/2" data-name="Edge Glow">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105.495 105.495">
          <g id="Edge Glow" style={{ mixBlendMode: "plus-lighter" }}>
            <circle cx="52.7473" cy="52.7473" fill="url(#paint0_radial_1_2089)" fillOpacity="0.5" r="52.7473" />
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(53.011 53.011) rotate(-58.6926) scale(52.7848)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_2089" r="1">
              <stop offset="0.773918" stopColor="#050E3D" stopOpacity="0" />
              <stop offset="1" stopColor="white" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 mix-blend-color size-[105.495px] top-1/2" data-name="Gradient Adjustment">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 105.495 105.495">
          <g id="Gradient Adjustment" style={{ mixBlendMode: "color" }}>
            <circle cx="52.7473" cy="52.7473" fill="url(#paint0_radial_1_2073)" r="52.7473" />
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(52.7472 52.7473) rotate(81.3843) scale(66.0197)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_2073" r="1">
              <stop offset="0.630724" stopColor="#4967FD" />
              <stop offset="1" stopColor="#05C3F9" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ThumbsUpLight3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="thumbs-up-light 1">
      <div className="absolute flex flex-col inset-0 items-center justify-center">
        <ChevronRight className="w-4 h-4 text-[rgba(255,255,255,0.5)]" />
      </div>
    </div>
  );
}

function SupportCard({ isExpanded }: { isExpanded?: boolean }) {
  const card = CONFIG.companionCards[0];
  return (
    <div className="h-[98px] relative rounded-[7px] shrink-0 w-full border-[0.644px] border-[rgba(255,255,255,0.2)] border-solid overflow-clip" data-name="Support Card">
      <img src={isExpanded ? card.bgImageExpanded : card.bgImage} alt="" className="absolute inset-0 size-full object-cover pointer-events-none rounded-[7px]" />
      <div className="content-stretch flex items-center p-[16px] relative size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-white w-[207px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-[16px] whitespace-nowrap">{card.title}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] w-[min-content]">{card.description}</p>
        </div>
        <div className="absolute backdrop-blur-[8px] content-stretch flex gap-[4px] items-center justify-center left-[77px] p-[8px] rounded-[4px] size-[24px] top-[14.4px]" data-name="Icon Button">
          <ThumbsUpLight3 />
        </div>
      </div>
    </div>
  );
}


function BrokerCard({ isExpanded }: { isExpanded?: boolean }) {
  const card = CONFIG.companionCards[1];
  return (
    <div className="h-[98px] relative rounded-[7px] shrink-0 w-full border-[0.644px] border-[rgba(255,255,255,0.2)] border-solid overflow-clip" data-name="Broker Card">
      <img src={isExpanded ? card.bgImageExpanded : card.bgImage} alt="" className="absolute inset-0 size-full object-cover pointer-events-none rounded-[7px]" />
      <div className="content-stretch flex items-start p-[16px] relative size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-white w-[207px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-[16px] whitespace-nowrap">{card.title}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[14px] w-[min-content]">{card.description}</p>
        </div>
        <div className="absolute backdrop-blur-[8px] content-stretch flex gap-[4px] items-center justify-center left-[65px] p-[8px] rounded-[4px] size-[24px] top-[14.4px]" data-name="Icon Button">
          <div className="overflow-clip relative shrink-0 size-[16px]">
            <div className="absolute flex flex-col inset-0 items-center justify-center">
              <ChevronRight className="w-4 h-4 text-[rgba(255,255,255,0.5)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PirateCard({ isExpanded }: { isExpanded?: boolean }) {
  const card = CONFIG.companionCards[2];
  return (
    <div className="h-[98px] relative rounded-[7px] shrink-0 w-full border-[0.644px] border-[rgba(255,255,255,0.2)] border-solid overflow-clip" data-name="Pirate Card">
      <img src={isExpanded ? card.bgImageExpanded : card.bgImage} alt="" className="absolute inset-0 size-full object-cover pointer-events-none rounded-[7px]" />
      <div className="content-stretch flex items-center p-[16px] relative size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-white w-[207px]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22px] relative shrink-0 text-[16px] whitespace-nowrap">{card.title}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px]">{card.description}</p>
        </div>
        <div className="absolute backdrop-blur-[8px] content-stretch flex gap-[4px] items-center justify-center left-[120px] p-[8px] rounded-[4px] size-[24px] top-[14.4px]" data-name="Icon Button">
          <div className="overflow-clip relative shrink-0 size-[16px]">
            <div className="absolute flex flex-col inset-0 items-center justify-center">
              <ChevronRight className="w-4 h-4 text-[rgba(255,255,255,0.5)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6({ isExpanded }: { isExpanded?: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <SupportCard isExpanded={isExpanded} />
      <BrokerCard isExpanded={isExpanded} />
      <PirateCard isExpanded={isExpanded} />
    </div>
  );
}

function LeoAvatars({ isExpanded }: { isExpanded?: boolean }) {
  return (
    <div className="relative rounded-[7px] shrink-0 w-full" data-name="Leo Avatars" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.09) 100%), linear-gradient(90deg, rgb(5, 14, 61) 0%, rgb(5, 14, 61) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#7a8496] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[7px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center px-[12px] py-[16px] relative w-full">
          <Frame4 />
          <Frame6 isExpanded={isExpanded} />
        </div>
      </div>
    </div>
  );
}

function BottomInputContainer({ isExpanded }: { isExpanded?: boolean }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Bottom Input Container">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="content-stretch flex flex-col items-center justify-end pb-[8px] px-[8px] relative w-full">
          <LeoAvatars isExpanded={isExpanded} />
        </div>
      </div>
    </div>
  );
}

function LeoWindow({ onClose, isExpanded, onToggleExpand }: { onClose?: () => void; isExpanded?: boolean; onToggleExpand?: () => void }) {
  return (
    <div className={`h-full max-w-[720px] min-w-[280px] relative shrink-0 transition-all duration-300 ${isExpanded ? "w-[720px]" : "w-[325px]"}`} data-name="Leo Window" style={{ backgroundImage: CONFIG.panel.panelBgGradient }}>
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative size-full">
        <div className="relative shrink-0 w-full border-b border-solid" data-name=".Leo Header" style={{ backgroundColor: CONFIG.header.headerBgColor, borderColor: CONFIG.header.borderColor }}>
          <div className="flex flex-row items-center overflow-clip size-full">
            <div className="content-stretch flex items-center px-[8px] py-[12px] relative w-full">
              <LeoIconContainer />
              <TopIcons onClose={onClose} onToggleExpand={onToggleExpand} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative w-full" data-name="Leo Window Content">
          <LeoWindowContent />
        </div>
        <BottomInputContainer isExpanded={isExpanded} />
      </div>
      {/* Removed decorative border/shadow overlay to allow element selection */}
    </div>
  );
}

export default function LeoContainer() {
  const [expanded, setExpanded] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => setIsExpanded((prev) => !prev);
  const handleClose = () => { setExpanded(false); setIsExpanded(false); };
  const handleOpen = () => setExpanded(true);

  return (
    <div className="content-stretch flex items-center relative h-full shrink-0" data-name="Leo Container">
      {/* Tab Button - positioned outside the panel on the left, toggles expand */}
      <div
        className={`absolute flex h-[140px] items-center justify-center right-full top-1/2 -translate-y-1/2 w-[32px] z-10 cursor-pointer transition-opacity duration-300 ${expanded ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={handleToggleExpand}
      >
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="backdrop-blur-[25px] h-[140px] relative w-[32px]" data-name="Leo Side Panel Expand">
            <div aria-hidden="true" className="absolute border-[#050e3d] border-l-2 border-solid inset-[0_0_0_-2px] pointer-events-none" />
            <div className="-translate-y-1/2 absolute flex h-[161.622px] items-center justify-center right-0 top-[calc(50%+0.31px)] w-[32px]">
              <div className="-scale-y-100 flex-none">
                <div className="h-[161.622px] relative w-[32px]" data-name="Tab">
                  <div className="absolute inset-[-9.9%_-62.5%_-9.9%_-37.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 193.622">
                      <g filter="url(#filter0_d_1_2105)" id="Tab">
                        <path d={svgPaths.p31afef00} fill="url(#paint0_linear_1_2105)" />
                        <path d={svgPaths.p31afef00} fill="var(--fill-1, #060F3D)" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="193.622" id="filter0_d_1_2105" width="64" x="0" y="0">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dx="4" />
                          <feGaussianBlur stdDeviation="8" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.0588235 0 0 0 0 0.239216 0 0 0 0.24 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2105" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2105" mode="normal" result="shape" />
                        </filter>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2105" x1="44" x2="-4" y1="96.7963" y2="96.7963">
                          <stop stopColor="#054465" />
                          <stop offset="1" stopColor="#050E3D" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[16px] top-1/2">
              <div className={`-scale-y-100 flex-none transition-transform duration-300 ${isExpanded ? "rotate-0" : "rotate-180"}`}>
                <ChevronArrows />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`transition-all duration-300 ease-in-out h-full overflow-hidden ${expanded ? (isExpanded ? "w-[720px]" : "w-[325px]") : "w-0"}`}>
        <LeoWindow onClose={handleClose} isExpanded={isExpanded} onToggleExpand={handleToggleExpand} />
      </div>
      {/* Avatar button to reopen panel - shown when collapsed */}
      <button
        onClick={handleOpen}
        className={`absolute bottom-[24px] right-[24px] size-[48px] rounded-full cursor-pointer border-none p-0 shadow-lg transition-all duration-300 z-20 ${expanded ? "opacity-0 pointer-events-none scale-75" : "opacity-100 scale-100"}`}
        aria-label="Open Leo panel"
      >
        <img src={leoOrbHero} alt="Leo" className="size-full object-cover rounded-full" />
      </button>
    </div>
  );
}