import React from "react";
import { useNavigate } from "react-router";
import NextCaseStudyCard from "@/components/NextCaseStudyCard";
const assetPathPrefix = "/assets";
const imgImage27 = `${assetPathPrefix}/ffaf9.png`;
const imgS21 = `${assetPathPrefix}/c1027.png`;
const imgGravityUiArrowUp = `${assetPathPrefix}/2a379.svg`;
const imgGroup = `${assetPathPrefix}/a4083.svg`;
const imgGroup1 = `${assetPathPrefix}/92b34.svg`;
const imgGroup2 = `${assetPathPrefix}/115a3.svg`;
const imgGroup3 = `${assetPathPrefix}/c78a4.svg`;
const imgGroup4 = `${assetPathPrefix}/759ca.svg`;
const imgGroup5 = `${assetPathPrefix}/d9d18.svg`;
const imgGroup6 = `${assetPathPrefix}/c0dae.svg`;
const imgCircle = `${assetPathPrefix}/02b54.svg`;
const imgBaseStepperNum = `${assetPathPrefix}/7dd45.svg`;
const imgArrowLeft = `${assetPathPrefix}/3c480.svg`;
const imgArrowRight = `${assetPathPrefix}/b07b2.svg`;
const imgGroup7 = `${assetPathPrefix}/12981.svg`;
const imgGroup8 = `${assetPathPrefix}/1924c.svg`;
const imgGroup9 = `${assetPathPrefix}/18283.svg`;
const imgGroup10 = `${assetPathPrefix}/e9d0e.svg`;
const imgGroup11 = `${assetPathPrefix}/d5b0f.svg`;
const imgGroup12 = `${assetPathPrefix}/f953e.svg`;
const imgGroup13 = `${assetPathPrefix}/f32f9.svg`;
const imgFrame1410076839 = `${assetPathPrefix}/b36d5.svg`;
const imgCircle1 = `${assetPathPrefix}/3b391.svg`;
const imgBaseStepperNum1 = `${assetPathPrefix}/cb595.svg`;
const imgMaterialSymbolsSearchRounded = `${assetPathPrefix}/03527.svg`;
const imgArrowLeft1 = `${assetPathPrefix}/b2737.svg`;
const imgArrowRight1 = `${assetPathPrefix}/6a3b8.svg`;
const imgGravityUiArrowUp1 = `${assetPathPrefix}/fddb6.svg`;
const imgFrame1410076840 = `${assetPathPrefix}/4468f.svg`;
const imgArrowLeft2 = `${assetPathPrefix}/8948e.svg`;
const imgArrowRight2 = `${assetPathPrefix}/7bbd7.svg`;
const imgIcon = `${assetPathPrefix}/e4182.svg`;

