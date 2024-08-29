export function gitPullEjsTpl(
  repository: string,
  opts?: { targetDir?: string; outputDir?: string; branch?: string; },
  params?: Record<string, any>,
): Promise<void>;

export function npmPullEjsTpl(
  pkgName: string,
  opts?: { registryUrl?: string; targetDir?: string; outputDir?: string; tag?: string; },
  params?: Record<string, any>,
): Promise<void>;

export type ParseError = {
  type: 'superEjsParseError';
  data: {
    path: string;
    error: unknown;
  }[];
};
