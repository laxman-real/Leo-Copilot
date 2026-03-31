import { useEffect, useState } from "react";
import LeoContainer from "./components/LeoContainer";
import BreadcrumbBar from "./components/BreadcrumbBar";
import { cn } from "./components/ui/utils";

const CHROME_DARK_KEY = "leoChromeDark";

export default function App() {
  const [chromeDark, setChromeDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(CHROME_DARK_KEY) === "true";
  });

  useEffect(() => {
    window.localStorage.setItem(CHROME_DARK_KEY, String(chromeDark));
  }, [chromeDark]);

  useEffect(() => {
    document.body.classList.toggle("chrome-dark", chromeDark);
    return () => {
      document.body.classList.remove("chrome-dark");
    };
  }, [chromeDark]);

  return (
    <div
      className={cn(
        "flex flex-col h-screen w-screen transition-colors duration-200",
        chromeDark ? "bg-zinc-950" : "bg-gray-100",
      )}
    >
      <div className="relative flex-1 flex items-center justify-center p-[24px] min-h-0">
        <div
          className={cn(
            "relative flex flex-col w-full h-full max-w-[1440px] max-h-[1024px] shadow-2xl overflow-hidden rounded-lg border transition-colors duration-200",
            chromeDark
              ? "bg-zinc-900 border-zinc-800"
              : "bg-white border-transparent",
          )}
        >
          <BreadcrumbBar chromeDark={chromeDark} onChromeDarkChange={setChromeDark} />
          <div className="flex flex-1 min-h-0">
            <div
              className={cn(
                "flex-1 min-w-0 transition-colors duration-200",
                chromeDark ? "bg-zinc-950/60" : "bg-white",
              )}
            />
            <LeoContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
