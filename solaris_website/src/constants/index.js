import { expertise, partnership, trust, iconPlatform1, iconOptimisation2, iconStrategy3, iconModel4, iconDelivery5, iconOperations6, iconFrontoffice7, iconCompliance8 } from "../assets";

export const navLinks = [
  {
    id: "meet",
    title: "Meet Solaris",
  },
  {
     id: "whatWeDo",
     title: "What we do",
 },
  {
    id: "whatWeDo",
    title: "How we work",
  },
  {
    id: "OurPeople",
    title: "Our People",
  },
  {
    id: "caseStudies",
    title: "Case Studies",
  }, 
];

export const landing = [
  {
    id: "title-landing",
    content: "On your way to success with consultants you can trust",
  },
  {
    id: "subtitle-landing",
    content: "We work with Asset Managers to successfully deliver strategic change",
  }
];

export const cards = [
  {
    id: "card-1",
    title: "Expertise",
    content: "We carefully choose our people based on their  experience – you can always expect that Solaris consultants will have demonstrable, direct, highly relevant, and up-to-date professional experience in their specific fields of expertise.",
    img: expertise,
  },
  {
    id: "card-2",
    title: "Partnership",
    content: "We are committed to creating successful partnerships with our clients, over and above our contractual agreements. Our goal is to share in our client’s strategic objectives and build lasting relationships with their teams.",
    img: partnership,
  },
  {
    id: "card-3",
    title: "Trust",
    content: "We’re proud of our track record, our clients trust us to deliver their most important programmes successfully on time and on budget.  We consistently exceed expectations through our commitment and in-depth knowledge.",
    img: trust,
  },
];

export const services = [
  {
    id: "services-1",
    content: "Investment platform implementation",
    icon: iconPlatform1,
  },
  {
    id: "services-2",
    content: "Aladdin implementation and optimisation",
    icon: iconOptimisation2,
  },
  {
    id: "services-3",
    content: "Investment data strategy, design and implementation",
    icon: iconStrategy3,
  },
  {
    id: "services-4",
    content: "Operating model design, selection and implementation",
    icon: iconModel4,
  },
  {
    id: "services-5",
    content: "Programme delivery",
    icon: iconDelivery5,
  },
  {
    id: "services-6",
    content: "Front office specialists",
    icon: iconOperations6,
  },
  {
    id: "services-7",
    content: "Operations backfill and middle office analysts",
    icon: iconFrontoffice7,
  },
  {
    id: "services-8",
    content: "Compliance rule coding",
    icon: iconCompliance8,
  },
];

