import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
interface Props {
  setShow: Dispatch<SetStateAction<boolean>>;
  setShowBgNavbar: Dispatch<SetStateAction<boolean>>;
  show: boolean;
  showBgNavbar: boolean;
}

const navbarAnimation = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 1,
    },
  },
};
const Navbar = ({ setShow, show, setShowBgNavbar, showBgNavbar }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        className="w-full bg-black"
        variants={navbarAnimation}
        initial="initial"
        animate="animate"
      >
        <div
          className={`${
            showBgNavbar && 'bg-white'
          } transition-all m-auto py-5 px-5 sm:px-20 max-w-[90rem] xl:max-w-none xl:px-[12vw] w-full flex justify-between items-center   fixed top-0 left-1/2 -translate-x-1/2  z-30 `}
        >
          <div className="relative w-[140px] sm:w-[160px] h-16">
            <Image
              className="object-cover"
              src="/images/logo.png"
              fill
              alt="logo"
            />
          </div>
          {/* <h1 className="text-xl  font-[900]">Explore Indonesia</h1> */}
          <div
            onClick={() => {
              setShow((prev) => !prev);
              !show && setShowBgNavbar(false);
            }}
            className="cursor-pointer"
          >
            Menu
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
