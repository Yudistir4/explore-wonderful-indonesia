import React, { Dispatch, SetStateAction, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  black,
  title,
  containerTitle,
  dissapear,
  imageContainer,
  red,
  bali,
  bromo,
  rajaAmpat,
  pulauKomodo,
  yogyakarta,
} from '@/utils/animationUtils';
interface Props {
  show: boolean;
  setShowBgNavbar: Dispatch<SetStateAction<boolean>>;
}

interface Place {
  name: string;
  img: string;
  animation: any;
}

const places: Place[] = [
  { name: 'Bali', img: 'bali.webp', animation: bali },
  { name: 'Gunung Bromo', img: 'bromo.webp', animation: bromo },
  { name: 'Yogyakarta', img: 'yogyakarta.webp', animation: yogyakarta },
  {
    name: 'Pulau Komodo',
    img: 'pulau-komodo.webp',
    animation: pulauKomodo,
  },
  { name: 'Raja Ampat', img: 'raja-ampat.webp', animation: rajaAmpat },
  //   'Yogyakarta',
];

const Menu = ({ show, setShowBgNavbar }: Props) => {
  const [place, setPlace] = useState<Place | null>(null);
  return (
    <AnimatePresence onExitComplete={() => setShowBgNavbar(true)}>
      {show && (
        <div className="w-full h-screen fixed z-20 overflow-hidden " id="menu">
          {/* <> */}
          {/* Background */}
          <AnimatePresence>
            {place && (
              <motion.div
                variants={imageContainer}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute flex bg-black w-screen items-center justify-center   h-screen z-20  "
              >
                <motion.img
                  variants={place.animation}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  src={`/images/${place.img}`}
                  className="bg-black hidden sm:block  object-cover w-[200vw] h-screen z-20 "
                  alt=""
                />
                <motion.img
                  // variants={place.animation}
                  // initial="initial"
                  // animate="animate"
                  // exit="exit"
                  src={`/images/${place.img}`}
                  className="bg-black sm:hidden  object-cover w-[200vw] h-screen      sm:object-contain  z-20 "
                  alt=""
                />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            variants={red}
            initial="initial"
            animate="animate"
            exit="exit"
            className="h-screen w-[200vw]  bg-red-600 absolute -left-10 z-10 "
          ></motion.div>
          <motion.div
            variants={black}
            initial="initial"
            animate="animate"
            exit="exit"
            className="h-screen  w-[200vw] bg-black absolute -left-10 "
          ></motion.div>
          <motion.div className="m-auto h-screen w-full relative z-20 p-20  gap-10 flex flex-col items-center justify-center max-w-[90rem] xl:max-w-none xl:px-[12vw]">
            <div className="flex w-full items-center gap-10 justify-center sm:justify-between">
              {/* title */}
              <motion.div
                variants={containerTitle}
                initial="initial"
                animate="animate"
                exit="exit"
                className="font-[800] items-center sm:items-start    text-[60px] md:text-[80px] flex flex-col text-white  "
              >
                <div className="overflow-hidden">
                  <motion.h3
                    variants={title}
                    whileHover={{
                      skewX: 1,
                      skewY: 2,
                    }}
                    className="hover:text-black  w-fit cursor-pointer transition-all"
                  >
                    Uncover
                  </motion.h3>
                </div>
                <div className="overflow-hidden">
                  <motion.h3
                    variants={title}
                    whileHover={{
                      skewX: 1,
                      skewY: 2,
                    }}
                    className="hover:text-black  w-fit cursor-pointer transition-all"
                  >
                    Hidden
                  </motion.h3>
                </div>
                <div className="overflow-hidden">
                  <motion.h3
                    variants={title}
                    whileHover={{
                      skewX: 1,
                      skewY: 2,
                    }}
                    className="hover:text-black w-fit cursor-pointer transition-all"
                  >
                    Gems
                  </motion.h3>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                variants={dissapear}
                initial="initial"
                animate="animate"
                exit="exit"
                className="max-w-md text-white hidden sm:block"
              >
                <h3 className="font-bold drop-shadow-md">Our Promise</h3>
                <p className="drop-shadow-md">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Asperiores aliquid dicta saepe excepturi laboriosam ipsum ad,
                  esse incidunt suscipit tempora!
                </p>
              </motion.div>
            </div>

            {/* Locations */}
            <motion.div
              variants={dissapear}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex w-full gap-2 sm:gap-0 lg:gap-5 justify-center lg:justify-start items-center flex-wrap text-white"
            >
              <div className="text-center  w-full lg:w-fit">Location:</div>
              {places.map((place) => (
                <div
                  key={place.name}
                  onMouseEnter={() => setPlace(place)}
                  onMouseLeave={() => setPlace(null)}
                  className="hover:bg-black/50 cursor-pointer px-2 sm:px-6 sm:hover:px-6 py-2 transition-all rounded-lg hover:text-white"
                >
                  {place.name}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="z-40">asas</div>
          {/* </> */}
        </div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
