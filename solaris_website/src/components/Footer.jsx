const Footer = () => {
  return (
    // <footer className="relative flex flex-col py-6 h-auto w-full footer-gradient">
    <footer className="gradient-bg bottom-0 left-0 w-full h-24 flex items-center justify-center py-6 mt-12">

      {/* <div className="flex flex-col justify-center text-center">  */}
      <div className="text-center text-primary">

        <p className="font-opensans font-semibold text-[10px] leading-8 underlined-offset-4">Privacy Policy</p>
        <p className="font-opensans font-regular text-[10px] leading-4">@2024 Solaris Consultants</p>
        <p className="font-opensans font-regular text-[10px] leading-4">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
