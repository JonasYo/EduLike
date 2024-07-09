import { FaWhatsapp } from 'react-icons/fa6';

const Whatsapp = () => {
  const phone = '41987968381';
  const message =
    'Olá,%20boa%20tarde!%20%0A%0AEstou%20interessado(a)%20em%20obter%20mais%20informações%20sobre%20a%20sua%20empresa.%0A%0APode%20me%20fornecer%20mais%20detalhes?';

  const handleClick = async () => {
    if (navigator.userAgent.includes('WhatsApp')) {
      window.open(`whatsapp://send?phone=${phone}&text=${message}`);
    } else {
      window.open(
        `https://api.whatsapp.com/send?phone=${phone}&text=${message}`,
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
