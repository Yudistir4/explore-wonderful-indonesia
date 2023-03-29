import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  setShow: Dispatch<SetStateAction<boolean>>;
}
const Navbar = ({ setShow }: Props) => {
  return (
    <div className="m-auto py-5 px-20 max-w-[90rem] w-full flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2  z-30">
      <h1 className="text-xl  font-[900]">Explore Indonesia</h1>
      <div onClick={() => setShow((prev) => !prev)} className="cursor-pointer">
        Menu
      </div>
    </div>
  );
};

export default Navbar;
