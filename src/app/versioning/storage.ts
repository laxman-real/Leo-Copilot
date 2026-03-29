import type { VersionSnapshot } from "./types";

const STORAGE_KEY = "leo-copilot-versions";
const MAX_VERSIONS = 10;

export function loadVersions(): VersionSnapshot[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as VersionSnapshot[];
  } catch {
    return [];
  }
}

export function saveVersion(snapshot: VersionSnapshot): void {
  try {
    const versions = loadVersions();
    versions.unshift(snapshot);
    const pruned = versions.slice(0, MAX_VERSIONS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pruned));
  } catch {
    // quota exceeded or other storage error — silently fail
  }
}

export function deleteVersion(id: string): void {
  try {
    const versions = loadVersions().filter((v) => v.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(versions));
  } catch {
    // silently fail
  }
}

export function renameVersion(id: string, name: string): void {
  try {
    const versions = loadVersions();
    const version = versions.find((v) => v.id === id);
    if (version) {
      version.name = name;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(versions));
    }
  } catch {
    // silently fail
  }
}

export function loadLatestVersion(): VersionSnapshot | null {
  const versions = loadVersions();
  return versions.length > 0 ? versions[0] : null;
}
