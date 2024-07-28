import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiWhatsappLine,
} from 'react-icons/ri';

const SocialNetworks = ({ style = 'text-black' }: { style?: string }) => {
  return (
    <div className="flex gap-4">
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
        className={`text-2xl transition-transform duration-300 hover:scale-110 ${style}`}
      >
        <RiInstagramLine />
      </a>
      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noreferrer"
        className={`text-2xl transition-transform duration-300 hover:scale-110 ${style}`}
      >
        <RiLinkedinBoxLine />
      </a>
      <a
        href="https://facebook.com/"
        target="_blank"
        rel="noreferrer"
        className={`text-2xl transition-transform duration-300 hover:scale-110 ${style}`}
      >
        <RiFacebookBoxLine />
      </a>
      <a
        href="https://www.whatsapp.com/"
        target="_blank"
        rel="noreferrer"
        className={`text-2xl transition-transform duration-300 hover:scale-110 ${style}`}
      >
        <RiWhatsappLine />
      </a>
    </div>
  );
};
export default SocialNetworks;
