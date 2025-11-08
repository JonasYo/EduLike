'use client';

import { WhatsappContactProps } from 'common/types';

const Whatsapp = (props: WhatsappContactProps) => {
  const handleClick = async () => {
    if (navigator.userAgent.includes('WhatsApp')) {
      window.open(
        `whatsapp://send?phone=${props.phoneNumber}&text=${props.message}`,
      );
    } else {
      window.open(
        `https://api.whatsapp.com/send?phone=${props.phoneNumber}&text=${props.message}`,
        '_blank',
      );
    }
  };

  return (
    <>
      <div
        className="fixed bottom-10 right-[8.33%] z-30 w-min cursor-pointer rounded-full p-2"
        onClick={handleClick}
      >
        <svg
          aria-hidden="true"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.260483 29.6316C0.258843 34.8542 1.63357 39.9526 4.24713 44.4465L0.00976562 59.8016L15.8427 55.6814C20.2052 58.0421 25.1169 59.2867 30.1149 59.2886H30.1277C46.5879 59.2886 59.9875 45.9937 59.9945 29.6553C59.9973 21.7372 56.8931 14.2914 51.2546 8.69023C45.6153 3.08977 38.1172 0.00325581 30.1277 0C13.6647 0 0.267044 13.293 0.260483 29.6316Z"
            fill="url(#paint0_linear_0_4)"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.68884 43.6725L9.68889 43.6725V43.6723L9.68884 43.6725ZM9.09771 42.7411L9.68884 43.6725L7.18031 52.7612L16.5759 50.3163L17.4827 50.85C21.2931 53.0939 25.6624 54.2814 30.1175 54.2837H30.1273C43.8094 54.2837 54.9453 43.2337 54.9514 29.6535C54.953 23.0716 52.3739 16.8832 47.6869 12.2279C42.9996 7.57301 36.7678 5.00743 30.1367 5.00464C16.4437 5.00464 5.30813 16.0532 5.30274 29.6335C5.30086 34.2872 6.61256 38.8193 9.09771 42.7411Z"
            fill="url(#paint1_linear_0_4)"
          ></path>
          <path
            d="M22.6623 17.2437C22.1032 16.0104 21.5149 15.9855 20.9832 15.9639C20.5479 15.9453 20.0502 15.9467 19.553 15.9467C19.0553 15.9467 18.2466 16.1325 17.5631 16.8732C16.8789 17.6146 14.951 19.4062 14.951 23.0502C14.951 26.6944 17.6252 30.216 17.998 30.7106C18.3713 31.2044 23.1607 38.9216 30.746 41.8904C37.05 44.3576 38.3329 43.8669 39.701 43.7432C41.0694 43.6199 44.1165 41.952 44.7381 40.2225C45.3602 38.4932 45.3602 37.0109 45.1737 36.7011C44.9872 36.3925 44.4895 36.2071 43.7432 35.8369C42.9967 35.4664 39.3278 33.6746 38.6438 33.4274C37.9596 33.1804 37.4622 33.0571 36.9645 33.7988C36.4668 34.5392 35.0377 36.2071 34.6021 36.7011C34.167 37.1962 33.7314 37.2578 32.9853 36.8874C32.2386 36.5157 29.8352 35.7346 26.9838 33.2116C24.7653 31.2483 23.2676 28.8239 22.8322 28.0823C22.3968 27.3418 22.7856 26.9404 23.1598 26.5713C23.4951 26.2395 23.9063 25.7064 24.2798 25.2741C24.6519 24.8416 24.7761 24.533 25.0249 24.039C25.274 23.5446 25.1493 23.112 24.9631 22.7416C24.7761 22.3711 23.3259 18.7081 22.6623 17.2437Z"
            fill="white"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_0_4"
              x1="2999.25"
              y1="5980.16"
              x2="2999.25"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F9F9F9"></stop>
              <stop offset="1" stop-color="white"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_0_4"
              x1="2896.4"
              y1="5774.17"
              x2="2896.4"
              y2="1.03503"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1FAF38"></stop>
              <stop offset="1" stop-color="#60D669"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default Whatsapp;
