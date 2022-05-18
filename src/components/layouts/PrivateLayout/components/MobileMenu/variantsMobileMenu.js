const variants_menu = {
  hidden: {
    opacity: 0,
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 80,
      mass: 0.5,
    },
  },
  show: {
    opacity: 1,
    x: "0",
    transition: {
      type: "spring",
      stiffness: 80,
      mass: 0.5,
    },
  },
};

const variants_bg = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
    },
  },
};

export { variants_bg, variants_menu };
