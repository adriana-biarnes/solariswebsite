import whatWeDoImage from "../../public/what-we-do-image.png"
import DescriptionBlocks from "../components/DescriptionBlock";
import BlueNavBar from "../components/BlueNavBar";
import BlueFooter from "../components/BlueFooter";
const WhatWeDo = () => {
    return(
        <div className="flex flex-col justify-center items-center h-full">
            <BlueNavBar />
            <div className="flex w-full">
                {/* Half width image */}
                <img className="flex lg:min-h-[2760px] lg:min-w-[681px] lg:visible invisible h-0 w-0" src={whatWeDoImage} alt="What We Do"/>
                <div className="flex flex-col lg:w-1/2 lg:p-20 text-primary w-full lg:m-20 mx-8 text-justify">
                    <div className="flex flex-col gap-10 my-6 ">
                        <h1 className="font-bold text-2xl">What we do</h1>
                        <p className=" text-lg">Solaris is a specialist consulting firm focused on the investments industry. We support our clients with technology, data and operating model transformation across the lifecycle of a programme, from strategy, selection, design, implementation to embedding in BAU.</p>
                    </div>
                    <DescriptionBlocks />
                </div>
            </div>
            <BlueFooter />
        </div>
    )
}
export default WhatWeDo