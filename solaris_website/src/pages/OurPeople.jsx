import StephenFace from "/Stephen-face.png"
import MathewFace from "/Mathew-face.png"
import SarahFace from "/Sarah-face.png"
import BlueNavBar from "../components/BlueNavBar";
import BlueFooter from "../components/BlueFooter";

const OurPeople = () =>{
    return(
        <div className="flex flex-col">
            <BlueNavBar />
            <div className="flex flex-col px-16 py-8 gap-6">
                <div className="flex flex-col text-primary gap-10 font-semibold text-justify">
                    <h2 className="font-bold text-3xl">Our People</h2>
                    <p>The core of Solaris is our people. We have worked on projects across the investments industry and have met some truly exceptional people, many of whom have chosen to join Solaris. We offer them the opportunity to apply themselves to complex, challenging change programmes, and to work with like-minded people who enjoy being part of our successful team.</p>
                    <p>Solaris is a blend of permanent employees and associates, all of whom share our values of client service, integrity and focus on delivering successful outcomes for our clients. We choose our people based on their experience – you can expect that Solaris consultants will always have demonstrable direct, relevant and recent experience in their fields of expertise.</p>
                    <p className="bg-gray-100 px-4 py-8 rounded-2xl">Interested in joining Solaris?<br/> We would be happy to hear from you.<br/> Contact us <a className="text-orangeWin">here</a>.</p>
                </div>
                <h3 className="text-orangeWin font-bold text-xl">The leadership team</h3>
                <div className="flex flex-col items-center gap-8 ">
                    <img className=" w-80" src={StephenFace}/>
                    <img className="w-80" src={MathewFace}/>
                    <img className="w-80" src={SarahFace}/>
                </div>
            </div>
            <BlueFooter/>
        </div>
    )
}

export default OurPeople