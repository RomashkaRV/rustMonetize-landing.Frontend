export const variantsTitle = {
  offscreen: {
    x: typeof window !== "undefined" ? -window.innerWidth : 0
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      duration: 2
    }
  }
};
