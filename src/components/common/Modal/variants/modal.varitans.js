const modal = {
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 360,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    rotate: 0,
    y: "-50vw",
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};

export { modal };
