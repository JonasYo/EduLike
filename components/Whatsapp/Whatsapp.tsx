import { FaWhatsapp } from 'react-icons/fa6';

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
        className="fixed bottom-10 right-7 z-30 w-min cursor-pointer rounded-full bg-green-600 p-2"
        onClick={handleClick}
      >
        <FaWhatsapp color="white" className="size-7 md:size-6" />
      </div>
    </>
  );
};

export default Whatsapp;
