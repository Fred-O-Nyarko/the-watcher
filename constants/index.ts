import PKG from "../package.json";

const STAGING_BASE_URL = "watch.chippycode.com";
const PRODUCTION_BASE_URL = "watch.chippycode.com";

export function envVal(production: string, staging?: string) {
  return process.env.NODE_ENV === "production" ? production : staging;
}

const BASE_URL = envVal(PRODUCTION_BASE_URL, STAGING_BASE_URL) ?? "";
const SECURED = BASE_URL.includes(":") ? "" : "s";

const Constants = {
  IS_TEST: process.env.NODE_ENV === "test",
  IS_DEV: process.env.NODE_ENV === "development",
  BASE_URL,
  SECURED,
  HTTP_BASE_URL: `http${SECURED}://${BASE_URL}`,
  VERSION: PKG.version,
  SUPPORT_CONTACT: {
    MAIL: "nernuer@gmail.com",
    PHONE: "+233559627280",
  },
};

export default Constants;
