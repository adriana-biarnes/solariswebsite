import privacypolicy from '../assets/privacypolicy.pdf'
const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full h-30 flex items-center justify-center py-6 md:bg-primary xxs:bg-white">
      <div className="text-center md:text-white xxs:text-blue">
        <a 
          href={privacypolicy}
          target="_blank" 
          className="font-opensans font-bold text-[0.75rem] leading-8 underline"
        >
          Privacy Policy
        </a>
        <p className="font-opensans font-regular text-[0.6rem] leading-4">
          @2024 Solaris Consultants
        </p>
        <p className="font-opensans font-regular text-[0.6rem] leading-4">
          All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

