import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiWhatsappLine,
} from 'react-icons/ri';

const SocialNetworks = ({ styles = 'text-black' }: { styles?: string }) => {
  return (
    <div className="flex gap-4">
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
        className={`text-2xl transition-transform duration-300 hover:scale-110 ${styles}`}
      >
        <RiInstagramLine />
      </a>
      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noreferrer"
        className={`text-2xl transition-transform duration-300 hover:scale-110 ${styles}`}
      >
        <RiLinkedinBoxLine />
      </a>
      <a
        href="https://facebook.com/"
        target="_blank"
        rel="noreferrer"
        className={`text-2xl transition-transform duration-300 hover:scale-110 ${styles}`}
      >
        <RiFacebookBoxLine />
      </a>
      <a
        href="https://www.whatsapp.com/"
        target="_blank"
        rel="noreferrer"
        className={`text-2xl transition-transform duration-300 hover:scale-110 ${styles}`}
      >
        <RiWhatsappLine />
      </a>
    </div>
  );
};
export default SocialNetworks;
