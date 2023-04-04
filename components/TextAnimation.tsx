import React from 'react';
import { motion } from 'framer-motion';
const container = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 40,
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.1,
    },
  },
};

interface Props {
  text: string;
}
const Text = ({ text }: Props) => {
  return (
    // <div className="font-bold text-5xl flex items-center h-screen justify-center ">
    <motion.span
      className="flex shrink-0 overflow-hidden"
      variants={container}
      initial="initial"
      animate="animate"
    >
      {text.split('').map((letter, i) => (
        <motion.span className="" variants={letterAni} key={i}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
    // </div>
  );
};

export default Text;
