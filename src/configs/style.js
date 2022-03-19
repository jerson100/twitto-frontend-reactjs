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

  SECONDARY: "rgb(136, 153, 166)",
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
      XS: "15px",
      MD: "15px",
      LG: "16px",
      XL: "17px",
      XXL: "18px",
    },
    MARGIN: "1rem",
  },
  TITLE: {
    TAGS: {
      H1: {
        SIZE: {
          XS: "2.2rem",
          MD: "2.4rem",
          LG: "2.6rem",
          XL: "2.7rem",
          XXL: "2.6rem",
        },
        MARGIN: "1.5rem",
      },
      H2: {
        SIZE: {
          XS: "1.9rem",
          MD: "2rem",
          LG: "2.2rem",
          XL: "2.4rem",
          XXL: "2.6rem",
        },
        MARGIN: "1.4rem",
      },
      H3: {
        SIZE: {
          XS: "1.7rem",
          MD: "1.9rem",
          LG: "2rem",
          XL: "2.2rem",
          XXL: "2.3rem",
        },
        MARGIN: "1.35rem",
      },
      H4: {
        SIZE: {
          XS: "1.4rem",
          MD: "1.65rem",
          LG: "1.75rem",
          XL: "2rem",
          XXL: "2.1rem",
        },
        MARGIN: "1.45rem",
      },
      H5: {
        SIZE: {
          XS: "1rem",
          MD: "1.2rem",
          LG: "1.3rem",
          XL: "1.4rem",
          XXL: "1.5rem",
        },
        MARGIN: "1.2rem",
      },
      H6: {
        SIZE: {
          XS: "0.8rem",
          MD: "0.85rem",
          LG: ".9rem",
          XL: "1rem",
          XXL: "1.1rem",
        },
        MARGIN: "1.1rem",
      },
    },
  },
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
          H1: {
            SIZE: TEXT.TITLE.TAGS.H1.SIZE.LG,
            MARGIN: TEXT.TITLE.TAGS.H1.MARGIN,
          },
          H2: {
            SIZE: TEXT.TITLE.TAGS.H2.SIZE.LG,
            MARGIN: TEXT.TITLE.TAGS.H2.MARGIN,
          },
          H3: {
            SIZE: TEXT.TITLE.TAGS.H3.SIZE.LG,
            MARGIN: TEXT.TITLE.TAGS.H3.MARGIN,
          },
          H4: {
            SIZE: TEXT.TITLE.TAGS.H4.SIZE.LG,
            MARGIN: TEXT.TITLE.TAGS.H4.MARGIN,
          },
          H5: {
            SIZE: TEXT.TITLE.TAGS.H5.SIZE.LG,
            MARGIN: TEXT.TITLE.TAGS.H5.MARGIN,
          },
          H6: {
            SIZE: TEXT.TITLE.TAGS.H6.SIZE.LG,
            MARGIN: TEXT.TITLE.TAGS.H6.MARGIN,
          },
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
};

export { BREAKPOINTS, THEME, COLORS, SIZES, BUTTONS };
