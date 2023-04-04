import React, { useEffect, useRef, useState } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useInView } from 'framer-motion';
const topDestinations = [
  {
    img: 'bali-temple.webp',
    place: 'bali',
  },
  {
    img: 'bromo2.webp',
    place: 'bromo',
  },
  {
    img: 'klingking-beach.webp',
    place: 'Klingking Beach',
  },
  {
    img: 'komodo.webp',
    place: 'Pulau Komodo',
  },
  {
    img: 'nusa-penida.webp',
    place: 'Nusa Penida',
  },
];

const TopDestinations = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const ref = useRef<HTMLDivElement | null>(null);
  const [activeImg, setActiveImg] = useState(topDestinations[1]);

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  const onClick = (direction: string) => {
    if (ref.current) {
      let index = topDestinations.findIndex(
        (active) => active.img === activeImg.img
      );
      console.log(index);

      if (direction === 'right' && index !== topDestinations.length - 2) {
        setActiveImg(topDestinations[index + 1]);
      } else if (direction === 'left' && index !== 1) {
        setActiveImg(topDestinations[index - 1]);
      }
      let { scrollLeft, offsetWidth } = ref.current;
      const el =
        direction == 'right'
          ? scrollLeft + offsetWidth / 3
          : scrollLeft - offsetWidth / 3;
      ref.current.scrollTo({ left: el, behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={containerRef}
      className={`${
        isInView ? 'opacity-100' : 'opacity-0'
      } transition-all duration-[1s] flex flex-col md:flex-row   px-5 sm:px-10 md:px-20 gap-5 items-center md:gap-10`}
    >
      {/* Title , desc */}
      <div className="text-center md:w-1/3 shrink-0 md:text-left">
        <h3 className="text-xl font-semibold md:text-3xl xl:text-5xl">
          Top
          <br className="hidden xs:block" /> Destination
        </h3>
        <p className="max-w-xs">
          Find interesting favorite destinations that you can visit in Indonesia
        </p>
      </div>

      <div className="relative">
        {/* foto gallery */}
        <div
          ref={ref}
          style={{ backfaceVisibility: 'hidden' }}
          className="flex  scrollbar-hide overflow-scroll  py-10  "
        >
          {/* img wrapper */}
          <button
            onClick={() => onClick('left')}
            className="bg-white hover:bg-gray-100 transition-all duration-300 flex justify-center items-center shadow shadow-black rounded-full top-1/2 -left-2 lg:-left-[1px] xl:left-1 -translate-y-1/2 absolute w-10 h-10 z-10"
          >
            <AiOutlineArrowLeft />
          </button>
          <button
            onClick={() => onClick('right')}
            className="bg-white hover:bg-gray-100 transition-all duration-300 flex justify-center items-center shadow shadow-black rounded-full top-1/2 -right-2 lg:-right-[1px] xl:right-1 -translate-y-1/2 absolute w-10 h-10 z-10"
          >
            <AiOutlineArrowRight />
          </button>
          {topDestinations.map((destination) => (
            <div
              className={` ${
                destination.img === activeImg.img ? 'scale-110' : 'scale-90'
              } relative w-1/3 shrink-0 p-1 lg:px-3 duration-700  transition-all`}
              key={destination.img}
            >
              <img
                className={` aspect-[2/3] `}
                src={'/images/' + destination.img}
                alt=""
              />
              <div className="text-white drop-shadow-xl  hidden xs:flex items-center gap-1 absolute z-10 bottom-2 left-3 lg:left-5">
                <IoLocationSharp /> {destination.place}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopDestinations;
