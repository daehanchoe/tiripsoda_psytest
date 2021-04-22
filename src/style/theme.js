const size = {
  mobile: "100%",
  tablet: "90%",
  laptop: "35%",
  desktop: "33%",
};

const theme = {
  mainColor: "#0a4297",
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;