import { FaFacebookSquare } from 'react-icons/fa';
import {
  FaLinkedin,
  FaSquareInstagram,
  FaSquareWhatsapp,
} from 'react-icons/fa6';

const SocialNetworks = ({ styles = 'text-black' }: { styles?: string }) => {
  return (
    <div className="flex gap-4">
      <a
        href="https://www.whatsapp.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp"
        className={`text-2xl transition-transform duration-300 hover:scale-110 ${styles}`}
      >
        <FaSquareWhatsapp />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        title="Instagram"
        className={`text-2xl transition-transform duration-300 hover:scale-110 ${styles}`}
      >
        <FaSquareInstagram />
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
        className={`text-2xl transition-transform duration-300 hover:scale-110 ${styles}`}
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
        title="Facebook"
        className={`text-2xl transition-transform duration-300 hover:scale-110 ${styles}`}
      >
        <FaFacebookSquare />
      </a>
    </div>
  );
};
export default SocialNetworks;
