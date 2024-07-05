import React from "react";

export const ButtonBlack =({text}) => {
  return (
    <button className="py-[13px] px-[40px] bg-black rounded-tl-2xl rounded-br-2xl">
      <p className="font-regular text-[14px] text-white">{text}</p>
    </button>
  );
}


export const ButtonOr = ({text}) => {
    return (
      <button className="py-[13px] px-[40px] bg-[#F7941D] rounded-tl-2xl rounded-br-2xl ">
          <p className="font-regular text-[14px] text-white">{text}</p>
      </button>
    )
  }