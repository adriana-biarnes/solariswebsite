import whatWeDoImage from "../../public/what-we-do-image.png"
import DescriptionBlocks from "../components/DescriptionBlock";
import BlueNavBar from "../components/BlueNavBar";
import BlueFooter from "../components/BlueFooter";
const WhatWeDo = () => {
    return(
        <div className="flex flex-col justify-center items-center h-full">
            <BlueNavBar />
            <div className="flex w-full h-full">
                {/* Half width image */}
                <img className="lg:w-[820px] lg:min-h-full lg:flex hidden lg:mr-12" src={whatWeDoImage} alt="What We Do"/>
                <div className="flex flex-col sm:pt-20  text-primary w-full text-justify gap-8 items-center lg:w-full mb-[70px]">
                    <div className="flex flex-col items-center w-full">
                        <div className="flex flex-col gap-6 w-full p-8 lg:p-0">  
                            <h1 className="text-[32px] font-Lato font-semi-bold items-center mt-6">What we do</h1>
                            <p className="text-lg font-semi-bold font-weight-400 font-opensans lg:pr-8  md:w-full ">Solaris is a specialist consulting firm focused on the Investments industry. We support our clients with technology, data and operating model transformation across the lifecycle of a programme, from strategy, selection, design, implementation to embedding in BAU.</p>
                        </div>
                        <DescriptionBlocks />
                    </div>
                </div>
            </div>
            <BlueFooter />
        </div>
    )
}
export default WhatWeDo