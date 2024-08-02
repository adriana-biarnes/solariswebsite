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
                <div className="flex flex-col px-20 pt-20 text-primary w-full text-justify gap-8 items-center lg:w-full">
                    <div className="flex flex-col items-center ">
                        <div className="flex flex-col gap-6 ">
                        <h1 className="font-bold text-[28px] font-opensans items-center">What we do</h1>
                        <p className=" text-lg font-semi-bold font-weight-400 font-opensans xxs:w-[20.625rem] md:w-full">Solaris is a specialist consulting firm focused on the investments industry. We support our clients with technology, data and operating model transformation across the lifecycle of a programme, from strategy, selection, design, implementation to embedding in BAU.</p>
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