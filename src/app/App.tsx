import LeoContainer from "./components/LeoContainer";
import BreadcrumbBar from "./components/BreadcrumbBar";
import { VersionProvider } from "./versioning/VersionContext";
import VersionBar from "./versioning/VersionBar";

export default function App() {
  return (
    <VersionProvider>
      <div className="flex flex-col h-screen w-screen bg-gray-100">
        <VersionBar />
        <div className="flex-1 flex items-center justify-center p-[24px]">
          <div className="relative flex flex-col w-full h-full max-w-[1440px] max-h-[1024px] bg-white shadow-2xl overflow-hidden rounded-lg">
            <BreadcrumbBar />
            <div className="flex flex-1 min-h-0">
              {/* Main white area fills remaining space */}
              <div className="flex-1" />
              {/* Leo side panel */}
              <LeoContainer />
            </div>
          </div>
        </div>
      </div>
    </VersionProvider>
  );
}
