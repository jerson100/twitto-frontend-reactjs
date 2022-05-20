import { css } from "styled-components";

const BREAKPOINTS = {
  SM: 576, // Small devices (landscape phones, 576px and up)
  MD: 768, // Medium devices (tablets, 768px and up)
  LG: 992, // Large devices (desktops, 992px and up)
  XL: 1200, // Extra large devices (large desktops, 1200px and up)
  XLL: 1400,
};

const SIZES = {
  SMALLER: "SMALLER", //16px
  SMALL: "SMALL", //24px
  NORMAL: "NORMAL", //38px
  BIG: "BIG", //40px
  VERY_BIG: "VERY_BIG", //46px
};

const COLORS = {
  PRIMARY: "rgb(15, 20, 25)",

  //   SECONDARY: "rgb(136, 153, 166)",
  SECONDARY: "rgb(113, 118, 123)",
  ACTIONS: "rgb(29, 155, 240)",

  BLUE: "rgb(29, 155, 240)",
  YELLOW: "rgb(255, 212, 0)",
  PINK: "rgb(249, 24, 128)",
  PURPLE: "rgb(120, 86, 255)",
  ORANGE: "rgb(255, 122, 0)",
  GREEN: "rgb(0, 186, 124)",
  WHITE: "rgba(255,255,255,1)",
  BLACK: "rgba(0,0,0,1)",

  BG_WHITE: "rgb(255, 255, 255)",
  BG_DARK_NIGHT: "rgb(0, 0, 0)",
  BG_LIGHT_NIGHT: "rgb(21, 32, 43)",

  BG_WHITE_PANEL: "rgb(247, 249, 249)",
  BG_DARK_NIGHT_PANEL: "rgb(21, 24, 28)",
  BG_LIGHT_NIGHT_PANEL: "rgb(25, 39, 52)",
};

const BUTTONS = {
  COLORS: {
    PURPLE: {
      BORDER: COLORS.PURPLE,
      BG_COLOR: COLORS.PURPLE,
      COLOR: COLORS.WHITE,
    },
    ORANGE: {
      BORDER: COLORS.ORANGE,
      BG_COLOR: COLORS.ORANGE,
      COLOR: COLORS.WHITE,
    },
    GREEN: {
      BORDER: COLORS.GREEN,
      BG_COLOR: COLORS.GREEN,
      COLOR: COLORS.WHITE,
    },
    BLACK: {
      BORDER: COLORS.BLACK,
      BG_COLOR: COLORS.BLACK,
      COLOR: COLORS.WHITE,
    },
    NORMAL: {
      BORDER: COLORS.WHITE,
      BG_COLOR: COLORS.WHITE,
      COLOR: COLORS.BLACK,
    },
    BLUE: {
      BORDER: COLORS.BLUE,
      BG_COLOR: COLORS.BLUE,
      COLOR: COLORS.WHITE,
    },
  },
};

const TEXT = {
  PARAGRAPH: {
    SIZE: {
      XS: { name: "XS", val: "15px" },
      MD: { name: "XS", val: "15px" },
      LG: { name: "XS", val: "16px" },
      XL: { name: "XS", val: "17px" },
      XXL: { name: "XS", val: "18px" },
    },
    MARGIN: "1rem",
  },
  TITLE: {
    TAGS: {
      H1: {
        SIZE: {
          SM: "2rem",
          XS: "2.2rem",
          MD: "2.4rem",
          LG: "2.6rem",
          XL: "2.8rem",
          XLL: "3.6rem",
        },
        MARGIN: "1.5rem",
      },
      H2: {
        SIZE: {
          SN: "1.8rem",
          XS: "1.9rem",
          MD: "2rem",
          LG: "2.2rem",
          XL: "2.4rem",
          XLL: "2.7rem",
        },
        MARGIN: { name: "XS", val: "1.4rem" },
      },
      H3: {
        SIZE: {
          SM: "1.3rem",
          XS: "1.5rem",
          MD: "1.7rem",
          LG: "1.9rem",
          XL: "2rem",
          XLL: "2.2rem",
        },
        MARGIN: "1.35rem",
      },
      H4: {
        SIZE: {
          SM: "1rem",
          XS: "1.2rem",
          MD: "1.45rem",
          LG: "1.55rem",
          XL: "1.7rem",
          XLL: "2rem",
        },
        MARGIN: "1.45rem",
      },
      H5: {
        SIZE: {
          SM: ".8rem",
          XS: "1rem",
          MD: "1.2rem",
          LG: "1.3rem",
          XL: "1.4rem",
          XLL: "1.5rem",
        },
        MARGIN: "1.2rem",
      },
      H6: {
        SIZE: {
          SM: "0.6rem",
          XS: "0.8rem",
          MD: "0.85rem",
          LG: ".9rem",
          XL: "1rem",
          XLL: "1.1rem",
        },
        MARGIN: "1.1rem",
      },
    },
  },
};

