import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router";

const DESIGN_WIDTH = 1440;
const assetPathPrefix = "/assets";
const imgImage306 = `${assetPathPrefix}/0e609.png`;
const imgPenguin1 = `${assetPathPrefix}/penguin-new.png`;
const imgImage27 = `${assetPathPrefix}/ffaf9.png`;
const imgM11 = `${assetPathPrefix}/2eb26.png`;
const imgMock1 = `${assetPathPrefix}/8117a.png`;
const imgS51 = `${assetPathPrefix}/5540d.png`;

export default function DiveDeeper() {
  const navigate = useNavigate();
  const [scale, setScale] = useState(() => window.innerWidth / DESIGN_WIDTH);

  useEffect(() => {
    document.body.classList.add("dive-deeper-page");
    return () => document.body.classList.remove("dive-deeper-page");
  }, []);

  useEffect(() => {
    const update = () => setScale(window.innerWidth / DESIGN_WIDTH);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      className="bg-gradient-to-b from-[#0263ba] to-[#044987] relative"
      style={{ minHeight: "100dvh" }}
      data-node-id="2078:33"
      data-name="Desktop - 15"
    >
      {/* Background and penguin rendered outside the zoom wrapper via portal */}
      {createPortal(
        <>
          <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
            <img alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} src={imgImage306} />
          </div>
          <div style={{ position: "fixed", left: 0, bottom: 80, width: "100vw", height: 533, zIndex: 1, pointerEvents: "none", overflow: "visible" }}>
            <img alt="" className="penguin-dive-anim" style={{ width: 354, height: 533, objectFit: "contain", objectPosition: "left top", transformOrigin: "center center" }} loading="lazy" src={imgPenguin1} />
          </div>
        </>,
        document.body
      )}

      {/* NAV — portalled outside zoom wrapper so fixed positioning works correctly */}
      {createPortal(
        <div
          className="-translate-x-1/2 content-stretch flex items-center justify-between left-1/2 w-[1299px]"
          data-node-id="2078:36"
          style={{ position: "fixed", top: 34 * scale, zIndex: 200, zoom: scale, transformOrigin: "top center" }}
        >
          <div
            className="bg-[#93001d] content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[999px] shrink-0"
            data-node-id="2078:37"
            onClick={() => { window.scrollTo(0, 0); navigate("/"); }}
            style={{ cursor: "pointer" }}
          >
            <div className="content-stretch flex items-center overflow-clip relative rounded-[99999px] shrink-0" data-node-id="2078:38">
              <div className="h-[40.028px] relative shrink-0 w-[38.75px]" data-node-id="2078:39" data-name="image 27">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage27} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-node-id="2078:40">
            <div
              className="bg-[#fcc6db] content-stretch drop-shadow-[2px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center px-[16px] py-[5px] relative rounded-[34px] shrink-0"
              data-node-id="2078:41"
              onClick={() => { window.scrollTo(0, 0); navigate("/about"); }}
              style={{ cursor: "pointer" }}
            >
              <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#3347ae] text-[14px] whitespace-nowrap" data-node-id="2078:42">
                About me
              </p>
            </div>
            <div className="bg-[#fcc6db] content-stretch drop-shadow-[2px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center px-[16px] py-[5px] relative rounded-[34px] shrink-0" data-node-id="2078:43">
              <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#3347ae] text-[14px] whitespace-nowrap" data-node-id="2078:44">
                Resume
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Case study cards grid — scrollable, sits above fixed bg */}
      <div
        className="gap-x-[44px] gap-y-[44px] grid grid-cols-[repeat(2,minmax(0,1fr))] mx-auto w-[1054px]"
        data-node-id="2078:45"
        style={{ position: "relative", zIndex: 2, paddingTop: 191, paddingBottom: 80 }}
      >
        {/* Card 1 — NXTAAS */}
        <div
          className="col-1 content-stretch flex flex-col gap-[31.832px] items-center justify-self-stretch p-[33.139px] relative rounded-[16.569px] row-1 self-start shrink-0"
          data-node-id="2081:134"
          onClick={() => { window.scrollTo(0, 0); navigate("/case-study/nxtaas"); }}
          style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", cursor: "pointer" }}
        >
          <div className="content-stretch flex flex-col gap-[21.221px] items-center relative shrink-0 w-full" data-node-id="2081:135">
            <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[10.611px] py-[5.305px] relative rounded-[662.505px] shrink-0" data-node-id="2081:136">
              <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#feffaf] text-[11.937px] whitespace-nowrap" data-node-id="2081:137">
                B2B • ENTERPRISE • SAAS
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[11.937px] items-center relative shrink-0 text-center text-white w-full" data-node-id="2081:138">
              <p className="font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[13.263px] w-full" data-node-id="2081:139">
                Simplifying a complex network testing platform into a clearer, scalable experience
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[15.916px] not-italic relative shrink-0 text-[10.611px] w-full" data-node-id="2081:140">
                NXTAAS is an enterprise test automation platform used to manage network testing, automated jobs, testbeds, releases, regression cycles, and test results.
              </p>
            </div>
          </div>
          <div className="h-[207.12px] relative shrink-0 w-[340.229px]" data-node-id="2081:141" data-name="m1 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgM11} />
          </div>
          <div
            className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[14.676px] py-[5.407px] relative rounded-[7.958px] shrink-0"
            data-node-id="2081:142"
            onClick={() => { window.scrollTo(0, 0); navigate("/case-study/nxtaas"); }}
            style={{ cursor: "pointer", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[11.937px] text-white whitespace-nowrap" data-node-id="2081:143">
              View Case Study
            </p>
          </div>
        </div>

        {/* Card 2 — Orion CloudMax */}
        <div
          className="col-2 content-stretch flex flex-col gap-[33.139px] items-center justify-self-stretch p-[33.139px] relative rounded-[16.569px] row-1 self-start shrink-0"
          data-node-id="2081:144"
          onClick={() => { window.scrollTo(0, 0); navigate("/case-study/dish-genie"); }}
          style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", cursor: "pointer" }}
        >
          <div className="content-stretch flex flex-col gap-[21.221px] items-center relative shrink-0 w-full" data-node-id="2081:145">
            <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[10.611px] py-[5.305px] relative rounded-[662.505px] shrink-0" data-node-id="2081:146">
              <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#feffaf] text-[11.937px] whitespace-nowrap" data-node-id="2081:147">
                B2C • AI • FOOD DELIVERY
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[11.937px] items-center relative shrink-0 text-center text-white w-full" data-node-id="2081:148">
              <p className="font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[13.263px] w-full" data-node-id="2081:149">
                Designing an AI-powered SRE experience for faster, more transparent alert investigation
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[15.916px] not-italic relative shrink-0 text-[10.611px] w-full" data-node-id="2081:150">
                Orion CloudMax helps SRE teams triage production alerts using automated runbooks and AI-driven analysis across logs, metrics, and traces.
              </p>
            </div>
          </div>
          <div className="h-[206.891px] relative shrink-0 w-[257.108px]" data-node-id="2081:151" data-name="mock 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[177.08%] left-[0.11%] max-w-none top-[-16.77%] w-[100.57%]" loading="lazy" src={imgMock1} />
            </div>
          </div>
          <div
            className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[14.676px] py-[5.407px] relative rounded-[7.958px] shrink-0"
            data-node-id="2081:152"
            onClick={() => { window.scrollTo(0, 0); navigate("/case-study/dish-genie"); }}
            style={{ cursor: "pointer", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[11.937px] text-white whitespace-nowrap" data-node-id="2081:153">
              View Case Study
            </p>
          </div>
        </div>

        {/* Card 3 — Versar */}
        <div
          className="col-1 content-stretch flex flex-col gap-[31.832px] items-center justify-self-stretch p-[33.139px] relative rounded-[16.569px] row-2 self-start shrink-0"
          data-node-id="2081:154"
          onClick={() => { window.scrollTo(0, 0); navigate("/case-study/versar"); }}
          style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", cursor: "pointer" }}
        >
          <div className="content-stretch flex flex-col gap-[21.221px] items-center relative shrink-0 w-full" data-node-id="2081:155">
            <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[10.611px] py-[5.305px] relative rounded-[662.505px] shrink-0" data-node-id="2081:156">
              <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#feffaf] text-[11.937px] whitespace-nowrap" data-node-id="2081:157">
                B2B • GEOSPATIAL • SAAS
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[11.937px] items-center relative shrink-0 text-center text-white w-full" data-node-id="2081:158">
              <p className="font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[13.263px] w-full" data-node-id="2081:159">
                Designing a scalable administration experience for geospatial operations
              </p>
              <p className="font-['Inter:Regular'] font-normal leading-[15.916px] not-italic relative shrink-0 text-[10.611px] w-full" data-node-id="2081:160">
                Versar is a geospatial and digital solutions platform that helps organizations manage projects, users, organizations, and support operations.
              </p>
            </div>
          </div>
          <div className="h-[207.118px] relative shrink-0 w-[340.226px]" data-node-id="2081:161" data-name="s5 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgS51} />
          </div>
          <div
            className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[14.676px] py-[5.407px] relative rounded-[7.958px] shrink-0"
            data-node-id="2081:162"
            onClick={() => { window.scrollTo(0, 0); navigate("/case-study/versar"); }}
            style={{ cursor: "pointer", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[11.937px] text-white whitespace-nowrap" data-node-id="2081:163">
              View Case Study
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
