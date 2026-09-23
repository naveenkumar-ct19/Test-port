import { useEffect } from "react";
import { useNavigate } from "react-router";
import NextCaseStudyCard from "@/components/NextCaseStudyCard";

const assetPathPrefix = "/assets";
const imgImage27 = `${assetPathPrefix}/ffaf9.png`;
const imgMock1 = `${assetPathPrefix}/8117a.png`;
const imgImage225 = `${assetPathPrefix}/2a42d.png`;
const imgImage226 = `${assetPathPrefix}/b575a.png`;
const imgImage227 = `${assetPathPrefix}/0687a.png`;
const imgImage228 = `${assetPathPrefix}/17ae2.png`;
const imgImage232 = `${assetPathPrefix}/64c4a.png`;
const imgImage233 = `${assetPathPrefix}/dca21.png`;
const imgImage234 = `${assetPathPrefix}/372bd.png`;
const imgImage235 = `${assetPathPrefix}/3be73.png`;
const imgImage236 = `${assetPathPrefix}/42cd6.png`;
const imgM21 = `${assetPathPrefix}/6bec3.png`;
const imgM31 = `${assetPathPrefix}/5e80c.png`;
const imgM41 = `${assetPathPrefix}/46f25.png`;
const imgGravityUiArrowUp = `${assetPathPrefix}/2a379.svg`;