const getTitlesSizeBreakPoint = (tag = "") => {
  tag = tag.toUpperCase();
  return css`
    /* @media (min-width: ${BREAKPOINTS.SM}px) { */
    font-size: ${TEXT.TITLE.TAGS[tag].SIZE.SM};
    /* } */
    @media (min-width: ${BREAKPOINTS.MD}px) {
      font-size: ${TEXT.TITLE.TAGS[tag].SIZE.MD};
    }
    @media (min-width: ${BREAKPOINTS.LG}px) {
      font-size: ${TEXT.TITLE.TAGS[tag].SIZE.LG};
    }
    @media (min-width: ${BREAKPOINTS.XL}px) {
      font-size: ${TEXT.TITLE.TAGS[tag].SIZE.XL};
    }
    @media (min-width: ${BREAKPOINTS.XLL}px) {
      font-size: ${TEXT.TITLE.TAGS[tag].SIZE.XLL};
    }
    margin-bottom: ${TEXT.TITLE.TAGS[tag].MARGIN};
  `;
};

const THEME = {
  TEXT: {
    FONT: {
      PARAGRAPH: {
        SIZE: TEXT.PARAGRAPH.SIZE.LG,
        WEIGHT: "normal",
        MARGIN: TEXT.PARAGRAPH.MARGIN,
      },
      TITLE: {
        TAGS: {
          H1: getTitlesSizeBreakPoint("h1"),
          H2: getTitlesSizeBreakPoint("h2"),
          H3: getTitlesSizeBreakPoint("h3"),
          H4: getTitlesSizeBreakPoint("h4"),
          H5: getTitlesSizeBreakPoint("h5"),
          H6: getTitlesSizeBreakPoint("h6"),
        },
        WEIGHT: "700",
      },
    },
  },
  COLORS: {
    DEFAULT: {
      BACKGROUND: COLORS.BG_WHITE,
      PANEL_BG: COLORS.BG_WHITE_PANEL,
      PRIMARY: COLORS.PRIMARY,
      SECONDARY: COLORS.SECONDARY,
      ACTIONS: COLORS.ACTIONS,
    },
    LIGHT_NIGHT: {
      BACKGROUND: COLORS.BG_LIGHT_NIGHT,
      PANEL_BG: COLORS.BG_LIGHT_NIGHT_PANEL,
      PRIMARY: "rgb(255, 255, 255)",
      SECONDARY: COLORS.SECONDARY,
      ACTIONS: COLORS.ACTIONS,
    },
    DARK_NIGHT: {
      BACKGROUND: COLORS.BG_DARK_NIGHT,
      PANEL_BG: COLORS.BG_DARK_NIGHT_PANEL,
      PRIMARY: "rgb(217, 217, 217)",
      SECONDARY: COLORS.SECONDARY,
      ACTIONS: COLORS.ACTIONS,
    },
  },
  Z_INDEX: {
    NORMAL: 100,
    MODAL: 1000,
  },
};

export { BREAKPOINTS, THEME, COLORS, SIZES, BUTTONS };
