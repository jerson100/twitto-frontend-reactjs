const variants = {
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

export default variants;
