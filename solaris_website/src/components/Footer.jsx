const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full h-24 flex items-center justify-center py-6 mt-12">
      <div className="text-center sm:text-white text-primary">
        <a 
          href="../assets/Solaris Privacy Policy v0.01.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="drop-shadow-md font-opensans font-semibold text-[10px] leading-8 underlined-offset-4"
        >
          Privacy Policy
        </a>
        <p className="drop-shadow-md font-opensans font-regular text-[10px] leading-4">
          @2024 Solaris Consultants
        </p>
        <p className="drop-shadow-md font-opensans font-regular text-[10px] leading-4">
          All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