export default function CaseStudy2() {
  const navigate = useNavigate();
  return (
    <div className="relative pb-[120px]" style={{ backgroundColor: "rgb(240, 243, 255)", minHeight: "100dvh" }}>
      <div>
        {/* Nav bar */}
        <div className="-translate-x-1/2 content-stretch flex items-center justify-between left-[calc(50%+0.5px)] w-[1299px]" style={{ position: "fixed", top: "34px", zIndex: 100 }}>
          <div className="bg-[#93001d] content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[999px] shrink-0" onClick={() => { window.scrollTo(0, 0); navigate("/"); }} style={{ cursor: "pointer" }}>
            <div className="content-stretch flex items-center overflow-clip relative rounded-[99999px] shrink-0">
              <div className="h-[40.028px] relative shrink-0 w-[38.75px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage27} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
            <div className="bg-[#fcc6db] content-stretch drop-shadow-[2px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center px-[16px] py-[5px] relative rounded-[34px] shrink-0" onClick={() => { window.scrollTo(0, 0); navigate("/about"); }} style={{ cursor: "pointer" }}>
              <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#3347ae] text-[14px] whitespace-nowrap">
                About me
              </p>
            </div>
            <div className="bg-[#fcc6db] content-stretch drop-shadow-[2px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center px-[16px] py-[5px] relative rounded-[34px] shrink-0">
              <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#3347ae] text-[14px] whitespace-nowrap">
                Resume
              </p>
            </div>
          </div>
        </div>

        {/* Intro block */}
        <div className="mx-auto flex flex-col gap-[24px] items-center pt-[191px] w-[929.565px]">
          <div className="bg-[#e4e4e4] border-2 border-[#bcbcbc] border-solid content-stretch flex items-center justify-center px-[24px] py-[8px] relative rounded-[999px] shrink-0">
            <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#171717] text-[18px] whitespace-nowrap">
              B2B • AI • SAAS
            </p>
          </div>
          <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[28px] text-black text-center w-[736px]">
            Designing a clearer workflow for configuring emergency alerts
          </p>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center w-[766px]">
            BlackBerry AtHoc is an enterprise emergency communication platform for configuring and delivering critical alerts. I designed an end-to-end workflow that helps administrators define, target, schedule, and confidently publish alerts.
          </p>
          <div className="h-[566px] relative shrink-0 w-[930px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgS21} />
          </div>
        </div>

        {/* Metadata row */}
        <div className="content-stretch flex gap-[32px] items-start mx-auto mt-[40px] p-[10px] w-[1040px]">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
            <p className="[word-break:break-word] font-['Space_Grotesk:Regular'] font-normal leading-[normal] relative shrink-0 text-[14px] text-black">
              ROLE
            </p>
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
              UX/UI Designer
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
            <p className="[word-break:break-word] font-['Space_Grotesk:Regular'] font-normal leading-[normal] relative shrink-0 text-[14px] text-black uppercase">
              Product
            </p>
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
              Orian CloudMax
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
            <p className="[word-break:break-word] font-['Space_Grotesk:Regular'] font-normal leading-[normal] relative shrink-0 text-[14px] text-black uppercase">
              Team
            </p>
            <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
              1 UX/UI Designer
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="content-stretch flex flex-col gap-[32px] items-start mx-auto mt-[80px] w-[1040px]">

          {/* Confidentiality Notice */}
          <div className="[word-break:break-word] bg-white border border-[#dcdcdc] border-solid content-stretch flex flex-col gap-[14px] items-center justify-center leading-[24px] px-[32px] py-[24px] relative rounded-[8px] shrink-0 text-black w-full">
            <p className="font-['Space_Grotesk:Bold'] font-bold relative shrink-0 text-[18px] whitespace-nowrap">
              Confidentiality Notice
            </p>
            <p className="font-['Inter:Regular'] font-normal min-w-full not-italic relative shrink-0 text-[15px] text-center w-[min-content]">{`To respect confidentiality agreements, certain visuals have been blurred or omitted. If you'd like to learn more, I'd be happy to walk you through the original screens, design decisions, and outcomes during 1:1 conversation.`}</p>
          </div>

          {/* THE CHALLENGE */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap">
                THE CHALLENGE
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full">
                Configuring an alert involves several critical decisions
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[15px] text-black w-full">
                Creating an emergency alert is not just about writing a message. An administrator needs to define:
              </p>
              <div className="content-stretch flex gap-[18px] items-center py-[16px] relative shrink-0 w-full">
                {["What is being sent", "Who should receive it", "Which organizations are involved", "How it should be delivered", "When it should be sent"].map((label, i) => (
                  <React.Fragment key={label}>
                    <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[8px] shrink-0 w-[166px]">
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center w-full">
                        {label}
                      </p>
                    </div>
                    {i < 4 && (
                      <div className="flex items-center justify-center relative shrink-0 size-[16px]">
                        <div className="flex-none rotate-90">
                          <div className="relative size-[16px]">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} />
                          </div>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="[word-break:break-word] bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex flex-col gap-[8px] items-start leading-[24px] not-italic px-[24px] py-[12px] relative rounded-[8px] shrink-0 text-[16px] text-black w-full">
                <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 whitespace-nowrap">
                  The Goal:
                </p>
                <p className="font-['Inter:Regular'] font-normal min-w-full relative shrink-0 w-[min-content]">
                  Make complex alert configuration easier to navigate, understand, and validate.
                </p>
              </div>
            </div>
          </div>

          {/* THE EXPERIENCE */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">
                THE EXPERIENCE
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full">
                One alert, five focused decisions
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[15px] text-black w-full">
                The experience is organized into five steps:
              </p>
              <div className="content-stretch flex gap-[18px] items-center py-[16px] relative shrink-0 w-full">
                {["Alert Template", "Target Users", "Target Organizations", "Mass Devices", "Schedule", "Review & Publish"].map((label, i) => (
                  <React.Fragment key={label}>
                    <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex flex-col items-center justify-center p-[12px] relative rounded-[8px] shrink-0 min-w-[100px]">
                      <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center">
                        {label}
                      </p>
                    </div>
                    {i < 5 && (
                      <div className="flex items-center justify-center relative shrink-0 size-[16px]">
                        <div className="flex-none rotate-90">
                          <div className="relative size-[16px]">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} />
                          </div>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[15px] text-black w-full">
                Each step answers one question before the administrator moves to the next.
              </p>
            </div>
          </div>

          {/* DEFINE THE ALERT */}
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">
                Define the alert
              </p>
            </div>
            <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
              {/* Blurred mock - Define alert */}
              <div className="blur-[5px] content-stretch flex flex-col h-[352.2px] items-center overflow-x-clip overflow-y-hidden relative shrink-0 w-[587px]" style={{ background: "#f8f9fa" }}>
                <div className="bg-[rgba(0,0,0,0.87)] content-stretch flex h-[23.48px] items-start overflow-clip relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col h-full items-start justify-center overflow-clip py-[3.669px] relative shrink-0 w-[39.623px]">
                    <div className="overflow-clip relative shrink-0 size-[18.344px]">
                      <div className="absolute inset-[9.61%_37.15%_35.53%_6.32%]" style={{ maskImage: `url("${imgGroup}"), url("${imgGroup1}")`, maskSize: "18.344px 18.344px" }}>
                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGroup2} />
                      </div>
                      <div className="absolute inset-[19.18%_13.12%_10.13%_12.93%]" style={{ maskImage: `url("${imgGroup}"), url("${imgGroup3}")`, maskSize: "18.344px 18.344px" }}>
                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGroup4} />
                      </div>
                      <div className="absolute inset-[4.4%_2.69%_8.3%_2.7%]" style={{ maskImage: `url("${imgGroup}"), url("${imgGroup5}")`, maskSize: "18.344px 18.344px" }}>
                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGroup6} />
                      </div>
                    </div>
                  </div>
                  {["Alert", "Account", "Collaborate", "Users", "Organizations", "Reports", "Accounts"].map((label, i) => (
                    <div key={label} className="content-stretch flex flex-col h-full items-center justify-center overflow-clip py-[1.467px] relative shrink-0 w-[44.025px]" style={{ background: i === 0 ? "#7b6c3c" : "transparent" }}>
                      <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[4.403px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{label}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white border-[#e7e8ef] border-[0.367px] border-solid content-stretch flex flex-1 items-start min-h-px overflow-clip relative w-full">
                  <div className="bg-white border-[#e7e8ef] border-b-[0.367px] border-l-[0.367px] border-r-[0.367px] border-solid content-stretch flex flex-col h-full items-start px-[2.935px] py-[5.87px] relative shrink-0 w-[78.511px]">
                    <div className="content-stretch flex gap-[2.935px] items-center overflow-clip bg-[#eff2f5] px-[5.87px] py-[2.935px] relative rounded-[1.467px] shrink-0 w-full">
                      <div className="relative shrink-0 size-[8.805px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgCircle} />
                        <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans:Medium'] font-medium inset-0 justify-center leading-[0] text-white text-[1.88px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                          <p className="leading-[normal]">1</p>
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#001f3f] text-[5.136px] w-[54.298px]" style={{ fontVariationSettings: '"wdth" 100' }}>Alert Template</p>
                    </div>
                    {[2, 3, 4, 5].map((n, i) => (
                      <div key={n} className="bg-white content-stretch flex gap-[2.935px] items-center overflow-clip px-[5.87px] py-[2.935px] relative shrink-0 w-full">
                        <div className="relative shrink-0 size-[8.805px]">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgBaseStepperNum} />
                          <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans:Medium'] font-medium inset-0 justify-center leading-[0] text-[#9198a1] text-[5.14px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                            <p className="leading-[normal]">{n}</p>
                          </div>
                        </div>
                        <p className="[word-break:break-word] font-['Open_Sans:Regular'] font-normal leading-[normal] relative shrink-0 text-[#9198a1] text-[5.136px] w-[54.298px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                          {["Target Users", "Target Organizations", "Mass Devices", "Schedule"][i]}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="content-stretch flex flex-col flex-1 h-full items-start overflow-clip relative" style={{ background: "#fff" }}>
                    <div className="[word-break:break-word] bg-white content-stretch flex flex-col font-['Open_Sans:SemiBold'] font-semibold gap-[1.467px] items-start leading-[normal] overflow-clip p-[8.805px] relative shrink-0 text-[#001f3f] w-full">
                      <p className="min-w-full relative shrink-0 text-[8.805px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>Alert template</p>
                      <p className="relative shrink-0 text-[5.136px] tracking-[0.0205px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Complete the 5 steps below to create and configure a new alert template.</p>
                    </div>
                    <div className="content-stretch flex flex-col flex-1 items-start pb-[5.87px] px-[8.805px] relative w-full overflow-clip">
                      <div className="content-stretch flex flex-col gap-[8.805px] items-start relative shrink-0 w-[184.905px]">
                        {[{ label: "Name", ph: "Enter template name" }, { label: "Description", ph: "Enter template description" }, { label: "Folder", ph: "System Default" }].map((f) => (
                          <div key={f.label} className="content-stretch flex flex-col gap-[1.467px] items-start justify-center relative shrink-0 w-full">
                            <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#001f3f] text-[5.136px]" style={{ fontVariationSettings: '"wdth" 100' }}>{f.label}:</p>
                            <div className="bg-white border-[#d3d8de] border-[0.367px] border-solid content-stretch flex items-center overflow-clip px-[5.87px] py-[4.403px] relative rounded-[1.467px] shrink-0 w-full">
                              <p className="[word-break:break-word] flex-1 font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative text-[4.403px] text-[rgba(62,64,66,0.87)] tracking-[0.0176px]" style={{ fontVariationSettings: '"wdth" 100' }}>{f.ph}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white border-[#e7e8ef] border-b-[0.367px] border-r-[0.367px] border-solid border-t-[0.367px] content-stretch flex items-start pl-[8.805px] pr-[5.87px] py-[5.87px] relative shrink-0 w-full">
                      <div className="flex-1 min-w-px" />
                      <div className="content-stretch flex gap-[2.935px] items-center relative shrink-0">
                        <div className="bg-white border-[#5a7b9a] border-[0.367px] border-solid content-stretch flex gap-[2.935px] h-[14.675px] items-center justify-center overflow-clip px-[5.87px] relative rounded-[1.467px] shrink-0">
                          <div className="relative shrink-0 size-[5.87px]">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgArrowLeft} />
                          </div>
                          <p className="[word-break:break-word] font-['Noto_Sans:Medium'] font-medium leading-[0] relative shrink-0 text-[#5a7b9a] text-[5.136px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>Back</p>
                        </div>
                        <div className="bg-[#5a7b9a] content-stretch flex gap-[2.935px] h-[14.675px] items-center justify-center overflow-clip px-[5.87px] relative rounded-[1.467px] shrink-0">
                          <p className="[word-break:break-word] font-['Noto_Sans:Medium'] font-medium leading-[0] relative shrink-0 text-[5.136px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>Next</p>
                          <div className="relative shrink-0 size-[5.87px]">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgArrowRight} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
                <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[15px] text-black w-full">
                  <p className="leading-[24px] mb-0">The administrator starts by selecting or configuring the alert template.</p>
                  <p className="leading-[24px]">The workflow immediately establishes the five steps required to complete the configuration.</p>
                </div>
                <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[15px] text-black w-full">
                  <p className="leading-[24px] mb-0">This gives the administrator a clear sense of:</p>
                  <ul className="list-disc">
                    <li className="mb-0 ms-[22.5px]"><span className="leading-[24px]">Where they are</span></li>
                    <li className="mb-0 ms-[22.5px]"><span className="leading-[24px]">What has been completed</span></li>
                    <li className="ms-[22.5px]"><span className="leading-[24px]">What comes next</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* DEFINE THE AUDIENCE */}
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">
                DEFINE THE AUDIENCE
              </p>
            </div>
            <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
              {/* Blurred mock - Define audience */}
              <div className="blur-[5px] content-stretch flex flex-col h-[428.143px] items-center overflow-x-clip overflow-y-hidden relative shrink-0 w-[587px]" style={{ background: "#f8f9fa" }}>
                <div className="bg-[rgba(0,0,0,0.87)] content-stretch flex h-[23.48px] items-start overflow-clip relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col h-full items-start justify-center overflow-clip py-[3.669px] relative shrink-0 w-[39.623px]">
                    <div className="overflow-clip relative shrink-0 size-[18.344px]">
                      <div className="absolute inset-[9.61%_37.15%_35.53%_6.32%]" style={{ maskImage: `url("${imgGroup7}"), url("${imgGroup8}")`, maskSize: "18.344px 18.344px" }}>
                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGroup9} />
                      </div>
                      <div className="absolute inset-[19.18%_13.12%_10.13%_12.93%]" style={{ maskImage: `url("${imgGroup7}"), url("${imgGroup10}")`, maskSize: "18.344px 18.344px" }}>
                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGroup11} />
                      </div>
                      <div className="absolute inset-[4.4%_2.69%_8.3%_2.7%]" style={{ maskImage: `url("${imgGroup7}"), url("${imgGroup12}")`, maskSize: "18.344px 18.344px" }}>
                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGroup13} />
                      </div>
                    </div>
                  </div>
                  {["Alert", "Account", "Collaborate", "Users", "Organizations", "Reports", "Accounts"].map((label, i) => (
                    <div key={label} className="content-stretch flex flex-col h-full items-center justify-center overflow-clip py-[1.468px] relative shrink-0 w-[44.025px]" style={{ background: i === 0 ? "#7b6c3c" : "transparent" }}>
                      <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[4.403px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{label}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white border-[#e7e8ef] border-[0.367px] border-solid content-stretch flex flex-1 items-start min-h-px overflow-clip relative w-full">
                  <div className="bg-white border-[#e7e8ef] border-b-[0.367px] border-l-[0.367px] border-r-[0.367px] border-solid content-stretch flex flex-col h-full items-start px-[2.935px] py-[5.87px] relative shrink-0 w-[78.511px]">
                    <div className="bg-white content-stretch flex gap-[2.935px] items-center overflow-clip px-[5.87px] py-[2.935px] relative shrink-0 w-full">
                      <div className="relative shrink-0 size-[8.805px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgFrame1410076839} />
                      </div>
                      <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#001f3f] text-[5.136px] w-[54.298px]" style={{ fontVariationSettings: '"wdth" 100' }}>Alert Template</p>
                    </div>
                    <div className="bg-[#eff2f5] content-stretch flex gap-[2.935px] items-center overflow-clip px-[5.87px] py-[2.935px] relative shrink-0 w-full">
                      <div className="relative shrink-0 size-[8.805px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgCircle1} />
                        <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans:Display_SemiBold'] font-semibold inset-0 justify-center leading-[0] text-[5.14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 100, "wdth" 100' }}>
                          <p className="leading-[normal]">2</p>
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#001f3f] text-[5.136px] w-[54.298px]" style={{ fontVariationSettings: '"wdth" 100' }}>Target Users</p>
                    </div>
                    {[{ n: 3, label: "Target Organizations" }, { n: 4, label: "Mass Devices" }, { n: 5, label: "Schedule" }].map(({ n, label }) => (
                      <div key={n} className="bg-white content-stretch flex gap-[2.935px] items-center overflow-clip px-[5.87px] py-[2.935px] relative shrink-0 w-full">
                        <div className="relative shrink-0 size-[8.805px]">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgBaseStepperNum1} />
                          <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans:Medium'] font-medium inset-0 justify-center leading-[0] text-[#9198a1] text-[5.14px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                            <p className="leading-[normal]">{n}</p>
                          </div>
                        </div>
                        <p className="[word-break:break-word] font-['Open_Sans:Regular'] font-normal leading-[normal] relative shrink-0 text-[#9198a1] text-[5.136px] w-[54.298px]" style={{ fontVariationSettings: '"wdth" 100' }}>{label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="content-stretch flex flex-col flex-1 h-full items-start overflow-clip relative bg-white">
                    <div className="[word-break:break-word] bg-white content-stretch flex flex-col font-['Open_Sans:SemiBold'] font-semibold gap-[1.468px] items-start leading-[normal] overflow-clip p-[8.805px] relative shrink-0 text-[#001f3f] w-full">
                      <p className="min-w-full relative shrink-0 text-[8.805px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>Alert template</p>
                      <p className="relative shrink-0 text-[5.136px] tracking-[0.0205px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Complete the 5 steps below to create and configure a new alert template.</p>
                    </div>
                    <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[5.87px] px-[8.805px] relative shrink-0 w-full">
                      <div className="bg-[#fafafa] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
                        <div className="bg-white border-[#e7e8ef] border-b-[0.367px] border-solid content-stretch flex h-[17.61px] items-start pr-[4.403px] relative shrink-0 w-full">
                          <div className="border-[#5a7b9a] border-b-[0.734px] border-solid content-stretch flex h-full items-center overflow-clip pr-[1.468px] py-[8.805px] relative shrink-0">
                            <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#001f3f] text-[5.136px] tracking-[0.0205px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>By Group</p>
                          </div>
                          <div className="content-stretch flex h-full items-center justify-center overflow-clip p-[8.805px] relative shrink-0">
                            <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#9198a1] text-[5.136px] tracking-[0.0205px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>By User</p>
                          </div>
                          <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[5.87px] py-[8.805px] relative shrink-0">
                            <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#9198a1] text-[5.136px] tracking-[0.0205px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>By Advance Query</p>
                          </div>
                        </div>
                        <div className="bg-[#f8f9fa] border-[#eff2f5] border-[0.367px] border-solid content-stretch flex items-center overflow-clip p-[4.403px] relative shrink-0 w-full">
                          <div className="bg-white border-[#e5e5e5] border-[0.367px] border-solid content-stretch flex flex-1 gap-[1.468px] h-[13.208px] items-start min-w-px overflow-clip p-[3.669px] relative rounded-[1.468px] shadow-[0px_0px_0.367px_0px_rgba(0,0,0,0.25)]">
                            <div className="relative shrink-0 size-[5.87px]">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgMaterialSymbolsSearchRounded} />
                            </div>
                            <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#3e4042] text-[4.403px] tracking-[0.0176px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Search</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border-[#e7e8ef] border-b-[0.367px] border-r-[0.367px] border-solid border-t-[0.367px] content-stretch flex items-start pl-[8.805px] pr-[5.87px] py-[5.87px] relative shrink-0 w-full">
                      <div className="flex-1 min-w-px" />
                      <div className="content-stretch flex gap-[2.935px] items-center relative shrink-0">
                        <div className="bg-white border-[#5a7b9a] border-[0.367px] border-solid content-stretch flex gap-[2.935px] h-[14.675px] items-center justify-center overflow-clip px-[5.87px] relative rounded-[1.468px] shrink-0">
                          <div className="relative shrink-0 size-[5.87px]">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgArrowLeft1} />
                          </div>
                          <p className="[word-break:break-word] font-['Noto_Sans:Medium'] font-medium leading-[0] relative shrink-0 text-[#5a7b9a] text-[5.136px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>Back</p>
                        </div>
                        <div className="bg-[#5a7b9a] content-stretch flex gap-[2.935px] h-[14.675px] items-center justify-center overflow-clip px-[5.87px] relative rounded-[1.468px] shrink-0">
                          <p className="[word-break:break-word] font-['Noto_Sans:Medium'] font-medium leading-[0] relative shrink-0 text-[5.136px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>Next</p>
                          <div className="relative shrink-0 size-[5.87px]">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgArrowRight1} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full">
                  Choose who should receive the alert
                </p>
                <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[15px] text-black w-full">
                  <p className="leading-[24px] mb-0">Once the alert is defined, the administrator needs to determine its audience.</p>
                  <p className="leading-[24px]">The experience supports three targeting approaches:</p>
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-center py-[16px] relative shrink-0 w-full">
                  {["By Group", "By User", "By Advanced Query"].map((label, i) => (
                    <React.Fragment key={label}>
                      <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0 w-[240px]">
                        <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">{label}</p>
                      </div>
                      {i < 2 && (
                        <div className="flex items-center justify-center relative shrink-0">
                          <div className="flex-none rotate-180">
                            <div className="relative size-[16px]">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp1} />
                            </div>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[15px] text-black w-full">
                  This gives administrators flexibility without forcing every alert into the same targeting method.
                </p>
              </div>
            </div>
          </div>

          {/* THE KEY UX DECISION */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">
                THE KEY UX DECISION
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full">
                The administrator also needs to understand whether those users can actually be reached
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[15px] text-black w-full">
                The Targeting Summary makes this impact visible as the audience changes.
              </p>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-black w-full">
                <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] w-full">For example:</p>
                <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] w-full whitespace-pre-wrap">
                  <p className="leading-[24px] mb-0">1 selected<br aria-hidden />{`→ 1 reachable / 0 not reachable`}</p>
                  <p className="leading-[24px] mb-0">2 selected<br aria-hidden />{`→ 1 reachable / 1 not reachable`}</p>
                  <p className="leading-[24px] mb-0">82 selected<br aria-hidden />{`→ 42 reachable / 40 not reachable`}</p>
                  <p className="leading-[24px]">104 selected<br aria-hidden />{`→ 62 reachable / 42 not reachable`}</p>
                </div>
              </div>
              <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex flex-col items-start px-[24px] py-[12px] relative rounded-[8px] shrink-0 w-full">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black w-full">
                  The selection tells administrators who they chose. The summary tells them what that choice means.
                </p>
              </div>
            </div>
          </div>

          {/* WHY THE TARGETING SUMMARY MATTERS */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">
                WHY THE TARGETING SUMMARY MATTERS
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full">
                Turning a hidden risk into visible information
              </p>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-black w-full">
                <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] w-full">Overview</p>
                <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] w-full">
                  <p className="leading-[24px] mb-0">Without a targeting summary, an administrator could see:</p>
                  <p className="leading-[24px]"><span className="font-['Inter:Medium'] font-medium">104 users selected</span><br aria-hidden />But that does not tell them how many users can actually receive the alert.</p>
                </div>
              </div>
              <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[15px] text-black w-full">
                <p className="leading-[24px] mb-0">The summary exposes:</p>
                <ul className="list-disc">
                  <li className="mb-0 ms-[22.5px]"><span className="leading-[24px]">104 users targeted</span></li>
                  <li className="mb-0 ms-[22.5px]"><span className="leading-[24px]">62 reachable</span></li>
                  <li className="ms-[22.5px]"><span className="leading-[24px]">42 not reachable</span></li>
                </ul>
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[15px] text-black w-full">
                This allows the administrator to identify a potential delivery issue before continuing with the configuration.
              </p>
            </div>
          </div>

          {/* DEFINE THE ORGANIZATIONAL SCOPE */}
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">
                DEFINE THE ORGANIZATIONAL SCOPE
              </p>
            </div>
            <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
              {/* Blurred mock - Org scope */}
              <div className="blur-[5px] content-stretch flex flex-col h-[428.143px] items-center overflow-x-clip overflow-y-hidden relative shrink-0 w-[587px]" style={{ background: "#f8f9fa" }}>
                <div className="bg-[rgba(0,0,0,0.87)] content-stretch flex h-[23.48px] items-start overflow-clip relative shrink-0 w-full">
                  {["Alert", "Account", "Collaborate", "Users", "Organizations", "Reports", "Accounts"].map((label, i) => (
                    <div key={label} className="content-stretch flex flex-col h-full items-center justify-center overflow-clip py-[1.468px] relative shrink-0 w-[44.025px]" style={{ background: i === 0 ? "#7b6c3c" : "transparent" }}>
                      <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[4.403px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{label}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white border-[#e7e8ef] border-[0.367px] border-solid content-stretch flex flex-1 items-start min-h-px overflow-clip relative w-full">
                  <div className="bg-white border-[#e7e8ef] border-b-[0.367px] border-l-[0.367px] border-r-[0.367px] border-solid content-stretch flex flex-col h-full items-start px-[2.935px] py-[5.87px] relative shrink-0 w-[78.511px]">
                    {[
                      { done: true, label: "Alert Template" },
                      { done: true, label: "Target Users" },
                      { active: true, n: 3, label: "Target Organizations" },
                      { n: 4, label: "Mass Devices" },
                      { n: 5, label: "Schedule" },
                    ].map((step, i) => (
                      <div key={i} className={`${step.active ? "bg-[#eff2f5]" : "bg-white"} content-stretch flex gap-[2.935px] items-center overflow-clip px-[5.87px] py-[2.935px] relative rounded-[1.468px] shrink-0 w-full`}>
                        <div className="relative shrink-0 size-[8.805px]">
                          {step.done ? (
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgFrame1410076840} />
                          ) : (
                            <>
                              <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={step.active ? imgCircle1 : imgBaseStepperNum1} />
                              <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans:Medium'] font-medium inset-0 justify-center leading-[0] text-[#9198a1] text-[5.14px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100', color: step.active ? "white" : undefined }}>
                                <p className="leading-[normal]">{step.n}</p>
                              </div>
                            </>
                          )}
                        </div>
                        <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[5.136px] w-[54.298px]" style={{ fontVariationSettings: '"wdth" 100', color: (step.done || step.active) ? "#001f3f" : "#9198a1", fontWeight: (step.done || step.active) ? 600 : 400 }}>{step.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#f8f9fa] content-stretch flex flex-col flex-1 h-full items-start overflow-clip relative">
                    <div className="[word-break:break-word] bg-white content-stretch flex flex-col font-['Open_Sans:SemiBold'] font-semibold gap-[1.468px] items-start leading-[normal] overflow-clip p-[8.805px] relative shrink-0 text-[#001f3f] w-full">
                      <p className="min-w-full relative shrink-0 text-[8.805px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>Alert template</p>
                      <p className="relative shrink-0 text-[5.136px] tracking-[0.0205px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Complete the 5 steps below to create and configure a new alert template.</p>
                    </div>
                    <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip pb-[5.87px] px-[8.805px] relative shrink-0 w-full">
                      <div className="bg-[#fafafa] border-[#eff2f5] border-b-[0.367px] border-solid content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
                        {["Geofence - Global", "Geofence - Sub Org", "North America", "Europe", "Asia Pacific", "Latin America"].map((org) => (
                          <div key={org} className="bg-white border-[#eff2f5] border-solid border-t-[0.367px] content-stretch flex h-[14.675px] items-center overflow-clip p-[2.935px] relative shrink-0 w-full">
                            <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#0059c6] text-[4.403px] text-ellipsis tracking-[0.0176px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{org}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white border-[#e7e8ef] border-b-[0.367px] border-r-[0.367px] border-solid border-t-[0.367px] content-stretch flex items-start pl-[8.805px] pr-[5.87px] py-[5.87px] relative shrink-0 w-full">
                      <div className="flex-1 min-w-px" />
                      <div className="content-stretch flex gap-[2.935px] items-center relative shrink-0">
                        <div className="bg-white border-[#5a7b9a] border-[0.367px] border-solid content-stretch flex gap-[2.935px] h-[14.675px] items-center justify-center overflow-clip px-[5.87px] relative rounded-[1.468px] shrink-0">
                          <div className="relative shrink-0 size-[5.87px]">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgArrowLeft2} />
                          </div>
                          <p className="[word-break:break-word] font-['Noto_Sans:Medium'] font-medium leading-[0] relative shrink-0 text-[#5a7b9a] text-[5.136px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>Back</p>
                        </div>
                        <div className="bg-[#5a7b9a] content-stretch flex gap-[2.935px] h-[14.675px] items-center justify-center overflow-clip px-[5.87px] relative rounded-[1.468px] shrink-0">
                          <p className="[word-break:break-word] font-['Noto_Sans:Medium'] font-medium leading-[0] relative shrink-0 text-[5.136px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>Next</p>
                          <div className="relative shrink-0 size-[5.87px]">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgArrowRight2} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full">
                  Select target organizations
                </p>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[15px] text-black w-full">
                  After defining the audience, the administrator can specify which organizations should be included.
                </p>
                <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[15px] text-black w-full">
                  <p className="leading-[24px] mb-0">The organization view provides information such as:</p>
                  <ul className="list-disc">
                    <li className="mb-0 ms-[22.5px]"><span className="leading-[24px]">Organization name</span></li>
                    <li className="mb-0 ms-[22.5px]"><span className="leading-[24px]">Organizational structure</span></li>
                    <li className="mb-0 ms-[22.5px]"><span className="leading-[24px]">Number of users</span></li>
                    <li className="ms-[22.5px]"><span className="leading-[24px]">Available actions</span></li>
                  </ul>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[15px] text-black w-full">
                  This helps the administrator understand the scope before moving forward.
                </p>
              </div>
            </div>
          </div>

          {/* CHOOSE HOW THE ALERT IS DELIVERED */}
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">
                CHOOSE HOW THE ALERT IS DELIVERED
              </p>
            </div>
            <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
              {/* Blurred mock - delivery */}
              <div className="blur-[5px] content-stretch flex flex-col h-[428.143px] items-center overflow-x-clip overflow-y-hidden relative shrink-0 w-[587px]" style={{ background: "#f8f9fa" }}>
                <div className="bg-[rgba(0,0,0,0.87)] content-stretch flex h-[23.48px] items-start overflow-clip relative shrink-0 w-full">
                  {["Alert", "Account", "Collaborate", "Users", "Organizations", "Reports", "Accounts"].map((label, i) => (
                    <div key={label} className="content-stretch flex flex-col h-full items-center justify-center overflow-clip py-[1.468px] relative shrink-0 w-[44.025px]" style={{ background: i === 0 ? "#7b6c3c" : "transparent" }}>
                      <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[4.403px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{label}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white border-[#e7e8ef] border-[0.367px] border-solid content-stretch flex flex-1 items-start min-h-px overflow-clip relative w-full">
                  <div className="bg-white border-[#e7e8ef] border-b-[0.367px] border-l-[0.367px] border-r-[0.367px] border-solid content-stretch flex flex-col h-full items-start px-[2.935px] py-[5.87px] relative shrink-0 w-[78.511px]">
                    {[
                      { done: true, label: "Alert Template" },
                      { done: true, label: "Target Users" },
                      { done: true, label: "Target Organizations" },
                      { active: true, n: 4, label: "Mass Devices" },
                      { n: 5, label: "Schedule" },
                    ].map((step, i) => (
                      <div key={i} className={`${step.active ? "bg-[#eff2f5]" : "bg-white"} content-stretch flex gap-[2.935px] items-center overflow-clip px-[5.87px] py-[2.935px] relative rounded-[1.468px] shrink-0 w-full`}>
                        <div className="relative shrink-0 size-[8.805px]">
                          {step.done ? (
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgFrame1410076840} />
                          ) : (
                            <>
                              <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={step.active ? imgCircle1 : imgBaseStepperNum1} />
                              <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans:Medium'] font-medium inset-0 justify-center leading-[0] text-[5.14px] text-center" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100', color: step.active ? "white" : "#9198a1" }}>
                                <p className="leading-[normal]">{step.n}</p>
                              </div>
                            </>
                          )}
                        </div>
                        <p className="[word-break:break-word] leading-[normal] relative shrink-0 text-[5.136px] w-[54.298px]" style={{ fontVariationSettings: '"wdth" 100', fontFamily: (step.done || step.active) ? "'Open Sans:SemiBold'" : "'Open Sans:Regular'", fontWeight: (step.done || step.active) ? 600 : 400, color: (step.done || step.active) ? "#001f3f" : "#9198a1" }}>{step.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#f8f9fa] content-stretch flex flex-col flex-1 h-full items-start overflow-clip relative">
                    <div className="[word-break:break-word] bg-white content-stretch flex flex-col font-['Open_Sans:SemiBold'] font-semibold gap-[1.468px] items-start leading-[normal] overflow-clip p-[8.805px] relative shrink-0 text-[#001f3f] w-full">
                      <p className="min-w-full relative shrink-0 text-[8.805px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>Alert template</p>
                      <p className="relative shrink-0 text-[5.136px] tracking-[0.0205px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Complete the 5 steps below to create and configure a new alert template.</p>
                    </div>
                    <div className="bg-white content-stretch flex flex-col gap-[4.403px] items-start justify-center overflow-clip pb-[5.87px] px-[8.805px] relative shrink-0 w-full">
                      <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[8.805px] relative shrink-0 text-[#3e4042] text-[5.87px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Select Devices</p>
                      <div className="bg-white border-[#eff2f5] border-[0.367px] border-solid content-stretch flex flex-col h-[146.75px] items-start overflow-clip relative rounded-[1.468px] shrink-0 w-full">
                        {["Desktop App", "Email", "Email-work", "Mobile App", "Mobile App-work", "SMS", "Voice Call"].map((device, i) => (
                          <div key={device} className={`${i === 2 ? "bg-[#ecf2fc]" : ""} border-[#eff2f5] border-b-[0.367px] border-solid content-stretch flex gap-[5.87px] items-center p-[5.87px] relative shrink-0 w-full`}>
                            <div className={`${i === 2 ? "bg-[#0059c6] border-[#0059c6]" : "bg-white border-[#c8c8c8]"} border-[0.367px] border-solid content-stretch flex items-center justify-center relative rounded-[0.734px] shrink-0 size-[4.403px]`}>
                              {i === 2 && (
                                <div className="h-[2.201px] relative shrink-0 w-[2.935px]">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon} />
                                </div>
                              )}
                            </div>
                            <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#3e4042] text-[4.403px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{device}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full">
                  Select mass devices
                </p>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[15px] text-black w-full">
                  The next decision is delivery.
                </p>
                <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[15px] text-black w-full">
                  <p className="leading-[24px] mb-0">Administrators can choose from available channels such as:</p>
                  <ul className="list-disc">
                    <li className="mb-0 ms-[22.5px]"><span className="leading-[24px]">Desktop App</span></li>
                    <li className="mb-0 ms-[22.5px]"><span className="leading-[24px]">Email</span></li>
                    <li className="mb-0 ms-[22.5px]"><span className="leading-[24px]">Email — Work</span></li>
                    <li className="mb-0 ms-[22.5px]"><span className="leading-[24px]">Mobile App</span></li>
                    <li className="mb-0 ms-[22.5px]"><span className="leading-[24px]">Mobile App — Work</span></li>
                    <li className="mb-0 ms-[22.5px]"><span className="leading-[24px]">SMS</span></li>
                    <li className="ms-[22.5px]"><span className="leading-[24px]">Voice Call</span></li>
                  </ul>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[15px] text-black w-full">
                  The interface makes the available delivery methods explicit before the alert is scheduled.
                </p>
              </div>
            </div>
          </div>

          {/* DECIDE WHEN IT SHOULD BE SENT */}
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">
                DECIDE WHEN IT SHOULD BE SENT
              </p>
            </div>
            <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
              {/* Blurred mock - schedule */}
              <div className="blur-[5px] content-stretch flex flex-col h-[428.143px] items-center overflow-x-clip overflow-y-hidden relative shrink-0 w-[587px]" style={{ background: "#f8f9fa" }}>
                <div className="bg-[rgba(0,0,0,0.87)] content-stretch flex h-[23.48px] items-start overflow-clip relative shrink-0 w-full">
                  {["Alert", "Account", "Collaborate", "Users", "Organizations", "Reports", "Accounts"].map((label, i) => (
                    <div key={label} className="content-stretch flex flex-col h-full items-center justify-center overflow-clip py-[1.468px] relative shrink-0 w-[44.025px]" style={{ background: i === 0 ? "#7b6c3c" : "transparent" }}>
                      <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[4.403px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{label}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white border-[#e7e8ef] border-[0.367px] border-solid content-stretch flex flex-1 items-start min-h-px overflow-clip relative w-full">
                  <div className="bg-white border-[#e7e8ef] border-b-[0.367px] border-l-[0.367px] border-r-[0.367px] border-solid content-stretch flex flex-col h-full items-start px-[2.935px] py-[5.87px] relative shrink-0 w-[78.511px]">
                    {[
                      { done: true, label: "Alert Template" },
                      { done: true, label: "Target Users" },
                      { done: true, label: "Target Organizations" },
                      { done: true, label: "Mass Devices" },
                      { active: true, n: 5, label: "Schedule" },
                    ].map((step, i) => (
                      <div key={i} className={`${step.active ? "bg-[#eff2f5]" : "bg-white"} content-stretch flex gap-[2.935px] items-center overflow-clip px-[5.87px] py-[2.935px] relative rounded-[1.468px] shrink-0 w-full`}>
                        <div className="relative shrink-0 size-[8.805px]">
                          {step.done ? (
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgFrame1410076840} />
                          ) : (
                            <>
                              <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgCircle1} />
                              <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans:Display_SemiBold'] font-semibold inset-0 justify-center leading-[0] text-[5.14px] text-center text-white" style={{ fontVariationSettings: '"CTGR" 100, "wdth" 100' }}>
                                <p className="leading-[normal]">{step.n}</p>
                              </div>
                            </>
                          )}
                        </div>
                        <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#001f3f] text-[5.136px] w-[54.298px]" style={{ fontVariationSettings: '"wdth" 100' }}>{step.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#f8f9fa] content-stretch flex flex-col flex-1 h-full items-start overflow-clip relative">
                    <div className="[word-break:break-word] bg-white content-stretch flex flex-col font-['Open_Sans:SemiBold'] font-semibold gap-[1.468px] items-start leading-[normal] overflow-clip p-[8.805px] relative shrink-0 text-[#001f3f] w-full">
                      <p className="min-w-full relative shrink-0 text-[8.805px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>Alert template</p>
                      <p className="relative shrink-0 text-[5.136px] tracking-[0.0205px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Complete the 5 steps below to create and configure a new alert template.</p>
                    </div>
                    <div className="bg-white content-stretch flex flex-col gap-[4.403px] items-start justify-center overflow-clip pb-[5.87px] px-[8.805px] relative shrink-0 w-full">
                      <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[8.805px] relative shrink-0 text-[#3e4042] text-[5.87px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Select Time</p>
                      <div className="content-stretch flex flex-col gap-[5.87px] items-start relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[4.403px] items-start relative shrink-0 w-full">
                          <div className="border-[#c8c8c8] border-[0.734px] border-solid relative rounded-full shrink-0 size-[5.87px]" />
                          <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[6.604px] relative shrink-0 text-[#3e4042] text-[4.403px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Send Immediately</p>
                        </div>
                        <div className="content-stretch flex gap-[4.403px] items-start relative shrink-0">
                          <div className="border-[#5a7b9a] border-[0.734px] border-solid content-stretch flex items-center justify-center relative rounded-full shrink-0 size-[5.87px]">
                            <div className="bg-[#5a7b9a] relative rounded-full shrink-0 size-[2.935px]" />
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0">
                            <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[6.604px] relative shrink-0 text-[#3e4042] text-[4.403px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Schedule for later</p>
                            <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[6.053px] relative shrink-0 text-[#9198a1] text-[4.036px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Choose date and time to send this alert.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full">
                  Schedule the alert
                </p>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[15px] text-black w-full">
                  The administrator can choose between two options:
                </p>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
                  <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full">Send immediately</p>
                  <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">The alert can be published immediately after configuration.</p>
                </div>
                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-black w-full">
                  <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] w-full">Schedule for later</p>
                  <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] w-full">
                    <p className="leading-[24px] mb-0">The administrator can define:</p>
                    <p className="font-['Inter:Medium'] font-medium leading-[24px]">Date → Time → Time Zone</p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[15px] text-black w-full">
                  This keeps timing as the final configuration decision after the audience and delivery scope have been defined.
                </p>
              </div>
            </div>
          </div>

          {/* ONE FINAL CHECK BEFORE PUBLISHING */}
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">
                ONE FINAL CHECK BEFORE PUBLISHING
              </p>
            </div>
            <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
              {/* Blurred mock - review */}
              <div className="blur-[5px] content-stretch flex flex-col h-[428.143px] items-center overflow-x-clip overflow-y-hidden relative shrink-0 w-[587px]" style={{ background: "#f8f9fa" }}>
                <div className="bg-[rgba(0,0,0,0.87)] content-stretch flex h-[23.48px] items-start overflow-clip relative shrink-0 w-full">
                  {["Alert", "Account", "Collaborate", "Users", "Organizations", "Reports", "Accounts"].map((label, i) => (
                    <div key={label} className="content-stretch flex flex-col h-full items-center justify-center overflow-clip py-[1.468px] relative shrink-0 w-[44.025px]" style={{ background: i === 0 ? "#7b6c3c" : "transparent" }}>
                      <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[4.403px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{label}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white border-[#e7e8ef] border-[0.367px] border-solid content-stretch flex flex-1 items-start min-h-px overflow-clip relative w-full">
                  <div className="bg-white border-[#e7e8ef] border-b-[0.367px] border-l-[0.367px] border-r-[0.367px] border-solid content-stretch flex flex-col h-full items-start px-[2.935px] py-[5.87px] relative shrink-0 w-[78.511px]">
                    {["Alert Template", "Target Users", "Target Organizations", "Mass Devices"].map((label) => (
                      <div key={label} className="bg-white content-stretch flex gap-[2.935px] items-center overflow-clip px-[5.87px] py-[2.935px] relative shrink-0 w-full">
                        <div className="relative shrink-0 size-[8.805px]">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgFrame1410076840} />
                        </div>
                        <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#001f3f] text-[5.136px] w-[54.298px]" style={{ fontVariationSettings: '"wdth" 100' }}>{label}</p>
                      </div>
                    ))}
                    <div className="bg-[#eff2f5] content-stretch flex gap-[2.935px] items-center overflow-clip px-[5.87px] py-[2.935px] relative shrink-0 w-full">
                      <div className="relative shrink-0 size-[8.805px]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgCircle1} />
                        <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans:Display_SemiBold'] font-semibold inset-0 justify-center leading-[0] text-[5.14px] text-center text-white" style={{ fontVariationSettings: '"CTGR" 100, "wdth" 100' }}>
                          <p className="leading-[normal]">5</p>
                        </div>
                      </div>
                      <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#001f3f] text-[5.136px] w-[54.298px]" style={{ fontVariationSettings: '"wdth" 100' }}>Schedule</p>
                    </div>
                  </div>
                  <div className="bg-[#f8f9fa] content-stretch flex flex-col flex-1 h-full items-start overflow-clip relative">
                    <div className="[word-break:break-word] bg-white content-stretch flex flex-col font-['Open_Sans:SemiBold'] font-semibold gap-[1.468px] items-start leading-[normal] overflow-clip p-[8.805px] relative shrink-0 text-[#001f3f] w-full">
                      <p className="min-w-full relative shrink-0 text-[8.805px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>{`Review & Publish`}</p>
                      <p className="relative shrink-0 text-[5.136px] tracking-[0.0205px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Review the details below before publishing the alert template.</p>
                    </div>
                    <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip pb-[5.87px] px-[8.805px] relative shrink-0 w-full">
                      <div className="bg-white border-[#eff2f5] border-[0.367px] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[1.468px] shrink-0 w-full">
                        <div className="bg-[#f8f9fa] border-[#eff2f5] border-b-[0.734px] border-solid content-stretch flex h-[16.14px] items-start relative shrink-0 w-full">
                          {["Template Details", "Targeting", "Organizations", "Devices", "Schedule"].map((col) => (
                            <div key={col} className="content-stretch flex flex-col items-start p-[3.669px] relative self-stretch shrink-0">
                              <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[6.053px] relative shrink-0 text-[#9198a1] text-[4.036px] tracking-[0.0161px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{col}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border-[#e7e8ef] border-b-[0.367px] border-r-[0.367px] border-solid border-t-[0.367px] content-stretch flex items-center pl-[8.805px] pr-[5.87px] py-[5.87px] relative shrink-0 w-full">
                      <div className="bg-[#5a7b9a] content-stretch flex flex-col items-center justify-center px-[5.87px] py-[2.935px] relative rounded-[1.468px] shrink-0">
                        <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[6.604px] relative shrink-0 text-[4.403px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Publish Template</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start leading-[24px] min-w-px not-italic relative text-black">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[18px] w-full">{`Review & Publish`}</p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">
                  After completing the configuration, the administrator reaches a final review screen.
                  Instead of asking them to remember what they selected across multiple steps, the review page brings the configuration together.
                </p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">The administrator can review:</p>
                {[
                  { title: "Template", desc: "What alert is being configured?" },
                  { title: "Targeting", desc: "Who has been selected and how?" },
                  { title: "Organizations", desc: "Which organizations are included?" },
                  { title: "Devices", desc: "How will the alert be delivered?" },
                  { title: "Schedule", desc: "When will it be sent?" },
                ].map((item) => (
                  <div key={item.title} className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                    <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full">{item.title}</p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">{item.desc}</p>
                  </div>
                ))}
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">
                  If something needs to change, the administrator can edit the relevant section before publishing.
                </p>
              </div>
            </div>
          </div>

          {/* OUTCOME */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">
                OUTCOME
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full">
                A clearer path from alert creation to publishing
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[15px] text-black w-full">
                The final experience brings the alert configuration into a structured journey.
              </p>
              {[
                { title: "Structured", desc: "The step-based workflow separates a complex task into focused decisions." },
                { title: "Transparent", desc: "The Targeting Summary makes reachability visible before publishing." },
                { title: "Controlled", desc: `Review & Publish provides a final checkpoint before the alert is sent.` },
              ].map((item) => (
                <div key={item.title} className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
                  <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full">{item.title}</p>
                  <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* REFLECTION */}
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0">
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap">
                REFLECTION
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[18px] w-full">
                What this project taught me
              </p>
              {[
                {
                  title: "Complex does not always mean complicated",
                  desc: "The workflow contains many configuration decisions, but breaking them into focused steps makes the experience easier to navigate.",
                },
                {
                  title: "Selection needs context",
                  desc: "Showing what users selected is useful. Showing the impact of that selection is more valuable.",
                },
                {
                  title: "Enterprise UX needs confidence",
                  desc: "In a critical communication product, the interface needs to help administrators understand what they configured before they commit to it.",
                },
              ].map((item) => (
                <div key={item.title} className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full">{item.title}</p>
                  <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
        <NextCaseStudyCard currentPath="/case-study/blackberry-athoc" containerClassName="mx-auto w-[1040px] pt-[10px] pb-[0px] px-[0px]" />
      </div>
    </div>
  );
}
