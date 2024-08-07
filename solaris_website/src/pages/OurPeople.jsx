/* eslint-disable react/prop-types */
import StephenFace from "/Stephen-face.png"
import MathewFace from "/Mathew-face.png"
import SarahFace from "/Sarah-face.png"
import SarahBack from "/Sarah-back.png"
import MathewBack from "/Mathew-back.png"
import StephenBack from "/Stephen-back.png"
import BlueNavBar from "../components/BlueNavBar";
import BlueFooter from "../components/BlueFooter";
import { useState } from "react";
import { Link } from "react-router-dom"

const Card = ({face, back}) => {
    const [isFaceVisible, setIsFaceVisible] = useState(true);
    return(
        <div 
            className={`min-w-80 min-h-[420px] md:min-h-[460px] bg-transparent cursor-pointer group perspective`}
            onClick={()=>setIsFaceVisible(!isFaceVisible)}
        >
            <div 
                className={`relative preserve-3d ${!isFaceVisible ? 'rotate-y-180' : ''} w-full h-full duration-1000`}>
                    <div className="absolute w-full h-full backface-hidden">
                        <img src={face} alt="" className="w-full h-full rounded-3xl min-h-[460px]" />
                    </div>
                    <div className="absolute rotate-y-180 w-full h-full backface-hidden rounded-xl">
                        <img src={back} alt="" className="w-full h-full min-h-[480px] rounded-xl" />
                    </div>
            </div>
        </div>          
    )}

const OurPeople = () =>{
    return(
        <div className="flex flex-col min-h-screen">
            <BlueNavBar />
            <div className="flex flex-col px-8 py-8 md:py-26 md:px-26 gap-6 lg:mx-18 flex-grow font-opensans font-medium mb-32">
                <div className="flex flex-col text-primary gap-10 text-justify px-2 text-[18px]">
                    <h1 className="text-[32px] font-Lato font-semi-bold ">Our People</h1>
                    <p>The core of Solaris is our people. We have worked on projects across the investments industry and have met some truly exceptional people, many of whom have chosen to join Solaris. We offer them the opportunity to apply themselves to complex, challenging change programmes, and to work with like-minded people who enjoy being part of our successful team.</p>
                    <p>Solaris is a blend of permanent employees and associates, all of whom share our values of client service, integrity and focus on delivering successful outcomes for our clients. We choose our people based on their experience – you can expect that Solaris consultants will always have demonstrable direct, relevant and recent experience in their fields of expertise.</p>
                    <p className="bg-gray-100 px-4 py-8 rounded-2xl">Interested in joining Solaris? We would be happy to hear from you. Contact us <Link to="/#contactUs" className="text-orangeWin">here</Link>.</p>
                </div>
                    <h3 className="text-orangeWin font-bold text-xl p-6">The leadership team</h3>
                    <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between items-center gap-20 sm:pb-6 ">
                    <Card face={StephenFace} back={StephenBack}/>
                    <Card face={MathewFace} back={MathewBack}/>
                    <Card face={SarahFace} back={SarahBack}/>
                </div>
            </div>
            <BlueFooter/>
        </div>
    )
}

export default OurPeople