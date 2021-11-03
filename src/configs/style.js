const BREAKPOINTS = {
  SM: 576, // Small devices (landscape phones, 576px and up)
  MD: 768, // Medium devices (tablets, 768px and up)
  LG: 992, // Large devices (desktops, 992px and up)
  XL: 1200, // Extra large devices (large desktops, 1200px and up)
  XLL: 1400,
};

const COLORS = {
  PRIMARY_COLOR: "rgb(15, 20, 25)",

  SECONDARY_COLOR: "rgb(136, 153, 166)",
  ACTIONS: "rgb(29, 155, 240)",

  BLUE_COLOR: "rgb(29, 155, 240)",
  YELLOW_COLOR: "rgb(255, 212, 0)",
  PINK_COLOR: "rgb(249, 24, 128)",
  PURPLE_COLOR: "rgb(120, 86, 255)",
  ORANGE_COLOR: "rgb(255, 122, 0)",
  GREEN_COLOR: "rgb(0, 186, 124)",

  BG_WHITE: "rgb(255, 255, 255)",
  BG_DARK_NIGHT: "rgb(0, 0, 0)",
  BG_LIGHT_NIGHT: "rgb(21, 32, 43)",

  BG_WHITE_PANEL: "rgb(247, 249, 249)",
  BG_DARK_NIGHT_PANEL: "rgb(21, 24, 28)",
  BG_LIGHT_NIGHT_PANEL: "rgb(25, 39, 52)",
};

const THEME = {
  TEXT: {
    FONT: {
      PARAGRAPH: {
        SIZE: {
          XS: "15px",
          MD: "15px",
          LG: "16px",
          XL: "17px",
          XXL: "18px",
        },
        WEIGHT: "normal",
        MARGIN: "1rem",
      },
      TITLE: {
        TAGS: {
          H1: {
            SIZE: {
              XS: "1.05rem",
              MD: "1.15rem",
              LG: "1.2rem",
              XL: "1.25rem",
              XXL: "1.3rem",
            },
            MARGIN: "1.2rem",
          },
          H2: {
            SIZE: {
              XS: "1rem",
              MD: "1.05rem",
              LG: "1.1rem",
              XL: "1.15rem",
              XXL: "1.2rem",
            },
            MARGIN: "1.15rem",
          },
          H3: {
            SIZE: {
              XS: "0.89rem",
              MD: "1rem",
              LG: "1.05rem",
              XL: "1.1rem",
              XXL: "1.15rem",
            },
            MARGIN: "1.13rem",
          },
          H4: {
            SIZE: {
              XS: "0.85rem",
              MD: "0.9rem",
              LG: "1.02rem",
              XL: "1.08rem",
              XXL: "1.1rem",
            },
            MARGIN: "1.1rem",
          },
          H5: {
            SIZE: {
              XS: "0.82rem",
              MD: "0.89rem",
              LG: "1rem",
              XL: "1.05rem",
              XXL: "1.09rem",
            },
            MARGIN: "1rem",
          },
          H6: {
            SIZE: {
              XS: "0.75rem",
              MD: "0.78rem",
              LG: ".8rem",
              XL: ".83rem",
              XXL: ".86rem",
            },
            MARGIN: ".8rem",
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
      PRIMARY: COLORS.PRIMARY_COLOR,
      SECONDARY: COLORS.SECONDARY_COLOR,
      ACTIONS: COLORS.ACTIONS,
    },
    LIGHT_NIGHT: {
      BACKGROUND: COLORS.BG_LIGHT_NIGHT,
      PANEL_BG: COLORS.BG_LIGHT_NIGHT_PANEL,
      PRIMARY: "rgb(255, 255, 255)",
      SECONDARY: COLORS.SECONDARY_COLOR,
      ACTIONS: COLORS.ACTIONS,
    },
    DARK_NIGHT: {
      BACKGROUND: COLORS.BG_DARK_NIGHT,
      PANEL_BG: COLORS.BG_DARK_NIGHT_PANEL,
      PRIMARY: "rgb(217, 217, 217)",
      SECONDARY: COLORS.SECONDARY_COLOR,
      ACTIONS: COLORS.ACTIONS,
    },
  },
};

export { BREAKPOINTS, THEME, COLORS };
