import { useEffect, useState } from 'react';

import { AiOutlineArrowUp } from 'react-icons/ai';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleButtonVisibility = () => {
      const shouldShowButton = window.scrollY > 500;
      setShowButton(shouldShowButton);
    };

    window.addEventListener('scroll', handleButtonVisibility);

    return () => {
      window.addEventListener('scroll', handleButtonVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button
      type="button"
      id="show-button"
      onClick={scrollToTop}
      className={`${
        showButton ? 'fixed' : 'hidden'
      } bottom-24 right-7 z-40 flex size-10 animate-pulse cursor-pointer items-center justify-center overflow-hidden rounded bg-primary-500 p-2 text-center text-white shadow-2xl transition-all `}
    >
      <AiOutlineArrowUp className="text-4xl" />
    </button>
  );
};

export default ScrollToTop;