export const textContent = [
  {
    id: "title-meetSolaris",
    content: "Meet Solaris",
  },
  {
    id: "title-contactUs",
    content: "Contact us",
  },
  {
    id: "text1-meetSolaris",
    content: "We founded Solaris in 2014 to offer a different type of consultancy service – matching highly experienced, specialist consultants to the industry’s most complex and strategic programmes.",
  },
  {
    id: "text2-meetSolaris",
    content: "We focus on technology, data and operating model change in the Investments industry, working with mid-to-large asset managers, asset owners and pensions funds. We support the lifecycle of a programme, from strategy, selection, design, implementation to embedding in BAU. We are proud of the team that we have built and the positive impact we have with our clients.",
  },
];
export const CASE_STUDIES_CONTENT = [
  {
    title: "Strategic Investments Data Platform",
    tags: ['Investments data strategy', 'Insurance reporting', 'Business case and design', 'Programme management'],
    data: [
      {
        label: 'AUM',
        value: '£100bn+',
      },
      {
        label: 'Project Duration',
        value: '~12 months',
      },
      {
        label: 'Project Type',
        value: 'Medium complexity',
      },
      {
        label: 'Solaris team size',
        value: '2-4',
      },
    ],
    description: 'We worked with a large insurance asset owner in the UK to design and implement their strategic data platform. Solaris worked with the client to develop a strategy, design and business case for their asset owner investments data platform and strategic asset allocation solution, leveraging Aladdin, Aladdin Data Cloud (ADC) and snowflake. Solaris is now supporting the client implementation.',
    value: [
      'Provided programme leadership and trusted advice to the client, and supported them with wider senior stakeholder management ',
      'Leveraged Solaris benchmarks and experience to create a robust business case',
      'Enabled the client to set a strong vision for the future of their investments data that is aligned to their long-term strategy',
      'Fast-tracked analysis by using Solaris Aladdin specialist domain knowledge across investment processes and asset classes',
    ],
    mobile: [
      'Investments could data platform',
      'Startegy, design and business case',
      'Analysis, build an test',
      'Investments precess redesign ad embed in BAU',
    ],
  },
  {
    title: "Aladdin Implementation",
    tags: ['Aladdin implementation', 'Investments data strategy', 'Investments process', 'Programme management'],
    data: [
      {
        label: 'AUM',
        value: '£150bn+',
      },
      {
        label: 'Project Duration',
        value: '2+ years',
      },
      {
        label: 'Project Type',
        value: 'High complexity',
      },
      {
        label: 'Solaris team size',
        value: '6-8',
      },
    ],
    description: 'We worked with a large UK asset manager to implement Aladdin across their investment platform. Solaris supported the duration of the programme, taking key roles in the overall leadership team as well as workstream leads and consultants across middle office, dealing, front office investment teams',
    value: [
      'Programme was delivered ahead of time and under budget (for which, the exco attribute to Solaris leadership and team quality)',
      'Leveraged Solaris\'s experience to implement best practice processes across all investment desks',
      'Transformed the clients\' investment data architecture using Snowflake and ADC',
      'Enhanced the control environment, working with 3LOD teams to validate implemented tools and processes',
      'Went over and above to embed new change management best practices and support the client in their transition to BAU'
    ],
    mobile: [
      'Full platform implementation',
      'End-to-end Solaris leadership',
      'Support across all workstreams',
      'Highly successful implementation',
    ],
  },
  {
    title: "Aladdin Provider Implementation",
    tags: ['Middle office outsourcing', 'Retained operating model', 'Aladdin Provider', 'Operations w/s lead management'],
    data: [
      {
        label: 'AUM',
        value: '£150bn+',
      },
      {
        label: 'Project Duration',
        value: '~18 months',
      },
      {
        label: 'Project Type',
        value: 'Medium complexity',
      },
      {
        label: 'Solaris team size',
        value: '6',
      },
    ],
    description: 'We worked with a large UK asset manager to implement Aladdin Provider with their middle office service provider. Solaris worked with an Asset Manager to deliver a new middle office operating model with their Global Service Provider, using the Aladdin Provider approach. This included a middle office migration, changes to the retained oversight team and implementation of technical interfaces.',
    value: [
      'Solaris led the project to a successful go-live, with no critical migration incidents ',
      'Solaris’s best-practises were leveraged in the design and implementation of new quality and performance metrics, as part of the wider supplier oversight model',
      'Worked with the client to implement a new risk and controls framework, working with the client’s operational risk teams',
      'Supported the client’s service provider with Aladdin best practice; this model is now being promoted at their preferred Global Aladdin operating model',
    ],
    mobile: [
      'Middle office outsourced on Aladdin',
      'Retained model design',
      'Operations, migration and embed',
      'Service provider best practice',
    ],
    
  },
  {
    title: "Operations Backfill",
    tags: ['Operations backfill', 'Multi-region locations', 'In-sourced middle office', 'Multiple middle office functions'],
    data: [
      {
        label: 'AUM',
        value: '£250bn+',
      },
      {
        label: 'Project Duration',
        value: '~12 months',
      },
      {
        label: 'Project Type',
        value: 'Medium complexity',
      },
      {
        label: 'Solaris team size',
        value: '2-4',
      },
    ],
    description: 'We supplied operations backfill resources as part of our wider support of a large-scale global Aladdin programme. Solaris supplied this Global Asset Manager with middle office operators, who are skilled and experienced with Aladdin processes and tools. We supported multiple regions and middle office competencies such as derivatives, data management, reconciliations and trade operations.',
    value: [
      'Provided scalable and flexible resource model at a cost-efficient rate, allowing the client to tap into a specialist resource set for a short-term period ',
      'Supported the client to train their internal team on-the-job through knowledge transfer of Aladdin industry standard practices',
      'Provided specialist resources who we trust and have worked with on multiple past programmes',
      'Fast-tracked analysis by using Solaris Aladdin specialist domain knowledge across investment processes and asset classes',
    ],
    mobile: [
      'Operations backfill',
      'Multi-region locations',
      'In-sourced middle office',
      'Mutiple middle office functoins',
    ],
  },
];