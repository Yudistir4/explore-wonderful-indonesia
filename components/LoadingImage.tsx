import { motion } from 'framer-motion';
import React, { Dispatch, SetStateAction } from 'react';

const wrapper = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const children = {
  initial: {
    opacity: 0,
    y: 300,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.25, 0.9],
      duration: 1.6,
    },
},
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
};

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const LoadingImage = ({ setLoading }: Props) => {
  return (
    <motion.div
      variants={wrapper}
      onAnimationComplete={() => setLoading(false)}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute h-screen w-screen flex justify-center items-center overflow-hidden"
    >
      <motion.img
        // layoutId="bali"
        variants={children}
        src={`/images/bali.webp`}
        className="absolute left-[13%] top-[17%] w-[35%] sm:w-[25%] lg:w-[22%]  object-contain"
        alt=""
      />
      <motion.img
        // layoutId="komodo"
        variants={children}
        src={`/images/pulau-komodo.webp`}
        className="absolute  left-[10%] bottom-[13%] w-[35%] sm:w-[25%] lg:w-[22%]  object-contain"
        alt=""
      />

      <motion.img
        // layoutId="raja-ampat"
        variants={children}
        src={`/images/raja-ampat.webp`}
        className="absolute  right-[8%] top-[15%] w-[35%] sm:w-[25%] lg:w-[22%]  object-contain"
        alt=""
      />
      <motion.img
        // layoutId="yogyakarta"
        variants={children}
        src={`/images/yogyakarta.webp`}
        className="absolute right-[10%] bottom-[10%] w-[35%] sm:w-[25%] lg:w-[22%]  object-contain"
        alt=""
      />
      <motion.img
        layoutId="bromo"
        variants={children}
        src={`/images/bromo.webp`}
        className="w-1/2 object-contain h-max min-[600px]:w-[30%] sm:w-1/2 z-10"
        alt=""
      />
    </motion.div>
  );
};

export default LoadingImage;
