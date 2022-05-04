// screen sizes of devices for media queries
const width = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tab: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const breakPoints = {
  ms: `(min-width: ${width.mobileS})`,
  mm: `(min-width: ${width.mobileM})`,
  ml: `(min-width: ${width.mobileL})`,
  tablet: `(min-width: ${width.tab})`,
  laptop: `(min-width: ${width.laptop})`,
  laptopL: `(min-width: ${width.laptopL})`,
  desktop: `(min-width: ${width.desktop})`,
};

export default breakPoints;
