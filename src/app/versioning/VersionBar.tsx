import { useState, useRef, useEffect } from "react";
import { History, Check, Undo2, Pencil } from "lucide-react";
import { useVersion } from "./VersionContext";

function timeAgo(timestamp: number): string {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function VersionItem({
  id,
  name,
  timestamp,
  isCurrent,
  onLoad,
  onRename,
}: {
  id: string;
  name: string;
  timestamp: number;
  isCurrent: boolean;
  onLoad: () => void;
  onRename: (name: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(name);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) inputRef.current?.focus();
  }, [editing]);

  const handleSubmit = () => {
    const trimmed = editValue.trim();
    if (trimmed && trimmed !== name) {
      onRename(trimmed);
    } else {
      setEditValue(name);
    }
    setEditing(false);
  };

  if (editing) {
    return (
      <div className="w-full flex items-center gap-[8px] px-[12px] py-[6px]">
        <input
          ref={inputRef}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
            if (e.key === "Escape") {
              setEditValue(name);
              setEditing(false);
            }
          }}
          className="flex-1 bg-[#3f3f46] text-white text-[12px] px-[8px] py-[4px] rounded-[4px] border border-[#6366f1] outline-none font-medium"
        />
      </div>
    );
  }

  return (
    <div
      className={`w-full flex items-center justify-between px-[12px] py-[8px] text-[12px] hover:bg-white/10 transition-colors group ${
        isCurrent ? "text-white" : "text-white/60"
      }`}
    >
      <button
        onClick={onLoad}
        className="flex-1 text-left font-medium bg-transparent border-none cursor-pointer text-inherit p-0"
      >
        {name}
      </button>
      <div className="flex items-center gap-[6px]">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setEditing(true);
          }}
          className="opacity-0 group-hover:opacity-100 bg-transparent border-none cursor-pointer p-[2px] text-white/40 hover:text-white transition-all"
          aria-label={`Rename ${name}`}
        >
          <Pencil className="w-[11px] h-[11px]" />
        </button>
        <span className="text-white/40 text-[11px]">
          {timeAgo(timestamp)}
        </span>
      </div>
    </div>
  );
}

export default function VersionBar() {
  const { versions, isDirty, acceptChanges, undo, loadVersion, renameVersion } =
    useVersion();
  const [historyOpen, setHistoryOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentVersionName =
    versions.length > 0 ? versions[0].name : "Version 1";

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setHistoryOpen(false);
      }
    }
    if (historyOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [historyOpen]);

  return (
    <div className="bg-[#18181b] h-[40px] w-full flex items-center px-[16px] gap-[12px] shrink-0 z-50">
      {/* Left: Version name + dirty indicator */}
      <div className="flex items-center gap-[8px]">
        <span className="text-[12px] text-white/70 font-medium">
          {currentVersionName}
        </span>
        {isDirty && (
          <span className="size-[6px] rounded-full bg-[#f59e0b] shrink-0" />
        )}
      </div>

      {/* Center: History dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setHistoryOpen(!historyOpen)}
          className="flex items-center gap-[6px] px-[8px] py-[4px] rounded-[6px] text-[12px] text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer bg-transparent border-none"
        >
          <History className="w-[14px] h-[14px]" />
          <span>History</span>
        </button>

        {historyOpen && versions.length > 0 && (
          <div className="absolute top-[calc(100%+4px)] left-0 bg-[#27272a] border border-[#3f3f46] rounded-[8px] shadow-xl min-w-[250px] py-[4px] z-50">
            {versions.map((v, i) => (
              <VersionItem
                key={v.id}
                id={v.id}
                name={v.name}
                timestamp={v.timestamp}
                isCurrent={i === 0}
                onLoad={() => {
                  loadVersion(v.id);
                  setHistoryOpen(false);
                }}
                onRename={(name) => renameVersion(v.id, name)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right: Undo + Accept */}
      <button
        onClick={undo}
        disabled={!isDirty}
        className={`flex items-center gap-[6px] px-[10px] py-[4px] rounded-[6px] text-[12px] font-medium transition-colors cursor-pointer border-none ${
          isDirty
            ? "text-white/80 hover:text-white hover:bg-white/10 bg-transparent"
            : "text-white/30 bg-transparent cursor-not-allowed"
        }`}
      >
        <Undo2 className="w-[14px] h-[14px]" />
        Undo
      </button>

      <button
        onClick={() => acceptChanges()}
        disabled={!isDirty}
        className={`flex items-center gap-[6px] px-[12px] py-[5px] rounded-[6px] text-[12px] font-medium transition-colors cursor-pointer border-none ${
          isDirty
            ? "bg-[#6366f1] text-white hover:bg-[#4f46e5]"
            : "bg-[#6366f1]/30 text-white/40 cursor-not-allowed"
        }`}
      >
        <Check className="w-[14px] h-[14px]" />
        Accept Changes
      </button>
    </div>
  );
}
