import privacypolicy from '../assets/privacypolicy.pdf';

const BlueFooter = () => {
    return (
        <div className="flex flex-col h-30 py-6 md:text-white items-center w-full justify-center text-center md:bg-primary h-28 font-opensans xxs:text-primary xxs:bg-white font-opensans font-regular text-[0.6rem] leading-4">
            <a 
                href={privacypolicy}
                target="_blank" 
                className="font-opensans font-bold text-[0.75rem] leading-8 underline"
            >
                Privacy Policy
            </a>
            <p>@ 2024 Solaris Consultants</p>
            <p>All rights reserved</p>
        </div>
    );
}

export default BlueFooter;