export default function CaseStudyDishGenie() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = "rgb(240, 243, 255)";
    return () => { document.body.style.backgroundColor = ""; };
  }, []);

  return (
    <div
      className="relative w-full"
      data-node-id="2081:652"
      data-name="Desktop - 20"
      style={{ minHeight: 6100, backgroundImage: "linear-gradient(90deg, rgb(240, 243, 255) 0%, rgb(240, 243, 255) 100%)" }}
    >
      {/* NAV */}
      <div
        className="-translate-x-1/2 content-stretch flex items-center justify-between left-[calc(50%+0.5px)] w-[1299px]"
        data-node-id="2081:653"
        style={{ position: "fixed", top: 34, zIndex: 100 }}
      >
        <div
          className="bg-[#93001d] content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[999px] shrink-0"
          data-node-id="2081:654"
          onClick={() => { window.scrollTo(0, 0); navigate("/"); }}
          style={{ cursor: "pointer" }}
        >
          <div className="content-stretch flex items-center overflow-clip relative rounded-[99999px] shrink-0" data-node-id="2081:655">
            <div className="h-[40.028px] relative shrink-0 w-[38.75px]" data-node-id="2081:656">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage27} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-node-id="2081:657">
          <div
            className="bg-[#fcc6db] content-stretch drop-shadow-[2px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center px-[16px] py-[5px] relative rounded-[34px] shrink-0"
            data-node-id="2081:658"
            onClick={() => { window.scrollTo(0, 0); navigate("/about"); }}
            style={{ cursor: "pointer" }}
          >
            <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#3347ae] text-[14px] whitespace-nowrap">About me</p>
          </div>
          <div className="bg-[#fcc6db] content-stretch drop-shadow-[2px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center px-[16px] py-[5px] relative rounded-[34px] shrink-0" data-node-id="2081:660">
            <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#3347ae] text-[14px] whitespace-nowrap">Resume</p>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="absolute content-stretch flex flex-col gap-[24px] h-[651px] items-center left-[258px] overflow-clip top-[191px] w-[930px]" data-node-id="2081:662">
        <div className="bg-[#e4e4e4] border-2 border-[#bcbcbc] border-solid content-stretch flex items-center justify-center px-[24px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2081:663">
          <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#171717] text-[18px] whitespace-nowrap">B2C • AI • FOOD DELIVERY</p>
        </div>
        <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[28px] text-black text-center w-[777px]" data-node-id="2081:665">
          Dish Genie — Making food discovery easier with AI-powered recommendations
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center w-[874px]" data-node-id="2081:666">
          Turning "What should I eat?" into a guided, personalized ordering experience.
        </p>
        <div className="h-[725px] relative shrink-0 w-[558px]" data-node-id="2081:667">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[108.83%] left-[0.02%] max-w-none top-[-8.83%] w-[99.96%]" loading="lazy" src={imgMock1} />
          </div>
        </div>
      </div>

      {/* Role / Product / Team */}
      <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex gap-[32px] items-start left-1/2 p-[10px] text-black top-[927px] w-[1040px]" data-node-id="2081:2958">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
          <p className="font-['Space_Grotesk:Regular'] font-normal leading-[normal] min-w-full relative shrink-0 text-[14px] w-[min-content]">ROLE</p>
          <p className="font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center whitespace-nowrap">UX/UI Designer</p>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 uppercase">
          <p className="font-['Space_Grotesk:Regular'] font-normal leading-[normal] min-w-full relative shrink-0 text-[14px] w-[min-content]">Product</p>
          <p className="font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center whitespace-nowrap">Food Delivery App</p>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
          <p className="font-['Space_Grotesk:Regular'] font-normal leading-[normal] min-w-full relative shrink-0 text-[14px] uppercase w-[min-content]">Team</p>
          <p className="font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center whitespace-nowrap">1 UX/UI Designer</p>
        </div>
      </div>

      {/* Main content */}
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[32px] items-start left-1/2 top-[1035px] w-[1040px]" data-node-id="2081:668">

        {/* THE CHALLENGE */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="2081:669">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">THE CHALLENGE</p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[18px] w-full">Too many choices can make ordering food harder.</p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[16px] w-full">Traditional food-ordering experiences can leave users scrolling through restaurants and dishes without knowing what to choose.</p>
            <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex flex-col gap-[12px] items-start px-[24px] py-[12px] relative rounded-[8px] shrink-0 text-[16px] w-full">
              <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 whitespace-nowrap">The Goal:</p>
              <p className="font-['Inter:Regular'] font-normal min-w-full relative shrink-0 w-[min-content]">To create a simpler experience where users could express what they are feeling, how much time they have, and their budget—and get relevant food recommendations instead of browsing endlessly.</p>
            </div>
          </div>
        </div>

        {/* THE EXPERIENCE */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">THE EXPERIENCE</p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full">From craving to doorstep in one guided flow</p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[15px] text-black w-full">Dish Genie combines a familiar food-delivery experience with an AI-assisted discovery flow.<br aria-hidden />The experience moves through:</p>
            <div className="content-stretch flex gap-[18px] items-center py-[16px] relative shrink-0 w-full flex-wrap">
              {[
                { id: "2081:688", w: 120, label: "Discover" },
                { id: "2081:692", w: 124, label: "Tell AI what you want" },
                { id: "2081:696", w: 142, label: "Get personalized matches" },
                { id: "2081:700", w: 128, label: "Customize" },
                { id: "2081:704", w: 123, label: "Checkout" },
                { id: "2081:708", w: 143, label: "Track" },
              ].map((item, i) => (
                <div key={item.id} className="flex items-center gap-[18px]">
                  {i > 0 && (
                    <div className="flex items-center justify-center relative shrink-0 size-[16px]">
                      <div className="flex-none rotate-90"><div className="relative size-[16px]"><img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} /></div></div>
                    </div>
                  )}
                  <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[8px] shrink-0" style={{ width: item.w }}>
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center w-full">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* STORYBOARD */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">Storyboard</p>
          </div>
          <div className="content-stretch flex flex-col gap-[24.21px] items-start relative shrink-0">
            <div className="content-stretch flex gap-[16.156px] items-start relative shrink-0">
              {[imgImage225, imgImage226, imgImage227].map((src, i) => (
                <div key={i} className="h-[222.86px] relative shrink-0 w-[334.29px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={src} />
                </div>
              ))}
            </div>
            <div className="content-stretch flex gap-[16.156px] items-start relative shrink-0">
              {[imgImage228, imgImage232, imgImage233].map((src, i) => (
                <div key={i} className="h-[222.86px] relative shrink-0 w-[334.29px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={src} />
                </div>
              ))}
            </div>
            <div className="content-stretch flex gap-[16.156px] items-start relative shrink-0">
              {[imgImage234, imgImage235, imgImage236].map((src, i) => (
                <div key={i} className="h-[222.86px] relative shrink-0 w-[334.29px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={src} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SOLUTION JOURNEY */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">Solution Journey</p>
          </div>
          {/* Journey 1 */}
          <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex h-[500px] items-center justify-center relative shrink-0 w-[456px]">
              <div className="h-[500px] relative shrink-0 w-[385px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[108.83%] left-[0.02%] max-w-none top-[-8.83%] w-[99.96%]" loading="lazy" src={imgMock1} />
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start leading-[24px] min-w-px not-italic relative text-black">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[18px] w-full">The home screen keeps discovery familiar</p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">Users can browse categories, recommendations and offers as they normally would in a food-delivery app.<br aria-hidden />But instead of forcing users to browse when they are unsure what to eat, Smart AI provides another starting point.</p>
            </div>
          </div>
          {/* Journey 2 */}
          <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex h-[500px] items-center justify-center relative shrink-0 w-[456px]">
              <div className="h-[500px] relative shrink-0 w-[385px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[108.83%] left-[0.02%] max-w-none top-[-8.83%] w-[99.96%]" loading="lazy" src={imgMock1} />
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px not-italic relative text-black">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] w-full">AI starts with simple questions instead of a blank prompt</p>
              <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] w-full">
                <p className="leading-[24px] mb-0">Rather than asking users to describe their perfect meal from scratch, Smart AI breaks the decision into simple inputs:</p>
                <ul className="list-disc mb-0">
                  <li className="mb-0 ms-[22.5px]"><span className="leading-[24px]">How are you feeling?</span></li>
                  <li className="mb-0 ms-[22.5px]"><span className="leading-[24px]">How much time do you have?</span></li>
                  <li className="ms-[22.5px]"><span className="leading-[24px]">What is your budget?</span></li>
                </ul>
                <p className="leading-[24px]">This reduces the effort required to communicate what the user wants.</p>
              </div>
            </div>
          </div>
        </div>

        {/* DECISION STORY 1 */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">Decision Story 1</p>
          </div>
          <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex h-[500px] items-center justify-center relative shrink-0 w-[456px]">
              <div className="h-[500px] relative shrink-0 w-[353.478px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgM21} />
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full">Why I used guided choices instead of making users write a prompt</p>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-black w-full">
                <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] w-full">The moment:</p>
                <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] w-full whitespace-pre-wrap">
                  <p className="leading-[24px] mb-0">AI can feel powerful, but asking users to write a detailed food request creates another task before they can get a recommendation.<br aria-hidden />Options considered</p>
                  <p className="mb-0"><span className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[24px] not-italic">A — Open text prompt</span><span className="leading-[24px]"><br aria-hidden />{` Users describe exactly what they want.`}</span></p>
                  <p><span className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[24px] not-italic">B — Guided selections</span><span className="leading-[24px]"><br aria-hidden />{` Users choose their mood, available time and budget.`}</span></p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full">The decision</p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">I used guided selections as the primary interaction.</p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full">Outcome</p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">The AI experience becomes approachable even for users who do not know what to type.</p>
              </div>
            </div>
          </div>
        </div>

        {/* DECISION STORY 2 */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">Decision Story 2</p>
          </div>
          <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-[456px]">
              <div className="h-[500px] relative shrink-0 w-[353.478px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgM31} />
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full">Turning AI input into something users can actually choose</p>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black w-full">The problem</p>
              <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[15px] text-black w-full">
                <p className="leading-[24px] mb-0 whitespace-pre-wrap">After providing their preferences, users land on Your Matches.</p>
                <p className="leading-[24px] mb-0 whitespace-pre-wrap">Instead of returning one mysterious AI answer, the experience presents recognizable dishes with:</p>
                <ul className="list-disc">
                  {["Food imagery","Dish name","Rating / delivery information","Description","Customization options","Add-to-cart action"].map(item => (
                    <li key={item} className="mb-0 ms-[22.5px]"><span className="leading-[24px]">{item}</span></li>
                  ))}
                </ul>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full">The decision</p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">I kept the recommendation experience food-first rather than AI-first.</p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full">The result</p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">The AI becomes an invisible helper rather than another interface the user has to learn.</p>
              </div>
            </div>
          </div>
        </div>

        {/* DECISION STORY 3 */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">Decision Story 3</p>
          </div>
          <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-[455px]">
              <div className="h-[500px] relative shrink-0 w-[353.478px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgM41} />
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full">Keeping customization inside the recommendation flow</p>
              <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[15px] text-black w-full">
                <p className="leading-[24px] mb-0">Once users find a dish, they can expand the dish information and customize options such as cooking preferences.</p>
                <p className="leading-[24px]">Instead of sending the user through another separate customization experience, the controls remain connected to the recommended item.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FROM ORDER TO DELIVERY */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[28px] py-[4px] relative rounded-[999px] shrink-0">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[18px] text-black uppercase whitespace-nowrap">From Order to Delivery</p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-black w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[19px] w-full">The experience does not stop at checkout</p>
              <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] w-full whitespace-pre-wrap">
                <p className="leading-[24px] mb-0">After selecting the dish, the flow continues through:</p>
                <p className="leading-[24px] mb-0">​</p>
                <p className="font-['Inter:Semi_Bold'] font-semibold leading-[24px]">Cart → Checkout → Order confirmation → Live tracking</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[19px] w-full">Checkout</p>
              <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] w-full">
                <p className="leading-[24px] mb-0">The checkout screen surfaces:</p>
                <ul className="list-disc">
                  {["Delivery time","Selected items","Recommended add-ons","Delivery address","Payment","Final order action"].map(item => (
                    <li key={item} className="mb-0 ms-[27px]"><span className="leading-[24px]">{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start leading-[24px] relative shrink-0 w-full">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[19px] w-full">Confirmation</p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[18px] w-full">A clear success state reassures the user that the order has been placed.</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[19px] w-full">Tracking</p>
              <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[18px] w-full">
                <p className="leading-[24px] mb-0">The tracking screen then answers the next question users naturally have:</p>
                <p className="leading-[24px]">"Where is my food?"</p>
              </div>
            </div>
          </div>
        </div>

        {/* REFLECTION */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[28px] py-[4px] relative rounded-[999px] shrink-0">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[18px] text-black whitespace-nowrap">REFLECTION</p>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[20px] text-black w-full">AI works best when it feels effortless</p>
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full">The biggest takeaway was that an AI feature does not need to look complicated to feel intelligent. The interaction becomes more approachable when users can communicate their intent through familiar choices.</p>
          </div>
        </div>

        <NextCaseStudyCard currentPath="/case-study/dish-genie" />
      </div>
    </div>
  );
}
