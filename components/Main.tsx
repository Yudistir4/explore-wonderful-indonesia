import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import TextAnimation from './TextAnimation';

const descAnimation = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.8,
    },
  },
};

const Main = () => {
  const [isAnimationDone, setIsAnimationDone] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsAnimationDone(true);
    }, 2500);
  }, []);

  return (
    <div className="p-5 flex flex-col justify-center   mt-20">
      {/* Banner */}
      <div className="xs:px-[5%] sm:px-[8%]  text-5xl xs:text-6xl  sm:text-7xl md:text-[90px] lg:text-[110px] gap-2  xl:text-[130px]  flex flex-col   font-[500]">
        {/* TITLE 1 */}
        <div className="flex items-center justify-between">
          <TextAnimation text="explore" />
          <motion.p
            variants={descAnimation}
            initial="initial"
            animate="animate"
            className="text-xs max-w-[200px] font-normal hidden sm:block"
          >
            We are specialised in setting up the foundation of your brand and
            setting you up for success.
          </motion.p>
        </div>
        {/* TITLE 2 */}
        <div
          className={`flex w-[300vw] relative -left-[10%] translate-x-[10vw] -ml-[20px]   ${
            isAnimationDone && 'running-text'
          } `}
        >
          <div className=" w-1/2 flex justify-around">
            <TextAnimation text="wonderful" />
            <TextAnimation text="wonderful" />
          </div>
          <div className=" w-1/2 flex justify-around">
            <div>wonderful</div>
            <div>wonderful</div>
            {/* <TextAnimation text="wonderful" />
            <TextAnimation text="wonderful" /> */}
          </div>
        </div>

        {/* TITLE 3 */}
        <div className="flex justify-end mr-[10%] ">
          <TextAnimation text="indonesia" />
        </div>
      </div>

      <motion.img
        layoutId="bromo"
        // variants={place.animation}
        // initial="initial"
        // animate="animate"
        // exit="exit"
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
        src={`/images/bromo.webp`}
        className="w-full m-auto   sm:w-[90%]  object-contain mt-10 relative -top-[60px] -z-10   xs:-top-[65px] sm:-top-[70px] md:-top-[78px] lg:-top-[88px] xl:-top-[97px] "
        alt=""
      />
    </div>
  );
};

export default Main;
