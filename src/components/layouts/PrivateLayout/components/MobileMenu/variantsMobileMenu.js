const variants_menu = {
  hidden: {
    opacity: 0,
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 80,
      mass: 0.4,
    },
  },
  show: {
    opacity: 1,
    x: "0",
    transition: {
      type: "spring",
      stiffness: 80,
      mass: 0.4,
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
      delayChildren: 0.1,
    },
  },
};

export { variants_bg, variants_menu };
