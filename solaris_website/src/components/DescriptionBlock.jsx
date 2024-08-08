/* eslint-disable react/prop-types */
const DESCRIPTION_BLOCKS = [
    {
        image: "platform2x.png",
        title: "Investment platform implementation",
        description: "Our team has worked with more than 10 clients to deliver successful investment platform implementations. Our consultants have experience working with all of the major platforms, including Aladdin, Charles River, SimCorp and Bloomberg.",
    },
    {
        image: "Optimisation.png",
        title: "Aladdin implementation and optimization",
        description: "We believe we are the leading Aladdin consulting team in the UK, having successfully led some of the largest and most complex implementations. Our specialist team can help you get the most out of the toolset, including new modules such as ADC and Aladdin Accounting.",
    },
    {
        image: "Strategy.png",
        title: "Investment data strategy design and implementation",
        description: "We work with clients to design their investments data strategy, leveraging the latest toolsets. Our deep knowledge of the investments domain can optimise design and accelerate delivery.",
    },
    {
        image: "Model.png",
        title: "Operating model design, selection and implementation",
        description: "We support clients to design their target business model leveraging technology and strategic partnerships. Our team has strong experience leading systems and outsourcing selections, and developing business cases that are board-level ready.",
    },
    {
        image: "Delivery.png",
        title: "Programme delivery",
        description: "Our programme directors, programme leads and workstream leads have significant experience delivering large-scale change in the Investments industry.",
    },
    {
        image: "Operations.png",
        title: "Front office specialists",
        description: "Our team of front office business analysts are specialist in the investment process and have experience across all public and private asset classes.",
    },
    {
        image: "Model.png",
        title: "Operations backfill and middle office analysts",
        description: "We offer experienced operations backfill resources and business analysts to support the increased demands of large scale transformations, including across trade operations, derivatives, data management, cash operations, reconciliations and corporate actions.",
    },
    {
        image: "Model.png",
        title: "Compliance rule coding",
        description: "We offer an end-to-end compliance rule coding service, from analysis through to testing. We have experience working with all the major platforms.",
    },
]


const Block = ({ image, title, description }) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between md:py-10 md:gap-6 gap-8 md:h-62">
            <div className="flex flex-col w-1/3 items-center gap-8">
                <img className="w-[90px] h-[90px] p-0.1" src={image} alt={title} />
                <h2 className="text-center font-bold text-[22px] font-Lato">{title}</h2>
            </div>
            <p className="md:w-2/3 w-[20.625rem] text-[18px] text-center font-opensans">{description}</p>
        </div>
    );
};

const DescriptionBlocks = () => {
    return(
        <div className="flex flex-col gap-24 md:gap-6 mt-10 md:mt-6 mb-10 md:mb-0 md:my-[80px]">
           {DESCRIPTION_BLOCKS.map((block) => <Block key={block.image} image={block.image} title={block.title} description={block.description} />)}
        </div>
    )
}

export default DescriptionBlocks