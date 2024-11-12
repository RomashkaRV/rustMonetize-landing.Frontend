export const variantsBlock = {
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1
    }
  },
  offscreen: {
    scale: 0.5,
    opacity: 0
  }
};

export const variantsList = {
  onscreen: {
    transition: { staggerChildren: 0.5, delayChildren: 0.2 }
  },
  offscreen: {
    transition: { staggerChildren: 1, staggerDirection: 1 }
  }
};
