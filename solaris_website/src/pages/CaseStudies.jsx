/* eslint-disable react/prop-types */
import { useState } from "react";
import BlueNavBar from "../components/BlueNavBar";
import BlueFooter from "../components/BlueFooter";
import { CASE_STUDIES_CONTENT } from "../constants";
import point from "/point.png"

const MobileCard = ({ caseStudy, displayMobileContent }) => {
    if (displayMobileContent) {
        return (
                <div className="flex flex-col gap-4">
                    <div className="rounded-lg bg-white p-4 border border-solid border-orangeWin items-center justify-center ">
                        {caseStudy.description}
                    </div>
                    <div className="flex flex-col gap-3 rounded-lg bg-white px-4 border-solid border border-orangeWin p-4 justify-center items-center">
                        {caseStudy.data.map(({value}, index) => (
                            <p key={index} className="text-md"><b>{` ${value}`}</b></p>
                        ))}
                    </div>
                    <div className="flex flex-col gap-6  bg-white p-6 border border-solid border-orangeWin rounded-lg">
                        <h3 className="font-semibold text-xl mt-2">Solaris Value Delivered:</h3>
                        {caseStudy.value.map((value, index) => (
                            <div key={index} className="flex gap-6">
                                <img className="w-8 h-8" src={point} alt={value} />
                                <h3 className="text-lg">{value}</h3>
                            </div>
                        ))}
                    </div>
                </div>
        )
    }
    return caseStudy.mobile.map((mobileText, index) => (
            <div key={index} className="flex gap-4 items-center md:hidden">
                <img className="w-8 h-8" src={point} alt={mobileText} />
                <h3 className="text-lg">{mobileText}</h3>
            </div>
    ))
    
}

const Card = ({ caseStudy, index }) => {
    const [displayMobileContent, setDisplayMobileContent] = useState(false);

    const toggleMobileContent = () => {
        setDisplayMobileContent(!displayMobileContent);
    };

    return (
        <div key={index} className="flex flex-col gap-6 w-full bg-mobileBento md:bg-bento rounded-3xl p-[30px] h-['31.25rem',]shadow font-opensans">
            <h2 className="text-xl text-orangeWin border-b-2 border-orangeWin pb-6 font-Lato">{caseStudy.title}</h2>

            {/* Mobile Version */}
            <MobileCard caseStudy={caseStudy} displayMobileContent={displayMobileContent}/>
            <button 
                type="button" 
                className="text-white bg-primary py-3 px-6 w-44 h-12 rounded-lg text-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 md:hidden"
                onClick={toggleMobileContent}
            >
                {displayMobileContent ? 'Back to list' : 'View case study'}
            </button>

            {/* Desktop version */}
            <div  className="hidden md:flex flex-col w-full gap-6">
                {/* Tags */}
                <div className="flex gap-4 items-center justify-between">
                    {caseStudy.tags.map((label, mindex) => (
                        <p key={mindex} className="rounded-full bg-white px-4 py-2 text-center border-solid border border-orangeWin w-1/4 ">{label}</p>
                    ))}
                </div>

                {/* Data */}
                <div className="flex gap-4">
                    <div className="flex flex-col gap-3 rounded-lg bg-white px-4 border-solid border border-orangeWin w-1/3 p-4 justify-center ">
                        {caseStudy.data.map(({label, value}, index) => (
                            <p key={index} className="text-sm">{`${label}`}:<b>{` ${value}`}</b></p>                            
                        ))}
                    </div>
                    <div className="rounded-lg bg-white p-4 border border-solid border-orangeWin w-2/3 items-center justify-center text-justify">
                        {caseStudy.description}
                    </div>
                </div>
                    
                {/* Value Section */}
                <div className="flex flex-col gap-6 bg-white p-6 border border-solid border-orangeWin rounded-lg">
                    <h3 className="font-semibold text-xl mt-2">Solaris Value Delivered:</h3>
                        {caseStudy.value.map((value, index) => (
                            <div key={index} className="flex gap-6 items-center">
                                <img className="w-8 h-8" src={point} alt={value} />
                                <h3 className="text-lg">{value}</h3>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

const CaseStudies = () => {
    return(
        <div className="flex flex-col justify-center items-center h-full">
            <BlueNavBar />
            <div className="flex xxs:p-[30px] md:p-0 md:pb-12 md:px-12 lg:pb-26 lg:px-20 lg:mb-[150px]">
                <div className="flex flex-col text-primary gap-6">
                    <h1 className="text-[32px] font-Lato font-semi-bold mt-[30px] mb-[30px]">Case Studies</h1>
                    {CASE_STUDIES_CONTENT.map((caseStudy, index) => (
                        <Card key={index} caseStudy={caseStudy} />
                    ))}
                </div>
            </div>
            <BlueFooter />
        </div>
    )
}

export default CaseStudies