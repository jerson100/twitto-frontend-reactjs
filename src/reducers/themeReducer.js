const THEME_ACTIONS = {
  SET_THEME: "SET_THEME",
  SET_FONT: "SET_FONT",
  SET_THRID_COLOR: "SET_THRID_COLOR",
};

const INITIAL_THEME_STATE = {
  theme: null,
  font: null,
  third_color: null,
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case THEME_ACTIONS.SET_THEME:
      return { ...state, theme: action.payload };
    case THEME_ACTIONS.SET_FONT:
      return { ...state, font: action.payload };
    case THEME_ACTIONS.SET_THRID_COLOR:
      return { ...state, third_color: action.payload };
    default:
      return state;
  }
};

export { themeReducer, THEME_ACTIONS, INITIAL_THEME_STATE };
