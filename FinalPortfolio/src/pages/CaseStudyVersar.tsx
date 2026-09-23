import { useEffect } from "react";
import { useNavigate } from "react-router";

const assetPathPrefix = "/assets";
const imgImage27 = `${assetPathPrefix}/ffaf9.png`;
const imgS51 = `${assetPathPrefix}/5540d.png`;
const imgImage304 = `${assetPathPrefix}/a73ac.png`;
const img256129592 = `${assetPathPrefix}/ab58f.png`;
const img321 = `${assetPathPrefix}/7380d.png`;
const img431 = `${assetPathPrefix}/3443c.png`;

export default function CaseStudyVersar() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = "rgb(240, 243, 255)";
    return () => { document.body.style.backgroundColor = ""; };
  }, []);

  return (
    <div
      className="relative w-full"
      data-node-id="2081:3257"
      data-name="Desktop - 18"
      style={{ minHeight: 4600, backgroundImage: "linear-gradient(90deg, rgb(240, 243, 255) 0%, rgb(240, 243, 255) 100%)" }}
    >
      {/* NAV */}
      <div
        className="-translate-x-1/2 content-stretch flex items-center justify-between left-[calc(50%+0.5px)] w-[1299px]"
        data-node-id="2081:3258"
        style={{ position: "fixed", top: 34, zIndex: 100 }}
      >
        <div
          className="bg-[#93001d] content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[999px] shrink-0"
          data-node-id="2081:3259"
          onClick={() => { window.scrollTo(0, 0); navigate("/"); }}
          style={{ cursor: "pointer" }}
        >
          <div className="content-stretch flex items-center overflow-clip relative rounded-[99999px] shrink-0" data-node-id="2081:3260">
            <div className="h-[40.028px] relative shrink-0 w-[38.75px]" data-node-id="2081:3261">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage27} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-node-id="2081:3262">
          <div
            className="bg-[#fcc6db] content-stretch drop-shadow-[2px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center px-[16px] py-[5px] relative rounded-[34px] shrink-0"
            data-node-id="2081:3263"
            onClick={() => { window.scrollTo(0, 0); navigate("/about"); }}
            style={{ cursor: "pointer" }}
          >
            <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#3347ae] text-[14px] whitespace-nowrap">About me</p>
          </div>
          <div className="bg-[#fcc6db] content-stretch drop-shadow-[2px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center px-[16px] py-[5px] relative rounded-[34px] shrink-0" data-node-id="2081:3265">
            <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#3347ae] text-[14px] whitespace-nowrap">Resume</p>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-[258px] top-[191px] w-[929.565px]" data-node-id="2081:3267">
        <div className="bg-[#e4e4e4] border-2 border-[#bcbcbc] border-solid content-stretch flex items-center justify-center px-[24px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2081:3268">
          <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#171717] text-[18px] whitespace-nowrap">B2B • GEOSPATIAL • SAAS</p>
        </div>
        <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[28px] text-black text-center w-[777px]" data-node-id="2081:3270">
          Designing a scalable administration experience for geospatial operations
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center w-[776px]" data-node-id="2081:3271">
          Versar is a geospatial and digital solutions platform that helps organizations manage projects, users, organizations, and support operations.
        </p>
        <div className="h-[566px] relative shrink-0 w-[930px]" data-node-id="2081:3272">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgS51} />
        </div>
      </div>

      {/* Role / Product / Team */}
      <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex gap-[32px] items-start left-1/2 p-[10px] text-black top-[1115px] w-[1040px]" data-node-id="2081:3416">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
          <p className="font-['Space_Grotesk:Regular'] font-normal leading-[normal] min-w-full relative shrink-0 text-[14px] w-[min-content]">ROLE</p>
          <p className="font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center whitespace-nowrap">UX/UI Designer</p>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 uppercase">
          <p className="font-['Space_Grotesk:Regular'] font-normal leading-[normal] min-w-full relative shrink-0 text-[14px] w-[min-content]">Product</p>
          <p className="font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center whitespace-nowrap">VERSAR</p>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
          <p className="font-['Space_Grotesk:Regular'] font-normal leading-[normal] min-w-full relative shrink-0 text-[14px] uppercase w-[min-content]">Team</p>
          <p className="font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center whitespace-nowrap">1 UX/UI Designer</p>
        </div>
      </div>

      {/* Main content */}
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[32px] items-start left-1/2 top-[1224px] w-[1040px]" data-node-id="2081:3273">

        {/* Confidentiality Notice */}
        <div className="[word-break:break-word] bg-white border border-[#dcdcdc] border-solid content-stretch flex flex-col gap-[14px] items-center justify-center leading-[24px] px-[32px] py-[24px] relative rounded-[8px] shrink-0 text-black w-full" data-node-id="2081:3274">
          <p className="font-['Space_Grotesk:Bold'] font-bold relative shrink-0 text-[18px] whitespace-nowrap">Confidentiality Notice</p>
          <p className="font-['Inter:Regular'] font-normal min-w-full not-italic relative shrink-0 text-[15px] text-center w-[min-content]">{`To respect confidentiality agreements, certain visuals have been blurred or omitted. If you'd like to learn more, I'd be happy to walk you through the original screens, design decisions, and outcomes during 1:1 conversation.`}</p>
        </div>

        {/* THE CHALLENGE */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="2081:3277">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">THE CHALLENGE</p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[18px] w-full">Managing complexity without overwhelming administrators</p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[16px] w-full">Versar brings multiple administrative workflows into one platform. The challenge was to make projects, organizations, users, and support information easy to understand and manage while keeping the experience consistent across the product.</p>
          </div>
        </div>

        {/* THE EXPERIENCE */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="2081:3284">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">THE EXPERIENCE</p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full">One platform, multiple administrative workflows</p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[15px] text-black w-full">I designed a connected experience where administrators can:</p>
            {[
              { title: "Manage Projects", body: "Quickly scan projects and access key actions." },
              { title: "Manage Organizations", body: "Create, view, edit, and safely delete organizations." },
              { title: "Manage Users", body: "Search, filter, and manage user accounts efficiently." },
              { title: "Manage Support", body: "Track ticket volume, status, priority, and activity." },
            ].map(({ title, body }) => (
              <div key={title} className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full">{title}</p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* DECISION STORY 1 */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="2081:3304">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">Decision Story 1</p>
          </div>
          <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
            <div className="blur-[5px] content-stretch flex flex-col items-center justify-center relative self-stretch shrink-0 w-[584px]">
              <div className="aspect-[1496/404] relative shrink-0 w-full">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage304} />
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full">Making project management easier to scan</p>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full">The problem</p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">Administrators needed to review multiple projects and their status quickly.</p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full">The decision</p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">I used structured project cards to surface key information such as status, type, tenant, and actions.</p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full">The result</p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">Projects become easier to scan without relying on a dense data table.</p>
              </div>
            </div>
          </div>
        </div>

        {/* DECISION STORY 2 */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="2081:3324">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">Decision Story 2</p>
          </div>
          <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
            <div className="blur-[5px] h-[373.467px] relative shrink-0 w-[587px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={img256129592} />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full">Simplifying organization management</p>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full">The problem</p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">Organization management involved multiple actions and configuration details.</p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full">The decision</p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">I created a consistent Create → View → Edit → Delete workflow with confirmation for destructive actions.</p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full">The result</p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">Administrators can manage organizations with clearer and more predictable interactions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* DECISION STORY 3 */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="2081:3343">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">Decision Story 3</p>
          </div>
          <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
            <div className="blur-[5px] h-[373.467px] relative shrink-0 w-[587px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={img321} />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full">Making user management scalable</p>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full">The problem</p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">Managing a large number of users can make important information difficult to find.</p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full">The decision</p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">I introduced search, filters, pagination, and contextual actions within the user table.</p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full">The result</p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">Administrators can find and manage users more efficiently.</p>
              </div>
            </div>
          </div>
        </div>

        {/* DECISION STORY 4 */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="2081:3362">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">Decision Story 4</p>
          </div>
          <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
            <div className="blur-[5px] h-[410.585px] relative shrink-0 w-[587px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={img431} />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full">Turning support data into actionable information</p>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full">The problem</p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">Administrators needed both a quick overview and detailed ticket information.</p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full">The decision</p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">I combined KPI cards with a detailed support-ticket table.</p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full">The result</p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">The dashboard provides an immediate view of ticket activity while retaining detailed information for follow-up.</p>
              </div>
            </div>
          </div>
        </div>

        {/* KEY DESIGN PRINCIPLES */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="2081:3381">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">Key Design Principles</p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[18px] w-full">Designed for complexity</p>
            {[
              { title: "Scanability", body: "Surface important information first." },
              { title: "Consistency", body: "Reuse familiar patterns across modules." },
              { title: "Control", body: "Make actions clear and predictable." },
              { title: "Safety", body: "Add confirmation for destructive actions." },
            ].map(({ title, body }) => (
              <div key={title} className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full">{title}</p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* OUTCOME */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="2081:3399">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">OUTCOME</p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full">A connected administration experience</p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[15px] text-black w-full">Versar brings Projects, Organizations, Users, and Support into one consistent workspace.</p>
            <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[15px] text-black w-full">
              <p className="leading-[24px] mb-0">Clarity — Easier information scanning</p>
              <p className="leading-[24px] mb-0">Consistency — Reusable interaction patterns</p>
              <p className="leading-[24px]">Efficiency — Faster access to administrative actions</p>
            </div>
          </div>
        </div>

        {/* REFLECTION */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full pb-[80px]" data-node-id="2081:3408">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">REFLECTION</p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black w-full">Designing for complexity</p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[15px] text-black w-full">This project reinforced that enterprise UX is about organizing complexity, not removing information. By creating clear hierarchy and reusable patterns, I was able to make a data-heavy administration experience feel more structured and predictable.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
