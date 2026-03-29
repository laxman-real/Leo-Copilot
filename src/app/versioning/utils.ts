export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export function deepMerge<T extends Record<string, unknown>>(
  target: T,
  source: DeepPartial<T>
): T {
  const result = { ...target };
  for (const key in source) {
    const sourceVal = source[key];
    const targetVal = target[key];
    if (
      sourceVal &&
      typeof sourceVal === "object" &&
      !Array.isArray(sourceVal) &&
      targetVal &&
      typeof targetVal === "object" &&
      !Array.isArray(targetVal)
    ) {
      (result as Record<string, unknown>)[key] = deepMerge(
        targetVal as Record<string, unknown>,
        sourceVal as DeepPartial<Record<string, unknown>>
      );
    } else if (sourceVal !== undefined) {
      (result as Record<string, unknown>)[key] = sourceVal;
    }
  }
  return result;
}
