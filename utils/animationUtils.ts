export const red = {
  initial: {
    y: '-100vh',
    rotate: 5,
  },
  animate: {
    y: 0,
    rotate: 0,
    transition: { duration: 0.4, ease: 'linear' },
  },
  exit: {
    y: '-100vh',
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};
export const black = {
  initial: {
    y: '-100vh',
    rotate: 5,
  },
  animate: {
    y: 0,
    rotate: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  exit: {
    y: '-100vh',
    transition: { duration: 0.5, ease: 'easeIn' },
  },
};
export const title = {
  initial: {
    y: 200,
    rotate: 10,
  },
  animate: {
    y: 0,
    rotate: 0,
    transition: { duration: 0.01, ease: 'easeOut' },
  },
  exit: {
    y: -200,
    rotate: 10,
    transition: { duration: 0.01, ease: 'easeOut' },
  },
};
export const dissapear = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut', delay: 0.5 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.1, ease: 'easeOut' },
  },
};
export const imageContainer = {
  initial: {
    // rotate: 10,
    skewY: 1,
    opacity: 0,
    scale: 1.01,
  },
  animate: {
    opacity: 1,
    skewY: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.03, ease: 'easeOut' },
  },
};

export const bali = {
  initial: {
    x: 100,
    scale: 1.3,
  },
  animate: {
    x: 50,
    // y: [2, 0, 2, 0, 2, 0, 2, 1],
    transition: {
      duration: 3,
      loop: Infinity,
    },
  },
};
export const yogyakarta = {
  initial: {
    scale: 1.3,
  },
  animate: {
    // y: [2, 0, 2, 0, 2, 0, 2, 1],
    transition: {
      duration: 3,
      loop: Infinity,
    },
  },
};
export const bromo = {
  initial: {
    x: 100,
    scale: 1.3,
  },
  animate: {
    x: -50,
    y: [2, 0, 0, 0, 2, 0, 2, 0, 2, 2],
    transition: {
      duration: 3,
      loop: Infinity,
    },
  },
};
export const pulauKomodo = {
  initial: {
    x: 100,
    scale: 1.3,
  },
  animate: {
    x: 0,
    scale: 1.1,
    transition: {
      duration: 3,
      loop: Infinity,
    },
  },
};
export const rajaAmpat = {
  initial: {
    x: 0,
    scale: 1.5,
  },
  animate: {
    scale: 1,

    transition: {
      duration: 2,
      loop: Infinity,
    },
  },
};

export const containerTitle = {
  animate: {
    transition: {
      staggerChildren: 0.1, // add some delay for each child element
      delayChildren: 0.2, // add a delay before the first child animation starts
    },
  },
};
