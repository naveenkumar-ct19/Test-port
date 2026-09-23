import { useNavigate } from "react-router";

const CASE_STUDIES = [
  {
    path: "/case-study/nxtaas",
    badge: "B2B • ENTERPRISE • SAAS",
    title: "Simplifying a complex network testing platform into a clearer, scalable experience",
    desc: "NXTAAS is an enterprise test automation platform used to manage network testing, automated jobs, testbeds, releases, regression cycles, and test results.",
  },
  {
    path: "/case-study/dish-genie",
    badge: "B2C • AI • FOOD DELIVERY",
    title: "Dish Genie — Making food discovery easier with AI-powered recommendations",
    desc: "Turning 'What should I eat?' into a guided, personalized ordering experience.",
  },
  {
    path: "/case-study/versar",
    badge: "B2B • GEOSPATIAL • SAAS",
    title: "Designing a scalable administration experience for geospatial operations",
    desc: "Versar is a geospatial and digital solutions platform that helps organizations manage projects, users, organizations, and support operations.",
  },
  {
    path: "/case-study/orion-cloudmax",
    badge: "B2B • ENTERPRISE • OBSERVABILITY",
    title: "Designing an AI-powered SRE experience for faster, more transparent alert investigation",
    desc: "Orion CloudMax helps SRE teams triage production alerts using automated runbooks and AI-driven analysis across logs, metrics, and traces.",
  },
  {
    path: "/case-study/blackberry-athoc",
    badge: "B2B • SAAS • EMERGENCY COMMUNICATION",
    title: "Designing a clearer workflow for configuring emergency alerts",
    desc: "BlackBerry AtHoc is an enterprise emergency communication platform for configuring and delivering critical alerts. I designed an end-to-end workflow that helps administrators define, target, schedule, and confidently publish alerts.",
  },
  {
    path: "/case-study/loan-workflow",
    badge: "B2B • AI • FINTECH",
    title: "Designing a clearer AI-assisted workflow for loan officers to review and approve loans",
    desc: "JASSX is an AI-assisted loan review platform that helps loan officers understand loan readiness, verify financial evidence, resolve conditions, and confidently move toward pre-approval.",
  },
  {
    path: "/case-study/pediatrics",
    badge: "B2C • HEALTHCARE • PEDIATRICS",
    title: "Simplifying Child Health Tracking with One Connected Care Experience",
    desc: "A mobile experience that helps parents track daily care, growth, illnesses, vaccinations, medical records, and appointments in one place.",
  },
];

interface Props {
  currentPath: string;
  containerClassName?: string;
}

export default function NextCaseStudyCard({ currentPath, containerClassName }: Props) {
  const navigate = useNavigate();
  const currentIdx = CASE_STUDIES.findIndex((cs) => cs.path === currentPath);
  const next = CASE_STUDIES[(currentIdx + 1) % CASE_STUDIES.length];

  return (
    <div
      className={containerClassName ?? "mx-auto w-[1040px] pt-0 pb-[60px]"}
    >
      <p className="font-['Space_Grotesk:Bold'] font-bold text-[18px] uppercase mb-[16px]" style={{ color: "rgb(51, 71, 174)" }}>Next Project</p>
      <div
        className="content-stretch flex flex-col gap-[20px] items-start p-[32px] relative rounded-[16px] w-full"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          backgroundColor: "rgba(51, 71, 174, 0.06)",
          border: "1px solid rgba(51, 71, 174, 0.15)",
          cursor: "pointer",
        }}
        onClick={() => { window.scrollTo(0, 0); navigate(next.path); }}
      >
        <div className="bg-[#e4e4e4] border border-[#bcbcbc] border-solid content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[999px] shrink-0">
          <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#171717] text-[12px] whitespace-nowrap">{next.badge}</p>
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full gap-[24px]">
          <div className="content-stretch flex flex-col gap-[8px] items-start flex-1 min-w-px">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[20px] text-black w-full">{next.title}</p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[14px] text-black w-full">{next.desc}</p>
          </div>
          <div
            className="bg-[#3347ae] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[10px] shrink-0"
            style={{ minWidth: 160 }}
          >
            <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">View Case Study →</p>
          </div>
        </div>
      </div>
    </div>
  );
}
