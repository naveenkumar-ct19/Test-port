import { useEffect } from "react";
import { useNavigate } from "react-router";
import NextCaseStudyCard from "@/components/NextCaseStudyCard";
const assetPathPrefix = "/assets";
const imgImage27 = `${assetPathPrefix}/ffaf9.png`;
const imgImage = `/assets/hero-case-study.png`;
const imgVector = `${assetPathPrefix}/20058.svg`;
const imgVector2 = `${assetPathPrefix}/d4ade.svg`;
const imgVector3 = `${assetPathPrefix}/d9f6d.svg`;
const imgVector4 = `${assetPathPrefix}/97410.svg`;
const imgEllipse6 = `${assetPathPrefix}/632da.svg`;
const imgVector1 = `${assetPathPrefix}/06f8f.svg`;
const imgVector5 = `${assetPathPrefix}/4ada8.svg`;
const imgVector6 = `${assetPathPrefix}/aa214.svg`;
const imgVector7 = `${assetPathPrefix}/0ca0d.svg`;
const imgVector8 = `${assetPathPrefix}/0347a.svg`;
const imgVector9 = `${assetPathPrefix}/f92e8.svg`;
const imgVector10 = `${assetPathPrefix}/d43e0.svg`;
const imgVector11 = `${assetPathPrefix}/da5a0.svg`;
const imgVector12 = `${assetPathPrefix}/b2ccb.svg`;
const imgVector13 = `${assetPathPrefix}/16e20.svg`;
const imgVector14 = `${assetPathPrefix}/72469.svg`;
const imgIcon = `${assetPathPrefix}/69041.svg`;
const imgIcon1 = `${assetPathPrefix}/1875c.svg`;
const imgMaterialSymbolsInfoOutlineRounded = `${assetPathPrefix}/2defa.svg`;
const imgIcon2 = `${assetPathPrefix}/2787b.svg`;
const imgMaterialSymbolsInfoOutlineRounded1 = `${assetPathPrefix}/f10e6.svg`;
const imgVector15 = `${assetPathPrefix}/bbf31.svg`;
const imgVector16 = `${assetPathPrefix}/5edb4.svg`;
const imgMaterialSymbolsInfoOutlineRounded2 = `${assetPathPrefix}/095f9.svg`;
const imgIcon3 = `${assetPathPrefix}/41912.svg`;
const imgMaterialSymbolsInfoOutlineRounded3 = `${assetPathPrefix}/436fd.svg`;
const imgEllipse4 = `${assetPathPrefix}/57fe6.svg`;
const imgEllipse5 = `${assetPathPrefix}/c4969.svg`;
const imgGroup = `${assetPathPrefix}/cb9dc.svg`;
const imgVector17 = `${assetPathPrefix}/edb47.svg`;
const imgVector18 = `${assetPathPrefix}/23149.svg`;
const imgVector19 = `${assetPathPrefix}/da1b9.svg`;
const imgVector20 = `${assetPathPrefix}/bed2b.svg`;
const imgVector21 = `${assetPathPrefix}/74222.svg`;
const imgVector22 = `${assetPathPrefix}/863cd.svg`;
const imgVector23 = `${assetPathPrefix}/48c4e.svg`;
const imgGroup1 = `${assetPathPrefix}/85bbc.svg`;
const imgGroup2 = `${assetPathPrefix}/706d8.svg`;
const imgGroup3 = `${assetPathPrefix}/5728f.svg`;
const imgGroup4 = `${assetPathPrefix}/2d5bd.svg`;
const imgGroup5 = `${assetPathPrefix}/e5439.svg`;
const imgGroup6 = `${assetPathPrefix}/6c850.svg`;
const imgGroup7 = `${assetPathPrefix}/b92c6.svg`;
const imgGroup8 = `${assetPathPrefix}/fb9ac.svg`;
const imgGroup9 = `${assetPathPrefix}/15d7c.svg`;
const imgGroup10 = `${assetPathPrefix}/cb85c.svg`;
const imgGroup11 = `${assetPathPrefix}/1b0b0.svg`;
const imgGroup12 = `${assetPathPrefix}/02da3.svg`;
const imgVector24 = `${assetPathPrefix}/a3411.svg`;
const imgVector25 = `${assetPathPrefix}/521f2.svg`;
const imgVector26 = `${assetPathPrefix}/911e9.svg`;
const imgVector27 = `${assetPathPrefix}/2492a.svg`;
const imgVector28 = `${assetPathPrefix}/b811a.svg`;
const imgVector29 = `${assetPathPrefix}/bb552.svg`;
const imgGravityUiArrowUp = `${assetPathPrefix}/2a379.svg`;
const imgVector30 = `${assetPathPrefix}/79eb3.svg`;
const imgVector31 = `${assetPathPrefix}/51011.svg`;
const imgVector32 = `${assetPathPrefix}/6d5f7.svg`;
const imgVector33 = `${assetPathPrefix}/30330.svg`;
const imgIcon4 = `${assetPathPrefix}/f01e2.svg`;
const imgEllipse7 = `${assetPathPrefix}/20289.svg`;
const imgVector34 = `${assetPathPrefix}/b2ed7.svg`;
const imgVector35 = `${assetPathPrefix}/6ec13.svg`;
const imgVector36 = `${assetPathPrefix}/ac974.svg`;
const imgVector37 = `${assetPathPrefix}/7f02b.svg`;
const imgVector38 = `${assetPathPrefix}/a232e.svg`;
const imgVector39 = `${assetPathPrefix}/6f4cc.svg`;
const imgVector40 = `${assetPathPrefix}/dc1d6.svg`;
const imgVector41 = `${assetPathPrefix}/79c0a.svg`;
const imgVector42 = `${assetPathPrefix}/e8068.svg`;
const imgIcon5 = `${assetPathPrefix}/61871.svg`;
const imgIcon6 = `${assetPathPrefix}/7cff6.svg`;
const imgIcon7 = `${assetPathPrefix}/fd27d.svg`;
const imgIcon8 = `${assetPathPrefix}/3a624.svg`;
const imgIcon9 = `${assetPathPrefix}/208f4.svg`;
const imgIcon10 = `${assetPathPrefix}/5774f.svg`;
const imgIcon11 = `${assetPathPrefix}/64961.svg`;
const imgIcon12 = `${assetPathPrefix}/d3d20.svg`;
const imgIcon13 = `${assetPathPrefix}/53eca.svg`;
const imgIcon14 = `${assetPathPrefix}/7299e.svg`;
const imgIcon15 = `${assetPathPrefix}/72751.svg`;
const imgIcon16 = `${assetPathPrefix}/ef250.svg`;
const imgIcon17 = `${assetPathPrefix}/a0782.svg`;
const imgIcon18 = `${assetPathPrefix}/0adce.svg`;
const imgVector43 = `${assetPathPrefix}/026d7.svg`;
const imgVector44 = `${assetPathPrefix}/d7400.svg`;
const imgVector45 = `${assetPathPrefix}/61857.svg`;
const imgVector46 = `${assetPathPrefix}/69088.svg`;
const imgVector47 = `${assetPathPrefix}/991a1.svg`;
const imgVector48 = `${assetPathPrefix}/37363.svg`;
const imgVector49 = `${assetPathPrefix}/e1636.svg`;
const imgVector50 = `${assetPathPrefix}/b822a.svg`;
const imgVector51 = `${assetPathPrefix}/175d9.svg`;
const imgVector52 = `${assetPathPrefix}/27ca2.svg`;
const imgIcon19 = `${assetPathPrefix}/b5180.svg`;
const imgEllipse8 = `${assetPathPrefix}/a85b9.svg`;
const imgVector53 = `${assetPathPrefix}/f3a41.svg`;
const imgVector54 = `${assetPathPrefix}/dcf2a.svg`;
const imgVector55 = `${assetPathPrefix}/8c6ff.svg`;
const imgVector56 = `${assetPathPrefix}/9b2ad.svg`;
const imgVector57 = `${assetPathPrefix}/83dc8.svg`;
const imgVector58 = `${assetPathPrefix}/a193f.svg`;
const imgVector59 = `${assetPathPrefix}/83b24.svg`;
const imgVector60 = `${assetPathPrefix}/d68e7.svg`;
const imgVector61 = `${assetPathPrefix}/abb8c.svg`;
const imgIcon20 = `${assetPathPrefix}/f5994.svg`;
const imgIcon21 = `${assetPathPrefix}/7a3fb.svg`;
const imgIcon22 = `${assetPathPrefix}/d94b2.svg`;
const imgIcon23 = `${assetPathPrefix}/ec9e6.svg`;
const imgIcon24 = `${assetPathPrefix}/c4ef1.svg`;
const imgIcon25 = `${assetPathPrefix}/67e52.svg`;
const imgIcon26 = `${assetPathPrefix}/4a9c9.svg`;
const imgIcon27 = `${assetPathPrefix}/d06e8.svg`;
const imgVector62 = `${assetPathPrefix}/a087c.svg`;
const imgVector63 = `${assetPathPrefix}/a1fad.svg`;
const imgVector64 = `${assetPathPrefix}/9aa87.svg`;
const imgVector65 = `${assetPathPrefix}/f776f.svg`;
const imgVector66 = `${assetPathPrefix}/8b069.svg`;
const imgVector67 = `${assetPathPrefix}/c45a9.svg`;
const imgVector68 = `${assetPathPrefix}/5af2f.svg`;
const imgVector69 = `${assetPathPrefix}/05f02.svg`;
const imgVector70 = `${assetPathPrefix}/bba41.svg`;
const imgVector71 = `${assetPathPrefix}/a3d54.svg`;
const imgIcon28 = `${assetPathPrefix}/0a437.svg`;
const imgEllipse9 = `${assetPathPrefix}/7aa49.svg`;
const imgVector72 = `${assetPathPrefix}/5cea1.svg`;
const imgVector73 = `${assetPathPrefix}/2c308.svg`;
const imgVector74 = `${assetPathPrefix}/a228c.svg`;
const imgVector75 = `${assetPathPrefix}/5f33e.svg`;
const imgVector76 = `${assetPathPrefix}/1cfea.svg`;
const imgVector77 = `${assetPathPrefix}/ec33e.svg`;
const imgVector78 = `${assetPathPrefix}/0bf43.svg`;
const imgVector79 = `${assetPathPrefix}/60364.svg`;
const imgVector80 = `${assetPathPrefix}/dbddd.svg`;
const imgIcon29 = `${assetPathPrefix}/dd334.svg`;
const imgIcon30 = `${assetPathPrefix}/6cd38.svg`;
const imgIcon31 = `${assetPathPrefix}/382bb.svg`;
const imgIcon32 = `${assetPathPrefix}/a3bc4.svg`;
const imgIcon33 = `${assetPathPrefix}/a153b.svg`;
const imgIcon34 = `${assetPathPrefix}/19215.svg`;
const imgIcon35 = `${assetPathPrefix}/d75aa.svg`;
const imgIcon36 = `${assetPathPrefix}/4c7f1.svg`;
const imgIcon37 = `${assetPathPrefix}/02053.svg`;
const imgIcon38 = `${assetPathPrefix}/56bd3.svg`;
const imgIcon39 = `${assetPathPrefix}/19633.svg`;
const imgIcon40 = `${assetPathPrefix}/01427.svg`;
const imgIcon41 = `${assetPathPrefix}/36a2d.svg`;
const imgIcon42 = `${assetPathPrefix}/fade9.svg`;
const imgIcon43 = `${assetPathPrefix}/0b1a4.svg`;
const imgIcon44 = `${assetPathPrefix}/4411d.svg`;
const imgVector81 = `${assetPathPrefix}/340b5.svg`;
const imgVector82 = `${assetPathPrefix}/d1f5f.svg`;
const imgVector83 = `${assetPathPrefix}/e38cd.svg`;
const imgVector84 = `${assetPathPrefix}/b0659.svg`;
const imgVector85 = `${assetPathPrefix}/9d5ae.svg`;
const imgVector86 = `${assetPathPrefix}/cdd76.svg`;
const imgIcon45 = `${assetPathPrefix}/e955f.svg`;
const imgIcon46 = `${assetPathPrefix}/39971.svg`;
const imgIcon47 = `${assetPathPrefix}/2a653.svg`;
const imgIcon48 = `${assetPathPrefix}/1101b.svg`;
const imgIcon49 = `${assetPathPrefix}/5cc17.svg`;
const imgIcon50 = `${assetPathPrefix}/856d0.svg`;
const imgIcon51 = `${assetPathPrefix}/e21db.svg`;
const imgIcon52 = `${assetPathPrefix}/8e5c7.svg`;
const imgIcon53 = `${assetPathPrefix}/1b80f.svg`;
const imgIcon54 = `${assetPathPrefix}/f3388.svg`;

