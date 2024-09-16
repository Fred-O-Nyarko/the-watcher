const appTheme = {
  light: {
    isDark: false,
    statusBarColor: "#F8F8FF",
    primary: "#478778",
    backgroundColor: "#fff",
    divider: "#D2C6C6",
    indicator: "#d0d0d0",
    green: "#24c141",
    icons: {
      default: "black",
      active: "#F9A826",
      inactive: "#C0C0C0",
    },
    text: {
      primary: "#4C4D6E",
      bold: "#413E3E",
      buttonText: "#FFFFFF",
      heading: "#878c9d",
      placeholder: "#413f3c80",
    },
    bottomBar: {
      backgroundColor: "#FFFFFF",
      borderTopWidth: 0,
    },
    error: "#ff0000",
    modalBackground: "rgba(16, 24, 32, 0.89)",
    lightModalBackground: "rgba(16, 24, 32, 0.6)",
    shimmerColors: ["#ebebeb", "#c5c5c5", "#ebebeb"],
  },
  dark: {
    isDark: true,
    statusBarColor: "#07071F",
    primary: "#F9A826",
    backgroundColor: "#07071F",
    divider: "#434367",
    indicator: "#6c6c80",
    error: "#FF4C4C",
    green: "#24c141",
    icons: {
      default: "#f6f3ed",
      active: "#F9A826",
      inactive: "#9D9CAE",
    },
    text: {
      primary: "#C9C9E7",
      bold: "#9D9CAE",
      buttonText: "#07071F",
      heading: "#C9C9E7",
      placeholder: "#c9c9e799",
    },
    bottomBar: {
      backgroundColor: "#12112B",
      borderTopWidth: 0,
    },
    modalBackground: "rgba(16, 24, 32, 0.89)",
    lightModalBackground: "rgba(16, 24, 32, 0.6)",
    shimmerColors: ["#262449", "#353363", "#262449"],
  },
};

export type AppTheme = typeof appTheme.light & typeof appTheme.dark;

export default appTheme;
