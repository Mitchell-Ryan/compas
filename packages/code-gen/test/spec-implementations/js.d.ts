export type SpecResult = {
  log: import("@compas/stdlib").Logger;
  passed: number;
  skipped: number;
  failed: number;
  suites: {
    name: string;
    index: number;
  }[];
  extraLogs: any[];
};
//# sourceMappingURL=js.d.ts.map
