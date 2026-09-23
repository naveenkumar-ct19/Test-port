import { useEffect } from "react";
import { useNavigate } from "react-router";
import NextCaseStudyCard from "@/components/NextCaseStudyCard";

const assetPathPrefix = "/assets";
const imgImage27 = `${assetPathPrefix}/ffaf9.png`;
const imgM11 = `${assetPathPrefix}/2eb26.png`;
const imgImage305 = `${assetPathPrefix}/a7cbb.png`;
const imgAllServices1 = `${assetPathPrefix}/e5253.png`;
const imgRunning1 = `${assetPathPrefix}/f3a5e.png`;
const imgM22 = `${assetPathPrefix}/c1bd6.png`;
const imgGravityUiArrowUp = `${assetPathPrefix}/2a379.svg`;
const imgGravityUiArrowUp1 = `${assetPathPrefix}/fddb6.svg`;

export default function CaseStudyNXTAAS() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = "rgb(240, 243, 255)";
    return () => { document.body.style.backgroundColor = ""; };
  }, []);

  return (
    <div
      className="relative w-full"
      data-node-id="2081:177"
      data-name="Desktop - 21"
      style={{ minHeight: 5900, backgroundImage: "linear-gradient(90deg, rgb(240, 243, 255) 0%, rgb(240, 243, 255) 100%)" }}
    >
      {/* NAV */}
      <div
        className="-translate-x-1/2 content-stretch flex items-center justify-between left-[calc(50%+0.5px)] w-[1299px]"
        data-node-id="2081:178"
        style={{ position: "fixed", top: 34, zIndex: 100 }}
      >
        <div
          className="bg-[#93001d] content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[999px] shrink-0"
          data-node-id="2081:179"
          onClick={() => { window.scrollTo(0, 0); navigate("/"); }}
          style={{ cursor: "pointer" }}
        >
          <div className="content-stretch flex items-center overflow-clip relative rounded-[99999px] shrink-0" data-node-id="2081:180">
            <div className="h-[40.028px] relative shrink-0 w-[38.75px]" data-node-id="2081:181" data-name="image 27">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage27} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-node-id="2081:182">
          <div
            className="bg-[#fcc6db] content-stretch drop-shadow-[2px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center px-[16px] py-[5px] relative rounded-[34px] shrink-0"
            data-node-id="2081:183"
            onClick={() => { window.scrollTo(0, 0); navigate("/about"); }}
            style={{ cursor: "pointer" }}
          >
            <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#3347ae] text-[14px] whitespace-nowrap" data-node-id="2081:184">
              About me
            </p>
          </div>
          <div className="bg-[#fcc6db] content-stretch drop-shadow-[2px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center px-[16px] py-[5px] relative rounded-[34px] shrink-0" data-node-id="2081:185">
            <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#3347ae] text-[14px] whitespace-nowrap" data-node-id="2081:186">
              Resume
            </p>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-[258px] top-[191px] w-[929.565px]" data-node-id="2081:187">
        <div className="bg-[#e4e4e4] border-2 border-[#bcbcbc] border-solid content-stretch flex items-center justify-center px-[24px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2081:188">
          <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#171717] text-[18px] whitespace-nowrap" data-node-id="2081:189">
            B2B • ENTERPRISE • SAAS
          </p>
        </div>
        <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[28px] text-black text-center w-[929px]" data-node-id="2081:190">
          Simplifying a complex network testing platform into a clearer, scalable experience
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center w-[928px]" data-node-id="2081:191">
          NXTAAS is an enterprise test automation platform used to manage network testing, automated jobs, testbeds, releases, regression cycles, and test results. The platform brings together large volumes of operational data across different users and workflows, making clarity, hierarchy, and fast information discovery critical to the experience.
        </p>
        <div className="h-[566px] relative shrink-0 w-[929.75px]" data-node-id="2081:192" data-name="m1 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgM11} />
        </div>
      </div>

      {/* Role / Product / Team */}
      <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex gap-[32px] items-start left-1/2 p-[10px] text-black top-[1115px] w-[1040px]" data-node-id="2081:371">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="2081:372">
          <p className="font-['Space_Grotesk:Regular'] font-normal leading-[normal] min-w-full relative shrink-0 text-[14px] w-[min-content]" data-node-id="2081:373">ROLE</p>
          <p className="font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center whitespace-nowrap" data-node-id="2081:374">UX/UI Designer</p>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 uppercase" data-node-id="2081:375">
          <p className="font-['Space_Grotesk:Regular'] font-normal leading-[normal] min-w-full relative shrink-0 text-[14px] w-[min-content]" data-node-id="2081:376">Product</p>
          <p className="font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center whitespace-nowrap" data-node-id="2081:377">CISCO NXTAAS</p>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="2081:378">
          <p className="font-['Space_Grotesk:Regular'] font-normal leading-[normal] min-w-full relative shrink-0 text-[14px] uppercase w-[min-content]" data-node-id="2081:379">Team</p>
          <p className="font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center whitespace-nowrap" data-node-id="2081:380">1 UX/UI Designer, 1 UX/UI MANAGER</p>
        </div>
      </div>

      {/* Main content */}
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[32px] items-start left-1/2 top-[1224px]" data-node-id="2081:193">

        {/* Confidentiality Notice */}
        <div className="[word-break:break-word] bg-white border border-[#dcdcdc] border-solid content-stretch flex flex-col gap-[14px] items-center justify-center leading-[24px] px-[32px] py-[24px] relative rounded-[8px] shrink-0 text-black w-full" data-node-id="2081:194">
          <p className="font-['Space_Grotesk:Bold'] font-bold relative shrink-0 text-[18px] whitespace-nowrap" data-node-id="2081:195">Confidentiality Notice</p>
          <p className="font-['Inter:Regular'] font-normal min-w-full not-italic relative shrink-0 text-[15px] text-center w-[min-content]" data-node-id="2081:196">{`To respect confidentiality agreements, certain visuals have been blurred or omitted. If you'd like to learn more, I'd be happy to walk you through the original screens, design decisions, and outcomes during 1:1 conversation.`}</p>
        </div>

        {/* THE CHALLENGE */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="2081:197">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="2081:198">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="2081:200">THE CHALLENGE</p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full" data-node-id="2081:201">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[18px] w-full" data-node-id="2081:202">Making a data-heavy platform easier to scan and act on</p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full" data-node-id="2081:203">NXTAAS contained a large amount of information across jobs, testbeds, releases, regression cycles, requests and reports.</p>
          </div>
          <div className="[word-break:break-word] bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex flex-col gap-[12px] items-start not-italic px-[24px] py-[12px] relative rounded-[8px] shrink-0 text-[16px] text-black w-full" data-node-id="2081:204">
            <p className="font-['Inter:Semi_Bold'] font-semibold leading-[24px] relative shrink-0 whitespace-nowrap" data-node-id="2081:205">The Goal:</p>
            <p className="font-['Inter:Regular'] font-normal leading-[0] min-w-full relative shrink-0 w-[min-content]" data-node-id="2081:206">
              <span className="leading-[24px]">Not simply to make the interface look cleaner. It was to help users quickly answer:<br aria-hidden /></span>
              <span className="font-['Inter:Bold'] font-bold leading-[24px]">What is happening? What needs attention? Where should I go next?</span>
            </p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[15px] text-black w-[min-content]" data-node-id="2081:207">The existing experience made this difficult because important information competed for attention, pages required excessive scrolling, and the information hierarchy was not always clear.</p>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-black w-full" data-node-id="2081:208">
            <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] w-full" data-node-id="2081:209">Key UX issues</p>
            <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] w-full" data-node-id="2081:210">
              <ul className="mb-0"><li className="list-disc ms-[22.5px]"><span className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic">Information was buried</span></li></ul>
              <p className="leading-[24px] mb-0 whitespace-pre-wrap">{`       Important job and testing information required users to scan through multiple sections.`}</p>
              <ul className="mb-0"><li className="list-disc ms-[22.5px]"><span className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic">Weak hierarchy</span></li></ul>
              <p className="leading-[24px] mb-0 whitespace-pre-wrap">{`       Different dashboard sections had similar visual weight, making prioritisation difficult.`}</p>
              <ul className="mb-0"><li className="list-disc ms-[22.5px]"><span className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic">Excessive scrolling</span></li></ul>
              <p className="leading-[24px] mb-0 whitespace-pre-wrap">{`       Large amounts of information were presented vertically.`}</p>
              <ul className="mb-0"><li className="list-disc ms-[22.5px]"><span className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic">Critical states were not prominent enough</span></li></ul>
              <p className="leading-[24px] mb-0 whitespace-pre-wrap">{`       Issues such as failed/aborted jobs needed stronger visibility.`}</p>
              <ul className="mb-0"><li className="list-disc ms-[22.5px]"><span className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic">Navigation needed to scale</span></li></ul>
              <p className="leading-[24px] whitespace-pre-wrap">{`       As the platform grew, the navigation needed to support more areas without consuming unnecessary space.`}</p>
            </div>
          </div>
        </div>

        {/* THE DESIGN OPPORTUNITY */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="2081:211">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="2081:212">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap" data-node-id="2081:214">THE DESIGN OPPORTUNITY</p>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="2081:215">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]" data-node-id="2081:216">From "showing data" to helping users understand what needs attention</p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[15px] text-black w-[min-content]" data-node-id="2081:217">I reframed the dashboard around three questions:</p>
            <div className="content-stretch flex gap-[18px] items-center relative shrink-0" data-node-id="2081:218">
              <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2081:219">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap" data-node-id="2081:220">What is happening now?</p>
              </div>
              <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="2081:221">
                <div className="flex-none rotate-90"><div className="relative size-[16px]"><img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} /></div></div>
              </div>
              <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2081:223">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap" data-node-id="2081:224">What needs my attention?</p>
              </div>
              <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="2081:225">
                <div className="flex-none rotate-90"><div className="relative size-[16px]"><img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} /></div></div>
              </div>
              <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2081:227">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap" data-node-id="2081:228">Where can I take action?</p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[15px] text-black w-[min-content]" data-node-id="2081:229">This led to a stronger information hierarchy, role-specific dashboards, clearer navigation, more structured tables, and more focused data visualisation.</p>
          </div>
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="2081:230">
            <div className="h-[327px] relative rounded-[12px] shrink-0 w-[654px]" data-node-id="2081:231" data-name="image 305">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" loading="lazy" src={imgImage305} />
            </div>
          </div>
        </div>

        {/* Decision Story 1 */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="2081:232">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="2081:233">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap" data-node-id="2081:235">Decision Story 1</p>
          </div>
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-node-id="2081:236">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="2081:237">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full" data-node-id="2081:238">Turning a complex testing workflow into one operational workspace</p>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full" data-node-id="2081:239">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full" data-node-id="2081:240">The problem</p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full" data-node-id="2081:241">NXTAAS brings together jobs, test suites, testbeds, regression cycles, reports and infrastructure information. The challenge was not simply displaying this information, but helping different users understand what needs their attention first.</p>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2081:242">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-black w-full" data-node-id="2081:243">
                  <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] w-full" data-node-id="2081:244">The decision</p>
                  <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] w-full" data-node-id="2081:245">
                    <p className="leading-[24px] mb-0">I structured the experience around an operational dashboard rather than treating the dashboard as a collection of individual widgets.</p>
                    <p className="leading-[24px] mb-0">The dashboard brings together:</p>
                    <ul className="list-disc mb-0">
                      <li className="mb-0 ms-[22.5px]"><span className="leading-[24px]">Current testing activity</span></li>
                      <li className="mb-0 ms-[22.5px]"><span className="leading-[24px]">Job status</span></li>
                      <li className="mb-0 ms-[22.5px]"><span className="leading-[24px]">Regression activity</span></li>
                      <li className="mb-0 ms-[22.5px]"><span className="leading-[24px]">Important operational information</span></li>
                      <li className="ms-[22.5px]"><span className="leading-[24px]">Role-specific priorities</span></li>
                    </ul>
                    <p className="leading-[24px]">This allowed the dashboard to act as a starting point for action, rather than just a place to view</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2081:246">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full" data-node-id="2081:247">
                  <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full" data-node-id="2081:248">Why this decision</p>
                  <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full" data-node-id="2081:249">A technical platform can expose a large amount of information without actually helping users decide what to do next. I focused the hierarchy around status, priority and next action.</p>
                </div>
              </div>
            </div>
            <div className="blur-[10px] h-[642.57px] relative shrink-0 w-[1039.892px]" data-node-id="2081:250" data-name="All Services 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgAllServices1} />
            </div>
          </div>
        </div>

        {/* Decision Story 2 */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="2081:251">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="2081:252">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap" data-node-id="2081:254">Decision Story 2</p>
          </div>
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-node-id="2081:255">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="2081:256">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full" data-node-id="2081:257">Designing a job experience around execution, not just configuration</p>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-black w-full" data-node-id="2081:258">
                <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] w-full" data-node-id="2081:259">The problem</p>
                <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] w-full" data-node-id="2081:260">
                  <p className="leading-[24px] mb-0">A job in NXTAAS contains a significant amount of technical information. Simply presenting every available property would make the experience difficult to scan.<br aria-hidden />The important question became:</p>
                  <p className="font-['Inter:Semi_Bold'] font-semibold leading-[24px]">How can a user quickly understand what is happening with a job and then investigate the details when necessary?</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2081:261">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-black w-full" data-node-id="2081:262">
                  <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] w-full" data-node-id="2081:263">The decision</p>
                  <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] w-full" data-node-id="2081:264">
                    <p className="leading-[24px] mb-0">I separated the experience into high-level job understanding and deeper technical investigation.</p>
                    <p className="leading-[24px] mb-0">The primary information hierarchy makes the important job information immediately visible, while detailed technical information remains available when the user needs to investigate further.<br aria-hidden />This creates a progressive path:</p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold leading-[24px]">Job → Status → Details → Investigation</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2081:265">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full" data-node-id="2081:266">
                  <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full" data-node-id="2081:267">Why this decision</p>
                  <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full" data-node-id="2081:268">Users working with test execution do not need every technical detail at the same moment. Showing everything with equal visual weight increases the effort required to understand the current state.</p>
                </div>
              </div>
            </div>
            <div className="blur-[7.5px] h-[642.57px] relative shrink-0 w-[919.492px]" data-node-id="2081:269" data-name="Running 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgRunning1} />
            </div>
          </div>
        </div>

        {/* Decision Story 3 */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1040px]" data-node-id="2081:270">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="2081:271">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap" data-node-id="2081:273">Decision Story 3</p>
          </div>
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-node-id="2081:274">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="2081:275">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full" data-node-id="2081:276">Connecting regression execution with meaningful analysis</p>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-black w-full" data-node-id="2081:277">
                <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] w-full" data-node-id="2081:278">The problem</p>
                <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] w-full" data-node-id="2081:279">
                  <p className="leading-[24px] mb-0">Regression testing is not a single action. Users need to move through multiple stages:</p>
                  <p className="font-['Inter:Semi_Bold'] font-semibold leading-[24px] mb-0">Test Suite → Regression Cycle → Results → Failure Analysis</p>
                  <p className="leading-[24px]">If these stages are treated as disconnected screens, users have to mentally connect the information themselves.</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="2081:280">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-black w-full" data-node-id="2081:281">
                  <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] w-full" data-node-id="2081:282">The decision</p>
                  <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] w-full" data-node-id="2081:283">
                    <p className="leading-[24px] mb-0">I designed the regression experience as a connected analytical workflow, where each stage builds on the previous one.</p>
                    <p className="leading-[24px]">The structure allows users to move from:</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-center py-[16px] relative shrink-0 w-full" data-node-id="2081:284">
                  {[
                    { id: "2081:285", text: "What was tested?" },
                    { id: "2081:289", text: "What regression cycle was executed?" },
                    { id: "2081:293", text: "What was the overall result?" },
                    { id: "2081:297", text: "Where did it fail?" },
                    { id: "2081:301", text: "What needs investigation?" },
                  ].map((item, i) => (
                    <div key={item.id}>
                      {i > 0 && (
                        <div className="flex items-center justify-center relative shrink-0 mb-[12px]">
                          <div className="flex-none rotate-180"><div className="relative size-[16px]"><img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp1} /></div></div>
                        </div>
                      )}
                      <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0 w-[324px]" data-node-id={item.id}>
                        <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2081:303">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-black w-full" data-node-id="2081:304">
                  <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] w-full" data-node-id="2081:305">Why this decision</p>
                  <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] w-full" data-node-id="2081:306">
                    <p className="leading-[24px] mb-0">The value of regression testing is not just knowing whether a test passed or failed. The next question is why.</p>
                    <p className="leading-[24px]">So the experience needed to preserve context between execution results and deeper failure analysis.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="blur-[7.5px] h-[642.57px] relative shrink-0 w-[919.492px]" data-node-id="2081:307" data-name="m2 2">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgM22} />
            </div>
          </div>
        </div>

        {/* Decision Story 4 */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1040px]" data-node-id="2081:308">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="2081:309">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap" data-node-id="2081:311">Decision Story 4</p>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2081:312">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="2081:313">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full" data-node-id="2081:314">Designing one system that works across different users and complex data</p>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-black w-full" data-node-id="2081:315">
                <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] w-full" data-node-id="2081:316">The problem</p>
                <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] w-full" data-node-id="2081:317">
                  <p className="leading-[24px] mb-0">NXTAAS serves different roles such as Normal User, Admin, Release Lead and Manager. At the same time, the product contains highly technical information, tables, statuses, charts and operational data.</p>
                  <p className="leading-[24px]">The challenge was maintaining a product that feels like one coherent system while still supporting different responsibilities.</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2081:318">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-black w-full" data-node-id="2081:319">
                  <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] w-full" data-node-id="2081:320">The decision</p>
                  <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] w-full" data-node-id="2081:321">
                    <p className="leading-[24px] mb-0">I established a reusable visual and interaction system across the product instead of designing each screen independently.</p>
                    <p className="leading-[24px] mb-0">The system covers:</p>
                    <ul className="list-disc mb-0">
                      {["Navigation","Typography","Cards","Buttons","Form fields","Status treatments","Data visualisation","Layout patterns"].map(item => (
                        <li key={item} className="mb-0 ms-[22.5px]"><span className="leading-[24px]">{item}</span></li>
                      ))}
                    </ul>
                    <p className="leading-[24px]">The same visual language could then support different workflows without making every screen feel completely different.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2081:322">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full" data-node-id="2081:323">
                  <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full" data-node-id="2081:324">Why this decision</p>
                  <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full" data-node-id="2081:325">Consistency becomes especially important in an enterprise product with many workflows. Users should spend their attention understanding the information, rather than learning a different interface pattern on every screen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outcome */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="2081:326">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="2081:327">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap" data-node-id="2081:329">Outcome</p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="2081:330">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full" data-node-id="2081:331">Making complex testing workflows easier to manage</p>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="2081:332">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]" data-node-id="2081:333">The final experience connects:</p>
              <div className="content-stretch flex gap-[18px] items-center py-[16px] relative shrink-0" data-node-id="2081:334">
                {["Dashboard","Jobs","Regression","Reports","Insights"].map((label, i) => (
                  <div key={label} className="flex items-center gap-[18px]">
                    {i > 0 && (
                      <div className="flex items-center justify-center relative shrink-0 size-[16px]">
                        <div className="flex-none rotate-90"><div className="relative size-[16px]"><img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} /></div></div>
                      </div>
                    )}
                    <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0">
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[15px] text-black w-[min-content]" data-node-id="2081:353">It gives users:</p>
            </div>
            {[
              { title: "Clarity", desc: "Quickly understand testing activity and current status." },
              { title: "Control", desc: "Manage jobs, test suites, and regression workflows from one system." },
              { title: "Consistency", desc: "Navigate complex enterprise workflows through a unified experience." },
            ].map(({ title, desc }) => (
              <div key={title} className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full">{title}</p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reflection */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="2081:363">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="2081:364">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap" data-node-id="2081:366">Reflection</p>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2081:367">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-black w-full" data-node-id="2081:368">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] w-full" data-node-id="2081:369">What I learned</p>
              <ul className="block font-['Inter:Regular'] font-normal leading-[0] list-disc relative shrink-0 text-[15px] w-full" data-node-id="2081:370">
                <li className="mb-0 ms-[22.5px]"><span className="leading-[24px]">Designing NXTAAS taught me how to simplify complex technical workflows.</span></li>
                <li className="ms-[22.5px]"><span className="leading-[24px]">I learned that strong enterprise UX is about making complex information easier to understand and act on.</span></li>
              </ul>
            </div>
          </div>
        </div>

        <NextCaseStudyCard currentPath="/case-study/nxtaas" />
      </div>
    </div>
  );
}
