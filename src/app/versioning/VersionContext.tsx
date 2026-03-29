import { createContext, useContext, useReducer, useEffect } from "react";
import type { ComponentConfig, VersionSnapshot } from "./types";
import { DEFAULT_CONFIG } from "./defaults";
import { loadVersions, saveVersion, loadLatestVersion, renameVersion as renameVersionInStorage } from "./storage";
import { deepMerge, type DeepPartial } from "./utils";

interface VersionState {
  currentConfig: ComponentConfig;
  lastAcceptedConfig: ComponentConfig;
  versions: VersionSnapshot[];
  isDirty: boolean;
}

type VersionAction =
  | { type: "ACCEPT_CHANGES"; name?: string }
  | { type: "UNDO" }
  | { type: "LOAD_VERSION"; id: string }
  | { type: "UPDATE_CONFIG"; partial: DeepPartial<ComponentConfig> }
  | { type: "INIT"; versions: VersionSnapshot[]; config: ComponentConfig }
  | { type: "RENAME_VERSION"; id: string; name: string };

function reducer(state: VersionState, action: VersionAction): VersionState {
  switch (action.type) {
    case "INIT":
      return {
        currentConfig: action.config,
        lastAcceptedConfig: action.config,
        versions: action.versions,
        isDirty: false,
      };

    case "UPDATE_CONFIG": {
      const newConfig = deepMerge(
        state.currentConfig as unknown as Record<string, unknown>,
        action.partial as DeepPartial<Record<string, unknown>>
      ) as unknown as ComponentConfig;
      return {
        ...state,
        currentConfig: newConfig,
        isDirty: true,
      };
    }

    case "ACCEPT_CHANGES": {
      const versionNumber = state.versions.length + 1;
      const snapshot: VersionSnapshot = {
        id: crypto.randomUUID(),
        name: action.name || `Version ${versionNumber}`,
        timestamp: Date.now(),
        config: state.currentConfig,
      };
      saveVersion(snapshot);
      const updatedVersions = loadVersions();
      return {
        ...state,
        lastAcceptedConfig: state.currentConfig,
        versions: updatedVersions,
        isDirty: false,
      };
    }

    case "UNDO":
      return {
        ...state,
        currentConfig: state.lastAcceptedConfig,
        isDirty: false,
      };

    case "LOAD_VERSION": {
      const version = state.versions.find((v) => v.id === action.id);
      if (!version) return state;
      return {
        ...state,
        currentConfig: version.config,
        lastAcceptedConfig: version.config,
        isDirty: false,
      };
    }

    case "RENAME_VERSION": {
      renameVersionInStorage(action.id, action.name);
      return {
        ...state,
        versions: state.versions.map((v) =>
          v.id === action.id ? { ...v, name: action.name } : v
        ),
      };
    }

    default:
      return state;
  }
}

interface VersionContextValue {
  currentConfig: ComponentConfig;
  versions: VersionSnapshot[];
  isDirty: boolean;
  acceptChanges: (name?: string) => void;
  undo: () => void;
  loadVersion: (id: string) => void;
  updateConfig: (partial: DeepPartial<ComponentConfig>) => void;
  renameVersion: (id: string, name: string) => void;
}

const VersionContext = createContext<VersionContextValue | null>(null);

export function VersionProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    currentConfig: DEFAULT_CONFIG,
    lastAcceptedConfig: DEFAULT_CONFIG,
    versions: [],
    isDirty: false,
  });

  useEffect(() => {
    const versions = loadVersions();
    const latest = loadLatestVersion();
    const config = latest ? latest.config : DEFAULT_CONFIG;
    dispatch({ type: "INIT", versions, config });

    // Auto-save initial version if none exist
    if (versions.length === 0) {
      const initial: VersionSnapshot = {
        id: crypto.randomUUID(),
        name: "Version 1",
        timestamp: Date.now(),
        config: DEFAULT_CONFIG,
      };
      saveVersion(initial);
      dispatch({ type: "INIT", versions: [initial], config: DEFAULT_CONFIG });
    }
  }, []);

  const value: VersionContextValue = {
    currentConfig: state.currentConfig,
    versions: state.versions,
    isDirty: state.isDirty,
    acceptChanges: (name?: string) => dispatch({ type: "ACCEPT_CHANGES", name }),
    undo: () => dispatch({ type: "UNDO" }),
    loadVersion: (id: string) => dispatch({ type: "LOAD_VERSION", id }),
    updateConfig: (partial: DeepPartial<ComponentConfig>) =>
      dispatch({ type: "UPDATE_CONFIG", partial }),
    renameVersion: (id: string, name: string) =>
      dispatch({ type: "RENAME_VERSION", id, name }),
  };

  return (
    <VersionContext.Provider value={value}>{children}</VersionContext.Provider>
  );
}

export function useVersion(): VersionContextValue {
  const ctx = useContext(VersionContext);
  if (!ctx) throw new Error("useVersion must be used within VersionProvider");
  return ctx;
}
