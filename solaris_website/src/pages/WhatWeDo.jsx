import { Link } from "react-router-dom";
import whatWeDoImage from "../../public/what-we-do-image.png"
import Logo from "../../public/LogoPng.png"
import DescriptionBlocks from "../components/DescriptionBlock";


const WhatWeDo = () => {
    return(
        <div className="flex flex-col">
            {/* Blue NavBar */}
            <div className="flex flex-row bg-primary w-full h-28 justify-between items-center px-20">
              <img src={Logo} className="h-[70px]"/>
                <div className="flex items-center text-white space-x-2">
                    <Link to="/">Meet Solaris</Link>
                    <Link to="/whatWeDo">What we do</Link>
                    <Link to="/whatWeDo">What we do</Link>
                    <Link to="/whatWeDo">Our people</Link>
                    <Link to="/whatWeDo">Case Studies</Link>
                    <Link to="/whatWeDo">Contact us</Link>
                </div>
            </div>
            <div className="flex w-full">
                {/* Half width image */}
                <img className="flex w-1/2" src={whatWeDoImage}/>
                <div className="flex flex-col w-1/2 px-8">
                    <div>
                        <h1>What we do</h1>
                        <p>Solaris is a specialist consulting firm focused on the investments industry. We support our clients with technology, data and operating model transformation across the lifecycle of a programme, from strategy, selection, design, implementation to embedding in BAU.</p>
                    </div>
                    <div>
                        <DescriptionBlocks />
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default WhatWeDo