import React from "react";

const MenuLeft = () => {
  return (
    <div className="w-2/3 h-full relative py-14 px-32 hidden sm:flex">
      <div className="w-full h-full flex items-center justify-center relative">
        <img
          className="absolute opacity-20 scale-[0.98] w-full h-full object-cover object-center rounded "
          src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
          alt=""
        />
        <img
          className="absolute opacity-50 scale-[0.95] w-full h-full object-cover object-center rounded "
          src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
          alt=""
        />
        <img
          className="absolute opacity-70 scale-[0.92] w-full h-full object-cover object-center rounded "
          src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
          alt=""
        />
        <img
          className="absolute w-full h-full object-cover opacity-50 object-center rounded"
          src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
          alt=""
        />
      </div>
    </div>
  );
};

export default MenuLeft;
