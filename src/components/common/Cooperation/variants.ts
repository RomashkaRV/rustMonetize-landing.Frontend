export const variantsTitle = {
  offscreen: {
    scale: 0.5
  },
  onscreen: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 1.5
    }
  }
};

export const variantsUl = {
  onscreen: {
    transition: { staggerChildren: 0.3, delayChildren: 0.2 }
  },
  offscreen: {
    transition: { staggerChildren: 0.1, staggerDirection: 2 }
  }
};

export const variantsLi = {
  onscreen: {
    y: 0,
    opacity: 1
  },
  offscreen: {
    y: 50,
    opacity: 0
  }
};