export default function CaseStudy1() {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.classList.add("case-study-1");
    return () => document.body.classList.remove("case-study-1");
  }, []);
  return (
    <>
    <div className="relative w-full pb-[120px]" style={{ minHeight: "100dvh", overflowX: "clip", backgroundColor: "rgb(240, 243, 255)" }} data-node-id="2011:4649" data-name="Desktop - 8">
      <div className="-translate-x-1/2 content-stretch flex items-center justify-between left-[calc(50%+0.5px)] w-[1299px]" data-node-id="2011:4650" style={{ position: "fixed", top: "34px", zIndex: 100 }}>
        <div className="bg-[#93001d] content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[999px] shrink-0" data-node-id="2011:4651" onClick={() => { window.scrollTo(0, 0); navigate("/"); }} style={{ cursor: "pointer" }}>
          <div className="content-stretch flex items-center overflow-clip relative rounded-[99999px] shrink-0" data-node-id="2011:4652">
            <div className="h-[40.028px] relative shrink-0 w-[38.75px]" data-node-id="2011:4653" data-name="image 27">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage27} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-node-id="2011:4654">
          <div className="bg-[#fcc6db] content-stretch drop-shadow-[2px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center px-[16px] py-[5px] relative rounded-[34px] shrink-0" data-node-id="2011:4655" onClick={() => { window.scrollTo(0, 0); navigate("/about"); }} style={{ cursor: "pointer" }}>
            <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#3347ae] text-[14px] whitespace-nowrap" data-node-id="2011:4656">
              About me
            </p>
          </div>
          <div className="bg-[#fcc6db] content-stretch drop-shadow-[2px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center px-[16px] py-[5px] relative rounded-[34px] shrink-0" data-node-id="2011:4657">
            <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#3347ae] text-[14px] whitespace-nowrap" data-node-id="2011:4658">
              Resume
            </p>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-1/2 -translate-x-1/2 top-[191px] w-[929.565px]" data-node-id="2011:4659">
        <div className="bg-[#e4e4e4] border-2 border-[#bcbcbc] border-solid content-stretch flex items-center justify-center px-[24px] py-[8px] relative rounded-[999px] shrink-0" data-node-id="2011:4660">
          <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#171717] text-[18px] whitespace-nowrap" data-node-id="2011:4661">
            B2B • AI • SAAS
          </p>
        </div>
        <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[28px] text-black text-center w-[929px]" data-node-id="2011:4662">
          Designing an AI-powered SRE experience for faster, more transparent alert investigation
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center w-[759px]" data-node-id="2011:4663">
          Orion CloudMax helps SRE teams triage production alerts using automated runbooks and AI-driven analysis across logs, metrics, and traces.
        </p>
        <div className="h-[566px] relative shrink-0 w-full flex justify-center" data-node-id="2011:4664" data-name="Frame">
          <img alt="Orion CloudMax UI overview" className="w-[930px] h-[566px] object-cover pointer-events-none" src="/assets/orion-hero.png" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[32px] items-start left-1/2 top-[1224px]" data-node-id="2011:5218">
        <div className="[word-break:break-word] bg-white border border-[#dcdcdc] border-solid content-stretch flex flex-col gap-[14px] items-center justify-center leading-[24px] px-[32px] py-[24px] relative rounded-[8px] shrink-0 text-black w-full" data-node-id="2011:5219">
          <p className="font-['Space_Grotesk:Bold'] font-bold relative shrink-0 text-[18px] whitespace-nowrap" data-node-id="2011:5220">
            Confidentiality Notice
          </p>
          <p className="font-['Inter:Regular'] font-normal min-w-full not-italic relative shrink-0 text-[15px] text-center w-[min-content]" data-node-id="2011:5221">{`To respect confidentiality agreements, certain visuals have been blurred or omitted. If you'd like to learn more, I'd be happy to walk you through the original screens, design decisions, and outcomes during 1:1 conversation.`}</p>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="2011:5222">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="2011:5223">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="2011:5224">
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black whitespace-nowrap" data-node-id="2011:5225">
                THE CHALLENGE
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-black w-full" data-node-id="2011:5226">
            <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] w-full" data-node-id="2011:5227">
              SRE investigation is complex
            </p>
            <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] w-full" data-node-id="2011:5228">
              <p className="leading-[24px] mb-0 whitespace-pre-wrap">When an alert is triggered, SREs need to understand:</p>
              <ul className="list-disc">
                <li className="mb-0 ms-[22.5px]">
                  <span className="leading-[24px]">{` What happened?`}</span>
                </li>
                <li className="mb-0 ms-[22.5px]">
                  <span className="leading-[24px]">{` What caused it?`}</span>
                </li>
                <li className="mb-0 ms-[22.5px]">
                  <span className="leading-[24px]">{` What did the AI investigate?`}</span>
                </li>
                <li className="ms-[22.5px]">
                  <span className="leading-[24px]">{` Can the result be trusted?`}</span>
                </li>
              </ul>
            </div>
            <p className="font-['Inter:Regular'] font-normal leading-[24px] relative shrink-0 text-[15px] w-full" data-node-id="2011:5229">
              The challenge was to make a technically complex, AI-driven investigation easy to scan without hiding the depth needed by technical users.
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="2011:5230">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="2011:5231">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="2011:5232">
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap" data-node-id="2011:5233">
                THE EXPERIENCE
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="2011:5234">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]" data-node-id="2011:5235">
              From alert to root cause
            </p>
            <div className="content-stretch flex gap-[18px] items-center relative shrink-0" data-node-id="2011:5236">
              <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2011:5237">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap" data-node-id="2011:5238">
                  Alert
                </p>
              </div>
              <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="2011:5239">
                <div className="flex-none rotate-90">
                  <div className="relative size-[16px]" data-name="gravity-ui:arrow-up">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} />
                  </div>
                </div>
              </div>
              <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2011:5241">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap" data-node-id="2011:5242">
                  Alert Information
                </p>
              </div>
              <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="2011:5243">
                <div className="flex-none rotate-90">
                  <div className="relative size-[16px]" data-name="gravity-ui:arrow-up">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} />
                  </div>
                </div>
              </div>
              <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2011:5245">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap" data-node-id="2011:5246">
                  Root Cause
                </p>
              </div>
              <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="2011:5247">
                <div className="flex-none rotate-90">
                  <div className="relative size-[16px]" data-name="gravity-ui:arrow-up">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} />
                  </div>
                </div>
              </div>
              <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2011:5249">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap" data-node-id="2011:5250">
                  Triage Journey
                </p>
              </div>
              <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="2011:5251">
                <div className="flex-none rotate-90">
                  <div className="relative size-[16px]" data-name="gravity-ui:arrow-up">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} />
                  </div>
                </div>
              </div>
              <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2011:5253">
                <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap" data-node-id="2011:5254">
                  Evaluation
                </p>
              </div>
            </div>
            <p className="[word-break:break-word] font-['ITF_Devanagari_Marathi:Book'] leading-[normal] min-w-full not-italic relative shrink-0 text-[15px] text-black w-[min-content]" data-node-id="2011:5255">{`I designed the investigation experience to help SREs move from identifying an alert to understanding its root cause, following the AI's investigation, and evaluating the quality of its response.`}</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="2011:5256">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="2011:5257">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="2011:5258">
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap" data-node-id="2011:5259">
                Decision Story 1
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-node-id="2011:5260">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[1040px]" data-node-id="2011:5261">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full" data-node-id="2011:5262">
                How do you make AI investigation understandable?
              </p>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-black w-full" data-node-id="2011:5263">
                <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] w-full" data-node-id="2011:5264">
                  The challenge
                </p>
                <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] w-full" data-node-id="2011:5265">
                  <p className="leading-[24px] mb-0">A single alert can contain alert metadata, logs, metrics, traces, findings and AI-generated conclusions.</p>
                  <p className="leading-[24px]">Putting everything onto one page would create information overload.</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="2011:5266">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[16px] text-black w-full" data-node-id="2011:5267">
                  The decision
                </p>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[15px] text-black w-full" data-node-id="2011:5268">
                  I separated the investigation into four progressive layers:
                </p>
                <div className="content-stretch flex gap-[18px] items-center justify-center py-[8px] relative shrink-0 w-full" data-node-id="2011:5269">
                  <div className="[word-break:break-word] bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex flex-col gap-[10px] items-center justify-center leading-[24px] not-italic px-[24px] py-[12px] relative rounded-[8px] shrink-0 text-black w-[200px] whitespace-nowrap" data-node-id="2011:5270">
                    <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[16px]" data-node-id="2011:5271">
                      Alert Information
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[14px]" data-node-id="2011:5272">
                      What happened?
                    </p>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="2011:5273">
                    <div className="flex-none rotate-90">
                      <div className="relative size-[16px]" data-name="gravity-ui:arrow-up">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} />
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex flex-col gap-[10px] items-center justify-center leading-[24px] not-italic px-[24px] py-[12px] relative rounded-[8px] shrink-0 text-black w-[200px] whitespace-nowrap" data-node-id="2011:5275">
                    <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[16px]" data-node-id="2011:5276">
                      Root Cause
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[14px]" data-node-id="2011:5277">
                      Why did it happen?
                    </p>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="2011:5278">
                    <div className="flex-none rotate-90">
                      <div className="relative size-[16px]" data-name="gravity-ui:arrow-up">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} />
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex flex-col gap-[10px] items-center justify-center leading-[24px] not-italic px-[24px] py-[12px] relative rounded-[8px] shrink-0 text-black w-[200px]" data-node-id="2011:5280">
                    <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[16px] whitespace-nowrap" data-node-id="2011:5281">
                      Triage Journey
                    </p>
                    <p className="font-['Inter:Regular'] font-normal min-w-full relative shrink-0 text-[14px] text-center w-[min-content]" data-node-id="2011:5282">
                      How did the AI investigate?
                    </p>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="2011:5283">
                    <div className="flex-none rotate-90">
                      <div className="relative size-[16px]" data-name="gravity-ui:arrow-up">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} />
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex flex-col gap-[10px] items-center justify-center leading-[24px] not-italic px-[24px] py-[12px] relative rounded-[8px] shrink-0 text-black w-[200px]" data-node-id="2011:5285">
                    <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[16px] whitespace-nowrap" data-node-id="2011:5286">
                      Evaluation
                    </p>
                    <p className="font-['Inter:Regular'] font-normal min-w-full relative shrink-0 text-[14px] text-center w-[min-content]" data-node-id="2011:5287">
                      How well did it perform?
                    </p>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-black w-full" data-node-id="2011:5288">
                <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] w-full" data-node-id="2011:5289">
                  Why this worked
                </p>
                <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] w-full" data-node-id="2011:5290">
                  <p className="leading-[24px] mb-0">Users can start with a high-level understanding and progressively move into deeper technical information only when needed.</p>
                  <p className="leading-[24px]">Show your four screens here.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#f9fafc] blur-[6.399px] h-[762.973px] overflow-clip relative shrink-0 w-[1040px]" data-node-id="2011:5291" data-name="Component 4">
              <div className="absolute content-stretch flex h-[762.973px] items-start left-0 pr-[-5.357px] top-0 w-[1040px]" data-node-id="I2011:5291;271:33635" data-name="App">
                <div className="bg-[#feffff] drop-shadow-[0px_1.523px_1.142px_rgba(0,0,0,0.1)] h-[762.973px] relative shrink-0 w-[195.909px]" data-node-id="I2011:5291;271:33636" data-name="Sidebar">
                  <div className="absolute bg-[rgba(255,255,255,0)] border-[#e2e8f0] border-r-[0.765px] border-solid h-[707.874px] left-0 top-[55.1px] w-[195.909px]" data-node-id="I2011:5291;271:33637" data-name="Container" />
                  <div className="absolute h-[440.795px] left-0 overflow-clip top-[64.28px] w-[195.144px]" data-node-id="I2011:5291;271:33638" data-name="Navigation">
                    <div className="absolute h-[12.244px] left-[21.43px] top-[6.89px] w-[31.675px]" data-node-id="I2011:5291;271:33639" data-name="Container44" />
                    <div className="absolute content-stretch flex flex-col gap-[3.045px] items-start left-[9.18px] top-[6.89px] w-[176.777px]" data-node-id="I2011:5291;271:33641" data-name="Container45">
                      <div className="h-[36.733px] relative rounded-[7.653px] shrink-0 w-full" data-node-id="I2011:5291;271:33642" data-name="NavItemComponent1">
                        <div className="absolute content-stretch flex flex-col items-start left-[12.24px] size-[15.305px] top-[10.71px]" data-node-id="I2011:5291;271:33643" data-name="Icon17">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 size-[15.305px]" data-node-id="I2011:5291;271:33644" data-name="Icon16">
                            <div className="h-[15.305px] overflow-clip relative shrink-0 w-full" data-node-id="I2011:5291;271:33645" data-name="Icon">
                              <div className="absolute contents inset-[12.5%]" data-node-id="I2011:5291;271:33646" data-name="Icon">
                                <div className="absolute inset-[12.5%]" data-node-id="I2011:5291;271:33647" data-name="Vector">
                                  <div className="absolute inset-[-5.56%]">
                                    <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector30} />
                                  </div>
                                </div>
                                <div className="absolute bottom-[29.16%] left-3/4 right-1/4 top-[37.5%]" data-node-id="I2011:5291;271:33648" data-name="Vector_2">
                                  <div className="absolute inset-[-12.5%_-0.64px]">
                                    <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector31} />
                                  </div>
                                </div>
                                <div className="absolute inset-[20.84%_45.84%_29.16%_54.16%]" data-node-id="I2011:5291;271:33649" data-name="Vector_3">
                                  <div className="absolute inset-[-8.33%_-0.64px]">
                                    <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector32} />
                                  </div>
                                </div>
                                <div className="absolute inset-[58.34%_66.67%_29.16%_33.33%]" data-node-id="I2011:5291;271:33650" data-name="Vector_4">
                                  <div className="absolute inset-[-33.33%_-0.64px]">
                                    <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector33} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[18.366px] items-start left-[36.73px] pr-[44.918px] pt-[-0.383px] top-[9.18px] w-[77.507px]" data-node-id="I2011:5291;271:33651" data-name="Text2">
                          <div className="h-[18.366px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33652" data-name="Paragraph">
                            <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[18.366px] left-0 not-italic text-[#45556c] text-[12.24px] top-[-0.77px] tracking-[-0.2803px] whitespace-nowrap" data-node-id="I2011:5291;271:33653">
                              Overview
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-between px-[12.182px] py-[9.136px] relative rounded-[7.653px] shrink-0 w-[176.777px]" data-node-id="I2011:5291;271:33654" style={{ filter: "drop-shadow(0px 3.061px 2.296px rgba(0,0,0,0.1)) drop-shadow(0px 1.531px 1.531px rgba(0,0,0,0.1))",  backgroundImage: "linear-gradient(90.1237954767326deg, rgb(74, 157, 118) 0%, rgb(59, 139, 99) 99.87%)" }} data-name="NavItemComponent">
                        <div className="content-stretch flex gap-[7.613px] items-center relative shrink-0" data-node-id="I2011:5291;271:33655">
                          <div className="overflow-clip relative shrink-0 size-[15.305px]" data-node-id="I2011:5291;271:33656" data-name="Icon">
                            <div className="absolute inset-[8.34%_12.5%_8.33%_12.5%]" data-node-id="I2011:5291;271:33657" data-name="Icon">
                              <div className="absolute inset-[-5.01%_-5.57%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgIcon4} />
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col h-[18.366px] items-start pr-[30.963px] pt-[-0.383px] relative shrink-0 w-[83.647px]" data-node-id="I2011:5291;271:33660" data-name="Text1">
                            <div className="h-[18.366px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33661" data-name="Paragraph">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Bold'] leading-[18.366px] left-0 not-italic text-[12.18px] text-white top-[-0.77px] tracking-[-0.2803px] whitespace-nowrap" data-node-id="I2011:5291;271:33662">
                                Alerts
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 size-[6.852px]" data-node-id="I2011:5291;271:33663">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgEllipse7} />
                        </div>
                      </div>
                      <div className="h-[36.733px] relative rounded-[7.653px] shrink-0 w-full" data-node-id="I2011:5291;271:33664" data-name="NavItemComponent2">
                        <div className="absolute content-stretch flex flex-col items-start left-[12.24px] size-[15.305px] top-[10.71px]" data-node-id="I2011:5291;271:33665" data-name="Icon18">
                          <div className="h-[15.305px] overflow-clip relative shrink-0 w-full" data-node-id="I2011:5291;271:33666" data-name="Icon">
                            <div className="absolute contents inset-[12.5%_8.34%_12.5%_8.33%]" data-node-id="I2011:5291;271:33667" data-name="Icon">
                              <div className="absolute bottom-[12.5%] left-1/2 right-1/2 top-[29.16%]" data-node-id="I2011:5291;271:33668" data-name="Vector">
                                <div className="absolute inset-[-5.71%_-0.51px]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector34} />
                                </div>
                              </div>
                              <div className="absolute inset-[12.5%_8.34%_12.5%_8.33%]" data-node-id="I2011:5291;271:33669" data-name="Vector_2">
                                <div className="absolute inset-[-5.57%_-5.01%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector35} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[18.366px] items-start left-[36.73px] pr-[43.387px] pt-[-0.383px] top-[9.18px] w-[98.857px]" data-node-id="I2011:5291;271:33670" data-name="Text3">
                          <div className="h-[18.366px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33671" data-name="Paragraph">
                            <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[18.366px] left-0 not-italic text-[#45556c] text-[12.24px] top-[-0.76px] tracking-[-0.2803px] whitespace-nowrap" data-node-id="I2011:5291;271:33672">
                              Runbooks
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-[36.733px] relative rounded-[7.653px] shrink-0 w-full" data-node-id="I2011:5291;271:33673" data-name="NavItemComponent3">
                        <div className="absolute content-stretch flex flex-col items-start left-[12.24px] size-[15.305px] top-[10.71px]" data-node-id="I2011:5291;271:33674" data-name="Icon19">
                          <div className="h-[15.305px] overflow-clip relative shrink-0 w-full" data-node-id="I2011:5291;271:33675" data-name="Icon">
                            <div className="absolute contents inset-[8.4%_12.68%_8.41%_12.68%]" data-node-id="I2011:5291;271:33676" data-name="Icon">
                              <div className="absolute inset-[8.4%_12.68%_8.41%_12.68%]" data-node-id="I2011:5291;271:33677" data-name="Vector">
                                <div className="absolute inset-[-5.01%_-5.58%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector36} />
                                </div>
                              </div>
                              <div className="absolute inset-[37.5%]" data-node-id="I2011:5291;271:33678" data-name="Vector_2">
                                <div className="absolute inset-[-16.67%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector37} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[18.366px] items-start left-[36.73px] pr-[23.699px] pt-[-0.383px] top-[9.18px] w-[56.474px]" data-node-id="I2011:5291;271:33679" data-name="Text4">
                          <div className="h-[18.366px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33680" data-name="Paragraph">
                            <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[18.366px] left-0 not-italic text-[#45556c] text-[12.24px] top-[-0.77px] tracking-[-0.2803px] whitespace-nowrap" data-node-id="I2011:5291;271:33681">
                              Setup
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-[36.733px] relative rounded-[7.653px] shrink-0 w-full" data-node-id="I2011:5291;271:33682" data-name="NavItemComponent4">
                        <div className="absolute content-stretch flex flex-col items-start left-[12.24px] size-[15.305px] top-[10.71px]" data-node-id="I2011:5291;271:33683" data-name="Icon20">
                          <div className="h-[15.305px] overflow-clip relative shrink-0 w-full" data-node-id="I2011:5291;271:33684" data-name="Icon">
                            <div className="absolute contents inset-[12.5%_8.33%]" data-node-id="I2011:5291;271:33685" data-name="Icon">
                              <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-node-id="I2011:5291;271:33686" data-name="Vector">
                                <div className="absolute inset-[-16.67%_-7.14%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector38} />
                                </div>
                              </div>
                              <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-node-id="I2011:5291;271:33687" data-name="Vector_2">
                                <div className="absolute inset-[-12.92%_-33.37%_-12.92%_-33.38%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector39} />
                                </div>
                              </div>
                              <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-node-id="I2011:5291;271:33688" data-name="Vector_3">
                                <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector40} />
                                </div>
                              </div>
                              <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-node-id="I2011:5291;271:33689" data-name="Vector_4">
                                <div className="absolute inset-[-12.5%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector41} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[18.366px] items-start left-[36.73px] pr-[2.11px] pt-[-0.383px] top-[9.18px] w-[34.485px]" data-node-id="I2011:5291;271:33690" data-name="Text5">
                          <div className="h-[18.366px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33691" data-name="Paragraph">
                            <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[18.366px] left-0 not-italic text-[#45556c] text-[12.24px] top-[-0.77px] tracking-[-0.2803px] whitespace-nowrap" data-node-id="I2011:5291;271:33692">
                              Users
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[27.55px] left-[20.26px] top-[18.37px] w-[154.602px]" data-node-id="I2011:5291;271:33693" data-name="Container47">
                    <div className="absolute h-[27.55px] left-0 top-0 w-[154.602px]" data-node-id="I2011:5291;271:33694" data-name="Heading8">
                      <div className="absolute content-stretch flex h-[27.55px] items-start left-0 top-0 w-[35.059px]" data-node-id="I2011:5291;271:33695" data-name="Text6">
                        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#1d293d] text-[22.96px] tracking-[1.7002px] whitespace-nowrap" data-node-id="I2011:5291;271:33696">
                          <span className="font-['Mona_Sans:Bold'] font-bold leading-[27.55px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                            OR
                          </span>
                          <span className="font-['Mona_Sans:Bold'] font-bold leading-[27.55px] text-[#4a9d76]" style={{ fontVariationSettings: '"wdth" 100' }}>
                            I
                          </span>
                          <span className="font-['Mona_Sans:Bold'] font-bold leading-[27.55px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                            AN CLOUDMAX
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-[rgba(255,255,255,0.9)] left-[185.96px] rounded-[12839064.095px] size-[18.366px] top-[61.22px]" data-node-id="I2011:5291;271:33714" data-name="Button8">
                    <div className="absolute bg-[rgba(255,255,255,0)] border-[0.765px] border-[rgba(255,255,255,0.3)] border-solid left-0 rounded-[12839064.095px] shadow-[0px_3.061px_4.592px_0px_rgba(0,0,0,0.1),0px_1.531px_3.061px_0px_rgba(0,0,0,0.1)] size-[18.366px] top-0" data-node-id="I2011:5291;271:33715" data-name="Container" />
                    <div className="absolute content-stretch flex flex-col items-start left-[3.06px] size-[12.244px] top-[3.06px]" data-node-id="I2011:5291;271:33716" data-name="Icon22">
                      <div className="h-[12.244px] overflow-clip relative shrink-0 w-full" data-node-id="I2011:5291;271:33717" data-name="Icon">
                        <div className="absolute bottom-1/4 contents left-[37.5%] right-[37.5%] top-1/4" data-node-id="I2011:5291;271:33718" data-name="Icon">
                          <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-node-id="I2011:5291;271:33719" data-name="Vector">
                            <div className="absolute inset-[-8.33%_-16.67%]">
                              <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector42} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col h-[762.87px] items-center pt-[55.099px] relative shrink-0 w-[844.334px]" data-node-id="I2011:5291;271:33720" data-name="Main Content">
                  <div className="content-stretch flex flex-col gap-[9.898px] items-end py-[14.466px] relative shrink-0" data-node-id="I2011:5291;271:33721" data-name="Container">
                    <div className="content-stretch flex h-[24.2px] items-center justify-between relative shrink-0 w-[803.575px]" data-node-id="I2011:5291;271:33722" data-name="Container">
                      <div className="h-[13.031px] relative shrink-0 w-[72.339px]" data-node-id="I2011:5291;271:33723" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4.964px] items-center relative size-full">
                          <div className="relative shrink-0 size-[9.928px]" data-node-id="I2011:5291;271:33724" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon5} />
                          </div>
                          <div className="flex-[1_0_0] h-[13.031px] min-w-px relative" data-node-id="I2011:5291;271:33726" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[13.031px] left-0 not-italic text-[#45556c] text-[8.37px] top-0 whitespace-nowrap" data-node-id="I2011:5291;271:33727">
                                Back to Alerts
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#feffff] border-[#eff1f3] border-[0.761px] border-solid drop-shadow-[0px_3.045px_2.284px_rgba(0,0,0,0.1)] relative rounded-[6.091px] shrink-0" data-node-id="I2011:5291;271:33728" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.613px] items-center justify-center px-[12.943px] py-[6.852px] relative size-full">
                          <div className="relative shrink-0 size-[9.928px]" data-node-id="I2011:5291;271:33729" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon6} />
                          </div>
                          <div className="h-[13.031px] relative shrink-0 w-[31.77px]" data-node-id="I2011:5291;271:33731" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[13.031px] left-0 not-italic text-[#64748b] text-[9.14px] top-0 whitespace-nowrap" data-node-id="I2011:5291;271:33732">
                                Refresh
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[803.575px]" data-node-id="I2011:5291;271:33733" data-name="Container">
                      <div className="relative shrink-0" data-node-id="I2011:5291;271:33734" data-name="Heading 1">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[2.284px] relative size-full">
                          <p className="[word-break:break-word] bg-clip-text font-['Segoe_Pro_Display:Bold'] leading-[27.55px] not-italic relative shrink-0 text-[22.84px] text-[transparent] tracking-[0.3548px] whitespace-nowrap" data-node-id="I2011:5291;271:33735" style={{ backgroundImage: "linear-gradient(87.78835641210695deg, rgb(31, 167, 82) 0.20215%, rgb(5, 150, 105) 99.732%)" }}>
                            API-High-Latency (copy)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-[#e5e7eb] border-b-[0.761px] border-solid content-stretch flex gap-[3.045px] h-[36.545px] items-start pb-[0.761px] relative shrink-0 w-[803.221px]" data-node-id="I2011:5291;271:33742" data-name="Container">
                      <div className="border-[#18a25a] border-b-[1.523px] border-solid h-[35.783px] relative shrink-0 w-[127.044px]" data-node-id="I2011:5291;271:33743" data-name="TabButton">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.091px] items-center pb-[1.523px] px-[12.182px] relative size-full">
                          <div className="relative shrink-0 size-[12.182px]" data-node-id="I2011:5291;271:33744" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon7} />
                          </div>
                          <div className="flex-[1_0_0] h-[15.988px] min-w-px relative" data-node-id="I2011:5291;271:33748" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[15.988px] left-0 not-italic text-[#18a25a] text-[10.66px] top-0 whitespace-nowrap" data-node-id="I2011:5291;271:33749">
                                Alert Information
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-[rgba(0,0,0,0)] border-b-[1.523px] border-solid h-[35.783px] relative shrink-0 w-[100.718px]" data-node-id="I2011:5291;271:33750" data-name="TabButton">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.091px] items-center pb-[1.523px] px-[12.182px] relative size-full">
                          <div className="relative shrink-0 size-[12.182px]" data-node-id="I2011:5291;271:33751" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon8} />
                          </div>
                          <div className="flex-[1_0_0] h-[15.988px] min-w-px relative" data-node-id="I2011:5291;271:33753" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[15.988px] left-0 not-italic text-[#64748b] text-[10.66px] top-0 whitespace-nowrap" data-node-id="I2011:5291;271:33754">
                                Root Cause
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-[rgba(0,0,0,0)] border-b-[1.523px] border-solid h-[35.783px] relative shrink-0 w-[117.581px]" data-node-id="I2011:5291;271:33755" data-name="TabButton">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.091px] items-center pb-[1.523px] px-[12.182px] relative size-full">
                          <div className="relative shrink-0 size-[12.182px]" data-node-id="I2011:5291;271:33756" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon9} />
                          </div>
                          <div className="flex-[1_0_0] h-[15.988px] min-w-px relative" data-node-id="I2011:5291;271:33762" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[15.988px] left-0 not-italic text-[#64748b] text-[10.66px] top-0 whitespace-nowrap" data-node-id="I2011:5291;271:33763">
                                Triage Journey
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-[rgba(0,0,0,0)] border-b-[1.523px] border-solid h-[35.783px] relative shrink-0 w-[131.891px]" data-node-id="I2011:5291;271:33764" data-name="TabButton">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.091px] items-center pb-[1.523px] px-[12.182px] relative size-full">
                          <div className="relative shrink-0 size-[12.182px]" data-node-id="I2011:5291;271:33765" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon10} />
                          </div>
                          <div className="flex-[1_0_0] h-[15.988px] min-w-px relative" data-node-id="I2011:5291;271:33769" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[15.988px] left-0 not-italic text-[#64748b] text-[10.66px] top-0 whitespace-nowrap" data-node-id="I2011:5291;271:33770">
                                Evaluation Details
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[18.272px] h-[551.215px] items-start overflow-x-clip overflow-y-auto pb-[19.034px] pt-[0.589px] px-[1.523px] relative shrink-0 w-[800.176px]" data-node-id="I2011:5291;271:33771" data-name="Container">
                    <div className="bg-white border-[#f4f4f4] border-[0.761px] border-solid content-stretch flex flex-col gap-[19.034px] h-[331.186px] items-center overflow-clip pb-[11.42px] pt-[19.034px] px-[0.761px] relative rounded-[7.139px] shadow-[0px_3.045px_4.568px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-node-id="I2011:5291;271:33772" data-name="Container">
                      <div className="content-stretch flex items-center pl-[18.272px] relative shrink-0 w-[797.892px]" data-node-id="I2011:5291;271:33773" data-name="Container">
                        <div className="relative shrink-0" data-node-id="I2011:5291;271:33774">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.091px] items-center relative size-full">
                            <div className="relative shrink-0 size-[12.182px]" data-node-id="I2011:5291;271:33775" data-name="Icon">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon11} />
                            </div>
                            <p className="[word-break:break-word] font-['Segoe_Pro_Display:Bold'] leading-[17.13px] not-italic relative shrink-0 text-[#1e293b] text-[13.7px] whitespace-nowrap" data-node-id="I2011:5291;271:33777">
                              Alert Overview
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="gap-x-[57.112735748291016px] gap-y-[21.41727638244629px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[255.813px] relative shrink-0 w-[752.972px]" data-node-id="I2011:5291;271:33778" data-name="Container">
                        <div className="col-1 content-stretch flex flex-col gap-[15.227px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-node-id="I2011:5291;271:33779" data-name="Container">
                          <div className="[word-break:break-word] content-stretch flex flex-col font-['Segoe_Pro_Display:Regular'] gap-[3.045px] h-[33.88px] items-start not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="I2011:5291;271:33780" data-name="Container">
                            <p className="leading-[14.846px] relative shrink-0 text-[#64748b] text-[9.9px]" data-node-id="I2011:5291;271:33781">
                              Alert Name
                            </p>
                            <p className="leading-[15.988px] relative shrink-0 text-[#1e293b] text-[10.66px]" data-node-id="I2011:5291;271:33782">
                              Pod Container Restart in Hotel Reservation Namespace
                            </p>
                          </div>
                          <div className="content-stretch flex flex-col gap-[3.045px] items-start py-[0.761px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33783" data-name="Container">
                            <p className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] leading-[14.846px] not-italic relative shrink-0 text-[#64748b] text-[9.9px] whitespace-nowrap" data-node-id="I2011:5291;271:33784">
                              Severity
                            </p>
                            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2011:5291;271:33785">
                              <div className="content-stretch flex items-center justify-center relative rounded-[3.045px] shrink-0 size-[9.898px]" data-node-id="I2011:5291;271:33786" data-name="Container">
                                <div className="bg-[#c10007] relative rounded-[12773271.931px] shrink-0 size-[3.807px]" data-node-id="I2011:5291;271:33787" data-name="Container" />
                              </div>
                              <p className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] leading-[10.833px] not-italic relative shrink-0 text-[#1e293b] text-[9.14px] whitespace-nowrap" data-node-id="I2011:5291;271:33788">
                                P1
                              </p>
                            </div>
                          </div>
                          <div className="[word-break:break-word] content-stretch flex flex-col font-['Segoe_Pro_Display:Regular'] gap-[3.045px] h-[33.88px] items-start not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="I2011:5291;271:33789" data-name="Container">
                            <p className="leading-[14.846px] relative shrink-0 text-[#64748b] text-[9.9px]" data-node-id="I2011:5291;271:33790">
                              Alert Source
                            </p>
                            <p className="leading-[15.988px] relative shrink-0 text-[#1e293b] text-[10.66px]" data-node-id="I2011:5291;271:33791">
                              grafana
                            </p>
                          </div>
                          <div className="[word-break:break-word] content-stretch flex flex-col font-['Segoe_Pro_Display:Regular'] gap-[3.045px] h-[52.533px] items-start not-italic relative shrink-0 w-full" data-node-id="I2011:5291;271:33792" data-name="Container">
                            <p className="leading-[14.846px] relative shrink-0 text-[#64748b] text-[9.9px] whitespace-nowrap" data-node-id="I2011:5291;271:33793">
                              Description
                            </p>
                            <p className="leading-[17.321px] relative shrink-0 text-[#1e293b] text-[10.66px] w-[350.22px]" data-node-id="I2011:5291;271:33794">
                              A container in the hotel-reservation namespace has restarted at least once in the last 5 minutes.
                            </p>
                          </div>
                          <div className="[word-break:break-word] content-stretch flex flex-col font-['Segoe_Pro_Display:Regular'] gap-[3.045px] h-[33.88px] items-start not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="I2011:5291;271:33795" data-name="Container">
                            <p className="leading-[14.846px] relative shrink-0 text-[#64748b] text-[9.9px]" data-node-id="I2011:5291;271:33796">
                              Summary
                            </p>
                            <p className="leading-[15.988px] relative shrink-0 text-[#1e293b] text-[10.66px]" data-node-id="I2011:5291;271:33797">
                              Pod Container Restarted
                            </p>
                          </div>
                        </div>
                        <div className="col-2 content-stretch flex flex-col gap-[15.227px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-node-id="I2011:5291;271:33798" data-name="Container">
                          <div className="[word-break:break-word] content-stretch flex flex-col font-['Segoe_Pro_Display:Regular'] gap-[3.045px] items-start not-italic py-[0.761px] relative shrink-0 w-full whitespace-nowrap" data-node-id="I2011:5291;271:33799" data-name="Container">
                            <p className="leading-[14.846px] relative shrink-0 text-[#64748b] text-[9.9px]" data-node-id="I2011:5291;271:33800">
                              Alert Status
                            </p>
                            <p className="leading-[15.988px] relative shrink-0 text-[#1e293b] text-[10.66px]" data-node-id="I2011:5291;271:33801">
                              Resolved
                            </p>
                          </div>
                          <div className="[word-break:break-word] content-stretch flex flex-col font-['Segoe_Pro_Display:Regular'] gap-[3.045px] h-[33.88px] items-start not-italic relative shrink-0 w-full whitespace-nowrap" data-node-id="I2011:5291;271:33802" data-name="Container">
                            <p className="leading-[14.846px] relative shrink-0 text-[#64748b] text-[9.9px]" data-node-id="I2011:5291;271:33803">
                              Started At
                            </p>
                            <p className="leading-[15.988px] relative shrink-0 text-[#1e293b] text-[10.66px]" data-node-id="I2011:5291;271:33804">
                              Nov 15, 2025 at 03:47:00 AM
                            </p>
                          </div>
                          <div className="content-stretch flex flex-col gap-[3.045px] items-start relative shrink-0 w-full" data-node-id="I2011:5291;271:33805" data-name="Container">
                            <p className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] leading-[14.846px] not-italic relative shrink-0 text-[#64748b] text-[9.9px] whitespace-nowrap" data-node-id="I2011:5291;271:33806">
                              Triage Status
                            </p>
                            <div className="bg-[#d0fae5] content-stretch flex gap-[3.045px] items-center px-[3.045px] py-[2.284px] relative rounded-[6.091px] shrink-0 w-[53.294px]" data-node-id="I2011:5291;271:33807" data-name="Text">
                              <div className="relative shrink-0 size-[9.136px]" data-node-id="I2011:5291;271:33808" data-name="Icon">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon12} />
                              </div>
                              <p className="[word-break:break-word] font-['Segoe_Pro_Display:Semibold'] leading-[11.42px] not-italic relative shrink-0 text-[#007a55] text-[6.85px] whitespace-nowrap" data-node-id="I2011:5291;271:33811">
                                Success
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border-[#f4f4f4] border-[0.761px] border-solid content-stretch flex flex-col gap-[19.034px] items-center overflow-clip px-[0.761px] py-[19.034px] relative rounded-[3.57px] shadow-[0px_3.045px_4.568px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-node-id="I2011:5291;271:33812" data-name="Container">
                      <div className="content-stretch flex gap-[6.091px] items-center pl-[18.272px] relative shrink-0 w-[797.892px]" data-node-id="I2011:5291;271:33813" data-name="Container">
                        <div className="relative shrink-0 size-[12.182px]" data-node-id="I2011:5291;271:33814" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon13} />
                        </div>
                        <p className="[word-break:break-word] font-['Segoe_Pro_Display:Bold'] leading-[17.13px] not-italic relative shrink-0 text-[#1e293b] text-[13.7px] whitespace-nowrap" data-node-id="I2011:5291;271:33816">
                          Labels
                        </p>
                      </div>
                      <div className="gap-x-[57.112735748291016px] gap-y-[14.278183937072754px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[257.335px] relative shrink-0 w-[752.972px]" data-node-id="I2011:5291;271:33817" data-name="Container">
                        <div className="col-1 content-stretch flex flex-col gap-[12.182px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-node-id="I2011:5291;271:33818" data-name="Container">
                          <div className="content-stretch flex flex-col gap-[3.045px] h-[32.738px] items-start relative shrink-0 w-full" data-node-id="I2011:5291;271:33819" data-name="Container">
                            <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33820" data-name="Label">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[14.846px] left-0 not-italic text-[#64748b] text-[9.9px] top-[0.76px] whitespace-nowrap" data-node-id="I2011:5291;271:33821">
                                Job
                              </p>
                            </div>
                            <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33822" data-name="Paragraph">
                              <p className="[word-break:break-word] absolute font-['Courier_New:Regular'] leading-[14.846px] left-0 not-italic text-[#1e293b] text-[9.9px] top-0 whitespace-nowrap" data-node-id="I2011:5291;271:33823">
                                kube-state-metrics
                              </p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[3.045px] h-[32.738px] items-start relative shrink-0 w-full" data-node-id="I2011:5291;271:33824" data-name="Container">
                            <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33825" data-name="Label">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[14.846px] left-0 not-italic text-[#64748b] text-[9.9px] top-[0.76px] whitespace-nowrap" data-node-id="I2011:5291;271:33826">
                                Uid
                              </p>
                            </div>
                            <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33827" data-name="Paragraph">
                              <p className="[word-break:break-word] absolute font-['Courier_New:Regular'] leading-[14.846px] left-0 not-italic text-[#1e293b] text-[9.9px] top-0 whitespace-nowrap" data-node-id="I2011:5291;271:33828">
                                5936ed08-e631-4dd3-b6f8-012ea358ea5c
                              </p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[3.045px] h-[32.738px] items-start relative shrink-0 w-full" data-node-id="I2011:5291;271:33829" data-name="Container">
                            <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33830" data-name="Label">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[14.846px] left-0 not-italic text-[#64748b] text-[9.9px] top-[0.76px] whitespace-nowrap" data-node-id="I2011:5291;271:33831">
                                Category
                              </p>
                            </div>
                            <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33832" data-name="Paragraph">
                              <p className="[word-break:break-word] absolute font-['Courier_New:Regular'] leading-[14.846px] left-0 not-italic text-[#1e293b] text-[9.9px] top-0 whitespace-nowrap" data-node-id="I2011:5291;271:33833">
                                stability
                              </p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[3.045px] h-[32.738px] items-start relative shrink-0 w-full" data-node-id="I2011:5291;271:33834" data-name="Container">
                            <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33835" data-name="Label">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[14.846px] left-0 not-italic text-[#64748b] text-[9.9px] top-[0.76px] whitespace-nowrap" data-node-id="I2011:5291;271:33836">
                                Severity
                              </p>
                            </div>
                            <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33837" data-name="Paragraph">
                              <p className="[word-break:break-word] absolute font-['Courier_New:Regular'] leading-[14.846px] left-0 not-italic text-[#1e293b] text-[9.9px] top-0 whitespace-nowrap" data-node-id="I2011:5291;271:33838">
                                warning
                              </p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[3.045px] h-[32.738px] items-start relative shrink-0 w-full" data-node-id="I2011:5291;271:33839" data-name="Container">
                            <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33840" data-name="Label">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[14.846px] left-0 not-italic text-[#64748b] text-[9.9px] top-[0.76px] whitespace-nowrap" data-node-id="I2011:5291;271:33841">
                                Container
                              </p>
                            </div>
                            <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33842" data-name="Paragraph">
                              <p className="[word-break:break-word] absolute font-['Courier_New:Regular'] leading-[14.846px] left-0 not-italic text-[#1e293b] text-[9.9px] top-0 whitespace-nowrap" data-node-id="I2011:5291;271:33843">
                                rabbitmq
                              </p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[3.045px] h-[32.738px] items-start relative shrink-0 w-full" data-node-id="I2011:5291;271:33844" data-name="Container">
                            <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33845" data-name="Label">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[14.846px] left-0 not-italic text-[#64748b] text-[9.9px] top-[0.76px] whitespace-nowrap" data-node-id="I2011:5291;271:33846">
                                Grafana Folder
                              </p>
                            </div>
                            <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33847" data-name="Paragraph">
                              <p className="[word-break:break-word] absolute font-['Courier_New:Regular'] leading-[14.846px] left-0 not-italic text-[#1e293b] text-[9.9px] top-0 whitespace-nowrap" data-node-id="I2011:5291;271:33848">
                                Hotel Reservation Alerts
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-2 content-stretch flex flex-col gap-[12.182px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-node-id="I2011:5291;271:33849" data-name="Container">
                          <div className="content-stretch flex flex-col gap-[3.045px] h-[32.738px] items-start relative shrink-0 w-full" data-node-id="I2011:5291;271:33850" data-name="Container">
                            <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33851" data-name="Label">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[14.846px] left-0 not-italic text-[#64748b] text-[9.9px] top-[0.76px] whitespace-nowrap" data-node-id="I2011:5291;271:33852">
                                Pod
                              </p>
                            </div>
                            <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33853" data-name="Paragraph">
                              <p className="[word-break:break-word] absolute font-['Courier_New:Regular'] leading-[14.846px] left-0 not-italic text-[#1e293b] text-[9.9px] top-0 whitespace-nowrap" data-node-id="I2011:5291;271:33854">
                                rabbitmq-0
                              </p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[3.045px] h-[32.738px] items-start relative shrink-0 w-full" data-node-id="I2011:5291;271:33855" data-name="Container">
                            <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33856" data-name="Label">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[14.846px] left-0 not-italic text-[#64748b] text-[9.9px] top-[0.76px] whitespace-nowrap" data-node-id="I2011:5291;271:33857">
                                Service
                              </p>
                            </div>
                            <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33858" data-name="Paragraph">
                              <p className="[word-break:break-word] absolute font-['Courier_New:Regular'] leading-[14.846px] left-0 not-italic text-[#1e293b] text-[9.9px] top-0 whitespace-nowrap" data-node-id="I2011:5291;271:33859">
                                kubernetes
                              </p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[3.045px] h-[32.738px] items-start relative shrink-0 w-full" data-node-id="I2011:5291;271:33860" data-name="Container">
                            <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33861" data-name="Label">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[14.846px] left-0 not-italic text-[#64748b] text-[9.9px] top-[0.76px] whitespace-nowrap" data-node-id="I2011:5291;271:33862">
                                Instance
                              </p>
                            </div>
                            <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33863" data-name="Paragraph">
                              <p className="[word-break:break-word] absolute font-['Courier_New:Regular'] leading-[14.846px] left-0 not-italic text-[#1e293b] text-[9.9px] top-0 whitespace-nowrap" data-node-id="I2011:5291;271:33864">
                                kube-state-metrics.hotel-reservation.svc.cluster.local:8000
                              </p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[3.045px] h-[32.738px] items-start relative shrink-0 w-full" data-node-id="I2011:5291;271:33865" data-name="Container">
                            <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33866" data-name="Label">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[14.846px] left-0 not-italic text-[#64748b] text-[9.9px] top-[0.76px] whitespace-nowrap" data-node-id="I2011:5291;271:33867">
                                Alertname
                              </p>
                            </div>
                            <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33868" data-name="Paragraph">
                              <p className="[word-break:break-word] absolute font-['Courier_New:Regular'] leading-[14.846px] left-0 not-italic text-[#1e293b] text-[9.9px] top-0 whitespace-nowrap" data-node-id="I2011:5291;271:33869">
                                Pod Container Restart in Hotel Reservation Namespace
                              </p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[3.045px] h-[32.738px] items-start relative shrink-0 w-full" data-node-id="I2011:5291;271:33870" data-name="Container">
                            <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33871" data-name="Label">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[14.846px] left-0 not-italic text-[#64748b] text-[9.9px] top-[0.76px] whitespace-nowrap" data-node-id="I2011:5291;271:33872">
                                Namespace
                              </p>
                            </div>
                            <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33873" data-name="Paragraph">
                              <p className="[word-break:break-word] absolute font-['Courier_New:Regular'] leading-[14.846px] left-0 not-italic text-[#1e293b] text-[9.9px] top-0 whitespace-nowrap" data-node-id="I2011:5291;271:33874">
                                hotel-reservation
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border-[#f4f4f4] border-[0.761px] border-solid content-stretch flex flex-col gap-[17.511px] items-center overflow-clip px-[0.761px] py-[19.034px] relative rounded-[3.57px] shadow-[0px_3.045px_4.568px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-node-id="I2011:5291;271:33875" data-name="Container">
                      <div className="content-stretch flex gap-[6.091px] items-center pl-[18.272px] relative shrink-0 w-[797.892px]" data-node-id="I2011:5291;271:33876" data-name="Container">
                        <div className="relative shrink-0 size-[12.182px]" data-node-id="I2011:5291;271:33877" data-name="Icon">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon14} />
                        </div>
                        <p className="[word-break:break-word] font-['Segoe_Pro_Display:Bold'] leading-[17.13px] not-italic relative shrink-0 text-[#1e293b] text-[13.7px] whitespace-nowrap" data-node-id="I2011:5291;271:33879">
                          Technical Details
                        </p>
                      </div>
                      <div className="gap-x-[14.278183937072754px] gap-y-[14.278183937072754px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[54.817px] relative shrink-0 w-[759.063px]" data-node-id="I2011:5291;271:33880" data-name="Container">
                        <div className="bg-white border-[#f4f4f4] border-[0.761px] border-solid col-1 content-stretch drop-shadow-[0px_3.045px_2.284px_rgba(0,0,0,0.1)] flex flex-col items-start justify-self-stretch p-[12.943px] relative rounded-[3.57px] row-1 self-stretch shrink-0" data-node-id="I2011:5291;271:33881" data-name="SlotClone">
                          <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="I2011:5291;271:33882" data-name="AlertDetailPage">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9.136px] items-center relative size-full">
                              <div className="bg-[#eff6ff] relative rounded-[3.57px] shrink-0 size-[27.408px]" data-node-id="I2011:5291;271:33883" data-name="Container">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                                  <div className="relative shrink-0 size-[12.182px]" data-node-id="I2011:5291;271:33884" data-name="Icon">
                                    <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon15} />
                                  </div>
                                </div>
                              </div>
                              <div className="flex-[1_0_0] h-[27.408px] min-w-px relative" data-node-id="I2011:5291;271:33886" data-name="Container">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                  <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33887" data-name="Heading 4">
                                    <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[14.846px] left-0 not-italic text-[#1e293b] text-[9.9px] top-0 whitespace-nowrap" data-node-id="I2011:5291;271:33888">
                                      Annotations
                                    </p>
                                  </div>
                                  <div className="h-[12.562px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33889" data-name="Paragraph">
                                    <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[12.562px] left-0 not-italic text-[#64748b] text-[8.37px] top-[0.38px] whitespace-nowrap" data-node-id="I2011:5291;271:33890">
                                      View annotation details
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="relative shrink-0 size-[12.182px]" data-node-id="I2011:5291;271:33891" data-name="Icon">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon16} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white border-[#f4f4f4] border-[0.761px] border-solid col-2 content-stretch drop-shadow-[0px_3.045px_2.284px_rgba(0,0,0,0.1)] flex flex-col items-start justify-self-stretch p-[12.943px] relative rounded-[3.57px] row-1 self-stretch shrink-0" data-node-id="I2011:5291;271:33893" data-name="SlotClone">
                          <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="I2011:5291;271:33894" data-name="AlertDetailPage">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9.136px] items-center relative size-full">
                              <div className="bg-[#faf5ff] relative rounded-[3.57px] shrink-0 size-[27.408px]" data-node-id="I2011:5291;271:33895" data-name="Container">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                                  <div className="relative shrink-0 size-[12.182px]" data-node-id="I2011:5291;271:33896" data-name="Icon">
                                    <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon17} />
                                  </div>
                                </div>
                              </div>
                              <div className="flex-[1_0_0] h-[27.408px] min-w-px relative" data-node-id="I2011:5291;271:33898" data-name="Container">
                                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                                  <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33899" data-name="Heading 4">
                                    <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[14.846px] left-0 not-italic text-[#1e293b] text-[9.9px] top-0 whitespace-nowrap" data-node-id="I2011:5291;271:33900">
                                      Raw Alert Payload
                                    </p>
                                  </div>
                                  <div className="h-[12.562px] relative shrink-0 w-full" data-node-id="I2011:5291;271:33901" data-name="Paragraph">
                                    <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[12.562px] left-0 not-italic text-[#64748b] text-[8.37px] top-[0.38px] whitespace-nowrap" data-node-id="I2011:5291;271:33902">
                                      View complete payload data
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="relative shrink-0 size-[12.182px]" data-node-id="I2011:5291;271:33903" data-name="Icon">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon18} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-white h-[55.099px] left-0 top-0 w-[1045.357px]" data-node-id="I2011:5291;271:33905" data-name="Header">
                <div className="absolute bg-[rgba(255,255,255,0)] border-[#e2e8f0] border-b-[0.765px] border-solid h-[55.099px] left-0 shadow-[0px_0.765px_2.296px_0px_rgba(0,0,0,0.1)] top-0 w-[1040px]" data-node-id="I2011:5291;271:33906" data-name="Container" />
                <div className="absolute h-[54.334px] left-0 top-0 w-[1040px]" data-node-id="I2011:5291;271:33907" data-name="Container2">
                  <div className="absolute h-[30.611px] left-[870.11px] top-[11.86px] w-[149.993px]" data-node-id="I2011:5291;271:33909" data-name="Container1">
                    <div className="absolute left-0 rounded-[7.653px] size-[27.55px] top-[1.53px]" data-node-id="I2011:5291;271:33910" data-name="Button">
                      <div className="absolute left-[6.12px] overflow-clip size-[15.305px] top-[6.12px]" data-node-id="I2011:5291;271:33911" data-name="Icon">
                        <div className="absolute content-stretch flex flex-col items-start left-[9.99px] size-[4.036px] top-[9.99px]" data-node-id="I2011:5291;271:33912" data-name="Container">
                          <div className="h-[4.036px] overflow-clip relative shrink-0 w-full" data-node-id="I2011:5291;271:33913" data-name="Icon">
                            <div className="absolute inset-[13.89%_25.82%_25.83%_13.9%]" data-node-id="I2011:5291;271:33914" data-name="Vector">
                              <div className="absolute inset-[-23.04%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector43} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col items-start left-[1.28px] size-[11.473px] top-[1.28px]" data-node-id="I2011:5291;271:33915" data-name="Container">
                          <div className="h-[11.473px] overflow-clip relative shrink-0 w-full" data-node-id="I2011:5291;271:33916" data-name="Icon">
                            <div className="absolute inset-[5.56%_5.56%_5.55%_5.56%]" data-node-id="I2011:5291;271:33917" data-name="Vector">
                              <div className="absolute inset-[-6.25%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector44} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[79.59px] rounded-[7.653px] size-[27.55px] top-[1.53px]" data-node-id="I2011:5291;271:33918" data-name="Button1">
                      <div className="absolute left-[6.12px] overflow-clip size-[15.305px] top-[6.12px]" data-node-id="I2011:5291;271:33919" data-name="Icon1">
                        <div className="absolute content-stretch flex flex-col h-[14.002px] items-start left-[1.3px] top-[0.65px] w-[12.699px]" data-node-id="I2011:5291;271:33920" data-name="Container">
                          <div className="h-[14.002px] overflow-clip relative shrink-0 w-full" data-node-id="I2011:5291;271:33921" data-name="Icon">
                            <div className="absolute inset-[4.39%_7.29%_8.05%_4.9%]" data-node-id="I2011:5291;271:33922" data-name="Vector">
                              <div className="absolute inset-[-5.04%_-5.55%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector45} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col items-start left-[5.11px] size-[5.094px] top-[5.11px]" data-node-id="I2011:5291;271:33923" data-name="Container">
                          <div className="h-[5.094px] overflow-clip relative shrink-0 w-full" data-node-id="I2011:5291;271:33924" data-name="Icon">
                            <div className="absolute inset-[11.9%_16.66%_16.67%_11.91%]" data-node-id="I2011:5291;271:33925" data-name="Vector">
                              <div className="absolute inset-[-16.67%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector46} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-gradient-to-b from-[#4a9d76] left-[119.38px] rounded-[12839064.095px] size-[30.611px] to-[#3b8b63] top-0" data-node-id="I2011:5291;271:33926" data-name="Container">
                      <div className="absolute h-[18.366px] left-[7.75px] top-[6.12px] w-[15.108px]" data-node-id="I2011:5291;271:33927" data-name="Paragraph">
                        <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[18.366px] left-0 not-italic text-[12.24px] text-white top-[-0.77px] tracking-[-0.2803px] whitespace-nowrap" data-node-id="I2011:5291;271:33928">
                          SP
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-[39.79px] rounded-[7.653px] size-[27.55px] top-[1.53px]" data-node-id="I2011:5291;271:33929" data-name="Button2">
                      <div className="absolute content-stretch flex flex-col items-start left-[6.12px] size-[15.305px] top-[6.12px]" data-node-id="I2011:5291;271:33930" data-name="Icon2">
                        <div className="h-[15.305px] overflow-clip relative shrink-0 w-full" data-node-id="I2011:5291;271:33931" data-name="Icon">
                          <div className="absolute contents inset-[8.34%_12.5%_8.33%_12.5%]" data-node-id="I2011:5291;271:33932" data-name="Icon">
                            <div className="absolute inset-[87.5%_42.78%_8.33%_42.79%]" data-node-id="I2011:5291;271:33933" data-name="Vector">
                              <div className="absolute inset-[-100.02%_-28.87%_-100%_-28.87%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector47} />
                              </div>
                            </div>
                            <div className="absolute inset-[8.34%_12.5%_29.16%_12.5%]" data-node-id="I2011:5291;271:33934" data-name="Vector_2">
                              <div className="absolute inset-[-6.67%_-5.56%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector48} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bg-[#fb2c36] left-[18.37px] rounded-[12839064.095px] size-[6.122px] top-[3.06px]" data-node-id="I2011:5291;271:33935" data-name="Text" />
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Bold'] leading-[0] left-[19.9px] not-italic text-[#1d293d] text-[0px] top-[13.77px] tracking-[1.7002px] whitespace-nowrap" data-node-id="I2011:5291;271:33936">
                  <span className="leading-[27.55px] text-[22.96px]">OR</span>
                  <span className="leading-[32.291px] text-[#4a9d76] text-[26.909px]">I</span>
                  <span className="leading-[27.55px] text-[22.96px]">AN CLOUDMAX</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="2011:5292">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="2011:5293">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="2011:5294">
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap" data-node-id="2011:5295">
                Decision Story 2
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-node-id="2011:5296">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[1040px]" data-node-id="2011:5297">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full" data-node-id="2011:5298">{`How do you make the AI's reasoning trustworthy?`}</p>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-black w-full" data-node-id="2011:5299">
                <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] w-full" data-node-id="2011:5300">
                  The challenge
                </p>
                <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] w-full" data-node-id="2011:5301">
                  <p className="leading-[24px] mb-0">An AI-generated root cause can feel like a black box.</p>
                  <p className="leading-[24px] mb-0">Simply displaying:</p>
                  <p className="leading-[24px] mb-0">“Root cause: X”</p>
                  <p className="leading-[24px]">{`doesn't give an SRE enough confidence.`}</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="2011:5302">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]" data-node-id="2011:5303">
                  The decision
                </p>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[18px] text-black w-[min-content]" data-node-id="2011:5304">
                  I designed the Root Cause experience around the evidence collected during the investigation:
                </p>
                <div className="content-stretch flex gap-[18px] items-center py-[16px] relative shrink-0" data-node-id="2011:5305">
                  <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2011:5306">
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap" data-node-id="2011:5307">
                      Facts collected
                    </p>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="2011:5308">
                    <div className="flex-none rotate-90">
                      <div className="relative size-[16px]" data-name="gravity-ui:arrow-up">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2011:5310">
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap" data-node-id="2011:5311">
                      Metrics
                    </p>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="2011:5312">
                    <div className="flex-none rotate-90">
                      <div className="relative size-[16px]" data-name="gravity-ui:arrow-up">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2011:5314">
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap" data-node-id="2011:5315">
                      Logs
                    </p>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="2011:5316">
                    <div className="flex-none rotate-90">
                      <div className="relative size-[16px]" data-name="gravity-ui:arrow-up">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2011:5318">
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap" data-node-id="2011:5319">
                      Findings
                    </p>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="2011:5320">
                    <div className="flex-none rotate-90">
                      <div className="relative size-[16px]" data-name="gravity-ui:arrow-up">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2011:5322">
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap" data-node-id="2011:5323">
                      Conclusion
                    </p>
                  </div>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full" data-node-id="2011:5324">
                The final root-cause conclusion is therefore connected to the investigation context instead of appearing as an isolated AI answer.
              </p>
            </div>
            <div className="bg-[#f9fafc] blur-[6.399px] h-[762.973px] overflow-clip relative shrink-0 w-[1040px]" data-node-id="2011:5325" data-name="Root Cause Page">
              <div className="absolute content-stretch flex h-[762.973px] items-start left-0 pr-[-5.357px] top-0 w-[1040px]" data-node-id="2011:5326" data-name="App">
                <div className="bg-[#feffff] drop-shadow-[0px_1.523px_1.142px_rgba(0,0,0,0.1)] h-[762.973px] relative shrink-0 w-[195.909px]" data-node-id="2011:5327" data-name="Sidebar">
                  <div className="absolute bg-[rgba(255,255,255,0)] border-[#e2e8f0] border-r-[0.765px] border-solid h-[707.873px] left-0 top-[55.1px] w-[195.909px]" data-node-id="2011:5328" data-name="Container" />
                  <div className="absolute h-[440.795px] left-0 overflow-clip top-[64.28px] w-[195.144px]" data-node-id="2011:5329" data-name="Navigation">
                    <div className="absolute h-[12.244px] left-[21.43px] top-[6.89px] w-[31.675px]" data-node-id="2011:5330" data-name="Container44" />
                    <div className="absolute content-stretch flex flex-col gap-[3.045px] items-start left-[9.18px] top-[6.89px] w-[176.777px]" data-node-id="2011:5332" data-name="Container45">
                      <div className="h-[36.733px] relative rounded-[7.653px] shrink-0 w-full" data-node-id="2011:5333" data-name="NavItemComponent1">
                        <div className="absolute content-stretch flex flex-col items-start left-[12.24px] size-[15.305px] top-[10.71px]" data-node-id="2011:5334" data-name="Icon17">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 size-[15.305px]" data-node-id="2011:5335" data-name="Icon16">
                            <div className="h-[15.305px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5336" data-name="Icon">
                              <div className="absolute contents inset-[12.5%]" data-node-id="2011:5337" data-name="Icon">
                                <div className="absolute inset-[12.5%]" data-node-id="2011:5338" data-name="Vector">
                                  <div className="absolute inset-[-5.56%]">
                                    <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector49} />
                                  </div>
                                </div>
                                <div className="absolute bottom-[29.17%] left-3/4 right-1/4 top-[37.5%]" data-node-id="2011:5339" data-name="Vector_2">
                                  <div className="absolute inset-[-12.5%_-0.64px]">
                                    <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector50} />
                                  </div>
                                </div>
                                <div className="absolute inset-[20.84%_45.84%_29.16%_54.16%]" data-node-id="2011:5340" data-name="Vector_3">
                                  <div className="absolute inset-[-8.33%_-0.64px]">
                                    <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector51} />
                                  </div>
                                </div>
                                <div className="absolute inset-[58.34%_66.67%_29.16%_33.33%]" data-node-id="2011:5341" data-name="Vector_4">
                                  <div className="absolute inset-[-33.33%_-0.64px]">
                                    <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector52} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[18.366px] items-start left-[36.73px] pr-[44.918px] pt-[-0.383px] top-[9.18px] w-[77.507px]" data-node-id="2011:5342" data-name="Text2">
                          <div className="h-[18.366px] relative shrink-0 w-full" data-node-id="2011:5343" data-name="Paragraph">
                            <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[18.366px] left-0 not-italic text-[#45556c] text-[12.244px] top-[-0.76px] tracking-[-0.2391px] whitespace-nowrap" data-node-id="2011:5344">
                              Overview
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-between px-[12.182px] py-[9.136px] relative rounded-[7.653px] shrink-0 w-[176.777px]" data-node-id="2011:5345" style={{ filter: "drop-shadow(0px 3.061px 2.296px rgba(0,0,0,0.1)) drop-shadow(0px 1.531px 1.531px rgba(0,0,0,0.1))",  backgroundImage: "linear-gradient(90.12379547997146deg, rgb(74, 157, 118) 0%, rgb(59, 139, 99) 99.87%)" }} data-name="NavItemComponent">
                        <div className="content-stretch flex gap-[7.613px] items-center relative shrink-0" data-node-id="2011:5346">
                          <div className="overflow-clip relative shrink-0 size-[15.305px]" data-node-id="2011:5347" data-name="Icon">
                            <div className="absolute inset-[8.33%_12.5%]" data-node-id="2011:5348" data-name="Icon">
                              <div className="absolute inset-[-5.01%_-5.57%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgIcon19} />
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col h-[18.366px] items-start pr-[30.963px] pt-[-0.383px] relative shrink-0 w-[83.647px]" data-node-id="2011:5351" data-name="Text1">
                            <div className="h-[18.366px] relative shrink-0 w-full" data-node-id="2011:5352" data-name="Paragraph">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Bold'] leading-[18.366px] left-0 not-italic text-[12.182px] text-white top-[-0.77px] tracking-[-0.2391px] whitespace-nowrap" data-node-id="2011:5353">
                                Alerts
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 size-[6.852px]" data-node-id="2011:5354">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgEllipse8} />
                        </div>
                      </div>
                      <div className="h-[36.733px] relative rounded-[7.653px] shrink-0 w-full" data-node-id="2011:5355" data-name="NavItemComponent2">
                        <div className="absolute content-stretch flex flex-col items-start left-[12.24px] size-[15.305px] top-[10.71px]" data-node-id="2011:5356" data-name="Icon18">
                          <div className="h-[15.305px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5357" data-name="Icon">
                            <div className="absolute contents inset-[12.5%_8.34%_12.5%_8.33%]" data-node-id="2011:5358" data-name="Icon">
                              <div className="absolute bottom-[12.51%] left-1/2 right-1/2 top-[29.16%]" data-node-id="2011:5359" data-name="Vector">
                                <div className="absolute inset-[-5.71%_-0.51px]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector53} />
                                </div>
                              </div>
                              <div className="absolute inset-[12.5%_8.34%_12.5%_8.33%]" data-node-id="2011:5360" data-name="Vector_2">
                                <div className="absolute inset-[-5.57%_-5.01%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector54} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[18.366px] items-start left-[36.73px] pr-[43.387px] pt-[-0.383px] top-[9.18px] w-[98.857px]" data-node-id="2011:5361" data-name="Text3">
                          <div className="h-[18.366px] relative shrink-0 w-full" data-node-id="2011:5362" data-name="Paragraph">
                            <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[18.366px] left-0 not-italic text-[#45556c] text-[12.244px] top-[-0.76px] tracking-[-0.2391px] whitespace-nowrap" data-node-id="2011:5363">
                              Runbooks
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-[36.733px] relative rounded-[7.653px] shrink-0 w-full" data-node-id="2011:5364" data-name="NavItemComponent3">
                        <div className="absolute content-stretch flex flex-col items-start left-[12.24px] size-[15.305px] top-[10.71px]" data-node-id="2011:5365" data-name="Icon19">
                          <div className="h-[15.305px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5366" data-name="Icon">
                            <div className="absolute contents inset-[8.4%_12.68%_8.41%_12.68%]" data-node-id="2011:5367" data-name="Icon">
                              <div className="absolute inset-[8.4%_12.68%_8.41%_12.68%]" data-node-id="2011:5368" data-name="Vector">
                                <div className="absolute inset-[-5.01%_-5.58%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector55} />
                                </div>
                              </div>
                              <div className="absolute inset-[37.5%]" data-node-id="2011:5369" data-name="Vector_2">
                                <div className="absolute inset-[-16.67%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector56} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[18.366px] items-start left-[36.73px] pr-[23.699px] pt-[-0.383px] top-[9.18px] w-[56.474px]" data-node-id="2011:5370" data-name="Text4">
                          <div className="h-[18.366px] relative shrink-0 w-full" data-node-id="2011:5371" data-name="Paragraph">
                            <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[18.366px] left-0 not-italic text-[#45556c] text-[12.244px] top-[-0.77px] tracking-[-0.2391px] whitespace-nowrap" data-node-id="2011:5372">
                              Setup
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-[36.733px] relative rounded-[7.653px] shrink-0 w-full" data-node-id="2011:5373" data-name="NavItemComponent4">
                        <div className="absolute content-stretch flex flex-col items-start left-[12.24px] size-[15.305px] top-[10.71px]" data-node-id="2011:5374" data-name="Icon20">
                          <div className="h-[15.305px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5375" data-name="Icon">
                            <div className="absolute contents inset-[12.5%_8.33%]" data-node-id="2011:5376" data-name="Icon">
                              <div className="absolute inset-[62.5%_33.33%_12.5%_8.34%]" data-node-id="2011:5377" data-name="Vector">
                                <div className="absolute inset-[-16.67%_-7.14%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector57} />
                                </div>
                              </div>
                              <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-node-id="2011:5378" data-name="Vector_2">
                                <div className="absolute inset-[-12.92%_-33.37%_-12.92%_-33.38%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector58} />
                                </div>
                              </div>
                              <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-node-id="2011:5379" data-name="Vector_3">
                                <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector59} />
                                </div>
                              </div>
                              <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-node-id="2011:5380" data-name="Vector_4">
                                <div className="absolute inset-[-12.5%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector60} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[18.366px] items-start left-[36.73px] pr-[2.11px] pt-[-0.383px] top-[9.18px] w-[34.485px]" data-node-id="2011:5381" data-name="Text5">
                          <div className="h-[18.366px] relative shrink-0 w-full" data-node-id="2011:5382" data-name="Paragraph">
                            <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[18.366px] left-0 not-italic text-[#45556c] text-[12.244px] top-[-0.77px] tracking-[-0.2391px] whitespace-nowrap" data-node-id="2011:5383">
                              Users
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[27.55px] left-[20.26px] top-[18.37px] w-[154.602px]" data-node-id="2011:5384" data-name="Container47">
                    <div className="absolute h-[27.55px] left-0 top-0 w-[154.602px]" data-node-id="2011:5385" data-name="Heading8">
                      <div className="absolute content-stretch flex h-[27.55px] items-start left-0 top-0 w-[35.059px]" data-node-id="2011:5386" data-name="Text6">
                        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#1d293d] text-[22.958px] tracking-[1.4506px] whitespace-nowrap" data-node-id="2011:5387">
                          <span className="font-['Mona_Sans:Bold'] font-bold leading-[27.55px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                            OR
                          </span>
                          <span className="font-['Mona_Sans:Bold'] font-bold leading-[27.55px] text-[#4a9d76]" style={{ fontVariationSettings: '"wdth" 100' }}>
                            I
                          </span>
                          <span className="font-['Mona_Sans:Bold'] font-bold leading-[27.55px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                            AN CLOUDMAX
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-[rgba(255,255,255,0.9)] left-[185.96px] rounded-[12839063px] size-[18.366px] top-[61.22px]" data-node-id="2011:5405" data-name="Button8">
                    <div className="absolute bg-[rgba(255,255,255,0)] border-[0.765px] border-[rgba(255,255,255,0.3)] border-solid left-0 rounded-[12839063px] shadow-[0px_3.061px_4.592px_0px_rgba(0,0,0,0.1),0px_1.531px_3.061px_0px_rgba(0,0,0,0.1)] size-[18.366px] top-0" data-node-id="2011:5406" data-name="Container" />
                    <div className="absolute content-stretch flex flex-col items-start left-[3.06px] size-[12.244px] top-[3.06px]" data-node-id="2011:5407" data-name="Icon22">
                      <div className="h-[12.244px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5408" data-name="Icon">
                        <div className="absolute bottom-1/4 contents left-[37.5%] right-[37.5%] top-1/4" data-node-id="2011:5409" data-name="Icon">
                          <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-node-id="2011:5410" data-name="Vector">
                            <div className="absolute inset-[-8.33%_-16.67%]">
                              <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector61} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col h-[762.87px] items-center pt-[55.099px] relative shrink-0 w-[844.334px]" data-node-id="2011:5411" data-name="Main Content">
                  <div className="content-stretch flex flex-col gap-[9.898px] items-end py-[14.466px] relative shrink-0" data-node-id="2011:5412" data-name="Container">
                    <div className="content-stretch flex h-[24.2px] items-center justify-between relative shrink-0 w-[803.575px]" data-node-id="2011:5413" data-name="Container">
                      <div className="h-[13.031px] relative shrink-0 w-[72.339px]" data-node-id="2011:5414" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4.964px] items-center relative size-full">
                          <div className="relative shrink-0 size-[9.928px]" data-node-id="2011:5415" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon20} />
                          </div>
                          <div className="flex-[1_0_0] h-[13.031px] min-w-px relative" data-node-id="2011:5417" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[13.031px] left-0 not-italic text-[#45556c] text-[8.375px] top-0 whitespace-nowrap" data-node-id="2011:5418">
                                Back to Alerts
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#feffff] border-[#eff1f3] border-[0.761px] border-solid drop-shadow-[0px_3.045px_2.284px_rgba(0,0,0,0.1)] relative rounded-[6.091px] shrink-0" data-node-id="2011:5419" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.613px] items-center justify-center px-[12.943px] py-[6.852px] relative size-full">
                          <div className="relative shrink-0 size-[9.928px]" data-node-id="2011:5420" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon21} />
                          </div>
                          <div className="h-[13.031px] relative shrink-0 w-[31.77px]" data-node-id="2011:5422" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[13.031px] left-0 not-italic text-[#64748b] text-[9.136px] top-0 whitespace-nowrap" data-node-id="2011:5423">
                                Refresh
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[803.575px]" data-node-id="2011:5424" data-name="Container">
                      <div className="relative shrink-0" data-node-id="2011:5425" data-name="Heading 1">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[2.284px] relative size-full">
                          <p className="[word-break:break-word] bg-clip-text font-['Segoe_Pro_Display:Bold'] leading-[27.55px] not-italic relative shrink-0 text-[22.84px] text-[transparent] tracking-[0.3027px] whitespace-nowrap" data-node-id="2011:5426" style={{ backgroundImage: "linear-gradient(87.78835640288038deg, rgb(31, 167, 82) 0.20215%, rgb(5, 150, 105) 99.732%)" }}>
                            API-High-Latency (copy)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-[#e5e7eb] border-b-[0.761px] border-solid content-stretch flex gap-[3.045px] h-[36.545px] items-start pb-[0.761px] relative shrink-0 w-[803.221px]" data-node-id="2011:5433" data-name="Container">
                      <div className="h-[35.783px] relative shrink-0 w-[127.044px]" data-node-id="2011:5434" data-name="TabButton">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.091px] items-center px-[12.182px] relative size-full">
                          <div className="relative shrink-0 size-[12.182px]" data-node-id="2011:5435" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon22} />
                          </div>
                          <div className="flex-[1_0_0] h-[15.988px] min-w-px relative" data-node-id="2011:5439" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[15.988px] left-0 not-italic text-[#64748b] text-[10.659px] top-0 whitespace-nowrap" data-node-id="2011:5440">
                                Alert Information
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-[#18a25a] border-b-[1.523px] border-solid h-[35.783px] relative shrink-0 w-[100.718px]" data-node-id="2011:5441" data-name="TabButton">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.091px] items-center pb-[1.523px] px-[12.182px] relative size-full">
                          <div className="relative shrink-0 size-[12.182px]" data-node-id="2011:5442" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon23} />
                          </div>
                          <div className="flex-[1_0_0] h-[15.988px] min-w-px relative" data-node-id="2011:5444" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[15.988px] left-0 not-italic text-[#18a25a] text-[10.659px] top-0 whitespace-nowrap" data-node-id="2011:5445">
                                Root Cause
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-[rgba(0,0,0,0)] border-b-[1.523px] border-solid h-[35.783px] relative shrink-0 w-[117.581px]" data-node-id="2011:5446" data-name="TabButton">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.091px] items-center pb-[1.523px] px-[12.182px] relative size-full">
                          <div className="relative shrink-0 size-[12.182px]" data-node-id="2011:5447" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon24} />
                          </div>
                          <div className="flex-[1_0_0] h-[15.988px] min-w-px relative" data-node-id="2011:5453" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[15.988px] left-0 not-italic text-[#64748b] text-[10.659px] top-0 whitespace-nowrap" data-node-id="2011:5454">
                                Triage Journey
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-[rgba(0,0,0,0)] border-b-[1.523px] border-solid h-[35.783px] relative shrink-0 w-[131.891px]" data-node-id="2011:5455" data-name="TabButton">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.091px] items-center pb-[1.523px] px-[12.182px] relative size-full">
                          <div className="relative shrink-0 size-[12.182px]" data-node-id="2011:5456" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon25} />
                          </div>
                          <div className="flex-[1_0_0] h-[15.988px] min-w-px relative" data-node-id="2011:5460" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[15.988px] left-0 not-italic text-[#64748b] text-[10.659px] top-0 whitespace-nowrap" data-node-id="2011:5461">
                                Evaluation Details
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col h-[571.772px] items-start overflow-x-clip overflow-y-auto pb-[19.034px] px-[1.523px] relative shrink-0 w-[800.176px]" data-node-id="2011:5462" data-name="RootCauseTab">
                    <div className="bg-white border-[#f4f4f4] border-[0.761px] border-solid content-stretch flex flex-col gap-[19.034px] items-start overflow-clip px-[0.761px] py-[19.034px] relative rounded-[3.045px] shadow-[0px_3.045px_4.568px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-node-id="2011:5463" data-name="Container">
                      <div className="content-stretch flex flex-col items-start px-[18.203px] relative shrink-0 w-full" data-node-id="2011:5464" data-name="Container">
                        <p className="[word-break:break-word] font-['Segoe_Pro_Display:Bold'] leading-[22.754px] not-italic relative shrink-0 text-[#1e293b] text-[13.704px] whitespace-nowrap" data-node-id="2011:5465">
                          Alert Investigation Summary
                        </p>
                      </div>
                      <div className="content-stretch flex flex-col gap-[9.136px] items-start px-[18.272px] relative shrink-0 w-full" data-node-id="2011:5466" data-name="Container">
                        <div className="content-stretch flex items-center relative shrink-0 w-[762.253px]" data-node-id="2011:5467" data-name="Container">
                          <p className="[word-break:break-word] font-['Segoe_Pro_Display:Semibold'] leading-[17.065px] not-italic relative shrink-0 text-[#1e293b] text-[11.42px] whitespace-nowrap" data-node-id="2011:5468">
                            Facts Collected
                          </p>
                        </div>
                        <div className="content-stretch flex flex-col gap-[6.091px] items-end relative shrink-0" data-node-id="2011:5469" data-name="Container">
                          <div className="content-stretch flex h-[18.203px] items-center relative shrink-0 w-[762.253px]" data-node-id="2011:5470" data-name="Container">
                            <p className="[word-break:break-word] font-['Segoe_Pro_Display:Semibold'] leading-[18.203px] not-italic relative shrink-0 text-[#1e293b] text-[9.898px] whitespace-nowrap" data-node-id="2011:5471">
                              Kubernetes Pod Metrics
                            </p>
                          </div>
                          <div className="content-stretch flex flex-col gap-[3.807px] items-start relative shrink-0 w-[737.982px]" data-node-id="2011:5472" data-name="Container">
                            <p className="[word-break:break-word] font-['Segoe_Pro_Display:Semibold'] leading-[18.203px] not-italic relative shrink-0 text-[#1e293b] text-[9.898px] whitespace-nowrap" data-node-id="2011:5473">
                              Findings:
                            </p>
                            <div className="content-stretch flex flex-col gap-[3.807px] items-start relative shrink-0 w-full" data-node-id="2011:5474">
                              <div className="content-stretch flex gap-[9.136px] items-start relative shrink-0 w-full" data-node-id="2011:5475" data-name="FindingItem">
                                <div className="h-[16.75px] relative shrink-0 w-[4.568px]" data-node-id="2011:5476">
                                  <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#c5c5c5] left-[calc(50%-0.16px)] rounded-[12724841px] size-[4.551px] top-[calc(50%+0.04px)]" data-node-id="2011:5477" data-name="Container" />
                                </div>
                                <p className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] leading-[17.255px] not-italic relative shrink-0 text-[#475569] text-[9.898px] w-[684.451px]" data-node-id="2011:5478">
                                  Restart counter for rabbitmq-0 increased from 74 to 76 during alert window (2025-11-14T22:16:40Z to 2025-11-14T22:17:40Z), confirming 2 restarts in the last 5 minutes
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[9.136px] items-start relative shrink-0 w-full" data-node-id="2011:5479" data-name="FindingItem">
                                <div className="h-[16.75px] relative shrink-0 w-[4.568px]" data-node-id="2011:5480">
                                  <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#c5c5c5] left-[calc(50%-0.16px)] rounded-[12724841px] size-[4.551px] top-[calc(50%+0.04px)]" data-node-id="2011:5481" data-name="Container" />
                                </div>
                                <p className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] leading-[17.255px] not-italic relative shrink-0 text-[#475569] text-[9.898px] w-[676.547px]" data-node-id="2011:5482">
                                  CPU utilization remained consistently low at ~0.005 cores with no spikes during alert window (2025-11-14T22:12:00Z to 2025-11-14T22:22:00Z
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[9.136px] items-center relative shrink-0 w-full" data-node-id="2011:5483" data-name="FindingItem">
                                <div className="h-[16.75px] relative shrink-0 w-[4.568px]" data-node-id="2011:5484">
                                  <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#c5c5c5] left-[calc(50%-0.16px)] rounded-[12724841px] size-[4.551px] top-[calc(50%+0.04px)]" data-node-id="2011:5485" data-name="Container" />
                                </div>
                                <div className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] h-[19.034px] leading-[0] not-italic relative shrink-0 text-[#475569] text-[9.898px] w-[545.886px]" data-node-id="2011:5486">
                                  <p className="leading-[17.255px] mb-0">Memory utilization stable at ~2.17-2.18 MB, well below the 512 MB resource limit during alert window</p>
                                  <p className="leading-[17.255px]">​</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[6.091px] items-end relative shrink-0" data-node-id="2011:5487" data-name="Container">
                          <div className="content-stretch flex h-[18.203px] items-center relative shrink-0 w-[762.253px]" data-node-id="2011:5488" data-name="Container">
                            <p className="[word-break:break-word] font-['Segoe_Pro_Display:Semibold'] leading-[18.203px] not-italic relative shrink-0 text-[#1e293b] text-[9.898px] whitespace-nowrap" data-node-id="2011:5489">
                              Application Logs (RabbitMQ Container)
                            </p>
                          </div>
                          <div className="content-stretch flex flex-col gap-[3.807px] items-start relative shrink-0 w-[737.982px]" data-node-id="2011:5490" data-name="Container">
                            <p className="[word-break:break-word] font-['Segoe_Pro_Display:Semibold'] leading-[18.203px] not-italic relative shrink-0 text-[#1e293b] text-[9.898px] whitespace-nowrap" data-node-id="2011:5491">
                              Findings:
                            </p>
                            <div className="content-stretch flex gap-[9.136px] items-start relative shrink-0 w-full" data-node-id="2011:5492" data-name="FindingItem">
                              <div className="h-[16.75px] relative shrink-0 w-[4.568px]" data-node-id="2011:5493">
                                <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#c5c5c5] left-[calc(50%-0.16px)] rounded-[12724841px] size-[4.551px] top-[calc(50%+0.04px)]" data-node-id="2011:5494" data-name="Container" />
                              </div>
                              <p className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] leading-[17.255px] not-italic relative shrink-0 text-[#475569] text-[9.898px] w-[673.513px]" data-node-id="2011:5495">{`Container startup failure with error "Cookie file /var/lib/rabbitmq/.erlang.cookie must be accessible by owner only" at 2025-11-14T22:20:51.343520Z`}</p>
                            </div>
                            <div className="content-stretch flex gap-[9.136px] items-center relative shrink-0 w-full" data-node-id="2011:5496" data-name="FindingItem">
                              <div className="bg-[#c5c5c5] relative rounded-[12724841px] shrink-0 size-[4.551px]" data-node-id="2011:5497" data-name="Container" />
                              <div className="content-stretch flex gap-[6.091px] items-center relative shrink-0" data-node-id="2011:5498" data-name="Paragraph">
                                <p className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] leading-[17.255px] not-italic relative shrink-0 text-[#475569] text-[9.898px] whitespace-nowrap" data-node-id="2011:5499">
                                  Error occurs during RabbitMQ prelaunch phase when initializing the auth module:
                                </p>
                                <div className="bg-[#f3f4f6] content-stretch flex h-[14.411px] items-center px-[4.551px] py-[1.517px] relative rounded-[3.034px] shrink-0 w-[168.864px]" data-node-id="2011:5500" data-name="RootCauseTab">
                                  <p className="[word-break:break-word] font-['Courier_New:Regular'] leading-[16.022px] not-italic relative shrink-0 text-[#1e293b] text-[9.86px] whitespace-nowrap" data-node-id="2011:5501">
                                    failed_to_start_child, auth
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[9.136px] items-center relative shrink-0 w-full" data-node-id="2011:5502" data-name="FindingItem">
                              <div className="bg-[#c5c5c5] relative rounded-[12724841px] shrink-0 size-[4.551px]" data-node-id="2011:5503" data-name="Container" />
                              <div className="h-[17.255px] relative shrink-0 w-[724.33px]" data-node-id="2011:5504" data-name="Paragraph">
                                <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[17.255px] left-[-0.13px] not-italic text-[#475569] text-[9.898px] top-[0.38px] w-[488.448px]" data-node-id="2011:5505">
                                  Erlang crash dump generated at 2025-11-14T22:20:52.862254981Z before container termination
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[12.182px] h-[233.734px] items-end relative shrink-0" data-node-id="2011:5506" data-name="Container">
                          <div className="content-stretch flex h-[18.203px] items-center relative shrink-0 w-[762.253px]" data-node-id="2011:5507" data-name="Container">
                            <div className="h-[18.203px] relative shrink-0 w-[60.037px]" data-node-id="2011:5508" data-name="Heading 3">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[17.065px] left-0 not-italic text-[#1e293b] text-[11.42px] top-[-0.38px] whitespace-nowrap" data-node-id="2011:5509">
                                  Conclusion
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[12.135px] items-start relative shrink-0 w-[737.982px]" data-node-id="2011:5510" data-name="Container">
                            <div className="bg-[#fef2f2] border-[#fb2c36] border-l-[3.034px] border-solid content-stretch flex flex-col h-[61.151px] items-start pl-[15.169px] pr-[12.135px] pt-[12.135px] relative rounded-br-[3.045px] rounded-tr-[3.045px] shrink-0 w-full" data-node-id="2011:5511" data-name="Container">
                              <div className="h-[36.88px] relative shrink-0 w-full" data-node-id="2011:5512" data-name="Container">
                                <div className="absolute bg-[#fb2c36] content-stretch flex items-center justify-center left-0 rounded-[12724841px] size-[15.169px] top-[1.52px]" data-node-id="2011:5513" data-name="Container">
                                  <div className="relative shrink-0 size-[9.102px]" data-node-id="2011:5514" data-name="Icon">
                                    <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon26} />
                                  </div>
                                </div>
                                <div className="absolute content-stretch flex flex-col gap-[4.551px] h-[36.88px] items-start left-[24.27px] top-0 w-[686.407px]" data-node-id="2011:5518" data-name="Container">
                                  <div className="h-[14.79px] relative shrink-0 w-full" data-node-id="2011:5519" data-name="Paragraph">
                                    <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[14.79px] left-0 not-italic text-[#82181a] text-[9.898px] top-0 whitespace-nowrap" data-node-id="2011:5520">
                                      Root Cause
                                    </p>
                                  </div>
                                  <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="2011:5521" data-name="Paragraph">
                                    <p className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] leading-[17.255px] not-italic relative shrink-0 text-[#9f0712] text-[10.659px] whitespace-nowrap" data-node-id="2011:5522">
                                      File permission issue with the Erlang cookie file (
                                    </p>
                                    <div className="bg-[#ffe2e2] content-stretch flex h-[14.411px] items-start px-[4.551px] py-[1.517px] relative rounded-[3.034px] shrink-0 w-[198.444px]" data-node-id="2011:5523" data-name="Text">
                                      <p className="[word-break:break-word] font-['Courier_New:Regular'] leading-[16.022px] not-italic relative shrink-0 text-[#9f0712] text-[9.86px] whitespace-nowrap" data-node-id="2011:5524">
                                        /var/lib/rabbitmq/.erlang.cookie
                                      </p>
                                    </div>
                                    <p className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] leading-[17.255px] not-italic relative shrink-0 text-[#9f0712] text-[10.659px] whitespace-nowrap" data-node-id="2011:5525">
                                      ) preventing RabbitMQ from starting
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-[#eff6ff] border-[#2b7fff] border-l-[3.034px] border-solid content-stretch flex flex-col h-[129.886px] items-start pl-[15.169px] pr-[12.135px] pt-[12.135px] relative rounded-br-[3.045px] rounded-tr-[3.045px] shrink-0 w-full" data-node-id="2011:5526" data-name="Container">
                              <div className="h-[105.616px] relative shrink-0 w-full" data-node-id="2011:5527" data-name="Container">
                                <div className="absolute bg-[#2b7fff] content-stretch flex items-center justify-center left-0 rounded-[12724841px] size-[15.169px] top-[1.52px]" data-node-id="2011:5528" data-name="Container">
                                  <div className="relative shrink-0 size-[9.102px]" data-node-id="2011:5529" data-name="Icon">
                                    <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon27} />
                                  </div>
                                </div>
                                <div className="absolute content-stretch flex flex-col gap-[4.551px] h-[105.616px] items-start left-[24.27px] top-0 w-[686.407px]" data-node-id="2011:5533" data-name="Container">
                                  <div className="h-[14.79px] relative shrink-0 w-full" data-node-id="2011:5534" data-name="Paragraph">
                                    <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[14.79px] left-0 not-italic text-[#1c398e] text-[9.898px] top-0 whitespace-nowrap" data-node-id="2011:5535">
                                      Analysis
                                    </p>
                                  </div>
                                  <div className="h-[86.275px] relative shrink-0 w-full" data-node-id="2011:5536" data-name="Paragraph">
                                    <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[17.255px] left-0 not-italic text-[#193cb8] text-[10.659px] top-[0.38px] w-[673.513px]" data-node-id="2011:5537">
                                      The rabbitmq-0 container is experiencing repeated restart cycles due to a file permission error. The Erlang cookie file, which is critical for RabbitMQ authentication and clustering, has incorrect permissions that prevent the RabbitMQ process from accessing it during startup. Since resource utilization is normal (CPU and memory are not spiking), this is not a resource exhaustion issue. The application logs clearly show the startup failure is caused by the cookie file permission violation, which triggers the container to crash and restart. This cycle repeats, causing the restart counter to increment continuously.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-white h-[55.099px] left-0 top-0 w-[1045.357px]" data-node-id="2011:5538" data-name="Header">
                <div className="absolute bg-[rgba(255,255,255,0)] border-[#e2e8f0] border-b-[0.765px] border-solid h-[55.099px] left-0 shadow-[0px_0.765px_2.296px_0px_rgba(0,0,0,0.1)] top-0 w-[1040px]" data-node-id="2011:5539" data-name="Container" />
                <div className="absolute h-[54.334px] left-0 top-0 w-[1040px]" data-node-id="2011:5540" data-name="Container2">
                  <div className="absolute h-[30.611px] left-[870.11px] top-[11.86px] w-[149.993px]" data-node-id="2011:5542" data-name="Container1">
                    <div className="absolute left-0 rounded-[7.653px] size-[27.55px] top-[1.53px]" data-node-id="2011:5543" data-name="Button">
                      <div className="absolute left-[6.12px] overflow-clip size-[15.305px] top-[6.12px]" data-node-id="2011:5544" data-name="Icon">
                        <div className="absolute content-stretch flex flex-col items-start left-[9.99px] size-[4.036px] top-[9.99px]" data-node-id="2011:5545" data-name="Container">
                          <div className="h-[4.036px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5546" data-name="Icon">
                            <div className="absolute inset-[13.89%_25.83%_25.83%_13.9%]" data-node-id="2011:5547" data-name="Vector">
                              <div className="absolute inset-[-23.04%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector62} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col items-start left-[1.28px] size-[11.473px] top-[1.28px]" data-node-id="2011:5548" data-name="Container">
                          <div className="h-[11.473px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5549" data-name="Icon">
                            <div className="absolute inset-[5.56%_5.56%_5.55%_5.56%]" data-node-id="2011:5550" data-name="Vector">
                              <div className="absolute inset-[-6.25%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector63} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[79.59px] rounded-[7.653px] size-[27.55px] top-[1.53px]" data-node-id="2011:5551" data-name="Button1">
                      <div className="absolute left-[6.12px] overflow-clip size-[15.305px] top-[6.12px]" data-node-id="2011:5552" data-name="Icon1">
                        <div className="absolute content-stretch flex flex-col h-[14.002px] items-start left-[1.3px] top-[0.65px] w-[12.699px]" data-node-id="2011:5553" data-name="Container">
                          <div className="h-[14.002px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5554" data-name="Icon">
                            <div className="absolute inset-[4.39%_7.29%_8.05%_4.9%]" data-node-id="2011:5555" data-name="Vector">
                              <div className="absolute inset-[-5.04%_-5.55%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector64} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col items-start left-[5.11px] size-[5.094px] top-[5.11px]" data-node-id="2011:5556" data-name="Container">
                          <div className="h-[5.094px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5557" data-name="Icon">
                            <div className="absolute inset-[11.91%_16.66%_16.66%_11.91%]" data-node-id="2011:5558" data-name="Vector">
                              <div className="absolute inset-[-16.67%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector65} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-gradient-to-b from-[#4a9d76] left-[119.38px] rounded-[12839063px] size-[30.611px] to-[#3b8b63] top-0" data-node-id="2011:5559" data-name="Container">
                      <div className="absolute h-[18.366px] left-[7.75px] top-[6.12px] w-[15.108px]" data-node-id="2011:5560" data-name="Paragraph">
                        <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[18.366px] left-0 not-italic text-[12.244px] text-white top-[-0.77px] tracking-[-0.2391px] whitespace-nowrap" data-node-id="2011:5561">
                          SP
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-[39.79px] rounded-[7.653px] size-[27.55px] top-[1.53px]" data-node-id="2011:5562" data-name="Button2">
                      <div className="absolute content-stretch flex flex-col items-start left-[6.12px] size-[15.305px] top-[6.12px]" data-node-id="2011:5563" data-name="Icon2">
                        <div className="h-[15.305px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5564" data-name="Icon">
                          <div className="absolute contents inset-[8.34%_12.5%_8.33%_12.5%]" data-node-id="2011:5565" data-name="Icon">
                            <div className="absolute inset-[87.5%_42.78%_8.33%_42.78%]" data-node-id="2011:5566" data-name="Vector">
                              <div className="absolute inset-[-100.02%_-28.87%_-100%_-28.87%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector66} />
                              </div>
                            </div>
                            <div className="absolute inset-[8.34%_12.5%_29.16%_12.5%]" data-node-id="2011:5567" data-name="Vector_2">
                              <div className="absolute inset-[-6.67%_-5.56%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector67} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bg-[#fb2c36] left-[18.37px] rounded-[12839063px] size-[6.122px] top-[3.06px]" data-node-id="2011:5568" data-name="Text" />
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Bold'] leading-[0] left-[19.9px] not-italic text-[#1d293d] text-[0px] top-[13.77px] tracking-[1.4506px] whitespace-nowrap" data-node-id="2011:5569">
                  <span className="leading-[27.55px] text-[22.958px]">OR</span>
                  <span className="leading-[27.55px] text-[#4a9d76] text-[22.958px]">I</span>
                  <span className="leading-[27.55px] text-[22.958px]">AN CLOUDMAX</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="2011:5570">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="2011:5571">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="2011:5572">
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap" data-node-id="2011:5573">
                Decision Story 3
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-node-id="2011:5574">
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="2011:5575">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full" data-node-id="2011:5576">
                How do you show what the AI actually did?
              </p>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full" data-node-id="2011:5577">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full" data-node-id="2011:5578">
                  The challenge
                </p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full" data-node-id="2011:5579">{`Knowing the final answer isn't always enough. SREs need visibility into the agent's investigation process.`}</p>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="2011:5580">
                <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]" data-node-id="2011:5581">
                  The decision
                </p>
                <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[15px] text-black w-[min-content]" data-node-id="2011:5582">
                  <p className="leading-[24px] mb-0">I introduced a Triage Journey as a chronological timeline.</p>
                  <p className="leading-[24px] mb-0">Each step represents an action performed during the investigation.</p>
                  <p className="leading-[24px]">Users can go deeper through:</p>
                </div>
                <div className="content-stretch flex gap-[18px] items-center py-[8px] relative shrink-0" data-node-id="2011:5583">
                  <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2011:5584">
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap" data-node-id="2011:5585">
                      View Tool Execution Details
                    </p>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="2011:5586">
                    <div className="flex-none rotate-90">
                      <div className="relative size-[16px]" data-name="gravity-ui:arrow-up">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2011:5588">
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap" data-node-id="2011:5589">
                      Arguments
                    </p>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="2011:5590">
                    <div className="flex-none rotate-90">
                      <div className="relative size-[16px]" data-name="gravity-ui:arrow-up">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2011:5592">
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap" data-node-id="2011:5593">
                      Response
                    </p>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[15px] text-black w-[min-content]" data-node-id="2011:5594">
                  This allows the SRE to understand:
                </p>
                <div className="content-stretch flex gap-[18px] items-center py-[8px] relative shrink-0" data-node-id="2011:5595">
                  <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2011:5596">
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap" data-node-id="2011:5597">
                      What the agent did
                    </p>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="2011:5598">
                    <div className="flex-none rotate-90">
                      <div className="relative size-[16px]" data-name="gravity-ui:arrow-up">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2011:5600">
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap" data-node-id="2011:5601">
                      What it received
                    </p>
                  </div>
                  <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="2011:5602">
                    <div className="flex-none rotate-90">
                      <div className="relative size-[16px]" data-name="gravity-ui:arrow-up">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2011:5604">
                    <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap" data-node-id="2011:5605">
                      What it discovered
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f9fafc] blur-[7.045px] h-[840.004px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5606" data-name="Triage Journey Page">
              <div className="absolute content-stretch flex h-[840.004px] items-start left-0 pr-[-5.898px] top-0 w-[1145px]" data-node-id="2011:5607" data-name="App">
                <div className="bg-[#feffff] drop-shadow-[0px_1.676px_1.257px_rgba(0,0,0,0.1)] h-[840.004px] relative shrink-0 w-[215.688px]" data-node-id="2011:5608" data-name="Sidebar">
                  <div className="absolute bg-[rgba(255,255,255,0)] border-[#e2e8f0] border-r-[0.843px] border-solid h-[779.341px] left-0 top-[60.66px] w-[215.688px]" data-node-id="2011:5609" data-name="Container" />
                  <div className="absolute h-[485.298px] left-0 overflow-clip top-[70.77px] w-[214.845px]" data-node-id="2011:5610" data-name="Navigation">
                    <div className="absolute h-[13.481px] left-[23.59px] top-[7.58px] w-[34.873px]" data-node-id="2011:5611" data-name="Container44" />
                    <div className="absolute content-stretch flex flex-col gap-[3.353px] items-start left-[10.11px] top-[7.58px] w-[194.625px]" data-node-id="2011:5613" data-name="Container45">
                      <div className="h-[40.442px] relative rounded-[8.425px] shrink-0 w-full" data-node-id="2011:5614" data-name="NavItemComponent1">
                        <div className="absolute content-stretch flex flex-col items-start left-[13.48px] size-[16.851px] top-[11.8px]" data-node-id="2011:5615" data-name="Icon17">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 size-[16.851px]" data-node-id="2011:5616" data-name="Icon16">
                            <div className="h-[16.851px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5617" data-name="Icon">
                              <div className="absolute contents inset-[12.5%]" data-node-id="2011:5618" data-name="Icon">
                                <div className="absolute inset-[12.5%]" data-node-id="2011:5619" data-name="Vector">
                                  <div className="absolute inset-[-5.56%]">
                                    <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector68} />
                                  </div>
                                </div>
                                <div className="absolute bottom-[29.17%] left-3/4 right-1/4 top-[37.5%]" data-node-id="2011:5620" data-name="Vector_2">
                                  <div className="absolute inset-[-12.5%_-0.7px]">
                                    <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector69} />
                                  </div>
                                </div>
                                <div className="absolute inset-[20.83%_45.84%_29.16%_54.16%]" data-node-id="2011:5621" data-name="Vector_3">
                                  <div className="absolute inset-[-8.33%_-0.7px]">
                                    <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector70} />
                                  </div>
                                </div>
                                <div className="absolute inset-[58.34%_66.67%_29.16%_33.33%]" data-node-id="2011:5622" data-name="Vector_4">
                                  <div className="absolute inset-[-33.33%_-0.7px]">
                                    <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector71} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[20.221px] items-start left-[40.44px] pr-[49.453px] pt-[-0.421px] top-[10.11px] w-[85.333px]" data-node-id="2011:5623" data-name="Text2">
                          <div className="h-[20.221px] relative shrink-0 w-full" data-node-id="2011:5624" data-name="Paragraph">
                            <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[20.221px] left-0 not-italic text-[#45556c] text-[13.48px] top-[-0.84px] tracking-[-0.2633px] whitespace-nowrap" data-node-id="2011:5625">
                              Overview
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-between px-[13.411px] py-[10.059px] relative rounded-[8.425px] shrink-0 w-[194.625px]" data-node-id="2011:5626" style={{ filter: "drop-shadow(0px 3.37px 2.528px rgba(0,0,0,0.1)) drop-shadow(0px 1.685px 1.685px rgba(0,0,0,0.1))",  backgroundImage: "linear-gradient(90.12379547875429deg, rgb(74, 157, 118) 0%, rgb(59, 139, 99) 99.87%)" }} data-name="NavItemComponent">
                        <div className="content-stretch flex gap-[8.382px] items-center relative shrink-0" data-node-id="2011:5627">
                          <div className="overflow-clip relative shrink-0 size-[16.851px]" data-node-id="2011:5628" data-name="Icon">
                            <div className="absolute inset-[8.33%_12.5%]" data-node-id="2011:5629" data-name="Icon">
                              <div className="absolute inset-[-5.01%_-5.57%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgIcon28} />
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col h-[20.221px] items-start pr-[34.09px] pt-[-0.421px] relative shrink-0 w-[92.093px]" data-node-id="2011:5632" data-name="Text1">
                            <div className="h-[20.221px] relative shrink-0 w-full" data-node-id="2011:5633" data-name="Paragraph">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Bold'] leading-[20.221px] left-0 not-italic text-[13.411px] text-white top-[-0.84px] tracking-[-0.2633px] whitespace-nowrap" data-node-id="2011:5634">
                                Alerts
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 size-[7.544px]" data-node-id="2011:5635">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgEllipse9} />
                        </div>
                      </div>
                      <div className="h-[40.442px] relative rounded-[8.425px] shrink-0 w-full" data-node-id="2011:5636" data-name="NavItemComponent2">
                        <div className="absolute content-stretch flex flex-col items-start left-[13.48px] size-[16.851px] top-[11.8px]" data-node-id="2011:5637" data-name="Icon18">
                          <div className="h-[16.851px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5638" data-name="Icon">
                            <div className="absolute contents inset-[12.5%_8.34%_12.5%_8.33%]" data-node-id="2011:5639" data-name="Icon">
                              <div className="absolute inset-[29.16%_50.01%_12.5%_49.99%]" data-node-id="2011:5640" data-name="Vector">
                                <div className="absolute inset-[-5.71%_-0.56px]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector72} />
                                </div>
                              </div>
                              <div className="absolute inset-[12.5%_8.34%_12.5%_8.33%]" data-node-id="2011:5641" data-name="Vector_2">
                                <div className="absolute inset-[-5.57%_-5.01%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector73} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[20.221px] items-start left-[40.44px] pr-[47.768px] pt-[-0.421px] top-[10.11px] w-[108.838px]" data-node-id="2011:5642" data-name="Text3">
                          <div className="h-[20.221px] relative shrink-0 w-full" data-node-id="2011:5643" data-name="Paragraph">
                            <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[20.221px] left-0 not-italic text-[#45556c] text-[13.48px] top-[-0.84px] tracking-[-0.2633px] whitespace-nowrap" data-node-id="2011:5644">
                              Runbooks
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-[40.442px] relative rounded-[8.425px] shrink-0 w-full" data-node-id="2011:5645" data-name="NavItemComponent3">
                        <div className="absolute content-stretch flex flex-col items-start left-[13.48px] size-[16.851px] top-[11.8px]" data-node-id="2011:5646" data-name="Icon19">
                          <div className="h-[16.851px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5647" data-name="Icon">
                            <div className="absolute contents inset-[8.4%_12.68%_8.42%_12.68%]" data-node-id="2011:5648" data-name="Icon">
                              <div className="absolute inset-[8.4%_12.68%_8.42%_12.68%]" data-node-id="2011:5649" data-name="Vector">
                                <div className="absolute inset-[-5.01%_-5.58%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector74} />
                                </div>
                              </div>
                              <div className="absolute inset-[37.49%_37.5%_37.51%_37.5%]" data-node-id="2011:5650" data-name="Vector_2">
                                <div className="absolute inset-[-16.67%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector75} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[20.221px] items-start left-[40.44px] pr-[26.092px] pt-[-0.421px] top-[10.11px] w-[62.176px]" data-node-id="2011:5651" data-name="Text4">
                          <div className="h-[20.221px] relative shrink-0 w-full" data-node-id="2011:5652" data-name="Paragraph">
                            <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[20.221px] left-0 not-italic text-[#45556c] text-[13.48px] top-[-0.84px] tracking-[-0.2633px] whitespace-nowrap" data-node-id="2011:5653">
                              Setup
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-[40.442px] relative rounded-[8.425px] shrink-0 w-full" data-node-id="2011:5654" data-name="NavItemComponent4">
                        <div className="absolute content-stretch flex flex-col items-start left-[13.48px] size-[16.851px] top-[11.8px]" data-node-id="2011:5655" data-name="Icon20">
                          <div className="h-[16.851px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5656" data-name="Icon">
                            <div className="absolute contents inset-[12.51%_8.34%_12.5%_8.33%]" data-node-id="2011:5657" data-name="Icon">
                              <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-node-id="2011:5658" data-name="Vector">
                                <div className="absolute inset-[-16.67%_-7.14%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector76} />
                                </div>
                              </div>
                              <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-node-id="2011:5659" data-name="Vector_2">
                                <div className="absolute inset-[-12.92%_-33.37%_-12.92%_-33.38%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector77} />
                                </div>
                              </div>
                              <div className="absolute inset-[63.05%_8.34%_12.5%_79.16%]" data-node-id="2011:5660" data-name="Vector_3">
                                <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector78} />
                                </div>
                              </div>
                              <div className="absolute inset-[12.51%_45.83%_54.16%_20.83%]" data-node-id="2011:5661" data-name="Vector_4">
                                <div className="absolute inset-[-12.5%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector79} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[20.221px] items-start left-[40.44px] pr-[2.324px] pt-[-0.421px] top-[10.11px] w-[37.967px]" data-node-id="2011:5662" data-name="Text5">
                          <div className="h-[20.221px] relative shrink-0 w-full" data-node-id="2011:5663" data-name="Paragraph">
                            <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[20.221px] left-0 not-italic text-[#45556c] text-[13.48px] top-[-0.84px] tracking-[-0.2633px] whitespace-nowrap" data-node-id="2011:5664">
                              Users
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[30.331px] left-[22.31px] top-[20.22px] w-[170.211px]" data-node-id="2011:5665" data-name="Container47">
                    <div className="absolute h-[30.331px] left-0 top-0 w-[170.211px]" data-node-id="2011:5666" data-name="Heading8">
                      <div className="absolute content-stretch flex h-[30.331px] items-start left-0 top-0 w-[38.598px]" data-node-id="2011:5667" data-name="Text6">
                        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[25.276px] tracking-[1.597px] whitespace-nowrap" data-node-id="2011:5668">
                          <span className="font-['Mona_Sans:Bold'] font-bold leading-[30.331px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                            OR
                          </span>
                          <span className="font-['Mona_Sans:Bold'] font-bold leading-[30.331px] text-[#4a9d76]" style={{ fontVariationSettings: '"wdth" 100' }}>
                            I
                          </span>
                          <span className="font-['Mona_Sans:Bold'] font-bold leading-[30.331px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                            AN CLOUDMAX
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-[rgba(255,255,255,0.9)] left-[204.74px] rounded-[14135314px] size-[20.221px] top-[67.4px]" data-node-id="2011:5686" data-name="Button8">
                    <div className="absolute bg-[rgba(255,255,255,0)] border-[0.843px] border-[rgba(255,255,255,0.3)] border-solid left-0 rounded-[14135314px] shadow-[0px_3.37px_5.055px_0px_rgba(0,0,0,0.1),0px_1.685px_3.37px_0px_rgba(0,0,0,0.1)] size-[20.221px] top-0" data-node-id="2011:5687" data-name="Container" />
                    <div className="absolute content-stretch flex flex-col items-start left-[3.37px] size-[13.481px] top-[3.37px]" data-node-id="2011:5688" data-name="Icon22">
                      <div className="h-[13.481px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5689" data-name="Icon">
                        <div className="absolute bottom-1/4 contents left-[37.5%] right-[37.5%] top-1/4" data-node-id="2011:5690" data-name="Icon">
                          <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-node-id="2011:5691" data-name="Vector">
                            <div className="absolute inset-[-8.33%_-16.67%]">
                              <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector80} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col h-[839.89px] items-center pt-[60.662px] relative shrink-0 w-[929.579px]" data-node-id="2011:5692" data-name="Main Content">
                  <div className="content-stretch flex flex-col gap-[10.897px] items-end py-[15.926px] relative shrink-0" data-node-id="2011:5693" data-name="Container">
                    <div className="content-stretch flex h-[26.644px] items-center justify-between relative shrink-0 w-[884.705px]" data-node-id="2011:5694" data-name="Container">
                      <div className="h-[14.347px] relative shrink-0 w-[79.643px]" data-node-id="2011:5695" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.465px] items-center relative size-full">
                          <div className="relative shrink-0 size-[10.931px]" data-node-id="2011:5696" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon29} />
                          </div>
                          <div className="flex-[1_0_0] h-[14.347px] min-w-px relative" data-node-id="2011:5698" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[14.347px] left-0 not-italic text-[#45556c] text-[9.22px] top-0 whitespace-nowrap" data-node-id="2011:5699">
                                Back to Alerts
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#feffff] border-[#eff1f3] border-[0.838px] border-solid drop-shadow-[0px_3.353px_2.515px_rgba(0,0,0,0.1)] relative rounded-[6.706px] shrink-0" data-node-id="2011:5700" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8.382px] items-center justify-center px-[14.249px] py-[7.544px] relative size-full">
                          <div className="relative shrink-0 size-[10.931px]" data-node-id="2011:5701" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon30} />
                          </div>
                          <div className="h-[14.347px] relative shrink-0 w-[34.977px]" data-node-id="2011:5703" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[14.347px] left-0 not-italic text-[#64748b] text-[10.059px] top-0 whitespace-nowrap" data-node-id="2011:5704">
                                Refresh
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[884.705px]" data-node-id="2011:5705" data-name="Container">
                      <div className="relative shrink-0" data-node-id="2011:5706" data-name="Heading 1">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[2.515px] relative size-full">
                          <p className="[word-break:break-word] bg-clip-text font-['Segoe_Pro_Display:Bold'] leading-[30.331px] not-italic relative shrink-0 text-[25.146px] text-[transparent] tracking-[0.3332px] whitespace-nowrap" data-node-id="2011:5707" style={{ backgroundImage: "linear-gradient(87.78835642503222deg, rgb(31, 167, 82) 0.20215%, rgb(5, 150, 105) 99.732%)" }}>
                            API-High-Latency (copy)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-[#e5e7eb] border-b-[0.838px] border-solid content-stretch flex gap-[3.353px] h-[40.234px] items-start pb-[0.838px] relative shrink-0 w-[884.316px]" data-node-id="2011:5714" data-name="Container">
                      <div className="h-[39.396px] relative shrink-0 w-[139.87px]" data-node-id="2011:5715" data-name="TabButton">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.706px] items-center px-[13.411px] relative size-full">
                          <div className="relative shrink-0 size-[13.411px]" data-node-id="2011:5716" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon31} />
                          </div>
                          <div className="flex-[1_0_0] h-[17.602px] min-w-px relative" data-node-id="2011:5720" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[17.602px] left-0 not-italic text-[#64748b] text-[11.735px] top-0 whitespace-nowrap" data-node-id="2011:5721">
                                Alert Information
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[39.396px] relative shrink-0 w-[110.887px]" data-node-id="2011:5722" data-name="TabButton">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.706px] items-center px-[13.411px] relative size-full">
                          <div className="relative shrink-0 size-[13.411px]" data-node-id="2011:5723" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon32} />
                          </div>
                          <div className="flex-[1_0_0] h-[17.602px] min-w-px relative" data-node-id="2011:5725" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[17.602px] left-0 not-italic text-[#64748b] text-[11.735px] top-0 whitespace-nowrap" data-node-id="2011:5726">
                                Root Cause
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-[#18a25a] border-b-[1.676px] border-solid h-[39.396px] relative shrink-0 w-[129.452px]" data-node-id="2011:5727" data-name="TabButton">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.706px] items-center pb-[1.676px] px-[13.411px] relative size-full">
                          <div className="relative shrink-0 size-[13.411px]" data-node-id="2011:5728" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon33} />
                          </div>
                          <div className="flex-[1_0_0] h-[17.602px] min-w-px relative" data-node-id="2011:5734" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[17.602px] left-0 not-italic text-[#18a25a] text-[11.735px] top-0 whitespace-nowrap" data-node-id="2011:5735">
                                Triage Journey
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-[rgba(0,0,0,0)] border-b-[1.676px] border-solid h-[39.396px] relative shrink-0 w-[145.207px]" data-node-id="2011:5736" data-name="TabButton">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.706px] items-center pb-[1.676px] px-[13.411px] relative size-full">
                          <div className="relative shrink-0 size-[13.411px]" data-node-id="2011:5737" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon34} />
                          </div>
                          <div className="flex-[1_0_0] h-[17.602px] min-w-px relative" data-node-id="2011:5741" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[17.602px] left-0 not-italic text-[#64748b] text-[11.735px] top-0 whitespace-nowrap" data-node-id="2011:5742">
                                Evaluation Details
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[20.117px] h-[606.867px] items-start overflow-x-clip overflow-y-auto relative shrink-0 w-[858.331px]" data-node-id="2011:5743" data-name="TriageJourney">
                    <p className="[word-break:break-word] font-['Segoe_Pro_Display:Bold'] leading-[25.051px] not-italic relative shrink-0 text-[#1e293b] text-[15.088px] whitespace-nowrap" data-node-id="2011:5744">
                      Triage Journey
                    </p>
                    <div className="h-[817.258px] relative shrink-0 w-full" data-node-id="2011:5745" data-name="Container">
                      <div className="absolute bg-gradient-to-b from-[#4a9d76] h-[1258.997px] left-[20.27px] opacity-20 to-[#2d6b4f] top-[0.71px] via-1/2 via-[#3b8b63] w-[1.676px]" data-node-id="2011:5746" data-name="Container" />
                      <div className="absolute content-stretch flex flex-col gap-[16.764px] items-start left-0 top-0 w-[858.331px]" data-node-id="2011:5747">
                        <div className="content-stretch flex gap-[11.735px] items-start px-[12.573px] relative shrink-0 w-full" data-node-id="2011:5748" data-name="Container">
                          <div className="content-stretch flex items-center py-[13.411px] relative shrink-0" data-node-id="2011:5749">
                            <div className="bg-[#4a9d76] border-[1.676px] border-solid border-white relative rounded-[14062880px] shrink-0 size-[16.764px]" data-node-id="2011:5750" data-name="Container" />
                          </div>
                          <div className="bg-white border-[#f4f4f4] border-[0.838px] border-solid content-stretch flex flex-col items-center overflow-clip px-[8.382px] py-[20.955px] relative rounded-[3.353px] shadow-[0px_3.353px_5.029px_0px_rgba(0,0,0,0.1)] shrink-0 w-[804.685px]" data-node-id="2011:5751" data-name="Container">
                            <div className="content-stretch flex flex-col items-start pb-[0.838px] px-[13.411px] relative shrink-0 w-full" data-node-id="2011:5752" data-name="Container">
                              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="2011:5753" data-name="Container">
                                <p className="[word-break:break-word] font-['Segoe_Pro_Display:Bold'] leading-[20.117px] not-italic relative shrink-0 text-[#1e293b] text-[12.573px] tracking-[-0.2619px] whitespace-nowrap" data-node-id="2011:5754">
                                  Alert_Triage_Orchestrator
                                </p>
                                <div className="h-[13.411px] relative shrink-0 w-[130.27px]" data-node-id="2011:5755" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.706px] items-center relative size-full">
                                    <div className="relative shrink-0 size-[11.735px]" data-node-id="2011:5756" data-name="Icon">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon35} />
                                    </div>
                                    <div className="flex-[1_0_0] h-[13.411px] min-w-px relative" data-node-id="2011:5759" data-name="Text">
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                        <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[13.411px] left-0 not-italic text-[#64748b] text-[10.059px] top-[0.84px] whitespace-nowrap" data-node-id="2011:5760">
                                          17/11/2025, 6:54:35 AM
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[10.059px] items-center pt-[10.059px] relative shrink-0 w-full" data-node-id="2011:5761">
                              <div className="content-stretch flex gap-[6.706px] items-start relative shrink-0" data-node-id="2011:5762" data-name="Container">
                                <div className="bg-white content-stretch flex items-start relative shrink-0" data-node-id="2011:5763">
                                  <div className="relative shrink-0 size-[18.441px]" data-node-id="2011:5764" data-name="Icon">
                                    <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon36} />
                                  </div>
                                </div>
                                <p className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] leading-[17.707px] not-italic relative shrink-0 text-[#475569] text-[10.897px] w-[720.026px]" data-node-id="2011:5769">{`I'll investigate this pod container restart alert for the RabbitMQ container in the hotel-reservation namespace. Let me start by consulting the knowledge base for diagnostic procedures for container restarts.`}</p>
                              </div>
                              <div className="content-stretch flex flex-col items-start px-[50.293px] relative shrink-0 w-full" data-node-id="2011:5770">
                                <div className="content-stretch flex gap-[6.706px] h-[25.146px] items-center relative shrink-0 w-[709.129px]" data-node-id="2011:5771" data-name="Container">
                                  <div className="bg-[#43956e] h-[25.146px] relative rounded-[3.353px] shrink-0" data-node-id="2011:5772" data-name="Button">
                                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.465px] items-center px-[10.931px] relative size-full">
                                      <p className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] leading-[14.347px] not-italic relative shrink-0 text-[9.564px] text-white whitespace-nowrap" data-node-id="2011:5775">
                                        View tool execution details
                                      </p>
                                    </div>
                                  </div>
                                  <p className="[word-break:break-word] font-['Segoe_Pro_Display:Semibold'] leading-[20.117px] not-italic relative shrink-0 text-[#1e293b] text-[11.735px] tracking-[-0.2619px] whitespace-nowrap" data-node-id="2011:5776">
                                    Tool used:
                                  </p>
                                  <p className="[word-break:break-word] font-['Courier_New:Regular'] leading-[20.117px] not-italic relative shrink-0 text-[#1e293b] text-[11.735px] tracking-[-0.2619px] whitespace-nowrap" data-node-id="2011:5777">
                                    search_in_knowledge_base
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[11.735px] items-start px-[12.573px] relative shrink-0 w-full" data-node-id="2011:5778" data-name="Container">
                          <div className="content-stretch flex items-center py-[13.411px] relative shrink-0" data-node-id="2011:5779">
                            <div className="bg-[#4a9d76] border-[1.676px] border-solid border-white relative rounded-[14062880px] shrink-0 size-[16.764px]" data-node-id="2011:5780" data-name="Container" />
                          </div>
                          <div className="bg-white border-[#f4f4f4] border-[0.838px] border-solid content-stretch flex flex-col items-center overflow-clip px-[8.382px] py-[20.955px] relative rounded-[3.353px] shadow-[0px_3.353px_5.029px_0px_rgba(0,0,0,0.1)] shrink-0 w-[804.685px]" data-node-id="2011:5781" data-name="Container">
                            <div className="content-stretch flex flex-col items-start pb-[0.838px] px-[13.411px] relative shrink-0 w-full" data-node-id="2011:5782" data-name="Container">
                              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="2011:5783" data-name="Container">
                                <p className="[word-break:break-word] font-['Segoe_Pro_Display:Bold'] leading-[20.117px] not-italic relative shrink-0 text-[#1e293b] text-[12.573px] tracking-[-0.2619px] whitespace-nowrap" data-node-id="2011:5784">
                                  Alert_Triage_Orchestrator
                                </p>
                                <div className="h-[13.411px] relative shrink-0 w-[130.27px]" data-node-id="2011:5785" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.706px] items-center relative size-full">
                                    <div className="relative shrink-0 size-[11.735px]" data-node-id="2011:5786" data-name="Icon">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon37} />
                                    </div>
                                    <div className="flex-[1_0_0] h-[13.411px] min-w-px relative" data-node-id="2011:5789" data-name="Text">
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                        <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[13.411px] left-0 not-italic text-[#64748b] text-[10.059px] top-[0.84px] whitespace-nowrap" data-node-id="2011:5790">
                                          17/11/2025, 6:59:20 AM
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[10.059px] items-center pt-[10.059px] relative shrink-0 w-full" data-node-id="2011:5791">
                              <div className="content-stretch flex gap-[6.706px] items-start relative shrink-0" data-node-id="2011:5792" data-name="Container">
                                <div className="bg-white content-stretch flex items-start relative shrink-0" data-node-id="2011:5793">
                                  <div className="relative shrink-0 size-[18.441px]" data-node-id="2011:5794" data-name="Icon">
                                    <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon38} />
                                  </div>
                                </div>
                                <p className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] leading-[17.707px] not-italic relative shrink-0 text-[#475569] text-[10.897px] w-[720.026px]" data-node-id="2011:5799">{`Good, I have the diagnostic procedure. Now let me follow Step 1 and check resource utilization metrics for the RabbitMQ pod. I'll handoff to the Kubernetes diagnostics agent to collect this data.`}</p>
                              </div>
                              <div className="content-stretch flex flex-col items-start px-[50.293px] relative shrink-0 w-full" data-node-id="2011:5800">
                                <div className="content-stretch flex gap-[6.706px] h-[25.146px] items-center relative shrink-0 w-[709.129px]" data-node-id="2011:5801" data-name="Container">
                                  <div className="bg-[#43956e] h-[25.146px] relative rounded-[3.353px] shrink-0" data-node-id="2011:5802" data-name="Button">
                                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.465px] items-center px-[10.931px] relative size-full">
                                      <p className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] leading-[14.347px] not-italic relative shrink-0 text-[9.564px] text-white whitespace-nowrap" data-node-id="2011:5805">
                                        View tool execution details
                                      </p>
                                    </div>
                                  </div>
                                  <p className="[word-break:break-word] font-['Segoe_Pro_Display:Semibold'] leading-[20.117px] not-italic relative shrink-0 text-[#1e293b] text-[11.735px] tracking-[-0.2619px] whitespace-nowrap" data-node-id="2011:5806">
                                    Tool used:
                                  </p>
                                  <p className="[word-break:break-word] font-['Courier_New:Regular'] leading-[20.117px] not-italic relative shrink-0 text-[#1e293b] text-[11.735px] tracking-[-0.2619px] whitespace-nowrap" data-node-id="2011:5807">
                                    search_in_knowledge_base
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[11.735px] items-start px-[12.573px] relative shrink-0 w-full" data-node-id="2011:5808" data-name="Container">
                          <div className="content-stretch flex items-center py-[13.411px] relative shrink-0" data-node-id="2011:5809">
                            <div className="bg-[#4a9d76] border-[1.676px] border-solid border-white relative rounded-[14062880px] shrink-0 size-[16.764px]" data-node-id="2011:5810" data-name="Container" />
                          </div>
                          <div className="bg-white border-[#f4f4f4] border-[0.838px] border-solid content-stretch flex flex-col items-center overflow-clip px-[8.382px] py-[20.955px] relative rounded-[3.353px] shadow-[0px_3.353px_5.029px_0px_rgba(0,0,0,0.1)] shrink-0 w-[804.685px]" data-node-id="2011:5811" data-name="Container">
                            <div className="content-stretch flex flex-col items-start pb-[0.838px] px-[13.411px] relative shrink-0 w-full" data-node-id="2011:5812" data-name="Container">
                              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="2011:5813" data-name="Container">
                                <p className="[word-break:break-word] font-['Segoe_Pro_Display:Bold'] leading-[20.117px] not-italic relative shrink-0 text-[#1e293b] text-[12.573px] tracking-[-0.2619px] whitespace-nowrap" data-node-id="2011:5814">
                                  Kubernetes_Diagnostics_Agent
                                </p>
                                <div className="h-[13.411px] relative shrink-0 w-[130.27px]" data-node-id="2011:5815" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.706px] items-center relative size-full">
                                    <div className="relative shrink-0 size-[11.735px]" data-node-id="2011:5816" data-name="Icon">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon39} />
                                    </div>
                                    <div className="flex-[1_0_0] h-[13.411px] min-w-px relative" data-node-id="2011:5819" data-name="Text">
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                        <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[13.411px] left-0 not-italic text-[#64748b] text-[10.059px] top-[0.84px] whitespace-nowrap" data-node-id="2011:5820">
                                          17/11/2025, 7:10:34 AM
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[10.059px] items-center pt-[10.059px] relative shrink-0 w-full" data-node-id="2011:5821">
                              <div className="content-stretch flex gap-[6.706px] items-start relative shrink-0" data-node-id="2011:5822" data-name="Container">
                                <div className="bg-white content-stretch flex items-start relative shrink-0" data-node-id="2011:5823">
                                  <div className="relative shrink-0 size-[18.441px]" data-node-id="2011:5824" data-name="Icon">
                                    <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon40} />
                                  </div>
                                </div>
                                <p className="[word-break:break-word] font-['Mona_Sans:Regular'] font-normal leading-[17.707px] relative shrink-0 text-[#4b5563] text-[10.897px] w-[720.026px]" data-node-id="2011:5829" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  Let me search for the Kubernetes dashboards to examine resource utilization metrics directly.
                                </p>
                              </div>
                              <div className="content-stretch flex flex-col gap-[8.382px] items-start px-[50.293px] relative shrink-0 w-full" data-node-id="2011:5830">
                                <div className="content-stretch flex gap-[6.706px] h-[25.146px] items-center relative shrink-0 w-[709.129px]" data-node-id="2011:5831" data-name="Container">
                                  <div className="bg-[#43956e] h-[25.146px] relative rounded-[3.353px] shrink-0" data-node-id="2011:5832" data-name="Button">
                                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.465px] items-center px-[10.931px] relative size-full">
                                      <p className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] leading-[14.347px] not-italic relative shrink-0 text-[9.564px] text-white whitespace-nowrap" data-node-id="2011:5835">
                                        View tool execution details
                                      </p>
                                    </div>
                                  </div>
                                  <p className="[word-break:break-word] font-['Segoe_Pro_Display:Semibold'] leading-[20.117px] not-italic relative shrink-0 text-[#1e293b] text-[11.735px] tracking-[-0.2619px] whitespace-nowrap" data-node-id="2011:5836">
                                    Tool used:
                                  </p>
                                  <p className="[word-break:break-word] font-['Courier_New:Regular'] leading-[20.117px] not-italic relative shrink-0 text-[#1e293b] text-[11.735px] tracking-[-0.2619px] whitespace-nowrap" data-node-id="2011:5837">
                                    search_in_knowledge_base
                                  </p>
                                </div>
                                <div className="content-stretch flex gap-[6.706px] h-[25.146px] items-center relative shrink-0 w-[709.129px]" data-node-id="2011:5838" data-name="Container">
                                  <div className="bg-[#43956e] h-[25.146px] relative rounded-[3.353px] shrink-0" data-node-id="2011:5839" data-name="Button">
                                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.465px] items-center px-[10.931px] relative size-full">
                                      <p className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] leading-[14.347px] not-italic relative shrink-0 text-[9.564px] text-white whitespace-nowrap" data-node-id="2011:5842">
                                        View tool execution details
                                      </p>
                                    </div>
                                  </div>
                                  <p className="[word-break:break-word] font-['Segoe_Pro_Display:Semibold'] leading-[20.117px] not-italic relative shrink-0 text-[#1e293b] text-[11.735px] tracking-[-0.2619px] whitespace-nowrap" data-node-id="2011:5843">
                                    Tool used:
                                  </p>
                                  <p className="[word-break:break-word] font-['Courier_New:Regular'] leading-[20.117px] not-italic relative shrink-0 text-[#1e293b] text-[11.735px] tracking-[-0.2619px] whitespace-nowrap" data-node-id="2011:5844">
                                    search_in_knowledge_base
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[11.735px] items-start px-[12.573px] relative shrink-0 w-full" data-node-id="2011:5845" data-name="Container">
                          <div className="content-stretch flex items-center py-[13.411px] relative shrink-0" data-node-id="2011:5846">
                            <div className="bg-[#4a9d76] border-[1.676px] border-solid border-white relative rounded-[14062880px] shrink-0 size-[16.764px]" data-node-id="2011:5847" data-name="Container" />
                          </div>
                          <div className="bg-white border-[#f4f4f4] border-[0.838px] border-solid content-stretch flex flex-col items-center overflow-clip px-[8.382px] py-[20.955px] relative rounded-[3.353px] shadow-[0px_3.353px_5.029px_0px_rgba(0,0,0,0.1)] shrink-0 w-[804.685px]" data-node-id="2011:5848" data-name="Container">
                            <div className="content-stretch flex flex-col items-start pb-[0.838px] px-[13.411px] relative shrink-0 w-full" data-node-id="2011:5849" data-name="Container">
                              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="2011:5850" data-name="Container">
                                <p className="[word-break:break-word] font-['Segoe_Pro_Display:Bold'] leading-[20.117px] not-italic relative shrink-0 text-[#1e293b] text-[12.573px] tracking-[-0.2619px] whitespace-nowrap" data-node-id="2011:5851">
                                  Kubernetes_Diagnostics_Agent
                                </p>
                                <div className="h-[13.411px] relative shrink-0 w-[130.27px]" data-node-id="2011:5852" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.706px] items-center relative size-full">
                                    <div className="relative shrink-0 size-[11.735px]" data-node-id="2011:5853" data-name="Icon">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon41} />
                                    </div>
                                    <div className="flex-[1_0_0] h-[13.411px] min-w-px relative" data-node-id="2011:5856" data-name="Text">
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                        <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[13.411px] left-0 not-italic text-[#64748b] text-[10.059px] top-[0.84px] whitespace-nowrap" data-node-id="2011:5857">
                                          17/11/2025, 7:25:29 AM
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col gap-[10.059px] items-center pt-[10.059px] relative shrink-0 w-full" data-node-id="2011:5858">
                              <div className="content-stretch flex gap-[6.706px] items-start relative shrink-0" data-node-id="2011:5859" data-name="Container">
                                <div className="bg-white content-stretch flex items-start relative shrink-0" data-node-id="2011:5860">
                                  <div className="relative shrink-0 size-[18.441px]" data-node-id="2011:5861" data-name="Icon">
                                    <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon42} />
                                  </div>
                                </div>
                                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8.382px] items-center justify-center not-italic relative shrink-0 text-[#4b5563]" data-node-id="2011:5866">
                                  <p className="font-['Segoe_Pro_Display:Regular'] leading-[17.707px] relative shrink-0 text-[10.897px] w-[720.026px]" data-node-id="2011:5867">
                                    Thought: Excellent! I now have CPU and memory data. Let me analyze:
                                  </p>
                                  <p className="font-['Mona_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[0px] w-[720.026px] whitespace-pre-wrap" data-node-id="2011:5868" style={{ fontVariationSettings: '"wdth" 100' }}>
                                    <span className="font-['Segoe_Pro_Display:Semibold'] leading-[17.707px] text-[#1e293b] text-[10.059px]">CPU Usage:</span>
                                    <span className="font-['Segoe_Pro_Display:Semibold'] leading-[17.707px] text-[10.059px]">{`  `}</span>
                                    <span className="font-['Segoe_Pro_Display:Regular'] leading-[17.707px] text-[10.897px]">The pod CPU usage is very low (~0.005 cores), with some zero values at timestamps 1763442112, 1763442712, and 1763443012. This is not a resource spike.</span>
                                  </p>
                                  <p className="font-['Mona_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[0px] w-[720.026px] whitespace-pre-wrap" data-node-id="2011:5869" style={{ fontVariationSettings: '"wdth" 100' }}>
                                    <span className="font-['Segoe_Pro_Display:Semibold'] leading-[17.707px] text-[#1e293b] text-[10.059px]">Memory Usage:</span>
                                    <span className="font-['Segoe_Pro_Display:Regular'] leading-[17.707px] text-[#1e293b] text-[10.897px]">{` `}</span>
                                    <span className="font-['Segoe_Pro_Display:Regular'] leading-[17.707px] text-[10.897px]">{` The pod memory usage is consistently around 3.3 MB with occasional spikes to ~5.2 MB at timestamps 1763442412 and 1763443072. This is also very low and not a resource exhaustion issue.`}</span>
                                  </p>
                                  <p className="font-['Mona_Sans:Regular'] font-normal leading-[0] relative shrink-0 text-[0px] w-[720.026px] whitespace-pre-wrap" data-node-id="2011:5870" style={{ fontVariationSettings: '"wdth" 100' }}>
                                    <span className="font-['Segoe_Pro_Display:Semibold'] leading-[17.707px] text-[#1e293b] text-[10.059px]">Restart Count:</span>
                                    <span className="font-['Segoe_Pro_Display:Regular'] leading-[17.707px] text-[10.897px]">{`  Increased from 979 to 985 (6 restarts) during the 30-minute window.`}</span>
                                  </p>
                                  <p className="font-['Segoe_Pro_Display:Regular'] leading-[17.707px] relative shrink-0 text-[10.897px] w-[720.026px]" data-node-id="2011:5871">{`Since there's no resource spike detected, I should proceed to Step 3 of the diagnostic procedure: Analyze application logs. Let me check Loki for error logs from the rabbitmq container.`}</p>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-col items-start px-[50.293px] relative shrink-0 w-full" data-node-id="2011:5872">
                                <div className="content-stretch flex gap-[6.706px] h-[25.146px] items-center relative shrink-0 w-[709.129px]" data-node-id="2011:5873" data-name="Container">
                                  <div className="bg-[#43956e] h-[25.146px] relative rounded-[3.353px] shrink-0" data-node-id="2011:5874" data-name="Button">
                                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5.465px] items-center px-[10.931px] relative size-full">
                                      <p className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] leading-[14.347px] not-italic relative shrink-0 text-[9.564px] text-white whitespace-nowrap" data-node-id="2011:5877">
                                        View tool execution details
                                      </p>
                                    </div>
                                  </div>
                                  <p className="[word-break:break-word] font-['Segoe_Pro_Display:Semibold'] leading-[20.117px] not-italic relative shrink-0 text-[#1e293b] text-[11.735px] tracking-[-0.2619px] whitespace-nowrap" data-node-id="2011:5878">
                                    Tool used:
                                  </p>
                                  <p className="[word-break:break-word] font-['Courier_New:Regular'] leading-[20.117px] not-italic relative shrink-0 text-[#1e293b] text-[11.735px] tracking-[-0.2619px] whitespace-nowrap" data-node-id="2011:5879">
                                    search_in_knowledge_base
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[11.735px] items-start px-[12.573px] relative shrink-0 w-full" data-node-id="2011:5880" data-name="Container">
                          <div className="content-stretch flex items-center py-[13.411px] relative shrink-0" data-node-id="2011:5881">
                            <div className="bg-[#4a9d76] border-[1.676px] border-solid border-white relative rounded-[14062880px] shrink-0 size-[16.764px]" data-node-id="2011:5882" data-name="Container" />
                          </div>
                          <div className="bg-white border-[#f4f4f4] border-[0.838px] border-solid content-stretch flex flex-col items-center overflow-clip px-[8.382px] py-[20.955px] relative rounded-[3.353px] shadow-[0px_3.353px_5.029px_0px_rgba(0,0,0,0.1)] shrink-0 w-[804.685px]" data-node-id="2011:5883" data-name="Container">
                            <div className="content-stretch flex flex-col items-start pb-[0.838px] px-[13.411px] relative shrink-0 w-full" data-node-id="2011:5884" data-name="Container">
                              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="2011:5885" data-name="Container">
                                <p className="[word-break:break-word] font-['Segoe_Pro_Display:Bold'] leading-[20.117px] not-italic relative shrink-0 text-[#1e293b] text-[12.573px] tracking-[-0.2619px] whitespace-nowrap" data-node-id="2011:5886">
                                  Alert_Triage_Orchestrator
                                </p>
                                <div className="h-[13.411px] relative shrink-0 w-[130.27px]" data-node-id="2011:5887" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.706px] items-center relative size-full">
                                    <div className="relative shrink-0 size-[11.735px]" data-node-id="2011:5888" data-name="Icon">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon43} />
                                    </div>
                                    <div className="flex-[1_0_0] h-[13.411px] min-w-px relative" data-node-id="2011:5891" data-name="Text">
                                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                        <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[13.411px] left-0 not-italic text-[#64748b] text-[10.059px] top-[0.84px] whitespace-nowrap" data-node-id="2011:5892">
                                          17/11/2025, 6:54:35 AM
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-center pt-[10.059px] relative shrink-0 w-full" data-node-id="2011:5893">
                              <div className="content-stretch flex gap-[6.706px] items-start relative shrink-0" data-node-id="2011:5894" data-name="Container">
                                <div className="bg-white content-stretch flex items-start relative shrink-0" data-node-id="2011:5895">
                                  <div className="relative shrink-0 size-[18.441px]" data-node-id="2011:5896" data-name="Icon">
                                    <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon44} />
                                  </div>
                                </div>
                                <div className="[word-break:break-word] content-stretch flex flex-col gap-[8.382px] items-center justify-center relative shrink-0 text-[#1e293b]" data-node-id="2011:5901">
                                  <p className="font-['Segoe_Pro_Display:Semibold'] leading-[17.707px] not-italic relative shrink-0 text-[11.735px] w-[720.026px]" data-node-id="2011:5902">
                                    Alert Investigation Summary
                                  </p>
                                  <div className="font-['Mona_Sans:SemiBold'] font-semibold leading-[0] relative shrink-0 text-[0px] w-[720.026px]" data-node-id="2011:5903" style={{ fontVariationSettings: '"wdth" 100' }}>
                                    <p className="font-['Segoe_Pro_Display:Semibold'] leading-[18.788px] mb-0 not-italic text-[11.735px] whitespace-pre-wrap">Facts Collected</p>
                                    <p className="font-['Segoe_Pro_Display:Semibold'] mb-0 not-italic whitespace-pre-wrap">
                                      <span className="leading-[18.788px] text-[11.735px]">
                                        Kubernetes Pod (rabbitmq-0)
                                        <br aria-hidden />
                                      </span>
                                      <span className="leading-[18.788px] text-[10.897px]">{`   Findings`}</span>
                                    </p>
                                    <ul className="list-disc mb-0">
                                      <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                                        <span className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] leading-[18.788px] not-italic text-[10.059px]">Pod container restart count increased from 997 to 1000 (3 restarts) during the 15-minute alert window (2025-11-18T06:28:11Z to 2025-11-18T06:43:11Z), with the jump occurring at 06:41:11Z</span>
                                      </li>
                                      <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                                        <span className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] leading-[18.788px] not-italic text-[10.059px]">CPU utilization remained very low (peak 0.049 CPU) and memory usage stable at ~3.3-3.4 MB during alert window - no resource exhaustion detected</span>
                                      </li>
                                    </ul>
                                    <p className="font-['Segoe_Pro_Display:Semibold'] mb-0 not-italic whitespace-pre-wrap">
                                      <span className="leading-[18.788px] text-[11.735px]">
                                        Application Layer (RabbitMQ)
                                        <br aria-hidden />
                                        {`   `}
                                      </span>
                                      <span className="leading-[18.788px] text-[10.897px]">Findings</span>
                                    </p>
                                    <ul className="list-disc mb-0">
                                      <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                                        <span className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] leading-[18.788px] not-italic text-[11.735px]">{`Application logs show RabbitMQ container failing to start with error: "Cookie file /var/lib/rabbitmq/.erlang.cookie must be accessible by owner only" during prelaunch initialization phase`}</span>
                                      </li>
                                      <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                                        <span className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] leading-[18.788px] not-italic text-[11.735px]">Error occurs consistently during each restart attempt at the same initialization point (timestamps 2025-11-18T06:40:25.487Z to 2025-11-18T06:40:28.012Z)</span>
                                      </li>
                                      <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                                        <span className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] leading-[18.788px] not-italic text-[11.735px]">Crash dump initiated at 06:40:28.012Z, indicating container termination after failed startup</span>
                                      </li>
                                    </ul>
                                    <p className="font-['Segoe_Pro_Display:Semibold'] leading-[18.788px] mb-0 not-italic text-[11.735px] whitespace-pre-wrap">Conclusion</p>
                                    <p className="mb-0 not-italic whitespace-pre-wrap">
                                      <span className="font-['Segoe_Pro_Display:Semibold'] leading-[18.788px] text-[10.897px]">Root Cause:</span>
                                      <span className="font-['Segoe_Pro_Display:Regular'] leading-[18.788px] text-[11.735px]">{` File permission error on the RabbitMQ Erlang cookie file (/var/lib/rabbitmq/.erlang.cookie)`}</span>
                                    </p>
                                    <p className="not-italic whitespace-pre-wrap">
                                      <span className="font-['Segoe_Pro_Display:Semibold'] leading-[18.788px] text-[10.897px]">Analysis:</span>
                                      <span className="font-['Segoe_Pro_Display:Regular'] leading-[18.788px] text-[11.735px]">{` The RabbitMQ container is in a restart loop because the .erlang.cookie file has incorrect file permissions that prevent the RabbitMQ process from starting. The Erlang runtime requires this file to be accessible by the owner only for security purposes. Since resource utilization is normal and the error occurs consistently during initialization, this is a configuration/permissions issue rather than a resource or traffic-related problem. Each startup attempt fails at the same point, causing Kubernetes to restart the container, creating the observed restart loop.`}</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-white h-[60.662px] left-0 top-0 w-[1150.898px]" data-node-id="2011:5904" data-name="Header">
                <div className="absolute bg-[rgba(255,255,255,0)] border-[#e2e8f0] border-b-[0.843px] border-solid h-[60.662px] left-0 shadow-[0px_0.843px_2.528px_0px_rgba(0,0,0,0.1)] top-0 w-[1145px]" data-node-id="2011:5905" data-name="Container" />
                <div className="absolute h-[59.82px] left-0 top-0 w-[1145px]" data-node-id="2011:5906" data-name="Container2">
                  <div className="absolute h-[33.701px] left-[957.96px] top-[13.06px] w-[165.136px]" data-node-id="2011:5908" data-name="Container1">
                    <div className="absolute left-0 rounded-[8.425px] size-[30.331px] top-[1.69px]" data-node-id="2011:5909" data-name="Button">
                      <div className="absolute left-[6.74px] overflow-clip size-[16.851px] top-[6.74px]" data-node-id="2011:5910" data-name="Icon">
                        <div className="absolute content-stretch flex flex-col items-start left-[11px] size-[4.443px] top-[11px]" data-node-id="2011:5911" data-name="Container">
                          <div className="h-[4.443px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5912" data-name="Icon">
                            <div className="absolute inset-[13.88%_25.82%_25.84%_13.9%]" data-node-id="2011:5913" data-name="Vector">
                              <div className="absolute inset-[-23.04%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector81} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col items-start left-[1.41px] size-[12.631px] top-[1.41px]" data-node-id="2011:5914" data-name="Container">
                          <div className="h-[12.631px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5915" data-name="Icon">
                            <div className="absolute inset-[5.56%_5.56%_5.55%_5.56%]" data-node-id="2011:5916" data-name="Vector">
                              <div className="absolute inset-[-6.25%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector82} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[87.62px] rounded-[8.425px] size-[30.331px] top-[1.69px]" data-node-id="2011:5917" data-name="Button1">
                      <div className="absolute left-[6.74px] overflow-clip size-[16.851px] top-[6.74px]" data-node-id="2011:5918" data-name="Icon1">
                        <div className="absolute content-stretch flex flex-col h-[15.416px] items-start left-[1.43px] top-[0.72px] w-[13.981px]" data-node-id="2011:5919" data-name="Container">
                          <div className="h-[15.416px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5920" data-name="Icon">
                            <div className="absolute inset-[4.38%_7.29%_8.05%_4.9%]" data-node-id="2011:5921" data-name="Vector">
                              <div className="absolute inset-[-5.04%_-5.55%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector83} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col items-start left-[5.62px] size-[5.608px] top-[5.62px]" data-node-id="2011:5922" data-name="Container">
                          <div className="h-[5.608px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5923" data-name="Icon">
                            <div className="absolute inset-[11.91%_16.66%_16.66%_11.91%]" data-node-id="2011:5924" data-name="Vector">
                              <div className="absolute inset-[-16.67%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector84} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-gradient-to-b from-[#4a9d76] left-[131.43px] rounded-[14135314px] size-[33.701px] to-[#3b8b63] top-0" data-node-id="2011:5925" data-name="Container">
                      <div className="absolute h-[20.221px] left-[8.53px] top-[6.74px] w-[16.633px]" data-node-id="2011:5926" data-name="Paragraph">
                        <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[20.221px] left-0 not-italic text-[13.48px] text-white top-[-0.84px] tracking-[-0.2633px] whitespace-nowrap" data-node-id="2011:5927">
                          SP
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-[43.81px] rounded-[8.425px] size-[30.331px] top-[1.69px]" data-node-id="2011:5928" data-name="Button2">
                      <div className="absolute content-stretch flex flex-col items-start left-[6.74px] size-[16.851px] top-[6.74px]" data-node-id="2011:5929" data-name="Icon2">
                        <div className="h-[16.851px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5930" data-name="Icon">
                          <div className="absolute contents inset-[8.34%_12.5%_8.33%_12.5%]" data-node-id="2011:5931" data-name="Icon">
                            <div className="absolute inset-[87.5%_42.78%_8.33%_42.79%]" data-node-id="2011:5932" data-name="Vector">
                              <div className="absolute inset-[-100.02%_-28.87%_-100%_-28.87%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector85} />
                              </div>
                            </div>
                            <div className="absolute inset-[8.34%_12.5%_29.16%_12.5%]" data-node-id="2011:5933" data-name="Vector_2">
                              <div className="absolute inset-[-6.67%_-5.56%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector86} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bg-[#fb2c36] left-[20.22px] rounded-[14135314px] size-[6.74px] top-[3.37px]" data-node-id="2011:5934" data-name="Text" />
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Bold'] leading-[0] left-[21.91px] not-italic text-[#1d293d] text-[0px] top-[15.16px] tracking-[1.597px] whitespace-nowrap" data-node-id="2011:5935">
                  <span className="leading-[30.331px] text-[25.276px]">OR</span>
                  <span className="leading-[30.331px] text-[#4a9d76] text-[25.276px]">I</span>
                  <span className="leading-[30.331px] text-[25.276px]">AN CLOUDMAX</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="2011:5936">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="2011:5937">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="2011:5938">
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap" data-node-id="2011:5939">
                Decision Story 4
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-node-id="2011:5940">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-black w-full" data-node-id="2011:5941">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[18px] w-full" data-node-id="2011:5942">
                How do you measure whether the AI actually performed well?
              </p>
              <div className="content-stretch flex flex-col gap-[4px] items-start leading-[24px] relative shrink-0 w-full" data-node-id="2011:5943">
                <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full" data-node-id="2011:5944">
                  The challenge
                </p>
                <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full" data-node-id="2011:5945">{`A successful-looking investigation doesn't necessarily mean the AI performed correctly.`}</p>
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="2011:5946">
                <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] w-full" data-node-id="2011:5947">
                  The decision
                </p>
                <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] w-full" data-node-id="2011:5948">
                  <p className="leading-[24px] mb-0">I designed an Evaluation layer with an overall score and detailed score breakdown.</p>
                  <p className="leading-[24px] mb-0">The evaluation considers:</p>
                  <ul className="list-disc mb-0">
                    <li className="mb-0 ms-[22.5px]">
                      <span className="leading-[24px]">Root Cause Similarity</span>
                    </li>
                    <li className="mb-0 ms-[22.5px]">
                      <span className="leading-[24px]">Agent Utilization</span>
                    </li>
                    <li className="mb-0 ms-[22.5px]">
                      <span className="leading-[24px]">Task Completion</span>
                    </li>
                    <li className="mb-0 ms-[22.5px]">
                      <span className="leading-[24px]">Tool Utilization</span>
                    </li>
                    <li className="ms-[22.5px]">
                      <span className="leading-[24px]">Sub-agent Task Completion</span>
                    </li>
                  </ul>
                  <p className="leading-[24px]">This turns AI performance into something users can inspect and evaluate, rather than simply trust.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#f9fafc] blur-[6.399px] h-[762.973px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5949" data-name="Design Sign-in Page">
              <div className="absolute content-stretch flex h-[762.973px] items-start left-0 pr-[-5.357px] top-0 w-[1040px]" data-node-id="2011:5950" data-name="App">
                <div className="bg-[#feffff] drop-shadow-[0px_1.523px_1.142px_rgba(0,0,0,0.1)] h-[762.973px] relative shrink-0 w-[195.909px]" data-node-id="2011:5951" data-name="Sidebar">
                  <div className="absolute bg-[rgba(255,255,255,0)] border-[#e2e8f0] border-r-[0.765px] border-solid h-[707.873px] left-0 top-[55.1px] w-[195.909px]" data-node-id="2011:5952" data-name="Container" />
                  <div className="absolute h-[440.795px] left-0 overflow-clip top-[64.28px] w-[195.144px]" data-node-id="2011:5953" data-name="Navigation">
                    <div className="absolute h-[12.244px] left-[21.43px] top-[6.89px] w-[31.675px]" data-node-id="2011:5954" data-name="Container44" />
                    <div className="absolute content-stretch flex flex-col gap-[3.045px] items-start left-[9.18px] top-[6.89px] w-[176.777px]" data-node-id="2011:5956" data-name="Container45">
                      <div className="h-[36.733px] relative rounded-[7.653px] shrink-0 w-full" data-node-id="2011:5957" data-name="NavItemComponent1">
                        <div className="absolute content-stretch flex flex-col items-start left-[12.24px] size-[15.305px] top-[10.71px]" data-node-id="2011:5958" data-name="Icon17">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 size-[15.305px]" data-node-id="2011:5959" data-name="Icon16">
                            <div className="h-[15.305px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5960" data-name="Icon">
                              <div className="absolute contents inset-[12.5%]" data-node-id="2011:5961" data-name="Icon">
                                <div className="absolute inset-[12.5%]" data-node-id="2011:5962" data-name="Vector">
                                  <div className="absolute inset-[-5.56%]">
                                    <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector49} />
                                  </div>
                                </div>
                                <div className="absolute bottom-[29.16%] left-3/4 right-1/4 top-[37.5%]" data-node-id="2011:5963" data-name="Vector_2">
                                  <div className="absolute inset-[-12.5%_-0.64px]">
                                    <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector50} />
                                  </div>
                                </div>
                                <div className="absolute inset-[20.83%_45.84%_29.17%_54.16%]" data-node-id="2011:5964" data-name="Vector_3">
                                  <div className="absolute inset-[-8.33%_-0.64px]">
                                    <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector51} />
                                  </div>
                                </div>
                                <div className="absolute inset-[58.34%_66.67%_29.16%_33.33%]" data-node-id="2011:5965" data-name="Vector_4">
                                  <div className="absolute inset-[-33.33%_-0.64px]">
                                    <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector52} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[18.366px] items-start left-[36.73px] pr-[44.918px] pt-[-0.383px] top-[9.18px] w-[77.507px]" data-node-id="2011:5966" data-name="Text2">
                          <div className="h-[18.366px] relative shrink-0 w-full" data-node-id="2011:5967" data-name="Paragraph">
                            <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[18.366px] left-0 not-italic text-[#45556c] text-[12.244px] top-[-0.77px] tracking-[-0.2391px] whitespace-nowrap" data-node-id="2011:5968">
                              Overview
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-between px-[12.182px] py-[9.136px] relative rounded-[7.653px] shrink-0 w-[176.777px]" data-node-id="2011:5969" style={{ filter: "drop-shadow(0px 3.061px 2.296px rgba(0,0,0,0.1)) drop-shadow(0px 1.531px 1.531px rgba(0,0,0,0.1))",  backgroundImage: "linear-gradient(90.12379547997146deg, rgb(74, 157, 118) 0%, rgb(59, 139, 99) 99.87%)" }} data-name="NavItemComponent">
                        <div className="content-stretch flex gap-[7.613px] items-center relative shrink-0" data-node-id="2011:5970">
                          <div className="overflow-clip relative shrink-0 size-[15.305px]" data-node-id="2011:5971" data-name="Icon">
                            <div className="absolute inset-[8.34%_12.5%_8.33%_12.5%]" data-node-id="2011:5972" data-name="Icon">
                              <div className="absolute inset-[-5.01%_-5.57%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgIcon45} />
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col h-[18.366px] items-start pr-[30.963px] pt-[-0.383px] relative shrink-0 w-[83.647px]" data-node-id="2011:5975" data-name="Text1">
                            <div className="h-[18.366px] relative shrink-0 w-full" data-node-id="2011:5976" data-name="Paragraph">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Bold'] leading-[18.366px] left-0 not-italic text-[12.182px] text-white top-[-0.77px] tracking-[-0.2391px] whitespace-nowrap" data-node-id="2011:5977">
                                Alerts
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 size-[6.852px]" data-node-id="2011:5978">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgEllipse8} />
                        </div>
                      </div>
                      <div className="h-[36.733px] relative rounded-[7.653px] shrink-0 w-full" data-node-id="2011:5979" data-name="NavItemComponent2">
                        <div className="absolute content-stretch flex flex-col items-start left-[12.24px] size-[15.305px] top-[10.71px]" data-node-id="2011:5980" data-name="Icon18">
                          <div className="h-[15.305px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5981" data-name="Icon">
                            <div className="absolute contents inset-[12.5%_8.34%_12.5%_8.33%]" data-node-id="2011:5982" data-name="Icon">
                              <div className="absolute bottom-[12.5%] left-1/2 right-1/2 top-[29.16%]" data-node-id="2011:5983" data-name="Vector">
                                <div className="absolute inset-[-5.71%_-0.51px]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector53} />
                                </div>
                              </div>
                              <div className="absolute inset-[12.5%_8.34%_12.5%_8.33%]" data-node-id="2011:5984" data-name="Vector_2">
                                <div className="absolute inset-[-5.57%_-5.01%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector54} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[18.366px] items-start left-[36.73px] pr-[43.387px] pt-[-0.383px] top-[9.18px] w-[98.857px]" data-node-id="2011:5985" data-name="Text3">
                          <div className="h-[18.366px] relative shrink-0 w-full" data-node-id="2011:5986" data-name="Paragraph">
                            <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[18.366px] left-0 not-italic text-[#45556c] text-[12.244px] top-[-0.77px] tracking-[-0.2391px] whitespace-nowrap" data-node-id="2011:5987">
                              Runbooks
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-[36.733px] relative rounded-[7.653px] shrink-0 w-full" data-node-id="2011:5988" data-name="NavItemComponent3">
                        <div className="absolute content-stretch flex flex-col items-start left-[12.24px] size-[15.305px] top-[10.71px]" data-node-id="2011:5989" data-name="Icon19">
                          <div className="h-[15.305px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5990" data-name="Icon">
                            <div className="absolute contents inset-[8.4%_12.68%_8.41%_12.68%]" data-node-id="2011:5991" data-name="Icon">
                              <div className="absolute inset-[8.4%_12.68%_8.42%_12.68%]" data-node-id="2011:5992" data-name="Vector">
                                <div className="absolute inset-[-5.01%_-5.58%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector55} />
                                </div>
                              </div>
                              <div className="absolute inset-[37.5%]" data-node-id="2011:5993" data-name="Vector_2">
                                <div className="absolute inset-[-16.67%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector56} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[18.366px] items-start left-[36.73px] pr-[23.699px] pt-[-0.383px] top-[9.18px] w-[56.474px]" data-node-id="2011:5994" data-name="Text4">
                          <div className="h-[18.366px] relative shrink-0 w-full" data-node-id="2011:5995" data-name="Paragraph">
                            <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[18.366px] left-0 not-italic text-[#45556c] text-[12.244px] top-[-0.77px] tracking-[-0.2391px] whitespace-nowrap" data-node-id="2011:5996">
                              Setup
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-[36.733px] relative rounded-[7.653px] shrink-0 w-full" data-node-id="2011:5997" data-name="NavItemComponent4">
                        <div className="absolute content-stretch flex flex-col items-start left-[12.24px] size-[15.305px] top-[10.71px]" data-node-id="2011:5998" data-name="Icon20">
                          <div className="h-[15.305px] overflow-clip relative shrink-0 w-full" data-node-id="2011:5999" data-name="Icon">
                            <div className="absolute contents inset-[12.51%_8.33%_12.5%_8.33%]" data-node-id="2011:6000" data-name="Icon">
                              <div className="absolute inset-[62.5%_33.33%_12.5%_8.34%]" data-node-id="2011:6001" data-name="Vector">
                                <div className="absolute inset-[-16.67%_-7.14%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector57} />
                                </div>
                              </div>
                              <div className="absolute inset-[13.04%_20.85%_54.7%_66.67%]" data-node-id="2011:6002" data-name="Vector_2">
                                <div className="absolute inset-[-12.92%_-33.37%_-12.92%_-33.38%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector58} />
                                </div>
                              </div>
                              <div className="absolute inset-[63.05%_8.33%_12.5%_79.17%]" data-node-id="2011:6003" data-name="Vector_3">
                                <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector59} />
                                </div>
                              </div>
                              <div className="absolute inset-[12.5%_45.83%_54.16%_20.83%]" data-node-id="2011:6004" data-name="Vector_4">
                                <div className="absolute inset-[-12.5%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector60} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[18.366px] items-start left-[36.73px] pr-[2.11px] pt-[-0.383px] top-[9.18px] w-[34.485px]" data-node-id="2011:6005" data-name="Text5">
                          <div className="h-[18.366px] relative shrink-0 w-full" data-node-id="2011:6006" data-name="Paragraph">
                            <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[18.366px] left-0 not-italic text-[#45556c] text-[12.244px] top-[-0.77px] tracking-[-0.2391px] whitespace-nowrap" data-node-id="2011:6007">
                              Users
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[27.55px] left-[20.26px] top-[18.37px] w-[154.602px]" data-node-id="2011:6008" data-name="Container47">
                    <div className="absolute h-[27.55px] left-0 top-0 w-[154.602px]" data-node-id="2011:6009" data-name="Heading8">
                      <div className="absolute content-stretch flex h-[27.55px] items-start left-0 top-0 w-[35.059px]" data-node-id="2011:6010" data-name="Text6">
                        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#1d293d] text-[22.958px] tracking-[1.4506px] whitespace-nowrap" data-node-id="2011:6011">
                          <span className="font-['Mona_Sans:Bold'] font-bold leading-[27.55px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                            OR
                          </span>
                          <span className="font-['Mona_Sans:Bold'] font-bold leading-[27.55px] text-[#4a9d76]" style={{ fontVariationSettings: '"wdth" 100' }}>
                            I
                          </span>
                          <span className="font-['Mona_Sans:Bold'] font-bold leading-[27.55px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                            AN CLOUDMAX
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-[rgba(255,255,255,0.9)] left-[185.96px] rounded-[12839063px] size-[18.366px] top-[61.22px]" data-node-id="2011:6029" data-name="Button8">
                    <div className="absolute bg-[rgba(255,255,255,0)] border-[0.765px] border-[rgba(255,255,255,0.3)] border-solid left-0 rounded-[12839063px] shadow-[0px_3.061px_4.592px_0px_rgba(0,0,0,0.1),0px_1.531px_3.061px_0px_rgba(0,0,0,0.1)] size-[18.366px] top-0" data-node-id="2011:6030" data-name="Container" />
                    <div className="absolute content-stretch flex flex-col items-start left-[3.06px] size-[12.244px] top-[3.06px]" data-node-id="2011:6031" data-name="Icon22">
                      <div className="h-[12.244px] overflow-clip relative shrink-0 w-full" data-node-id="2011:6032" data-name="Icon">
                        <div className="absolute bottom-1/4 contents left-[37.5%] right-[37.5%] top-1/4" data-node-id="2011:6033" data-name="Icon">
                          <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-node-id="2011:6034" data-name="Vector">
                            <div className="absolute inset-[-8.33%_-16.67%]">
                              <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector61} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col h-[762.87px] items-center pt-[55.099px] relative shrink-0 w-[844.334px]" data-node-id="2011:6035" data-name="Main Content">
                  <div className="content-stretch flex flex-col gap-[9.898px] items-end py-[14.466px] relative shrink-0" data-node-id="2011:6036" data-name="Container">
                    <div className="content-stretch flex h-[24.2px] items-center justify-between relative shrink-0 w-[803.575px]" data-node-id="2011:6037" data-name="Container">
                      <div className="h-[13.031px] relative shrink-0 w-[72.339px]" data-node-id="2011:6038" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4.964px] items-center relative size-full">
                          <div className="relative shrink-0 size-[9.928px]" data-node-id="2011:6039" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon46} />
                          </div>
                          <div className="flex-[1_0_0] h-[13.031px] min-w-px relative" data-node-id="2011:6041" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[13.031px] left-0 not-italic text-[#45556c] text-[8.375px] top-0 whitespace-nowrap" data-node-id="2011:6042">
                                Back to Alerts
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#feffff] border-[#eff1f3] border-[0.761px] border-solid drop-shadow-[0px_3.045px_2.284px_rgba(0,0,0,0.1)] relative rounded-[6.091px] shrink-0" data-node-id="2011:6043" data-name="Button">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.613px] items-center justify-center px-[12.943px] py-[6.852px] relative size-full">
                          <div className="relative shrink-0 size-[9.928px]" data-node-id="2011:6044" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon47} />
                          </div>
                          <div className="h-[13.031px] relative shrink-0 w-[31.77px]" data-node-id="2011:6046" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[13.031px] left-0 not-italic text-[#64748b] text-[9.136px] top-0 whitespace-nowrap" data-node-id="2011:6047">
                                Refresh
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[803.575px]" data-node-id="2011:6048" data-name="Container">
                      <div className="relative shrink-0" data-node-id="2011:6049" data-name="Heading 1">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[2.284px] relative size-full">
                          <p className="[word-break:break-word] bg-clip-text font-['Segoe_Pro_Display:Bold'] leading-[27.55px] not-italic relative shrink-0 text-[22.84px] text-[transparent] tracking-[0.3027px] whitespace-nowrap" data-node-id="2011:6050" style={{ backgroundImage: "linear-gradient(87.78835640288038deg, rgb(31, 167, 82) 0.20215%, rgb(5, 150, 105) 99.732%)" }}>
                            API-High-Latency (copy)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-[#e5e7eb] border-b-[0.761px] border-solid content-stretch flex gap-[3.045px] h-[36.545px] items-start pb-[0.761px] relative shrink-0 w-[803.221px]" data-node-id="2011:6057" data-name="Container">
                      <div className="h-[35.783px] relative shrink-0 w-[127.044px]" data-node-id="2011:6058" data-name="TabButton">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.091px] items-center px-[12.182px] relative size-full">
                          <div className="relative shrink-0 size-[12.182px]" data-node-id="2011:6059" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon48} />
                          </div>
                          <div className="flex-[1_0_0] h-[15.988px] min-w-px relative" data-node-id="2011:6063" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[15.988px] left-0 not-italic text-[#6b7280] text-[10.659px] top-0 whitespace-nowrap" data-node-id="2011:6064">
                                Alert Information
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-[rgba(0,0,0,0)] border-b-[1.523px] border-solid h-[35.783px] relative shrink-0 w-[100.718px]" data-node-id="2011:6065" data-name="TabButton">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.091px] items-center pb-[1.523px] px-[12.182px] relative size-full">
                          <div className="relative shrink-0 size-[12.182px]" data-node-id="2011:6066" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon49} />
                          </div>
                          <div className="flex-[1_0_0] h-[15.988px] min-w-px relative" data-node-id="2011:6068" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[15.988px] left-0 not-italic text-[#6b7280] text-[10.659px] top-0 whitespace-nowrap" data-node-id="2011:6069">
                                Root Cause
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-[rgba(0,0,0,0)] border-b-[1.523px] border-solid h-[35.783px] relative shrink-0 w-[117.581px]" data-node-id="2011:6070" data-name="TabButton">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.091px] items-center pb-[1.523px] px-[12.182px] relative size-full">
                          <div className="relative shrink-0 size-[12.182px]" data-node-id="2011:6071" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon50} />
                          </div>
                          <div className="flex-[1_0_0] h-[15.988px] min-w-px relative" data-node-id="2011:6077" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[15.988px] left-0 not-italic text-[#6b7280] text-[10.659px] top-0 whitespace-nowrap" data-node-id="2011:6078">
                                Triage Journey
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-[#18a25a] border-b-[1.523px] border-solid h-[35.783px] relative shrink-0 w-[131.891px]" data-node-id="2011:6079" data-name="TabButton">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.091px] items-center pb-[1.523px] px-[12.182px] relative size-full">
                          <div className="relative shrink-0 size-[12.182px]" data-node-id="2011:6080" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon51} />
                          </div>
                          <div className="flex-[1_0_0] h-[15.988px] min-w-px relative" data-node-id="2011:6084" data-name="Text">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                              <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[15.988px] left-0 not-italic text-[#18a25a] text-[10.659px] top-0 whitespace-nowrap" data-node-id="2011:6085">
                                Evaluation Details
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[18.272px] h-[550.454px] items-start overflow-x-clip overflow-y-auto px-[1.523px] relative shrink-0 w-[803.982px]" data-node-id="2011:6086" data-name="EvaluationDetailsPage">
                    <div className="bg-white border-[#f4f4f4] border-[0.761px] border-solid content-stretch drop-shadow-[0px_3.045px_2.284px_rgba(0,0,0,0.1)] flex flex-col h-[76.896px] items-center justify-center p-[19.034px] relative rounded-[3.045px] shrink-0 w-full" data-node-id="2011:6087" data-name="Container">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="2011:6088" data-name="Container">
                        <div className="content-stretch flex gap-[9.136px] h-[42.255px] items-center relative shrink-0 w-[572.824px]" data-node-id="2011:6089" data-name="Container">
                          <div className="bg-[#10b981] relative rounded-[3.045px] shrink-0 size-[30.454px]" style={{ filter: "drop-shadow(0px 0.761px 1.142px rgba(0,0,0,0.1)) drop-shadow(0px 0.761px 0.761px rgba(0,0,0,0.1))" }} data-node-id="2011:6090" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                              <div className="relative shrink-0 size-[18.272px]" data-node-id="2011:6091" data-name="Icon">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon52} />
                              </div>
                            </div>
                          </div>
                          <div className="h-[42.255px] relative shrink-0 w-[176.026px]" data-node-id="2011:6094" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
                              <div className="h-[27.408px] relative shrink-0 w-full" data-node-id="2011:6095" data-name="Heading 1">
                                <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[27.408px] left-0 not-italic text-[#1e293b] text-[16.75px] top-[0.38px] tracking-[-0.4568px] whitespace-nowrap" data-node-id="2011:6096">
                                  Evaluation Score
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[24.363px] h-[45.3px] items-center relative shrink-0 w-[192.329px]" data-node-id="2011:6099" data-name="Container">
                          <div className="border-[#e2e8f0] border-l-[0.761px] border-solid flex-[1_0_0] h-[45.3px] min-w-px relative" data-node-id="2011:6100" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.045px] items-start pl-[19.034px] pr-[18.272px] relative size-full">
                              <div className="h-[14.846px] relative shrink-0 w-full" data-node-id="2011:6101" data-name="Paragraph">
                                <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[14.846px] left-[29.69px] not-italic text-[#64748b] text-[9.136px] text-center top-[-0.38px] whitespace-nowrap" data-node-id="2011:6102">
                                  Overall Score
                                </p>
                              </div>
                              <div className="h-[27.408px] relative shrink-0 w-full" data-node-id="2011:6103" data-name="Paragraph">
                                <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[27.408px] left-[29.63px] not-italic text-[#dd5e1e] text-[19.034px] text-center top-[-0.38px] tracking-[-0.6852px] whitespace-nowrap" data-node-id="2011:6104">
                                  68%
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="h-[30.454px] relative shrink-0 w-[71.727px]" data-node-id="2011:6105" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3.045px] items-start relative size-full">
                              <div className="content-stretch flex gap-[6.091px] h-[13.704px] items-center relative shrink-0 w-full" data-node-id="2011:6106" data-name="Container">
                                <div className="relative shrink-0 size-[10.659px]" data-node-id="2011:6107" data-name="Icon">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon53} />
                                </div>
                                <p className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] leading-[13.704px] not-italic relative shrink-0 text-[#64748b] text-[9.136px] text-right whitespace-nowrap" data-node-id="2011:6112">
                                  Nov 18, 2025
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[6.091px] h-[13.704px] items-center relative shrink-0 w-full" data-node-id="2011:6113" data-name="Container">
                                <div className="relative shrink-0 size-[10.659px]" data-node-id="2011:6114" data-name="Icon">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon54} />
                                </div>
                                <p className="[word-break:break-word] font-['Segoe_Pro_Display:Regular'] leading-[13.704px] not-italic relative shrink-0 text-[#64748b] text-[9.136px] text-right whitespace-nowrap" data-node-id="2011:6117">
                                  2:34 PM
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2011:6118">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2011:6119" data-name="Container">
                        <div className="bg-white border-[#f4f4f4] border-[0.761px] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.761px] relative rounded-[3.045px] shadow-[0px_3.045px_4.568px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-node-id="2011:6120" data-name="Container">
                          <div className="content-stretch flex flex-col items-start pt-[19.034px] px-[12.182px] relative shrink-0 w-full" data-node-id="2011:6121" data-name="Container">
                            <div className="content-stretch flex items-center justify-between px-[6.091px] relative shrink-0 w-full" data-node-id="2011:6122" data-name="Container">
                              <p className="[word-break:break-word] font-['Segoe_Pro_Display:Bold'] leading-[18.272px] not-italic relative shrink-0 text-[#1e293b] text-[13.704px] tracking-[-0.2379px] whitespace-nowrap" data-node-id="2011:6123">
                                Score Breakdown
                              </p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="2011:6124" data-name="Container">
                            <div className="border-[#f4f4f4] border-b-[0.761px] border-solid content-stretch flex flex-col h-[74.707px] items-start pb-[0.761px] pt-[15.227px] px-[18.272px] relative shrink-0 w-full" data-node-id="2011:6125" data-name="Container">
                              <div className="content-stretch flex h-[43.492px] items-center justify-between relative shrink-0 w-full" data-node-id="2011:6126" data-name="Container">
                                <div className="flex-[1_0_0] h-[43.492px] min-w-px relative" data-node-id="2011:6127" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.568px] items-start relative size-full">
                                    <div className="content-stretch flex h-[22.84px] items-center relative shrink-0 w-full" data-node-id="2011:6128" data-name="Container">
                                      <div className="h-[17.13px] relative shrink-0 w-[108.349px]" data-node-id="2011:6129" data-name="Heading 3">
                                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                          <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[17.13px] left-0 not-italic text-[#1e293b] text-[10.659px] top-0 whitespace-nowrap" data-node-id="2011:6130">
                                            Root Cause Similarity
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="h-[16.083px] relative shrink-0 w-full" data-node-id="2011:6131" data-name="Paragraph">
                                      <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[16.083px] left-0 not-italic text-[#64748b] text-[9.898px] top-[-0.38px] whitespace-nowrap" data-node-id="2011:6132">
                                        Measures the accuracy of AI-generated root cause analysis against expected outcomes.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="relative shrink-0" data-node-id="2011:6133" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
                                    <div className="content-stretch flex flex-col h-[38.448px] items-start justify-center relative shrink-0" data-node-id="2011:6134" data-name="Container">
                                      <p className="[word-break:break-word] font-['Segoe_Pro_Display:Semibold'] leading-[24.363px] not-italic relative shrink-0 text-[#1e293b] text-[19.034px] text-right tracking-[-0.6091px] whitespace-nowrap" data-node-id="2011:6135">
                                        0%
                                      </p>
                                    </div>
                                    <div className="bg-[#f1f5f9] h-[6.091px] relative rounded-[12773271px] shrink-0 w-[97.452px]" data-node-id="2011:6137" data-name="Container" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="border-[#f4f4f4] border-b-[0.761px] border-solid content-stretch flex flex-col h-[74.707px] items-start pb-[0.761px] pt-[15.227px] px-[18.272px] relative shrink-0 w-full" data-node-id="2011:6138" data-name="Container">
                              <div className="content-stretch flex h-[43.492px] items-center justify-between relative shrink-0 w-full" data-node-id="2011:6139" data-name="Container">
                                <div className="flex-[1_0_0] h-[43.492px] min-w-px relative" data-node-id="2011:6140" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.568px] items-start relative size-full">
                                    <div className="content-stretch flex h-[22.84px] items-center relative shrink-0 w-full" data-node-id="2011:6141" data-name="Container">
                                      <div className="h-[17.13px] relative shrink-0 w-[153.721px]" data-node-id="2011:6142" data-name="Heading 3">
                                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                          <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[17.13px] left-0 not-italic text-[#1e293b] text-[10.659px] top-0 whitespace-nowrap" data-node-id="2011:6143">
                                            Orchestrator Agent Utilization
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="h-[16.083px] relative shrink-0 w-full" data-node-id="2011:6144" data-name="Paragraph">
                                      <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[16.083px] left-0 not-italic text-[#64748b] text-[9.898px] top-[-0.38px] whitespace-nowrap" data-node-id="2011:6145">{`Evaluates the orchestrator's effectiveness in coordinating specialized agents and leveraging knowledge base resources.`}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="relative shrink-0" data-node-id="2011:6146" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12.182px] items-center justify-center relative size-full">
                                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="2011:6147" data-name="Container">
                                      <p className="[word-break:break-word] font-['Segoe_Pro_Display:Semibold'] leading-[24.363px] not-italic relative shrink-0 text-[#1e293b] text-[19.034px] text-right tracking-[-0.6091px] whitespace-nowrap" data-node-id="2011:6148">
                                        85%
                                      </p>
                                    </div>
                                    <div className="bg-[#f1f5f9] content-stretch flex flex-col h-[6.091px] items-start overflow-clip pr-[14.62px] relative rounded-[12773271px] shrink-0 w-[97.452px]" data-node-id="2011:6149" data-name="Container">
                                      <div className="bg-gradient-to-b from-[#10b981] h-[6.091px] relative rounded-[12773271px] shrink-0 to-[#059669] w-full" data-node-id="2011:6150" data-name="Container" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="border-[#f4f4f4] border-b-[0.761px] border-solid content-stretch flex flex-col h-[74.707px] items-start pb-[0.761px] pt-[15.227px] px-[18.272px] relative shrink-0 w-full" data-node-id="2011:6151" data-name="Container">
                              <div className="content-stretch flex h-[43.492px] items-center justify-between relative shrink-0 w-full" data-node-id="2011:6152" data-name="Container">
                                <div className="flex-[1_0_0] h-[43.492px] min-w-px relative" data-node-id="2011:6153" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.568px] items-start relative size-full">
                                    <div className="content-stretch flex h-[22.84px] items-center relative shrink-0 w-full" data-node-id="2011:6154" data-name="Container">
                                      <div className="h-[17.13px] relative shrink-0 w-[152.21px]" data-node-id="2011:6155" data-name="Heading 3">
                                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                          <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[17.13px] left-0 not-italic text-[#1e293b] text-[10.659px] top-0 whitespace-nowrap" data-node-id="2011:6156">
                                            Orchestrator Task Completion
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="h-[16.083px] relative shrink-0 w-full" data-node-id="2011:6157" data-name="Paragraph">
                                      <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[16.083px] left-0 not-italic text-[#64748b] text-[9.898px] top-[-0.38px] whitespace-nowrap" data-node-id="2011:6158">{`Assesses the orchestrator's performance in completing the comprehensive alert triage workflow.`}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="relative shrink-0" data-node-id="2011:6159" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12.182px] items-center justify-center relative size-full">
                                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="2011:6160" data-name="Container">
                                      <p className="[word-break:break-word] font-['Segoe_Pro_Display:Semibold'] leading-[24.363px] not-italic relative shrink-0 text-[#1e293b] text-[19.034px] text-right tracking-[-0.6091px] whitespace-nowrap" data-node-id="2011:6161">
                                        85%
                                      </p>
                                    </div>
                                    <div className="bg-[#f1f5f9] content-stretch flex flex-col h-[6.091px] items-start overflow-clip pr-[14.62px] relative rounded-[12773271px] shrink-0 w-[97.452px]" data-node-id="2011:6162" data-name="Container">
                                      <div className="bg-gradient-to-b from-[#10b981] h-[6.091px] relative rounded-[12773271px] shrink-0 to-[#059669] w-full" data-node-id="2011:6163" data-name="Container" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="border-[#f4f4f4] border-b-[0.761px] border-solid content-stretch flex flex-col h-[74.707px] items-start pb-[0.761px] pt-[15.227px] px-[18.272px] relative shrink-0 w-full" data-node-id="2011:6164" data-name="Container">
                              <div className="content-stretch flex h-[43.492px] items-center justify-between relative shrink-0 w-full" data-node-id="2011:6165" data-name="Container">
                                <div className="flex-[1_0_0] h-[43.492px] min-w-px relative" data-node-id="2011:6166" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.568px] items-start relative size-full">
                                    <div className="content-stretch flex h-[22.84px] items-center relative shrink-0 w-full" data-node-id="2011:6167" data-name="Container">
                                      <div className="h-[17.13px] relative shrink-0 w-[133.313px]" data-node-id="2011:6168" data-name="Heading 3">
                                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                          <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[17.13px] left-0 not-italic text-[#1e293b] text-[10.659px] top-0 whitespace-nowrap" data-node-id="2011:6169">
                                            Sub-Agent Tool Utilization
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="h-[16.083px] relative shrink-0 w-full" data-node-id="2011:6170" data-name="Paragraph">
                                      <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[16.083px] left-0 not-italic text-[#64748b] text-[9.898px] top-[-0.38px] whitespace-nowrap" data-node-id="2011:6171">{`Evaluates specialized agents' proficiency in utilizing assigned tools and resources for their specific tasks.`}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="relative shrink-0" data-node-id="2011:6172" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12.182px] items-center justify-center relative size-full">
                                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="2011:6173" data-name="Container">
                                      <p className="[word-break:break-word] font-['Segoe_Pro_Display:Semibold'] leading-[24.363px] not-italic relative shrink-0 text-[#1e293b] text-[19.034px] text-right tracking-[-0.6091px] whitespace-nowrap" data-node-id="2011:6174">
                                        85%
                                      </p>
                                    </div>
                                    <div className="bg-[#f1f5f9] content-stretch flex flex-col h-[6.091px] items-start overflow-clip pr-[14.62px] relative rounded-[12773271px] shrink-0 w-[97.452px]" data-node-id="2011:6175" data-name="Container">
                                      <div className="bg-gradient-to-b from-[#10b981] h-[6.091px] relative rounded-[12773271px] shrink-0 to-[#059669] w-full" data-node-id="2011:6176" data-name="Container" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="border-[#f4f4f4] border-[0.761px] border-solid content-stretch flex flex-col items-start px-[18.272px] py-[15.227px] relative shrink-0 w-full" data-node-id="2011:6177" data-name="Container">
                              <div className="content-stretch flex h-[43.492px] items-center justify-between relative shrink-0 w-[765.154px]" data-node-id="2011:6178" data-name="Container">
                                <div className="flex-[1_0_0] h-[43.492px] min-w-px relative" data-node-id="2011:6179" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.568px] items-start relative size-full">
                                    <div className="content-stretch flex h-[22.84px] items-center relative shrink-0 w-full" data-node-id="2011:6180" data-name="Container">
                                      <div className="h-[17.13px] relative shrink-0 w-[140.897px]" data-node-id="2011:6181" data-name="Heading 3">
                                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                                          <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Semibold'] leading-[17.13px] left-0 not-italic text-[#1e293b] text-[10.659px] top-0 whitespace-nowrap" data-node-id="2011:6182">
                                            Sub-Agent Task Completion
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="h-[16.083px] relative shrink-0 w-full" data-node-id="2011:6183" data-name="Paragraph">
                                      <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Regular'] leading-[16.083px] left-0 not-italic text-[#64748b] text-[9.898px] top-[-0.38px] whitespace-nowrap" data-node-id="2011:6184">
                                        Measures the effectiveness of specialized agents in executing their designated responsibilities within the triage process.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="relative shrink-0" data-node-id="2011:6185" data-name="Container">
                                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12.182px] items-center justify-center relative size-full">
                                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="2011:6186" data-name="Container">
                                      <p className="[word-break:break-word] font-['Segoe_Pro_Display:Semibold'] leading-[24.363px] not-italic relative shrink-0 text-[#1e293b] text-[19.034px] text-right tracking-[-0.6091px] whitespace-nowrap" data-node-id="2011:6187">
                                        85%
                                      </p>
                                    </div>
                                    <div className="bg-[#f1f5f9] content-stretch flex flex-col h-[6.091px] items-start overflow-clip pr-[14.62px] relative rounded-[12773271px] shrink-0 w-[97.452px]" data-node-id="2011:6188" data-name="Container">
                                      <div className="bg-gradient-to-b from-[#10b981] h-[6.091px] relative rounded-[12773271px] shrink-0 to-[#059669] w-full" data-node-id="2011:6189" data-name="Container" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border-[#f4f4f4] border-[0.761px] border-solid content-stretch flex flex-col gap-[19.034px] items-center overflow-clip px-[0.761px] py-[19.034px] relative rounded-[3.045px] shadow-[0px_3.045px_4.568px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-node-id="2011:6190" data-name="Container">
                      <div className="content-stretch flex items-center justify-between px-[12.182px] relative shrink-0 w-full" data-node-id="2011:6191" data-name="Container">
                        <p className="[word-break:break-word] font-['Segoe_Pro_Display:Bold'] leading-[18.272px] not-italic relative shrink-0 text-[#1e293b] text-[11.42px] tracking-[-0.2379px] whitespace-nowrap" data-node-id="2011:6192">
                          Evaluation Summary
                        </p>
                      </div>
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="2011:6193">
                        <div className="[word-break:break-word] content-stretch flex flex-col font-['Mona_Sans:Regular'] font-normal gap-[7.613px] items-center justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[0px] w-[764.392px] whitespace-pre-wrap" data-node-id="2011:6194">
                          <p className="relative shrink-0 w-full" data-node-id="2011:6195" style={{ fontVariationSettings: '"wdth" 100' }}>
                            <span className="font-['Segoe_Pro_Display:Semibold'] leading-[16.083px] not-italic text-[9.136px]">root_cause_accuracy:</span>
                            <span className="font-['Mona_Sans:SemiBold'] font-semibold leading-[16.083px] text-[9.136px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`  `}</span>
                            <span className="font-['Segoe_Pro_Display:Regular'] leading-[16.083px] not-italic text-[9.898px]">The model identified a root cause that was fundamentally misaligned with the expected diagnostic outcome, investigating a RabbitMQ permission error rather than the anticipated Redis memory stress scenario. While the identified root cause appears technically sound and well-reasoned within its own context, it represents a complete mismatch in problem domain, involving different systems, failure modes, and manifestations than expected. Performance on this metric was concerning.</span>
                          </p>
                          <p className="not-italic relative shrink-0 w-full" data-node-id="2011:6196" style={{ fontVariationSettings: '"wdth" 100' }}>
                            <span className="font-['Segoe_Pro_Display:Semibold'] leading-[16.083px] text-[9.136px]">orchestrator_coordination:</span>
                            <span className="font-['Segoe_Pro_Display:Regular'] leading-[16.083px] text-[9.898px]">{`  The agent demonstrated appropriate delegation to relevant diagnostic agents for Kubernetes pod metrics and knowledge base searches, though it did not consult the APM diagnostics agent for application-level performance data that could have provided a more comprehensive investigation. The coordination approach was partially effective but lacked the breadth needed for thorough multi-layered analysis. Performance on this metric was satisfactory.`}</span>
                          </p>
                          <p className="not-italic relative shrink-0 w-full" data-node-id="2011:6197" style={{ fontVariationSettings: '"wdth" 100' }}>
                            <span className="font-['Segoe_Pro_Display:Semibold'] leading-[16.083px] text-[9.136px]">orchestrator_task_completion:</span>
                            <span className="font-['Segoe_Pro_Display:Regular'] leading-[16.083px] text-[9.898px]">{`  The agent delivered a thorough investigation with clear findings and root cause identification; however, it did not provide the actionable next steps (remediation, escalation, or severity assessment) that are typically expected when triaging an alert. The response addressed diagnostic analysis but fell short of completing the full scope of the triage request. Performance on this metric was concerning.`}</span>
                          </p>
                          <p className="not-italic relative shrink-0 w-full" data-node-id="2011:6198" style={{ fontVariationSettings: '"wdth" 100' }}>
                            <span className="font-['Segoe_Pro_Display:Semibold'] leading-[16.083px] text-[9.136px]">sub_agent_tool_utilization:</span>
                            <span className="font-['Segoe_Pro_Display:Regular'] leading-[16.083px] text-[9.898px]">{`  The agent systematically selected appropriate tools from the available set and followed diagnostic procedures; however, it overlooked the Grafana error pattern analysis tool, which was specifically designed for the elevated error pattern investigation being conducted. This omission resulted in a less optimal approach than what the available toolset could have provided. Performance on this metric was satisfactory.`}</span>
                          </p>
                          <p className="not-italic relative shrink-0 w-full" data-node-id="2011:6199" style={{ fontVariationSettings: '"wdth" 100' }}>
                            <span className="font-['Segoe_Pro_Display:Semibold'] leading-[16.083px] text-[9.136px]">sub_agent_tool_arguments:</span>
                            <span className="font-['Segoe_Pro_Display:Regular'] leading-[16.083px] text-[9.898px]">{`  The agent generally constructed well-formed tool calls with correct parameters and proper formatting for most queries, including appropriate RFC3339 timestamp formatting for Prometheus calls. However, the Loki logs query lacked recommended time boundary parameters, and the error pattern logs call could have been more specific with explicit time boundaries. Performance on this metric was satisfactory.`}</span>
                          </p>
                          <p className="not-italic relative shrink-0 w-full" data-node-id="2011:6200" style={{ fontVariationSettings: '"wdth" 100' }}>
                            <span className="font-['Segoe_Pro_Display:Semibold'] leading-[16.083px] text-[9.136px]">sub_agent_task_completion:</span>
                            <span className="font-['Segoe_Pro_Display:Regular'] leading-[16.083px] text-[9.898px]">{`  The agent successfully executed diagnostic procedures and identified a root cause through visible tool calls and log analysis; however, it deviated from the prescribed diagnostic decision tree by skipping traffic analysis and distributed trace steps before reaching conclusions. This departure from the documented procedure represents an incomplete execution of the full diagnostic workflow. Performance on this metric was concerning.`}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-white h-[55.099px] left-0 top-0 w-[1045.357px]" data-node-id="2011:6201" data-name="Header">
                <div className="absolute bg-[rgba(255,255,255,0)] border-[#e2e8f0] border-b-[0.765px] border-solid h-[55.099px] left-0 shadow-[0px_0.765px_2.296px_0px_rgba(0,0,0,0.1)] top-0 w-[1040px]" data-node-id="2011:6202" data-name="Container" />
                <div className="absolute h-[54.334px] left-0 top-0 w-[1040px]" data-node-id="2011:6203" data-name="Container2">
                  <div className="absolute h-[30.611px] left-[870.11px] top-[11.86px] w-[149.993px]" data-node-id="2011:6205" data-name="Container1">
                    <div className="absolute left-0 rounded-[7.653px] size-[27.55px] top-[1.53px]" data-node-id="2011:6206" data-name="Button">
                      <div className="absolute left-[6.12px] overflow-clip size-[15.305px] top-[6.12px]" data-node-id="2011:6207" data-name="Icon">
                        <div className="absolute content-stretch flex flex-col items-start left-[9.99px] size-[4.036px] top-[9.99px]" data-node-id="2011:6208" data-name="Container">
                          <div className="h-[4.036px] overflow-clip relative shrink-0 w-full" data-node-id="2011:6209" data-name="Icon">
                            <div className="absolute inset-[13.88%_25.83%_25.84%_13.9%]" data-node-id="2011:6210" data-name="Vector">
                              <div className="absolute inset-[-23.04%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector62} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col items-start left-[1.28px] size-[11.473px] top-[1.28px]" data-node-id="2011:6211" data-name="Container">
                          <div className="h-[11.473px] overflow-clip relative shrink-0 w-full" data-node-id="2011:6212" data-name="Icon">
                            <div className="absolute inset-[5.56%_5.56%_5.55%_5.56%]" data-node-id="2011:6213" data-name="Vector">
                              <div className="absolute inset-[-6.25%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector63} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-[79.59px] rounded-[7.653px] size-[27.55px] top-[1.53px]" data-node-id="2011:6214" data-name="Button1">
                      <div className="absolute left-[6.12px] overflow-clip size-[15.305px] top-[6.12px]" data-node-id="2011:6215" data-name="Icon1">
                        <div className="absolute content-stretch flex flex-col h-[14.002px] items-start left-[1.3px] top-[0.65px] w-[12.699px]" data-node-id="2011:6216" data-name="Container">
                          <div className="h-[14.002px] overflow-clip relative shrink-0 w-full" data-node-id="2011:6217" data-name="Icon">
                            <div className="absolute inset-[4.38%_7.29%_8.05%_4.9%]" data-node-id="2011:6218" data-name="Vector">
                              <div className="absolute inset-[-5.04%_-5.55%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector64} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col items-start left-[5.11px] size-[5.094px] top-[5.11px]" data-node-id="2011:6219" data-name="Container">
                          <div className="h-[5.094px] overflow-clip relative shrink-0 w-full" data-node-id="2011:6220" data-name="Icon">
                            <div className="absolute inset-[11.89%_16.66%_16.68%_11.91%]" data-node-id="2011:6221" data-name="Vector">
                              <div className="absolute inset-[-16.67%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector65} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-gradient-to-b from-[#4a9d76] left-[119.38px] rounded-[12839063px] size-[30.611px] to-[#3b8b63] top-0" data-node-id="2011:6222" data-name="Container">
                      <div className="absolute h-[18.366px] left-[7.75px] top-[6.12px] w-[15.108px]" data-node-id="2011:6223" data-name="Paragraph">
                        <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[18.366px] left-0 not-italic text-[12.244px] text-white top-[-0.77px] tracking-[-0.2391px] whitespace-nowrap" data-node-id="2011:6224">
                          SP
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-[39.79px] rounded-[7.653px] size-[27.55px] top-[1.53px]" data-node-id="2011:6225" data-name="Button2">
                      <div className="absolute content-stretch flex flex-col items-start left-[6.12px] size-[15.305px] top-[6.12px]" data-node-id="2011:6226" data-name="Icon2">
                        <div className="h-[15.305px] overflow-clip relative shrink-0 w-full" data-node-id="2011:6227" data-name="Icon">
                          <div className="absolute contents inset-[8.33%_12.5%_8.34%_12.5%]" data-node-id="2011:6228" data-name="Icon">
                            <div className="absolute inset-[87.5%_42.78%_8.33%_42.78%]" data-node-id="2011:6229" data-name="Vector">
                              <div className="absolute inset-[-100.02%_-28.87%_-100%_-28.87%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector66} />
                              </div>
                            </div>
                            <div className="absolute inset-[8.33%_12.5%_29.17%_12.5%]" data-node-id="2011:6230" data-name="Vector_2">
                              <div className="absolute inset-[-6.67%_-5.56%]">
                                <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector67} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bg-[#fb2c36] left-[18.37px] rounded-[12839063px] size-[6.122px] top-[3.06px]" data-node-id="2011:6231" data-name="Text" />
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] absolute font-['Segoe_Pro_Display:Bold'] leading-[0] left-[19.9px] not-italic text-[#1d293d] text-[0px] top-[13.77px] tracking-[1.4506px] whitespace-nowrap" data-node-id="2011:6232">
                  <span className="leading-[27.55px] text-[22.958px]">OR</span>
                  <span className="leading-[27.55px] text-[#4a9d76] text-[22.958px]">I</span>
                  <span className="leading-[27.55px] text-[22.958px]">AN CLOUDMAX</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="2011:6233">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="2011:6234">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="2011:6235">
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap" data-node-id="2011:6236">
                The Supporting Experience
              </p>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full" data-node-id="2011:6237">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[18px] w-full" data-node-id="2011:6238">
              Supporting the investigation ecosystem
            </p>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="2011:6239">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full" data-node-id="2011:6240">
                Overview
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full" data-node-id="2011:6241">
                Monitor alerts, LLM activity, latency and triage performance.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="2011:6242">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full" data-node-id="2011:6243">
                Alerts
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full" data-node-id="2011:6244">
                Search, filter and investigate alerts.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="2011:6245">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full" data-node-id="2011:6246">
                Runbooks
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full" data-node-id="2011:6247">
                Manage the knowledge used for automated triage.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="2011:6248">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full" data-node-id="2011:6249">
                Setup
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full" data-node-id="2011:6250">
                Configure agents, models, triage rules and observability integrations.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="2011:6251">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full" data-node-id="2011:6252">
                Users
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full" data-node-id="2011:6253">
                Manage access and user information.
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="2011:6254">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="2011:6255">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="2011:6256">
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap" data-node-id="2011:6257">
                Outcome
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="2011:6258">
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] not-italic relative shrink-0 text-[18px] text-black w-full" data-node-id="2011:6259">
              Making AI investigation easier to understand
            </p>
            <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="2011:6260">
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]" data-node-id="2011:6261">
                The final experience connects:
              </p>
              <div className="content-stretch flex gap-[18px] items-center py-[16px] relative shrink-0" data-node-id="2011:6262">
                <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2011:6263">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap" data-node-id="2011:6264">
                    Alert
                  </p>
                </div>
                <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="2011:6265">
                  <div className="flex-none rotate-90">
                    <div className="relative size-[16px]" data-name="gravity-ui:arrow-up">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} />
                    </div>
                  </div>
                </div>
                <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2011:6267">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap" data-node-id="2011:6268">
                    Evidence
                  </p>
                </div>
                <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="2011:6269">
                  <div className="flex-none rotate-90">
                    <div className="relative size-[16px]" data-name="gravity-ui:arrow-up">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} />
                    </div>
                  </div>
                </div>
                <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2011:6271">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap" data-node-id="2011:6272">
                    Root Cause
                  </p>
                </div>
                <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="2011:6273">
                  <div className="flex-none rotate-90">
                    <div className="relative size-[16px]" data-name="gravity-ui:arrow-up">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} />
                    </div>
                  </div>
                </div>
                <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2011:6275">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap" data-node-id="2011:6276">
                    AI Actions
                  </p>
                </div>
                <div className="flex items-center justify-center relative shrink-0 size-[16px]" data-node-id="2011:6277">
                  <div className="flex-none rotate-90">
                    <div className="relative size-[16px]" data-name="gravity-ui:arrow-up">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGravityUiArrowUp} />
                    </div>
                  </div>
                </div>
                <div className="bg-[#ececec] border border-[#d8d8d8] border-solid content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[8px] shrink-0" data-node-id="2011:6279">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap" data-node-id="2011:6280">
                    Evaluation
                  </p>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[15px] text-black w-[min-content]" data-node-id="2011:6281">
                It gives SREs both:
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full" data-node-id="2011:6282">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full" data-node-id="2011:6283">
                Speed
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full" data-node-id="2011:6284">
                Quickly identify and understand alerts.
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full" data-node-id="2011:6285">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full" data-node-id="2011:6286">
                Depth
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full" data-node-id="2011:6287">
                Inspect the evidence and actions behind an AI-generated conclusion.
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[24px] not-italic relative shrink-0 text-black w-full" data-node-id="2011:6288">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] w-full" data-node-id="2011:6289">
                Transparency
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[15px] w-full" data-node-id="2011:6290">
                Understand how the AI reached its result.
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="2011:6291">
          <div className="bg-[#dadada] content-stretch flex flex-col items-center justify-center px-[18px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="2011:6292">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="2011:6293">
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[14px] text-black uppercase whitespace-nowrap" data-node-id="2011:6294">
                Reflection
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="2011:6295">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-black w-full" data-node-id="2011:6296">
              <p className="font-['Inter:Bold'] font-bold leading-[24px] relative shrink-0 text-[16px] w-full" data-node-id="2011:6297">
                What I learned
              </p>
              <ul className="block font-['Inter:Regular'] font-normal leading-[0] list-disc relative shrink-0 text-[15px] w-full" data-node-id="2011:6298">
                <li className="mb-0 ms-[22.5px]">
                  <span className="leading-[24px]">{`Designing Orion CloudMax taught me that AI UX isn't only about making AI powerful.`}</span>
                </li>
                <li className="ms-[22.5px]">
                  <span className="leading-[24px]">{`It's about making its actions, evidence and decisions understandable to the people using it.`}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <NextCaseStudyCard currentPath="/case-study/orion-cloudmax" />
      </div>
      <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex gap-[32px] items-start left-1/2 p-[10px] text-black top-[1115px] w-[1040px]" data-node-id="2011:6299">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="2011:6300">
          <p className="font-['Space_Grotesk:Regular'] font-normal leading-[normal] min-w-full relative shrink-0 text-[14px] w-[min-content]" data-node-id="2011:6301">
            ROLE
          </p>
          <p className="font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center whitespace-nowrap" data-node-id="2011:6302">
            UX/UI Designer
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 uppercase" data-node-id="2011:6303">
          <p className="font-['Space_Grotesk:Regular'] font-normal leading-[normal] min-w-full relative shrink-0 text-[14px] w-[min-content]" data-node-id="2011:6304">
            Product
          </p>
          <p className="font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center whitespace-nowrap" data-node-id="2011:6305">
            Orian CloudMax
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-node-id="2011:6306">
          <p className="font-['Space_Grotesk:Regular'] font-normal leading-[normal] min-w-full relative shrink-0 text-[14px] uppercase w-[min-content]" data-node-id="2011:6307">
            Team
          </p>
          <p className="font-['Inter:Medium'] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center whitespace-nowrap" data-node-id="2011:6308">
            1 UX/UI Designer
          </p>
        </div>
      </div>
    </div>
    </>
  );
}