import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "https://watch.chippycode.com/api/json-spec",
  apiFile: "./index.ts",
  apiImport: "restApi",
  outputFile: "openapi.generated.ts",
  exportName: "api",
  hooks: {
    lazyQueries: true,
    mutations: true,
    queries: true,
  },
};

export default config;
