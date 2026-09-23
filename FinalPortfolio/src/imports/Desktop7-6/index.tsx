import { useNavigate } from "react-router";
import React, { useEffect, useRef, useState } from "react";

const assetPathPrefix = "/assets";
const imgAdobeXd = `${assetPathPrefix}/d6030.svg`;
const imgAdobeIllustrator = `${assetPathPrefix}/5d8a4.svg`;
const imgAdobePhotoshop = `${assetPathPrefix}/2ff3b.svg`;
const imgFigma = `${assetPathPrefix}/060ca.svg`;
const imgVecteezyDisplayOfFiveCanvaLogoStylesWithRoundAndSquare668350671 = `${assetPathPrefix}/c3faa.png`;
const imgImage281 = `${assetPathPrefix}/56017.png`;
const imgImage27 = `${assetPathPrefix}/ffaf9.png`;
const imgImage = `${assetPathPrefix}/8a7e0.png`;
const imgS11 = `${assetPathPrefix}/be4d7.png`;
const imgAvatar = `${assetPathPrefix}/d94d0.png`;
const imgCb1 = `${assetPathPrefix}/0dc30.png`;
const imgRectangle = `${assetPathPrefix}/b8997.png`;
const imgRectangle1 = `${assetPathPrefix}/4cdfc.png`;
const imgRectangle2 = `${assetPathPrefix}/8d045.png`;
const imgRectangle3 = `${assetPathPrefix}/80079.png`;
const imgRectangle4 = `${assetPathPrefix}/06535.png`;
const imgRectangle5 = `${assetPathPrefix}/c5889.png`;
const imgImage6 = `${assetPathPrefix}/f4651.png`;
const imgRectangle6 = `${assetPathPrefix}/0d35d.png`;
const imgRectangle7 = `${assetPathPrefix}/123ea.png`;
const imgImage282 = `${assetPathPrefix}/8c2e9.png`;
const imgImage283 = `${assetPathPrefix}/5b805.png`;
const imgImage295 = `${assetPathPrefix}/88115.png`;
const imgPath70 = `${assetPathPrefix}/194a1.svg`;
const imgPath72 = `${assetPathPrefix}/08c8a.svg`;
const imgPath74 = `${assetPathPrefix}/dfe72.svg`;
const imgG78 = `${assetPathPrefix}/55eff.svg`;
const imgPath92 = `${assetPathPrefix}/27d5e.svg`;
const imgPath94 = `${assetPathPrefix}/2c342.svg`;
const imgPath96 = `${assetPathPrefix}/7abb9.svg`;
const imgG100 = `${assetPathPrefix}/75c73.svg`;
const imgG116 = `${assetPathPrefix}/1aab4.svg`;
const imgPath130 = `${assetPathPrefix}/2ea08.svg`;
const imgG134 = `${assetPathPrefix}/99ca6.svg`;
const imgPath148 = `${assetPathPrefix}/31a69.svg`;
const imgG152 = `${assetPathPrefix}/93964.svg`;
const imgG168 = `${assetPathPrefix}/cb174.svg`;
const imgPath184 = `${assetPathPrefix}/362ba.svg`;
const imgPath186 = `${assetPathPrefix}/02e8b.svg`;
const imgPath188 = `${assetPathPrefix}/e3456.svg`;
const imgPath190 = `${assetPathPrefix}/83e95.svg`;
const imgPath192 = `${assetPathPrefix}/5feaf.svg`;
const imgPath194 = `${assetPathPrefix}/8c902.svg`;
const imgPath196 = `${assetPathPrefix}/2dd43.svg`;
const imgPath198 = `${assetPathPrefix}/dac4e.svg`;
const imgPath200 = `${assetPathPrefix}/07258.svg`;
const imgPath202 = `${assetPathPrefix}/5e855.svg`;
const imgPath204 = `${assetPathPrefix}/10276.svg`;
const imgPath206 = `${assetPathPrefix}/43816.svg`;
const imgPath208 = `${assetPathPrefix}/d625d.svg`;
const imgPath210 = `${assetPathPrefix}/6984a.svg`;
const imgG214 = `${assetPathPrefix}/a9e91.svg`;
const imgPath228 = `${assetPathPrefix}/2975e.svg`;
const imgPath230 = `${assetPathPrefix}/85d7c.svg`;
const imgPath232 = `${assetPathPrefix}/40b3c.svg`;
const imgPath646 = `${assetPathPrefix}/ff9e2.svg`;
const imgPath648 = `${assetPathPrefix}/e64be.svg`;
const imgPath650 = `${assetPathPrefix}/10225.svg`;
const imgPath652 = `${assetPathPrefix}/c3a18.svg`;
const imgPath654 = `${assetPathPrefix}/e2e70.svg`;
const imgPath656 = `${assetPathPrefix}/6f67e.svg`;
const imgPath658 = `${assetPathPrefix}/38cef.svg`;
const imgPath660 = `${assetPathPrefix}/1a676.svg`;
const imgPath662 = `${assetPathPrefix}/69042.svg`;
const imgPath664 = `${assetPathPrefix}/2ed45.svg`;
const imgPath666 = `${assetPathPrefix}/b26b5.svg`;
const imgPath668 = `${assetPathPrefix}/e3d1f.svg`;
const imgPath670 = `${assetPathPrefix}/cee6a.svg`;
const imgPath672 = `${assetPathPrefix}/f66c3.svg`;
const imgPath674 = `${assetPathPrefix}/43e22.svg`;
const imgPath676 = `${assetPathPrefix}/d8fec.svg`;
const imgPath678 = `${assetPathPrefix}/b37ea.svg`;
const imgPath680 = `${assetPathPrefix}/31c77.svg`;
const imgPath682 = `${assetPathPrefix}/39e80.svg`;
const imgPath684 = `${assetPathPrefix}/3378f.svg`;
const imgPath686 = `${assetPathPrefix}/2aacd.svg`;
const imgPath688 = `${assetPathPrefix}/bab59.svg`;
const imgPath690 = `${assetPathPrefix}/4dfe7.svg`;
const imgPath692 = `${assetPathPrefix}/29da8.svg`;
const imgPath694 = `${assetPathPrefix}/e8add.svg`;
const imgPath696 = `${assetPathPrefix}/5afcf.svg`;
const imgPath698 = `${assetPathPrefix}/49909.svg`;
const imgPath700 = `${assetPathPrefix}/c7b47.svg`;
const imgPath702 = `${assetPathPrefix}/79248.svg`;
const imgPath704 = `${assetPathPrefix}/ad317.svg`;
const imgPath706 = `${assetPathPrefix}/a64e4.svg`;
const imgPath708 = `${assetPathPrefix}/370f2.svg`;
const imgPath710 = `${assetPathPrefix}/15617.svg`;
const imgPath712 = `${assetPathPrefix}/11e33.svg`;
const imgPath714 = `${assetPathPrefix}/27250.svg`;
const imgPath716 = `${assetPathPrefix}/9dfe4.svg`;
const imgPath718 = `${assetPathPrefix}/5ab1b.svg`;
const imgPath720 = `${assetPathPrefix}/afceb.svg`;
const imgPath722 = `${assetPathPrefix}/90467.svg`;
const imgG726 = `${assetPathPrefix}/8d229.svg`;
const imgPath742 = `${assetPathPrefix}/aaf73.svg`;
const imgPath744 = `${assetPathPrefix}/86a8f.svg`;
const imgPath746 = `${assetPathPrefix}/19a5b.svg`;
const imgPath748 = `${assetPathPrefix}/c6031.svg`;
const imgPath750 = `${assetPathPrefix}/e383a.svg`;
const imgPath752 = `${assetPathPrefix}/2efec.svg`;
const imgPath1028 = `${assetPathPrefix}/d9314.svg`;
const imgPath1030 = `${assetPathPrefix}/d77bf.svg`;
const imgG1034 = `${assetPathPrefix}/5d89e.svg`;
const imgPath1378 = `${assetPathPrefix}/f252a.svg`;
const imgPath1380 = `${assetPathPrefix}/ed24a.svg`;
const imgPath1382 = `${assetPathPrefix}/d1bd4.svg`;
const imgWater = `${assetPathPrefix}/2736a.svg`;
const imgGroup1 = `${assetPathPrefix}/929dc.svg`;
const imgLine11 = `${assetPathPrefix}/4c194.svg`;
const imgTablerSparkle = `${assetPathPrefix}/657ef.svg`;
const imgGroup2 = `${assetPathPrefix}/479ff.svg`;
const imgGroup4 = `${assetPathPrefix}/cb5d4.svg`;
const imgGroup5 = `${assetPathPrefix}/4e4cb.svg`;
const imgGroup3 = `${assetPathPrefix}/1bf9c.svg`;
const imgSubtract = `${assetPathPrefix}/92683.svg`;
const imgHeroStamp = `${assetPathPrefix}/image-5.png`;
const imgClipPathGroup = `${assetPathPrefix}/4f7c8.svg`;
const imgVector = `${assetPathPrefix}/c2c77.svg`;
const imgVector1 = `${assetPathPrefix}/956f4.svg`;
const imgVector2 = `${assetPathPrefix}/89413.svg`;
const imgVector3 = `${assetPathPrefix}/51016.svg`;
const imgVector4 = `${assetPathPrefix}/c8b30.svg`;
const imgVector5 = `${assetPathPrefix}/aaff7.svg`;
const imgVector6 = `${assetPathPrefix}/ef5cc.svg`;
const imgVector7 = `${assetPathPrefix}/75541.svg`;
const imgVector8 = `${assetPathPrefix}/8301f.svg`;
const imgEllipse6 = `${assetPathPrefix}/6bfc9.svg`;
const imgVector9 = `${assetPathPrefix}/f3e1d.svg`;
const imgVector10 = `${assetPathPrefix}/8260f.svg`;
const imgVector11 = `${assetPathPrefix}/e3c37.svg`;
const imgVector12 = `${assetPathPrefix}/fa8be.svg`;
const imgVector13 = `${assetPathPrefix}/94022.svg`;
const imgVector14 = `${assetPathPrefix}/74593.svg`;
const imgVector15 = `${assetPathPrefix}/04362.svg`;
const imgVector16 = `${assetPathPrefix}/39cf4.svg`;
const imgVector17 = `${assetPathPrefix}/d7032.svg`;
const imgVector18 = `${assetPathPrefix}/182b1.svg`;
const imgVector19 = `${assetPathPrefix}/00902.svg`;
const imgIcon = `${assetPathPrefix}/04d57.svg`;
const imgIcon1 = `${assetPathPrefix}/ba609.svg`;
const imgMaterialSymbolsInfoOutlineRounded = `${assetPathPrefix}/d0b55.svg`;
const imgIcon2 = `${assetPathPrefix}/b037e.svg`;
const imgMaterialSymbolsInfoOutlineRounded1 = `${assetPathPrefix}/4f6d8.svg`;
const imgVector20 = `${assetPathPrefix}/4c7bb.svg`;
const imgVector21 = `${assetPathPrefix}/1cd83.svg`;
const imgMaterialSymbolsInfoOutlineRounded2 = `${assetPathPrefix}/da39d.svg`;
const imgIcon3 = `${assetPathPrefix}/51898.svg`;
const imgMaterialSymbolsInfoOutlineRounded3 = `${assetPathPrefix}/3b241.svg`;
const imgEllipse4 = `${assetPathPrefix}/31ade.svg`;
const imgEllipse5 = `${assetPathPrefix}/3f80c.svg`;
const imgGroup = `${assetPathPrefix}/ff367.svg`;
const imgVector22 = `${assetPathPrefix}/96374.svg`;
const imgVector23 = `${assetPathPrefix}/0cd6f.svg`;
const imgVector24 = `${assetPathPrefix}/13d16.svg`;
const imgVector25 = `${assetPathPrefix}/adf06.svg`;
const imgVector26 = `${assetPathPrefix}/50d22.svg`;
const imgVector27 = `${assetPathPrefix}/e7b26.svg`;
const imgVector28 = `${assetPathPrefix}/b4c71.svg`;
const imgGroup6 = `${assetPathPrefix}/1770c.svg`;
const imgGroup7 = `${assetPathPrefix}/71cca.svg`;
const imgGroup8 = `${assetPathPrefix}/3fb18.svg`;
const imgGroup9 = `${assetPathPrefix}/398d9.svg`;
const imgGroup10 = `${assetPathPrefix}/68aea.svg`;
const imgGroup11 = `${assetPathPrefix}/9b79a.svg`;
const imgGroup12 = `${assetPathPrefix}/5858c.svg`;
const imgGroup13 = `${assetPathPrefix}/9773c.svg`;
const imgGroup14 = `${assetPathPrefix}/f26ed.svg`;
const imgGroup15 = `${assetPathPrefix}/a5730.svg`;
const imgGroup16 = `${assetPathPrefix}/bdbbb.svg`;
const imgGroup17 = `${assetPathPrefix}/91cbd.svg`;
const imgVector29 = `${assetPathPrefix}/df11b.svg`;
const imgVector30 = `${assetPathPrefix}/478ee.svg`;
const imgVector31 = `${assetPathPrefix}/a2c59.svg`;
const imgVector32 = `${assetPathPrefix}/17249.svg`;
const imgVector33 = `${assetPathPrefix}/77015.svg`;
const imgVector34 = `${assetPathPrefix}/01d7b.svg`;
const imgGroup18 = `${assetPathPrefix}/e94d2.svg`;
const imgGroup19 = `${assetPathPrefix}/c292a.svg`;
const imgGroup20 = `${assetPathPrefix}/dd24b.svg`;
const imgGroup21 = `${assetPathPrefix}/9df2c.svg`;
const imgGroup22 = `${assetPathPrefix}/09ff8.svg`;
const imgGroup23 = `${assetPathPrefix}/b3dc7.svg`;
const imgGroup24 = `${assetPathPrefix}/79c42.svg`;
const imgFrame1410076839 = `${assetPathPrefix}/151c7.svg`;
const imgCircle = `${assetPathPrefix}/424da.svg`;
const imgBaseStepperNum = `${assetPathPrefix}/49844.svg`;
const imgMaterialSymbolsSearchRounded = `${assetPathPrefix}/22a30.svg`;
const imgFrame26 = `${assetPathPrefix}/e5e15.svg`;
const imgFrame27 = `${assetPathPrefix}/b4c6e.svg`;
const imgEllipse139 = `${assetPathPrefix}/fd2a7.svg`;
const imgEllipse137 = `${assetPathPrefix}/4f552.svg`;
const imgCheckmarkFilled = `${assetPathPrefix}/df18b.svg`;
const imgErrorFilled = `${assetPathPrefix}/84861.svg`;
const imgGroup5500 = `${assetPathPrefix}/b36d7.svg`;
const imgGroup5501 = `${assetPathPrefix}/9f3b6.svg`;
const imgGroup1410076684 = `${assetPathPrefix}/cabed.svg`;
const imgGroup5497 = `${assetPathPrefix}/5d472.svg`;
const imgVector35 = `${assetPathPrefix}/9b546.svg`;
const imgVector36 = `${assetPathPrefix}/17e8a.svg`;
const imgGroup1410076685 = `${assetPathPrefix}/ae5d6.svg`;
const imgLocation = `${assetPathPrefix}/e8135.svg`;
const imgQuery = `${assetPathPrefix}/fb98b.svg`;
const imgDevicesApps = `${assetPathPrefix}/20ab4.svg`;
const imgChevronDown = `${assetPathPrefix}/660ed.svg`;
const imgChevronDown1 = `${assetPathPrefix}/a8846.svg`;
const imgChevronLeft = `${assetPathPrefix}/e695c.svg`;
const imgChevronRight = `${assetPathPrefix}/96c08.svg`;
const imgArrowLeft = `${assetPathPrefix}/18c91.svg`;
const imgArrowRight = `${assetPathPrefix}/0e53a.svg`;
const imgAi = `${assetPathPrefix}/7aa76.svg`;
const imgEllipse38 = `${assetPathPrefix}/caffc.svg`;
const imgVector48Stroke = `${assetPathPrefix}/eda00.svg`;
const imgVector48Stroke1 = `${assetPathPrefix}/a617e.svg`;
const imgVector47 = `${assetPathPrefix}/1fe1b.svg`;
const imgVector48 = `${assetPathPrefix}/bb03f.svg`;
const imgEllipse37 = `${assetPathPrefix}/8e7db.svg`;
const imgVector37 = `${assetPathPrefix}/4d582.svg`;
const imgVector38 = `${assetPathPrefix}/9178f.svg`;
const imgGroup1000003904 = `${assetPathPrefix}/b3703.svg`;
const imgAi1 = `${assetPathPrefix}/7b9c6.svg`;
const imgGroup1000004068 = `${assetPathPrefix}/3b1c8.svg`;
const imgGroup1000004075 = `${assetPathPrefix}/0a121.svg`;
const imgVector49Stroke = `${assetPathPrefix}/61e9b.svg`;
const imgEllipse39 = `${assetPathPrefix}/ff98b.svg`;
const imgEllipse40 = `${assetPathPrefix}/6ed09.svg`;
const imgGroup1000004069 = `${assetPathPrefix}/c5a7b.svg`;
const imgGroup1000004070 = `${assetPathPrefix}/c540b.svg`;
const imgEllipse41 = `${assetPathPrefix}/b288b.svg`;
const imgUnion = `${assetPathPrefix}/73107.svg`;
const imgEllipse42 = `${assetPathPrefix}/606bc.svg`;
const imgAi2 = `${assetPathPrefix}/42f3a.svg`;
const imgGroup1000004078 = `${assetPathPrefix}/149c1.svg`;
const imgVector568 = `${assetPathPrefix}/04634.svg`;
const imgVector569 = `${assetPathPrefix}/714b8.svg`;
const imgEllipse43 = `${assetPathPrefix}/ecd78.svg`;
const imgEllipse44 = `${assetPathPrefix}/c5afe.svg`;
const imgEllipse45 = `${assetPathPrefix}/d200a.svg`;
const imgGroup1000004139 = `${assetPathPrefix}/bb76c.svg`;
const imgGroup1000004140 = `${assetPathPrefix}/ca5b9.svg`;
const imgIcon4 = `${assetPathPrefix}/ac224.svg`;
const imgIcon5 = `${assetPathPrefix}/aa1b7.svg`;
const imgDivider1 = `${assetPathPrefix}/b0ca6.svg`;
const imgIcon6 = `${assetPathPrefix}/ae4bb.svg`;
const imgGroup25 = `${assetPathPrefix}/602a6.svg`;
const imgSubtract1 = `${assetPathPrefix}/30d62.svg`;

function AdobeXd({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[70px]"} data-node-id="2001:1137" data-name="adobe_xd">
      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgAdobeXd} />
    </div>
  );
}

function AdobeIllustrator({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[70px]"} data-node-id="2001:1134" data-name="adobe_illustrator">
      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgAdobeIllustrator} />
    </div>
  );
}

function AdobePhotoshop({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[70px]"} data-node-id="2001:1131" data-name="adobe_photoshop">
      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgAdobePhotoshop} />
    </div>
  );
}

function Figma({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[70px]"} data-node-id="2001:1124" data-name="figma">
      <div className="absolute bottom-[12.5%] left-1/4 right-1/4 top-[12.5%]" data-node-id="2001:1125" data-name="figma">
        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgFigma} />
      </div>
    </div>
  );
}

type Component336Props = {
  className?: string;
  property1?: "Frame 1984080982";
};

const toolLabelStyle: React.CSSProperties = {
  fontFamily: '"Space Mono", monospace',
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 24,
  whiteSpace: "nowrap",
  color: "#000",
};

function ToolsStrip() {
  return (
    <>
      <div className="content-stretch flex gap-[24px] items-center pr-[24px] shrink-0">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <Figma className="overflow-clip relative shrink-0 size-[70px]" />
          <p style={toolLabelStyle}>FIGMA</p>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <AdobePhotoshop className="relative shrink-0 size-[70px]" />
          <p style={toolLabelStyle}>ADOBE PHOTOSHOP</p>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <AdobeIllustrator className="relative shrink-0 size-[70px]" />
          <p style={toolLabelStyle}>ADOBE ILLUSTRATOR</p>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <div className="relative shrink-0 size-[70px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgVecteezyDisplayOfFiveCanvaLogoStylesWithRoundAndSquare668350671} />
          </div>
          <p style={toolLabelStyle}>CANVA</p>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <div className="relative shrink-0 size-[70px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[174.78%] left-[-33.26%] max-w-none top-[-36.9%] w-[165.33%]" loading="lazy" src={imgImage281} />
            </div>
          </div>
          <p style={toolLabelStyle}>MIRO</p>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          <AdobeXd className="relative shrink-0 size-[70px]" />
          <p style={toolLabelStyle}>ADOBE XD</p>
        </div>
      </div>
    </>
  );
}

function Component336({ className, property1 = "Frame 1984080982" }: Component336Props) {
  return (
    <div className={className || "h-[70px] overflow-clip relative w-[1440px]"} data-node-id="2001:1141">
      <div
        className="flex items-center h-full"
        style={{ animation: "tools-marquee 18s linear infinite", width: "max-content" }}
      >
        <ToolsStrip />
        <ToolsStrip />
      </div>
    </div>
  );
}

export default function Desktop({ scale = 1 }: { scale?: number }) {
  const navigate = useNavigate();
  const c0 = useRef<HTMLDivElement>(null);
  const c1 = useRef<HTMLDivElement>(null);
  const c2 = useRef<HTMLDivElement>(null);
  const c3 = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // Canvas px: where each card sits naturally (Section3 top=1527 + container top=243)
  const CARD_TOPS = [1770, 2312.716, 2855.432, 3398.148];
  const STICKY_VP = [246, 274, 302, 330];
  // "Featured Works" sits 86.48px above Card 1 in canvas space → VP target ≈ 199.52px
  const FEATURED_WORKS_VP_TARGET = STICKY_VP[0] - (CARD_TOPS[0] - 1683.52);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function cardDepth(i: number): number {
    // How deeply stacked is card i (0 = not stacked, 1 = fully stacked)
    const vh = window.innerHeight;
    const nat = CARD_TOPS[i] * scale - scrollY; // viewport px (top of card)
    const target = STICKY_VP[i];
    if (nat >= target) return 0;
    return Math.min(1, (target - nat) / (vh * 0.38));
  }

  return (
    <div className="bg-gradient-to-b from-[#4496ff] relative size-full to-[#8ec7ff] to-[30.316%]" data-node-id="2001:1291" data-name="Desktop - 7">
      <div className="-translate-x-1/2 absolute contents left-[calc(50%+0.16px)] top-[1034px]" data-node-id="2001:1292" data-name="Section 2">
        <div className="absolute contents left-[-4px] top-[1034px]" data-node-id="2001:1293" data-name="Mountain">
          <div className="absolute flex h-[190.895px] items-center justify-center left-[580.54px] top-[1109.68px] w-[304.447px]" data-node-id="2001:1294">
            <div className="-scale-y-100 flex-none">
              <div className="h-[190.895px] relative w-[304.447px]" data-name="path70">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath70} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[35.938px] items-center justify-center left-[732.11px] top-[1137.64px] w-[27.757px]" data-node-id="2001:1295">
            <div className="-scale-y-100 flex-none">
              <div className="h-[35.938px] relative w-[27.757px]" data-name="path72">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath72} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[30.449px] items-center justify-center left-[764.63px] top-[1151.56px] w-[29.853px]" data-node-id="2001:1296">
            <div className="-scale-y-100 flex-none">
              <div className="h-[30.449px] relative w-[29.853px]" data-name="path74">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath74} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[705.06px] top-[1125.87px]" data-node-id="2001:1297" data-name="g76">
            <div className="absolute flex h-[62.796px] items-center justify-center left-[705.06px] top-[1125.87px] w-[67.658px]" data-node-id="2001:1298">
              <div className="-scale-y-100 flex-none">
                <div className="h-[62.796px] relative w-[67.658px]" data-name="g78">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgG78} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[26.263px] items-center justify-center left-[760.37px] top-[1172.85px] w-[24.126px]" data-node-id="2001:1300">
            <div className="-scale-y-100 flex-none">
              <div className="h-[26.263px] relative w-[24.126px]" data-name="path92">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath92} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[74px] items-center justify-center left-[619.54px] top-[1110.85px] w-[106.009px]" data-node-id="2001:1301">
            <div className="-scale-y-100 flex-none">
              <div className="h-[74px] relative w-[106.009px]" data-name="path94">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath94} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[65.861px] items-center justify-center left-[625.28px] top-[1141.37px] w-[75.625px]" data-node-id="2001:1302">
            <div className="-scale-y-100 flex-none">
              <div className="h-[65.861px] relative w-[75.625px]" data-name="path96">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath96} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[678.97px] top-[1111.16px]" data-node-id="2001:1303" data-name="g98">
            <div className="absolute flex h-[81.579px] items-center justify-center left-[678.97px] top-[1111.16px] w-[73.861px]" data-node-id="2001:1304">
              <div className="-scale-y-100 flex-none">
                <div className="h-[81.579px] relative w-[73.861px]" data-name="g100">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgG100} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[672.97px] top-[1174.07px]" data-node-id="2001:1306" data-name="g114">
            <div className="absolute flex h-[21.676px] items-center justify-center left-[672.97px] top-[1174.07px] w-[48.986px]" data-node-id="2001:1307">
              <div className="-scale-y-100 flex-none">
                <div className="h-[21.676px] relative w-[48.986px]" data-name="g116">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgG116} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[52.745px] items-center justify-center left-[679.93px] top-[1141.96px] w-[47.291px]" data-node-id="2001:1309">
            <div className="-scale-y-100 flex-none">
              <div className="h-[52.745px] relative w-[47.291px]" data-name="path130">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath130} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[720.16px] top-[1180.56px]" data-node-id="2001:1310" data-name="g132">
            <div className="absolute flex h-[33.057px] items-center justify-center left-[720.16px] top-[1180.56px] w-[57.927px]" data-node-id="2001:1311">
              <div className="-scale-y-100 flex-none">
                <div className="h-[33.057px] relative w-[57.927px]" data-name="g134">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgG134} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[37.29px] items-center justify-center left-[753.53px] top-[1175.26px] w-[53.194px]" data-node-id="2001:1313">
            <div className="-scale-y-100 flex-none">
              <div className="h-[37.29px] relative w-[53.194px]" data-name="path148">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath148} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[670.33px] top-[1186.65px]" data-node-id="2001:1314" data-name="g150">
            <div className="absolute flex h-[50.127px] items-center justify-center left-[670.33px] top-[1186.65px] w-[53.64px]" data-node-id="2001:1315">
              <div className="-scale-y-100 flex-none">
                <div className="h-[50.127px] relative w-[53.64px]" data-name="g152">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgG152} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[335.84px] top-[1155.23px]" data-node-id="2001:1317" data-name="g166">
            <div className="absolute flex h-[269.461px] items-center justify-center left-[335.84px] top-[1155.23px] w-[1102.159px]" data-node-id="2001:1318">
              <div className="-scale-y-100 flex-none">
                <div className="h-[269.461px] relative w-[1102.159px]" data-name="g168">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgG168} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[45.144px] items-center justify-center left-[930.33px] top-[1187.39px] w-[83.136px]" data-node-id="2001:1320">
            <div className="-scale-y-100 flex-none">
              <div className="h-[45.144px] relative w-[83.136px]" data-name="path184">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath184} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[81.57px] items-center justify-center left-[1309.84px] top-[1156.1px] w-[128.095px]" data-node-id="2001:1321">
            <div className="-scale-y-100 flex-none">
              <div className="h-[81.57px] relative w-[128.095px]" data-name="path186">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath186} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[51.319px] items-center justify-center left-[1204.76px] top-[1172.21px] w-[40.636px]" data-node-id="2001:1322">
            <div className="-scale-y-100 flex-none">
              <div className="h-[51.319px] relative w-[40.636px]" data-name="path188">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath188} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[35.339px] items-center justify-center left-[1152.62px] top-[1185.35px] w-[42.097px]" data-node-id="2001:1323">
            <div className="-scale-y-100 flex-none">
              <div className="h-[35.339px] relative w-[42.097px]" data-name="path190">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath190} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[69.87px] items-center justify-center left-[1082.12px] top-[1221px] w-[75.5px]" data-node-id="2001:1324">
            <div className="-scale-y-100 flex-none">
              <div className="h-[69.87px] relative w-[75.5px]" data-name="path192">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath192} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[36.934px] items-center justify-center left-[1156.37px] top-[1222.68px] w-[47.528px]" data-node-id="2001:1325">
            <div className="-scale-y-100 flex-none">
              <div className="h-[36.934px] relative w-[47.528px]" data-name="path194">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath194} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[42.443px] items-center justify-center left-[759.36px] top-[1227.15px] w-[18.999px]" data-node-id="2001:1326">
            <div className="-scale-y-100 flex-none">
              <div className="h-[42.443px] relative w-[18.999px]" data-name="path196">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath196} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[34.147px] items-center justify-center left-[858.84px] top-[1203.28px] w-[32.82px]" data-node-id="2001:1327">
            <div className="-scale-y-100 flex-none">
              <div className="h-[34.147px] relative w-[32.82px]" data-name="path198">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath198} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[123.848px] items-center justify-center left-[966.97px] top-[1231.38px] w-[140.637px]" data-node-id="2001:1328">
            <div className="-scale-y-100 flex-none">
              <div className="h-[123.848px] relative w-[140.637px]" data-name="path200">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath200} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[101.978px] items-center justify-center left-[750.04px] top-[1245.68px] w-[115.254px]" data-node-id="2001:1329">
            <div className="-scale-y-100 flex-none">
              <div className="h-[101.978px] relative w-[115.254px]" data-name="path202">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath202} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[20.915px] items-center justify-center left-[792.45px] top-[1235.76px] w-[64.06px]" data-node-id="2001:1330">
            <div className="-scale-y-100 flex-none">
              <div className="h-[20.915px] relative w-[64.06px]" data-name="path204">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath204} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[60.936px] items-center justify-center left-[946.75px] top-[1231.13px] w-[35.411px]" data-node-id="2001:1331">
            <div className="-scale-y-100 flex-none">
              <div className="h-[60.936px] relative w-[35.411px]" data-name="path206">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath206} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[48.31px] items-center justify-center left-[653.52px] top-[1305.99px] w-[59.987px]" data-node-id="2001:1332">
            <div className="-scale-y-100 flex-none">
              <div className="h-[48.31px] relative w-[59.987px]" data-name="path208">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath208} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[41.787px] items-center justify-center left-[851.27px] top-[1310.34px] w-[42.879px]" data-node-id="2001:1333">
            <div className="-scale-y-100 flex-none">
              <div className="h-[41.787px] relative w-[42.879px]" data-name="path210">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath210} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[1016.01px] top-[1215.83px]" data-node-id="2001:1334" data-name="g212">
            <div className="absolute flex h-[162.893px] items-center justify-center left-[1016.01px] top-[1215.83px] w-[391.397px]" data-node-id="2001:1335">
              <div className="-scale-y-100 flex-none">
                <div className="h-[162.893px] relative w-[391.397px]" data-name="g214">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgG214} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[124.435px] items-center justify-center left-[1239.82px] top-[1228.57px] w-[180.074px]" data-node-id="2001:1337">
            <div className="-scale-y-100 flex-none">
              <div className="h-[124.435px] relative w-[180.074px]" data-name="path228">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath228} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[64.621px] items-center justify-center left-[889.64px] top-[1310.34px] w-[85.754px]" data-node-id="2001:1338">
            <div className="-scale-y-100 flex-none">
              <div className="h-[64.621px] relative w-[85.754px]" data-name="path230">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath230} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[57.891px] items-center justify-center left-[1311.62px] top-[1154.95px] w-[103.808px]" data-node-id="2001:1339">
            <div className="-scale-y-100 flex-none">
              <div className="h-[57.891px] relative w-[103.808px]" data-name="path232">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath232} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[415.764px] items-center justify-center left-[-4px] top-[1035.51px] w-[924.04px]" data-node-id="2001:1340">
            <div className="-scale-y-100 flex-none">
              <div className="h-[415.764px] relative w-[924.04px]" data-name="path646">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath646} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[91.346px] items-center justify-center left-[459.8px] top-[1153.61px] w-[123.925px]" data-node-id="2001:1341">
            <div className="-scale-y-100 flex-none">
              <div className="h-[91.346px] relative w-[123.925px]" data-name="path648">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath648} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[209.078px] items-center justify-center left-[279.54px] top-[1055.91px] w-[225.322px]" data-node-id="2001:1342">
            <div className="-scale-y-100 flex-none">
              <div className="h-[209.078px] relative w-[225.322px]" data-name="path650">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath650} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[165.824px] items-center justify-center left-[290.8px] top-[1126.97px] w-[143.641px]" data-node-id="2001:1343">
            <div className="-scale-y-100 flex-none">
              <div className="h-[165.824px] relative w-[143.641px]" data-name="path652">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath652} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[194.115px] items-center justify-center left-[329.53px] top-[1035.51px] w-[323.139px]" data-node-id="2001:1344">
            <div className="-scale-y-100 flex-none">
              <div className="h-[194.115px] relative w-[323.139px]" data-name="path654">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath654} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[30.865px] items-center justify-center left-[256.44px] top-[1101.27px] w-[12.986px]" data-node-id="2001:1345">
            <div className="-scale-y-100 flex-none">
              <div className="h-[30.865px] relative w-[12.986px]" data-name="path656">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath656} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[39.281px] items-center justify-center left-[263.78px] top-[1138.86px] w-[28.792px]" data-node-id="2001:1346">
            <div className="-scale-y-100 flex-none">
              <div className="h-[39.281px] relative w-[28.792px]" data-name="path658">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath658} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[49.464px] items-center justify-center left-[278.74px] top-[1178.83px] w-[46.013px]" data-node-id="2001:1347">
            <div className="-scale-y-100 flex-none">
              <div className="h-[49.464px] relative w-[46.013px]" data-name="path660">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath660} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[19.873px] items-center justify-center left-[281.56px] top-[1079.11px] w-[13.55px]" data-node-id="2001:1348">
            <div className="-scale-y-100 flex-none">
              <div className="h-[19.873px] relative w-[13.55px]" data-name="path662">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath662} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[34.803px] items-center justify-center left-[279.87px] top-[1098.46px] w-[17.22px]" data-node-id="2001:1349">
            <div className="-scale-y-100 flex-none">
              <div className="h-[34.803px] relative w-[17.22px]" data-name="path664">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath664} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[39.62px] items-center justify-center left-[306.68px] top-[1158.6px] w-[35.286px]" data-node-id="2001:1350">
            <div className="-scale-y-100 flex-none">
              <div className="h-[39.62px] relative w-[35.286px]" data-name="path666">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath666} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[34.819px] items-center justify-center left-[341.41px] top-[1156.67px] w-[34.156px]" data-node-id="2001:1351">
            <div className="-scale-y-100 flex-none">
              <div className="h-[34.819px] relative w-[34.156px]" data-name="path668">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath668} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[69.659px] items-center justify-center left-[324.19px] top-[1105.63px] w-[46.689px]" data-node-id="2001:1352">
            <div className="-scale-y-100 flex-none">
              <div className="h-[69.659px] relative w-[46.689px]" data-name="path670">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath670} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[40.757px] items-center justify-center left-[318.26px] top-[1054.18px] w-[45.731px]" data-node-id="2001:1353">
            <div className="-scale-y-100 flex-none">
              <div className="h-[40.757px] relative w-[45.731px]" data-name="path672">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath672} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[13.85px] items-center justify-center left-[364.27px] top-[1100.88px] w-[19.477px]" data-node-id="2001:1354">
            <div className="-scale-y-100 flex-none">
              <div className="h-[13.85px] relative w-[19.477px]" data-name="path674">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath674} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[41.549px] items-center justify-center left-[360.04px] top-[1128.58px] w-[34.438px]" data-node-id="2001:1355">
            <div className="-scale-y-100 flex-none">
              <div className="h-[41.549px] relative w-[34.438px]" data-name="path676">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath676} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[24.533px] items-center justify-center left-[383.18px] top-[1205.74px] w-[20.89px]" data-node-id="2001:1356">
            <div className="-scale-y-100 flex-none">
              <div className="h-[24.533px] relative w-[20.89px]" data-name="path678">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath678} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[75.977px] items-center justify-center left-[349.59px] top-[1206.13px] w-[106.987px]" data-node-id="2001:1357">
            <div className="-scale-y-100 flex-none">
              <div className="h-[75.977px] relative w-[106.987px]" data-name="path680">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath680} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[53.421px] items-center justify-center left-[357.78px] top-[1034px] w-[70.289px]" data-node-id="2001:1358">
            <div className="-scale-y-100 flex-none">
              <div className="h-[53.421px] relative w-[70.289px]" data-name="path682">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath682} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[102.26px] items-center justify-center left-[389.96px] top-[1061.31px] w-[108.961px]" data-node-id="2001:1359">
            <div className="-scale-y-100 flex-none">
              <div className="h-[102.26px] relative w-[108.961px]" data-name="path684">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath684} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[34.425px] items-center justify-center left-[409.15px] top-[1125.41px] w-[40.648px]" data-node-id="2001:1360">
            <div className="-scale-y-100 flex-none">
              <div className="h-[34.425px] relative w-[40.648px]" data-name="path686">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath686} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[14.289px] items-center justify-center left-[423.84px] top-[1154.25px] w-[21.454px]" data-node-id="2001:1361">
            <div className="-scale-y-100 flex-none">
              <div className="h-[14.289px] relative w-[21.454px]" data-name="path688">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath688} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[28.491px] items-center justify-center left-[391.23px] top-[1137.68px] w-[26.113px]" data-node-id="2001:1362">
            <div className="-scale-y-100 flex-none">
              <div className="h-[28.491px] relative w-[26.113px]" data-name="path690">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath690} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[26.514px] items-center justify-center left-[429.2px] top-[1213.26px] w-[27.667px]" data-node-id="2001:1363">
            <div className="-scale-y-100 flex-none">
              <div className="h-[26.514px] relative w-[27.667px]" data-name="path692">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath692} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[21.438px] items-center justify-center left-[456.01px] top-[1244.91px] w-[21.454px]" data-node-id="2001:1364">
            <div className="-scale-y-100 flex-none">
              <div className="h-[21.438px] relative w-[21.454px]" data-name="path694">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath694} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[193.077px] items-center justify-center left-[456.09px] top-[1070.92px] w-[262.873px]" data-node-id="2001:1365">
            <div className="-scale-y-100 flex-none">
              <div className="h-[193.077px] relative w-[262.873px]" data-name="path696">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath696} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[145.584px] items-center justify-center left-[429.87px] top-[1173.59px] w-[162.288px]" data-node-id="2001:1366">
            <div className="-scale-y-100 flex-none">
              <div className="h-[145.584px] relative w-[162.288px]" data-name="path698">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath698} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[325.966px] items-center justify-center left-[-4px] top-[1125.31px] w-[126.738px]" data-node-id="2001:1367">
            <div className="-scale-y-100 flex-none">
              <div className="h-[325.966px] relative w-[126.738px]" data-name="path700">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath700} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[161.126px] items-center justify-center left-[79.46px] top-[1087.55px] w-[106.017px]" data-node-id="2001:1368">
            <div className="-scale-y-100 flex-none">
              <div className="h-[161.126px] relative w-[106.017px]" data-name="path702">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath702} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[94.643px] items-center justify-center left-[219.51px] top-[1136.82px] w-[43.521px]" data-node-id="2001:1369">
            <div className="-scale-y-100 flex-none">
              <div className="h-[94.643px] relative w-[43.521px]" data-name="path704">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath704} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[69.613px] items-center justify-center left-[226.76px] top-[1168.89px] w-[50.218px]" data-node-id="2001:1370">
            <div className="-scale-y-100 flex-none">
              <div className="h-[69.613px] relative w-[50.218px]" data-name="path706">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath706} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[250.323px] items-center justify-center left-[131.35px] top-[1060.14px] w-[126.662px]" data-node-id="2001:1371">
            <div className="-scale-y-100 flex-none">
              <div className="h-[250.323px] relative w-[126.662px]" data-name="path708">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath708} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[77.041px] items-center justify-center left-[117.12px] top-[1174.37px] w-[44.918px]" data-node-id="2001:1372">
            <div className="-scale-y-100 flex-none">
              <div className="h-[77.041px] relative w-[44.918px]" data-name="path710">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath710} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[139.227px] items-center justify-center left-[72.76px] top-[1216.6px] w-[87.603px]" data-node-id="2001:1373">
            <div className="-scale-y-100 flex-none">
              <div className="h-[139.227px] relative w-[87.603px]" data-name="path712">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath712} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[68.828px] items-center justify-center left-[76.67px] top-[1250.24px] w-[37.055px]" data-node-id="2001:1374">
            <div className="-scale-y-100 flex-none">
              <div className="h-[68.828px] relative w-[37.055px]" data-name="path714">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath714} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[101.86px] items-center justify-center left-[155.68px] top-[1155.89px] w-[42.144px]" data-node-id="2001:1375">
            <div className="-scale-y-100 flex-none">
              <div className="h-[101.86px] relative w-[42.144px]" data-name="path716">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath716} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[46.618px] items-center justify-center left-[237.1px] top-[1223.07px] w-[102.457px]" data-node-id="2001:1376">
            <div className="-scale-y-100 flex-none">
              <div className="h-[46.618px] relative w-[102.457px]" data-name="path718">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath718} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[227.332px] items-center justify-center left-[-4px] top-[1226.37px] w-[482.765px]" data-node-id="2001:1377">
            <div className="-scale-y-100 flex-none">
              <div className="h-[227.332px] relative w-[482.765px]" data-name="path720">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath720} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[208.333px] items-center justify-center left-[-4px] top-[1245.37px] w-[384.477px]" data-node-id="2001:1378">
            <div className="-scale-y-100 flex-none">
              <div className="h-[208.333px] relative w-[384.477px]" data-name="path722">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath722} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[315.92px] top-[1245.64px]" data-node-id="2001:1379" data-name="g724">
            <div className="absolute flex h-[125.086px] items-center justify-center left-[315.92px] top-[1245.64px] w-[257.628px]" data-node-id="2001:1380">
              <div className="-scale-y-100 flex-none">
                <div className="h-[125.086px] relative w-[257.628px]" data-name="g726">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgG726} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[67.099px] items-center justify-center left-[247.5px] top-[1284.67px] w-[97.323px]" data-node-id="2001:1382">
            <div className="-scale-y-100 flex-none">
              <div className="h-[67.099px] relative w-[97.323px]" data-name="path742">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath742} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[67.482px] items-center justify-center left-[146.32px] top-[1349.17px] w-[199.469px]" data-node-id="2001:1383">
            <div className="-scale-y-100 flex-none">
              <div className="h-[67.482px] relative w-[199.469px]" data-name="path744">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath744} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[23.024px] items-center justify-center left-[279.3px] top-[1234.35px] w-[46.252px]" data-node-id="2001:1384">
            <div className="-scale-y-100 flex-none">
              <div className="h-[23.024px] relative w-[46.252px]" data-name="path746">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath746} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[73.183px] items-center justify-center left-[331.33px] top-[1228.85px] w-[94.435px]" data-node-id="2001:1385">
            <div className="-scale-y-100 flex-none">
              <div className="h-[73.183px] relative w-[94.435px]" data-name="path748">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath748} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[90.42px] items-center justify-center left-[17.84px] top-[1362.48px] w-[136.259px]" data-node-id="2001:1386">
            <div className="-scale-y-100 flex-none">
              <div className="h-[90.42px] relative w-[136.259px]" data-name="path750">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath750} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[23.95px] items-center justify-center left-[301.18px] top-[1341.56px] w-[50.56px]" data-node-id="2001:1387">
            <div className="-scale-y-100 flex-none">
              <div className="h-[23.95px] relative w-[50.56px]" data-name="path752">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath752} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[92.583px] items-center justify-center left-[587.87px] top-[1233.94px] w-[37.906px]" data-node-id="2001:1388">
            <div className="-scale-y-100 flex-none">
              <div className="h-[92.583px] relative w-[37.906px]" data-name="path1028">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath1028} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[73.34px] items-center justify-center left-[560.16px] top-[1223.79px] w-[31.596px]" data-node-id="2001:1389">
            <div className="-scale-y-100 flex-none">
              <div className="h-[73.34px] relative w-[31.596px]" data-name="path1030">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath1030} />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[645.92px] top-[1236.2px]" data-node-id="2001:1390" data-name="g1032">
            <div className="absolute flex h-[81.239px] items-center justify-center left-[645.92px] top-[1236.2px] w-[69.956px]" data-node-id="2001:1391">
              <div className="-scale-y-100 flex-none">
                <div className="h-[81.239px] relative w-[69.956px]" data-name="g1034">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgG1034} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[92.74px] items-center justify-center left-[486.81px] top-[1264.66px] w-[106.295px]" data-node-id="2001:1393">
            <div className="-scale-y-100 flex-none">
              <div className="h-[92.74px] relative w-[106.295px]" data-name="path1378">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath1378} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[112.726px] items-center justify-center left-[626.4px] top-[1238.99px] w-[91.278px]" data-node-id="2001:1394">
            <div className="-scale-y-100 flex-none">
              <div className="h-[112.726px] relative w-[91.278px]" data-name="path1380">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath1380} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[71.324px] items-center justify-center left-[708.18px] top-[1272.24px] w-[31.814px]" data-node-id="2001:1395">
            <div className="-scale-y-100 flex-none">
              <div className="h-[71.324px] relative w-[31.814px]" data-name="path1382">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgPath1382} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[269px] left-[-14px] top-[1366px] w-[1468.313px]" data-node-id="2001:1396" data-name="Water">
          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgWater} />
        </div>
        <div className="absolute h-[305px] left-[41px] top-[1164px] w-[150.489px]" data-node-id="2001:1406">
          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGroup1} />
        </div>
        <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[32px] items-center left-[calc(50%+0.53px)] top-[1060px] w-[1157.07px]" data-node-id="2001:1422">
          <div className="backdrop-blur-[5px] content-stretch flex items-center justify-center px-[30px] py-[10px] relative rounded-[9999px] shrink-0" data-node-id="2001:1423">
            <p className="[word-break:break-word] font-['Borsok:Regular'] leading-[normal] not-italic relative shrink-0 text-[#3347ae] text-[32px] text-center w-[386px]" data-node-id="2001:1424">
              What I bring aboard:
            </p>
          </div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="2001:1425">
            <div className="col-1 flex h-[307.092px] items-center justify-center ml-0 mt-0 relative row-1 w-[331.282px]" data-node-id="2001:1426">
              <div className="flex-none rotate-[3.93deg] skill-card-hover">
                <div className="content-stretch flex flex-col h-[286.373px] items-center justify-center overflow-clip p-[16.662px] relative rounded-[24px] w-[312.407px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(83, 163, 255, 0.3) 0%, rgba(83, 163, 255, 0.3) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)", boxShadow: "rgba(0,0,0,0.1) 2px 4px 6px 0px" }}>
                  <div className="backdrop-blur-[10.414px] bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-[12.496px] h-[286.373px] items-center justify-center px-[16.662px] py-[24.993px] relative shrink-0 w-[312.407px]" data-node-id="I2001:1426;73:950" style={{ boxShadow: "rgba(0,0,0,0.25) 2px 4px 6px 0px" }}>
                    <div className="content-stretch flex items-center justify-center px-[6.248px] relative shrink-0 w-full" data-node-id="I2001:1426;73:846">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Borsok:Regular'] leading-[normal] min-w-px not-italic relative text-[#3b51c1] text-[19.79px]" data-node-id="I2001:1426;73:798">
                        Product Thinking
                      </p>
                    </div>
                    <div className="h-0 relative shrink-0 w-[266.069px]" data-node-id="I2001:1426;73:799">
                      <div className="absolute inset-[-1.56px_0_0_0]">
                        <img alt="" className="block max-w-none size-full" loading="lazy" src={imgLine11} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[12.496px] items-start p-[5.207px] relative shrink-0 w-full" data-node-id="I2001:1426;73:824">
                      <div className="content-stretch flex gap-[9.372px] items-center relative shrink-0 w-full" data-node-id="I2001:1426;73:819">
                        <div className="relative shrink-0 size-[18.224px]" data-node-id="I2001:1426;73:817" data-name="tabler:sparkle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgTablerSparkle} />
                        </div>
                        <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#ebeeff] text-[15.62px] text-center whitespace-nowrap" data-node-id="I2001:1426;73:800">
                          PROBLEM FRAMING
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[9.372px] items-center relative shrink-0 w-full" data-node-id="I2001:1426;73:825">
                        <div className="relative shrink-0 size-[18.224px]" data-node-id="I2001:1426;73:826" data-name="tabler:sparkle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgTablerSparkle} />
                        </div>
                        <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#ebeeff] text-[15.62px] text-center whitespace-nowrap" data-node-id="I2001:1426;73:828">{`USER & BUSINESS NEEDS`}</p>
                      </div>
                      <div className="content-stretch flex gap-[9.372px] items-center relative shrink-0 w-full" data-node-id="I2001:1426;73:833">
                        <div className="relative shrink-0 size-[18.224px]" data-node-id="I2001:1426;73:834" data-name="tabler:sparkle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgTablerSparkle} />
                        </div>
                        <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#ebeeff] text-[15.62px] text-center whitespace-nowrap" data-node-id="I2001:1426;73:836">
                          INFORMATION ARCHITECTURE
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[9.372px] items-center relative shrink-0 w-full" data-node-id="I2001:1426;73:837">
                        <div className="relative shrink-0 size-[18.224px]" data-node-id="I2001:1426;73:838" data-name="tabler:sparkle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgTablerSparkle} />
                        </div>
                        <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#ebeeff] text-[15.62px] text-center whitespace-nowrap" data-node-id="I2001:1426;73:840">
                          PRODUCT FLOWS
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[9.372px] items-center relative shrink-0 w-full" data-node-id="I2001:1426;73:841">
                        <div className="relative shrink-0 size-[18.224px]" data-node-id="I2001:1426;73:842" data-name="tabler:sparkle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgTablerSparkle} />
                        </div>
                        <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#ebeeff] text-[15.62px] text-center whitespace-nowrap" data-node-id="I2001:1426;73:844">
                          FEATURE THINKING
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1 flex h-[313.393px] items-center justify-center ml-[285.25px] mt-[49.35px] relative row-1 w-[336.972px]" data-node-id="2001:1427">
              <div className="flex-none rotate-[-5.18deg] skill-card-hover">
                <div className="content-stretch flex flex-col h-[286.373px] items-center justify-center overflow-clip p-[16.662px] relative rounded-[24px] w-[312.407px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(83, 163, 255, 0.3) 0%, rgba(83, 163, 255, 0.3) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)", borderStyle: "none", borderColor: "rgba(0,0,0,0)", boxShadow: "rgba(0,0,0,0.1) 2px 4px 6px 0px" }}>
                  <div className="backdrop-blur-[10.414px] bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-[12.496px] h-[286.373px] items-center justify-center px-[16.662px] py-[24.993px] relative shrink-0 w-[312.407px]" data-node-id="I2001:1427;73:950">
                    <div className="content-stretch flex items-center justify-center px-[6.248px] relative shrink-0 w-full" data-node-id="I2001:1427;73:846">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Borsok:Regular'] leading-[normal] min-w-px not-italic relative text-[#3b51c1] text-[19.79px]" data-node-id="I2001:1427;73:798">
                        UX DESIGN
                      </p>
                    </div>
                    <div className="h-0 relative shrink-0 w-[266.069px]" data-node-id="I2001:1427;73:799">
                      <div className="absolute inset-[-1.56px_0_0_0]">
                        <img alt="" className="block max-w-none size-full" loading="lazy" src={imgLine11} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[12.496px] items-start p-[5.207px] relative shrink-0 w-full" data-node-id="I2001:1427;73:824">
                      <div className="content-stretch flex gap-[9.372px] items-center relative shrink-0 w-full" data-node-id="I2001:1427;73:819">
                        <div className="relative shrink-0 size-[18.224px]" data-node-id="I2001:1427;73:817" data-name="tabler:sparkle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgTablerSparkle} />
                        </div>
                        <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#ebeeff] text-[15.62px] text-center whitespace-nowrap" data-node-id="I2001:1427;73:800">
                          USER FLOWS
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[9.372px] items-center relative shrink-0 w-full" data-node-id="I2001:1427;73:825">
                        <div className="relative shrink-0 size-[18.224px]" data-node-id="I2001:1427;73:826" data-name="tabler:sparkle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgTablerSparkle} />
                        </div>
                        <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#ebeeff] text-[15.62px] text-center whitespace-nowrap" data-node-id="I2001:1427;73:828">
                          WIREFRAMES
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[9.372px] items-center relative shrink-0 w-full" data-node-id="I2001:1427;73:833">
                        <div className="relative shrink-0 size-[18.224px]" data-node-id="I2001:1427;73:834" data-name="tabler:sparkle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgTablerSparkle} />
                        </div>
                        <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#ebeeff] text-[15.62px] text-center whitespace-nowrap" data-node-id="I2001:1427;73:836">
                          INTERACTION DESIGN
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[9.372px] items-center relative shrink-0 w-full" data-node-id="I2001:1427;73:837">
                        <div className="relative shrink-0 size-[18.224px]" data-node-id="I2001:1427;73:838" data-name="tabler:sparkle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgTablerSparkle} />
                        </div>
                        <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#ebeeff] text-[15.62px] text-center whitespace-nowrap" data-node-id="I2001:1427;73:840">
                          USABILITY
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[9.372px] items-center relative shrink-0 w-full" data-node-id="I2001:1427;73:841">
                        <div className="relative shrink-0 size-[18.224px]" data-node-id="I2001:1427;73:842" data-name="tabler:sparkle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgTablerSparkle} />
                        </div>
                        <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#ebeeff] text-[15.62px] text-center whitespace-nowrap" data-node-id="I2001:1427;73:844">
                          PROTOTYPING
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1 flex h-[337.53px] items-center justify-center ml-[534.55px] mt-[10.39px] relative row-1 w-[358.5px]" data-node-id="2001:1428">
              <div className="flex-none rotate-[10.28deg] skill-card-hover">
                <div className="content-stretch flex flex-col h-[286.373px] items-center justify-center overflow-clip p-[16.662px] relative rounded-[24px] w-[312.407px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(83, 163, 255, 0.3) 0%, rgba(83, 163, 255, 0.3) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)", borderStyle: "none", borderColor: "rgba(0,0,0,0)", boxShadow: "rgba(0,0,0,0.1) 2px 4px 6px 0px" }}>
                  <div className="backdrop-blur-[10.414px] bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-[12.496px] h-[286.373px] items-center justify-center px-[16.662px] py-[24.993px] relative shrink-0 w-[312.407px]" data-node-id="I2001:1428;73:950">
                    <div className="content-stretch flex items-center justify-center px-[6.248px] relative shrink-0 w-full" data-node-id="I2001:1428;73:846">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Borsok:Regular'] leading-[normal] min-w-px not-italic relative text-[#3b51c1] text-[19.79px]" data-node-id="I2001:1428;73:798">{`UI & VISUAL DESIGN`}</p>
                    </div>
                    <div className="h-0 relative shrink-0 w-[266.069px]" data-node-id="I2001:1428;73:799">
                      <div className="absolute inset-[-1.56px_0_0_0]">
                        <img alt="" className="block max-w-none size-full" loading="lazy" src={imgLine11} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[12.496px] items-start p-[5.207px] relative shrink-0 w-full" data-node-id="I2001:1428;73:824">
                      <div className="content-stretch flex gap-[9.372px] items-center relative shrink-0 w-full" data-node-id="I2001:1428;73:819">
                        <div className="relative shrink-0 size-[18.224px]" data-node-id="I2001:1428;73:817" data-name="tabler:sparkle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgTablerSparkle} />
                        </div>
                        <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#ebeeff] text-[15.62px] text-center whitespace-nowrap" data-node-id="I2001:1428;73:800">
                          VISUAL HIERARCHY
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[9.372px] items-center relative shrink-0 w-full" data-node-id="I2001:1428;73:825">
                        <div className="relative shrink-0 size-[18.224px]" data-node-id="I2001:1428;73:826" data-name="tabler:sparkle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgTablerSparkle} />
                        </div>
                        <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#ebeeff] text-[15.62px] text-center whitespace-nowrap" data-node-id="I2001:1428;73:828">
                          DESIGN SYSTEMS
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[9.372px] items-center relative shrink-0 w-full" data-node-id="I2001:1428;73:833">
                        <div className="relative shrink-0 size-[18.224px]" data-node-id="I2001:1428;73:834" data-name="tabler:sparkle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgTablerSparkle} />
                        </div>
                        <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#ebeeff] text-[15.62px] text-center whitespace-nowrap" data-node-id="I2001:1428;73:836">
                          RESPONSIVE UI
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[9.372px] items-center relative shrink-0 w-full" data-node-id="I2001:1428;73:837">
                        <div className="relative shrink-0 size-[18.224px]" data-node-id="I2001:1428;73:838" data-name="tabler:sparkle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgTablerSparkle} />
                        </div>
                        <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#ebeeff] text-[15.62px] text-center whitespace-nowrap" data-node-id="I2001:1428;73:840">
                          INTERACTION DETAILS
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[9.372px] items-center relative shrink-0 w-full" data-node-id="I2001:1428;73:841">
                        <div className="relative shrink-0 size-[18.224px]" data-node-id="I2001:1428;73:842" data-name="tabler:sparkle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgTablerSparkle} />
                        </div>
                        <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#ebeeff] text-[15.62px] text-center whitespace-nowrap" data-node-id="I2001:1428;73:844">
                          HIGH-FIDELITY DESIGNS
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1 flex h-[322.921px] items-center justify-center ml-[811.55px] mt-[64.39px] relative row-1 w-[345.524px]" data-node-id="2001:1429">
              <div className="flex-none rotate-[-7.13deg] skill-card-hover">
                <div className="content-stretch flex flex-col h-[286.373px] items-center justify-center overflow-clip p-[16.662px] relative rounded-[24px] w-[312.407px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(83, 163, 255, 0.3) 0%, rgba(83, 163, 255, 0.3) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)", boxShadow: "rgba(0,0,0,0.1) 2px 4px 6px 0px" }}>
                  <div className="backdrop-blur-[10.414px] bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-[12.496px] h-[286.373px] items-center justify-center px-[16.662px] py-[24.993px] relative shrink-0 w-[312.407px]" data-node-id="I2001:1429;73:950">
                    <div className="content-stretch flex items-center justify-center px-[6.248px] relative shrink-0 w-full" data-node-id="I2001:1429;73:846">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Borsok:Regular'] leading-[normal] min-w-px not-italic relative text-[#3b51c1] text-[19.79px]" data-node-id="I2001:1429;73:798">
                        COLLABORATION
                      </p>
                    </div>
                    <div className="h-0 relative shrink-0 w-[266.069px]" data-node-id="I2001:1429;73:799">
                      <div className="absolute inset-[-1.56px_0_0_0]">
                        <img alt="" className="block max-w-none size-full" loading="lazy" src={imgLine11} />
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[12.496px] items-start p-[5.207px] relative shrink-0 w-full" data-node-id="I2001:1429;73:824">
                      <div className="content-stretch flex gap-[9.372px] items-center relative shrink-0 w-full" data-node-id="I2001:1429;73:819">
                        <div className="relative shrink-0 size-[18.224px]" data-node-id="I2001:1429;73:817" data-name="tabler:sparkle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgTablerSparkle} />
                        </div>
                        <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#ebeeff] text-[15.62px] text-center whitespace-nowrap" data-node-id="I2001:1429;73:800">
                          DEVELOPER HANDOFF
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[9.372px] items-center relative shrink-0 w-full" data-node-id="I2001:1429;73:825">
                        <div className="relative shrink-0 size-[18.224px]" data-node-id="I2001:1429;73:826" data-name="tabler:sparkle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgTablerSparkle} />
                        </div>
                        <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#ebeeff] text-[15.62px] text-center whitespace-nowrap" data-node-id="I2001:1429;73:828">
                          DESIGN DOCUMENTATION
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[9.372px] items-center relative shrink-0 w-full" data-node-id="I2001:1429;73:833">
                        <div className="relative shrink-0 size-[18.224px]" data-node-id="I2001:1429;73:834" data-name="tabler:sparkle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgTablerSparkle} />
                        </div>
                        <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#ebeeff] text-[15.62px] text-center whitespace-nowrap" data-node-id="I2001:1429;73:836">
                          STAKEHOLDER COMMUNICATION
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[9.372px] items-center relative shrink-0 w-full" data-node-id="I2001:1429;73:837">
                        <div className="relative shrink-0 size-[18.224px]" data-node-id="I2001:1429;73:838" data-name="tabler:sparkle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgTablerSparkle} />
                        </div>
                        <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#ebeeff] text-[15.62px] text-center whitespace-nowrap" data-node-id="I2001:1429;73:840">
                          ITERATION
                        </p>
                      </div>
                      <div className="content-stretch flex gap-[9.372px] items-center relative shrink-0 w-full" data-node-id="I2001:1429;73:841">
                        <div className="relative shrink-0 size-[18.224px]" data-node-id="I2001:1429;73:842" data-name="tabler:sparkle">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgTablerSparkle} />
                        </div>
                        <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#ebeeff] text-[15.62px] text-center whitespace-nowrap" data-node-id="I2001:1429;73:844">
                          DESIGN QA
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
      <div className="-translate-x-1/2 absolute contents left-[calc(50%-0.5px)] top-[174px]" data-node-id="2001:1430" data-name="Section 1">
        <div className="absolute contents left-[-43px] top-[174px]" data-node-id="2001:1431" data-name="Clouds">
          <div className="absolute h-[122px] left-[-13px] top-[203px] w-[328px]" data-node-id="2001:1432" style={{ animation: "cloud-float 22s ease-in-out infinite alternate" }}>
            <div className="absolute inset-[-32.79%_-12.2%]">
              <img alt="" className="block max-w-none size-full" loading="lazy" src={imgGroup2} />
            </div>
          </div>
          <div className="absolute flex h-[166.82px] items-center justify-center left-[-43px] top-[526px] w-[396px]" data-node-id="2001:1436" style={{ animation: "cloud-float 28s ease-in-out infinite alternate-reverse", animationDelay: "-8s" }}>
            <div className="-scale-y-100 flex-none">
              <div className="h-[166.82px] relative w-[396px]">
                <div className="absolute inset-[-23.98%_-10.1%]">
                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgGroup4} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[170px] items-center justify-center left-[1146px] top-[609px] w-[328px]" data-node-id="2001:1440" style={{ animation: "cloud-float 25s ease-in-out infinite alternate", animationDelay: "-5s" }}>
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[170px] relative w-[328px]">
                <div className="absolute inset-[-23.53%_-12.2%]">
                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgGroup5} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[169px] left-[1154px] top-[174px] w-[328px]" data-node-id="2001:1448" style={{ animation: "cloud-float 19s ease-in-out infinite alternate-reverse", animationDelay: "-12s" }}>
            <div className="absolute inset-[-23.67%_-12.2%]">
              <img alt="" className="block max-w-none size-full" loading="lazy" src={imgGroup3} />
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[720px] top-[522px]" data-node-id="2001:1452" data-name="Component 1" style={{ width: 247.611, height: 245 }}>
          <img alt="Kavipriya stamp" src={imgHeroStamp} className="hero-stamp-hover" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
        </div>
        <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-center left-1/2 px-[32px] py-[18px] rounded-[12px] top-[732px]" data-node-id="2001:1455">
          <p style={{ textShadow: "3px 4px 4px rgba(0,0,0,0.25)" }} className="[word-break:break-word] font-['Dream_Kudos:Regular'] leading-[normal] not-italic relative shrink-0 text-[#fff884] text-[42px] whitespace-nowrap" data-node-id="2001:1456">
            PRODUCT DESIGNER
          </p>
        </div>
        <div className="absolute flex h-[131.069px] items-center justify-center left-[477px] top-[425px] w-[154.976px]" data-node-id="2001:1457">
          <div className="flex-none rotate-[-26.06deg]">
            <div className="bg-[#93001d] content-stretch flex flex-col gap-[2.189px] items-center pb-[6.566px] pt-[4.377px] px-[6.566px] relative rounded-[6.566px] w-[132.96px]">
              <p className="[word-break:break-word] font-['Madimi_One:Regular'] leading-[normal] not-italic relative shrink-0 text-[19.698px] text-center text-white w-full" data-node-id="2001:1458">
                Hello I'm
              </p>
              <div className="bg-white content-stretch flex items-center justify-center px-[8.755px] py-[4.377px] relative rounded-[1.094px] shrink-0 w-full" data-node-id="2001:1459">
                <p className="[word-break:break-word] font-['Hi_Melody:Regular'] leading-[normal] not-italic relative shrink-0 text-[#171717] text-[26.264px] whitespace-nowrap" data-node-id="2001:1460">
                  Kavipriya
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Borsok:Regular'] leading-[66px] left-[calc(50%-0.5px)] not-italic text-[#3347ae] text-[38px] text-center top-[191px] w-[813px]" data-node-id="2001:1461">
          Designing products that make complex things simple
        </p>
      </div>
      <div style={{ position: "sticky", top: 0, zIndex: 50, width: "1440px", height: "160px", pointerEvents: "none" }}>
        <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-between left-[calc(50%+0.5px)] top-[34px] w-[1299px]" data-node-id="2001:1474" style={{ pointerEvents: "auto" }}>
          <div className="bg-[#93001d] content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[999px] shrink-0" data-node-id="2001:1475" onClick={() => { window.scrollTo(0, 0); navigate("/"); }} style={{ cursor: "pointer" }}>
            <div className="content-stretch flex items-center overflow-clip relative rounded-[99999px] shrink-0" data-node-id="2001:1476">
              <div className="h-[40.028px] relative shrink-0 w-[38.75px]" data-node-id="2001:1477" data-name="image 27">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage27} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-node-id="2001:1478">
            <div className="bg-[#fcc6db] content-stretch drop-shadow-[2px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center px-[16px] py-[5px] relative rounded-[34px] shrink-0" data-node-id="2001:1479" onClick={() => { window.scrollTo(0, 0); navigate("/about"); }} style={{ cursor: "pointer" }}>
              <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#3347ae] text-[14px] whitespace-nowrap" data-node-id="2001:1480">
                About me
              </p>
            </div>
            <div className="bg-[#fcc6db] content-stretch drop-shadow-[2px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center px-[16px] py-[5px] relative rounded-[34px] shrink-0" data-node-id="2001:1481">
              <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#3347ae] text-[14px] whitespace-nowrap" data-node-id="2001:1482">
                Resume
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Works sticky container: starts at canvas y=1527, height 1973px → bottom at y=3500.
          Sticky releases at scrollY≈3300 (after Card 4 fully stacks at ≈3028). */}
      <div style={{ position: "absolute", top: "1527px", left: 0, width: "1440px", height: "1750px" }}>
        <div style={{ height: "156.52px" }} />
        <p className="[word-break:break-word] font-['Borsok:Regular'] leading-[normal] not-italic text-[32px] text-center text-white whitespace-nowrap w-full" data-node-id="2001:2775" style={{ position: "sticky", top: `${FEATURED_WORKS_VP_TARGET / scale}px`, zIndex: 15 }}>
          Featured Works
        </p>
      </div>
      <div className="-translate-x-1/2 absolute contents left-1/2 top-[1527px]" data-node-id="2001:1483" data-name="Section 3">
        <div className="absolute bg-[#0263bb] h-[751px] left-0 top-[3225px] w-[1440px]" data-node-id="2001:1484" />
        <div className="absolute h-[1537px] left-0 top-[1527px] w-[1440px]" data-node-id="2001:1485">
          <div className="absolute bottom-[-11.39%] contents left-0 top-0" data-node-id="2001:1486" data-name="Group">
            <div className="absolute contents left-0 top-0" data-node-id="2001:1487" data-name="Background">
              <div className="absolute h-[1712px] left-0 top-0 w-[1581.799px]" data-node-id="2001:1488" data-name="Clip path group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgClipPathGroup} />
              </div>
            </div>
            <div className="absolute contents left-0 top-[30.82px]" data-node-id="2001:1493">
              <div className="absolute h-[82.745px] left-0 top-[39.12px] w-[1612.999px]" data-node-id="2001:1545" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgVector} />
              </div>
              <div className="absolute h-[30.367px] left-[596.14px] top-[57.68px] w-[327.508px]" data-node-id="2001:1546" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgVector1} />
              </div>
              <div className="absolute h-[33.167px] left-[1096.89px] top-[75.38px] w-[253.219px]" data-node-id="2001:1547" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgVector2} />
              </div>
              <div className="absolute h-[66.454px] left-[47.02px] top-[37.61px] w-[468.504px]" data-node-id="2001:1548" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgVector3} />
              </div>
              <div className="absolute h-[72.571px] left-0 top-[30.82px] w-[1594.255px]" data-node-id="2001:1549" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgVector4} />
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[100px] items-end left-[264px] top-[213px] w-[909px]" data-node-id="2001:1550">
            <div ref={c0} className="h-[442.716px] overflow-clip rounded-[19.568px] shrink-0 w-full" onClick={() => { window.scrollTo(0, 0); navigate("/case-study/orion-cloudmax"); }} style={{ cursor: "pointer", position: "sticky", top: `${STICKY_VP[0] / scale}px`, zIndex: 10, transform: `scale(${(1 - cardDepth(0) * 0.08).toFixed(4)})`, transformOrigin: "top center", filter: `brightness(${(1 - cardDepth(0) * 0.20).toFixed(4)})` }} data-node-id="2011:1581" data-name="Card 1">
              <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.1)] h-[442.716px] left-1/2 rounded-[19.568px] top-0 w-[905px]" data-node-id="2054:35" style={{ backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,0.25)" }} />
              <div className="-translate-y-1/2 absolute h-[566px] left-[410.1px] top-[calc(50%+114.64px)] w-[929.75px]" data-node-id="2054:36" data-name="s1 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgS11} />
              </div>
              <div className="absolute content-stretch flex flex-col gap-[39.135px] items-start left-[42px] top-[71px] w-[402px]" data-node-id="2054:37">
                <div className="content-stretch flex flex-col gap-[26.09px] items-start relative shrink-0 w-full" data-node-id="2054:38">
                  <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[13.045px] py-[6.523px] relative rounded-[814.5px] shrink-0" data-node-id="2054:39" style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.25)" }}>
                    <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#feffaf] text-[14.676px] whitespace-nowrap" data-node-id="2054:40">
                      B2B • AI • SAAS
                    </p>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[14.676px] items-start relative shrink-0 text-white w-full" data-node-id="2054:41">
                    <p className="font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[16.306px] w-full" data-node-id="2054:42">
                      Designing an AI-powered SRE experience for faster, more transparent alert investigation
                    </p>
                    <p className="font-['Inter:Regular'] font-normal leading-[19.568px] not-italic relative shrink-0 text-[13.045px] w-full" data-node-id="2054:43">
                      Orion CloudMax helps SRE teams triage production alerts using automated runbooks and AI-driven analysis across logs, metrics, and traces.
                    </p>
                  </div>
                </div>
                <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[18.043px] py-[6.647px] relative rounded-[9.784px] shrink-0" data-node-id="2054:44" style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.25)" }}>
                  <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[14.676px] text-white whitespace-nowrap" data-node-id="2054:45">
                    View Case Study
                  </p>
                </div>
              </div>
            </div>
            <div ref={c1} className="h-[442.716px] overflow-clip rounded-[19.568px] shrink-0 w-full" data-node-id="2001:2116" data-name="Card 2" onClick={() => { window.scrollTo(0, 0); navigate("/case-study/blackberry-athoc"); }} style={{ cursor: "pointer", position: "sticky", top: `${STICKY_VP[1] / scale}px`, zIndex: 11, transform: `scale(${(1 - cardDepth(1) * 0.08).toFixed(4)})`, transformOrigin: "top center", filter: `brightness(${(1 - cardDepth(1) * 0.20).toFixed(4)})`, backdropFilter: "blur(50px)", WebkitBackdropFilter: "blur(50px)" }}>
              <div className="-translate-x-1/2 absolute h-[442.716px] left-1/2 rounded-[19.568px] top-0 w-[905px]" data-node-id="2001:2117" style={{ backgroundColor: "rgba(2, 99, 187, 0.5)", border: "1px solid rgba(255,255,255,0.25)" }} />
              <div className="-translate-y-1/2 absolute h-[461.468px] left-[410.1px] top-[calc(50%+76.23px)] w-[757.889px]" data-node-id="2001:2118" data-name="Frame">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[461.468px] left-1/2 top-1/2 w-[757.889px]" data-node-id="2001:2119" data-name="Image">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage} />
                </div>
                <div className="-translate-x-1/2 absolute bg-[#f8f9fa] content-stretch flex flex-col h-[418.257px] items-center left-[calc(50%+0.58px)] overflow-x-clip overflow-y-auto top-[8.15px] w-[623.716px]" data-node-id="2001:2120" data-name="Blackberry Athoc / create Alert Templates">
                  <div className="bg-[#040400] content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-node-id="2001:2121">
                    <div className="bg-[rgba(0,0,0,0.87)] content-stretch flex h-[24.947px] items-start overflow-clip relative shrink-0 w-[467.763px]" data-node-id="2001:2122" data-name="topbar">
                      <div className="content-stretch flex flex-col h-full items-start justify-center overflow-clip py-[3.898px] relative shrink-0 w-[42.099px]" data-node-id="2001:2123">
                        <div className="overflow-clip relative shrink-0 size-[19.49px]" data-node-id="2001:2124" data-name="icon3-final-logo 1">
                          <div className="absolute contents inset-[0_-0.01%_0_0.01%]" data-node-id="2001:2125" data-name="Clip path group">
                            <div className="absolute contents inset-[0_-0.01%_0_0.01%]" data-node-id="2001:2128" data-name="Group">
                              <div className="absolute contents inset-[0_-0.01%_0_0.01%]" data-node-id="2001:2129" data-name="Mask group">
                                <div className="absolute inset-[9.61%_37.15%_35.53%_6.33%]" data-node-id="2001:2136" style={{ maskPosition: "-1.232px -1.874px, -1.231px -1.874px", maskSize: "19.49px 19.49px, 19.49px 19.49px", maskImage: `url("${imgGroup18}"), url("${imgGroup19}")` }} data-name="Group">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGroup20} />
                                </div>
                              </div>
                              <div className="absolute contents inset-[0_-0.01%_0_0.01%]" data-node-id="2001:2138" data-name="Mask group">
                                <div className="absolute inset-[19.18%_13.12%_10.13%_12.93%]" data-node-id="2001:2145" style={{ maskPosition: "-2.52px -3.738px, -2.518px -3.738px", maskSize: "19.49px 19.49px, 19.49px 19.49px", maskImage: `url("${imgGroup18}"), url("${imgGroup21}")` }} data-name="Group">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGroup22} />
                                </div>
                              </div>
                              <div className="absolute contents inset-[0_-0.01%_0_0.01%]" data-node-id="2001:2147" data-name="Mask group">
                                <div className="absolute inset-[4.4%_2.68%_8.3%_2.71%]" data-node-id="2001:2154" style={{ maskPosition: "-0.526px -0.858px, -0.525px -0.858px", maskSize: "19.49px 19.49px, 19.49px 19.49px", maskImage: `url("${imgGroup18}"), url("${imgGroup23}")` }} data-name="Group">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGroup24} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#7b6c3c] content-stretch flex flex-col h-full items-center justify-center overflow-clip py-[1.559px] relative shrink-0 w-[46.776px]" data-node-id="2001:2156">
                        <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[4.678px] text-white whitespace-nowrap" data-node-id="2001:2157" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Alert
                        </p>
                      </div>
                      <div className="content-stretch flex flex-col h-full items-center justify-center overflow-clip py-[1.559px] relative shrink-0 w-[46.776px]" data-node-id="2001:2158">
                        <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[4.678px] text-white whitespace-nowrap" data-node-id="2001:2159" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Account
                        </p>
                      </div>
                      <div className="content-stretch flex flex-col h-full items-center justify-center overflow-clip py-[1.559px] relative shrink-0 w-[46.776px]" data-node-id="2001:2160">
                        <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[4.678px] text-white whitespace-nowrap" data-node-id="2001:2161" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Collaborate
                        </p>
                      </div>
                      <div className="content-stretch flex flex-col h-full items-center justify-center overflow-clip py-[1.559px] relative shrink-0 w-[46.776px]" data-node-id="2001:2162">
                        <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[4.678px] text-white whitespace-nowrap" data-node-id="2001:2163" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Users
                        </p>
                      </div>
                      <div className="content-stretch flex flex-col h-full items-center justify-center overflow-clip py-[1.559px] relative shrink-0 w-[46.776px]" data-node-id="2001:2164">
                        <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[4.678px] text-white whitespace-nowrap" data-node-id="2001:2165" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Organizations
                        </p>
                      </div>
                      <div className="content-stretch flex flex-col h-full items-center justify-center overflow-clip py-[1.559px] relative shrink-0 w-[46.776px]" data-node-id="2001:2166">
                        <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[4.678px] text-white whitespace-nowrap" data-node-id="2001:2167" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Reports
                        </p>
                      </div>
                      <div className="content-stretch flex flex-col h-full items-center justify-center overflow-clip py-[1.559px] relative shrink-0 w-[46.776px]" data-node-id="2001:2168">
                        <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[4.678px] text-white whitespace-nowrap" data-node-id="2001:2169" style={{ fontVariationSettings: '"wdth" 100' }}>
                          Accounts
                        </p>
                      </div>
                      <div className="h-full relative shrink-0 w-[63.148px]" data-node-id="2001:2170" />
                    </div>
                  </div>
                  <div className="bg-white border-[#e7e8ef] border-[0.39px] border-solid content-stretch flex flex-[1_0_0] flex-col items-center min-h-px overflow-x-clip overflow-y-auto relative w-[467.763px]" data-node-id="2001:2171">
                    <div className="bg-white content-stretch flex flex-[1_0_0] items-start min-h-px overflow-clip relative w-full" data-node-id="2001:2172">
                      <div className="bg-white border-[#e7e8ef] border-b-[0.39px] border-l-[0.39px] border-r-[0.39px] border-solid content-stretch flex flex-col h-full items-start px-[3.118px] py-[6.237px] relative shrink-0 w-[83.418px]" data-node-id="2001:2173" data-name="Stepper">
                        <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2001:2174" data-name="Nav-box">
                          <div className="bg-white content-stretch flex gap-[3.118px] items-center overflow-clip px-[6.237px] py-[3.118px] relative rounded-[1.559px] shrink-0 w-full" data-node-id="2001:2175" data-name="base/stepper/step">
                            <div className="relative shrink-0 size-[9.355px]" data-node-id="2001:2176">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgFrame1410076839} />
                            </div>
                            <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#001f3f] text-[5.457px] w-[57.691px]" data-node-id="2001:2177" style={{ fontVariationSettings: '"wdth" 100' }}>
                              Alert Template
                            </p>
                          </div>
                          <div className="bg-[#eff2f5] content-stretch flex gap-[3.118px] items-center overflow-clip px-[6.237px] py-[3.118px] relative shrink-0 w-full" data-node-id="2001:2178" data-name="base/stepper/step">
                            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[9.355px]" data-node-id="2001:2179">
                              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="I2001:2179;393:105434">
                                <div className="col-1 ml-0 mt-0 relative row-1 size-[9.355px]" data-node-id="I2001:2179;393:105435" data-name="circle">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgCircle} />
                                </div>
                                <div className="[word-break:break-word] col-1 flex flex-col font-['Noto_Sans:Display_SemiBold'] font-semibold justify-center ml-[1.22px] mt-[0.3px] relative row-1 text-[5.46px] text-center text-white whitespace-nowrap" data-node-id="I2001:2179;393:105436" style={{ fontVariationSettings: '"CTGR" 100, "wdth" 100' }}>
                                  <p className="leading-[normal]">2</p>
                                </div>
                              </div>
                            </div>
                            <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#001f3f] text-[5.457px] w-[57.691px]" data-node-id="2001:2180" style={{ fontVariationSettings: '"wdth" 100' }}>
                              Target Users
                            </p>
                          </div>
                          <div className="bg-white content-stretch flex gap-[3.118px] items-center overflow-clip px-[6.237px] py-[3.118px] relative shrink-0 w-full" data-node-id="2001:2181" data-name="base/stepper/step">
                            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[9.355px]" data-node-id="2001:2182">
                              <div className="relative shrink-0 size-[9.355px]" data-node-id="I2001:2182;393:105440" data-name="Base / Stepper / Num">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgBaseStepperNum} />
                                <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans:Medium'] font-medium inset-0 justify-center leading-[0] text-[#9198a1] text-[5.46px] text-center" data-node-id="I2001:2182;393:105440;293:465" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                                  <p className="leading-[normal]">3</p>
                                </div>
                              </div>
                            </div>
                            <p className="[word-break:break-word] font-['Open_Sans:Regular'] font-normal leading-[normal] relative shrink-0 text-[#9198a1] text-[5.457px] w-[57.691px]" data-node-id="2001:2183" style={{ fontVariationSettings: '"wdth" 100' }}>
                              Target Organizations
                            </p>
                          </div>
                          <div className="bg-white content-stretch flex gap-[3.118px] items-center overflow-clip px-[6.237px] py-[3.118px] relative shrink-0 w-full" data-node-id="2001:2184" data-name="base/stepper/step">
                            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[9.355px]" data-node-id="2001:2185">
                              <div className="relative shrink-0 size-[9.355px]" data-node-id="I2001:2185;393:105440" data-name="Base / Stepper / Num">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgBaseStepperNum} />
                                <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans:Medium'] font-medium inset-0 justify-center leading-[0] text-[#9198a1] text-[5.46px] text-center" data-node-id="I2001:2185;393:105440;293:465" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                                  <p className="leading-[normal]">4</p>
                                </div>
                              </div>
                            </div>
                            <p className="[word-break:break-word] font-['Open_Sans:Regular'] font-normal leading-[normal] relative shrink-0 text-[#9198a1] text-[5.457px] w-[57.691px]" data-node-id="2001:2186" style={{ fontVariationSettings: '"wdth" 100' }}>
                              Mass Devices
                            </p>
                          </div>
                          <div className="bg-white content-stretch flex gap-[3.118px] items-center overflow-clip px-[6.237px] py-[3.118px] relative shrink-0 w-full" data-node-id="2001:2187" data-name="base/stepper/step">
                            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[9.355px]" data-node-id="2001:2188">
                              <div className="relative shrink-0 size-[9.355px]" data-node-id="I2001:2188;393:105440" data-name="Base / Stepper / Num">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgBaseStepperNum} />
                                <div className="[word-break:break-word] absolute flex flex-col font-['Noto_Sans:Medium'] font-medium inset-0 justify-center leading-[0] text-[#9198a1] text-[5.46px] text-center" data-node-id="I2001:2188;393:105440;293:465" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                                  <p className="leading-[normal]">5</p>
                                </div>
                              </div>
                            </div>
                            <p className="[word-break:break-word] font-['Open_Sans:Regular'] font-normal leading-[normal] relative shrink-0 text-[#9198a1] text-[5.457px] w-[57.691px]" data-node-id="2001:2189" style={{ fontVariationSettings: '"wdth" 100' }}>
                              Schedule
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#f8f9fa] content-stretch flex flex-col h-[429.952px] items-start overflow-clip relative shrink-0 w-[384.345px]" data-node-id="2001:2190" data-name="red">
                        <div className="[word-break:break-word] bg-white content-stretch flex flex-col font-['Open_Sans:SemiBold'] font-semibold gap-[1.559px] items-start leading-[normal] overflow-clip p-[9.355px] relative shrink-0 text-[#001f3f] w-full" data-node-id="2001:2191">
                          <p className="min-w-full relative shrink-0 text-[9.355px] w-[min-content]" data-node-id="2001:2192" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Alert template
                          </p>
                          <p className="relative shrink-0 text-[5.457px] tracking-[0.0218px] whitespace-nowrap" data-node-id="2001:2193" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Complete the 5 steps below to create and configure a new alert template.
                          </p>
                        </div>
                        <div className="bg-white content-stretch flex flex-col items-start justify-center overflow-clip pb-[6.237px] px-[9.355px] relative shrink-0 w-full" data-node-id="2001:2194">
                          <div className="bg-[#fafafa] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[365.635px]" data-node-id="2001:2195" data-name="datagrid - holder">
                            <div className="bg-white border-[#e7e8ef] border-b-[0.39px] border-solid content-stretch flex h-[18.711px] items-start pr-[4.678px] relative shrink-0 w-full" data-node-id="2001:2196">
                              <div className="border-0 border-[#5a7b9a] border-solid content-stretch flex h-full items-center overflow-clip pr-[1.559px] py-[9.355px] relative shrink-0" data-node-id="2001:2197">
                                <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#9198a1] text-[5.457px] tracking-[0.0218px] whitespace-nowrap" data-node-id="2001:2198" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  By Group
                                </p>
                              </div>
                              <div className="border-[#5a7b9a] border-b-[0.78px] border-solid content-stretch flex h-full items-center justify-center overflow-clip p-[9.355px] relative shrink-0" data-node-id="2001:2199">
                                <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#001f3f] text-[5.457px] tracking-[0.0218px] whitespace-nowrap" data-node-id="2001:2200" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  By User
                                </p>
                              </div>
                              <div className="border-0 border-[#5a7b9a] border-solid content-stretch flex h-full items-center justify-center overflow-clip px-[6.237px] py-[9.355px] relative shrink-0" data-node-id="2001:2201">
                                <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#9198a1] text-[5.457px] tracking-[0.0218px] whitespace-nowrap" data-node-id="2001:2202" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  By Advance Query
                                </p>
                              </div>
                            </div>
                            <div className="bg-[#f8f9fa] border-[#eff2f5] border-b-[0.39px] border-l-[0.39px] border-r-[0.39px] border-solid content-stretch flex items-center overflow-clip p-[4.678px] relative shrink-0 w-full" data-node-id="2001:2203">
                              <div className="bg-white border-[#e5e5e5] border-[0.39px] border-solid content-stretch flex flex-[1_0_0] gap-[1.559px] h-[14.033px] items-start min-w-px overflow-clip p-[3.898px] relative rounded-[1.559px] shadow-[0px_0px_0.39px_0px_rgba(0,0,0,0.25)]" data-node-id="2001:2204">
                                <div className="relative shrink-0 size-[6.237px]" data-node-id="2001:2205" data-name="material-symbols:search-rounded">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgMaterialSymbolsSearchRounded} />
                                </div>
                                <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[#3e4042] text-[4.678px] tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2207" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  Search
                                </p>
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[1.559px] items-start overflow-clip relative shrink-0 w-[365.635px]" data-node-id="2001:2208" data-name="datagrid">
                              <div className="bg-[#0835fe] border-[#eff2f5] border-[0.39px] border-solid content-stretch flex flex-[1_0_0] items-start min-w-px overflow-clip relative" data-node-id="2001:2209">
                                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="2001:2210">
                                  <div className="bg-[#f8f9fa] border-[#eff2f5] border-b-[0.78px] border-l-[0.39px] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2211">
                                    <div className="bg-white border-[#c8c8c8] border-[0.39px] border-solid relative rounded-[0.78px] shrink-0 size-[4.678px]" data-node-id="2001:2212" />
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-l-[0.39px] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2213">
                                    <div className="bg-white border-[#c8c8c8] border-[0.39px] border-solid relative rounded-[0.78px] shrink-0 size-[4.678px]" data-node-id="2001:2214" />
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-l-[0.39px] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2215">
                                    <div className="bg-white border-[#c8c8c8] border-[0.39px] border-solid relative rounded-[0.78px] shrink-0 size-[4.678px]" data-node-id="2001:2216" />
                                  </div>
                                  <div className="bg-[#eff2f5] border-[#eff2f5] border-l-[0.39px] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2217">
                                    <div className="relative shrink-0 size-[4.678px]" data-node-id="2001:2218">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgFrame26} />
                                    </div>
                                  </div>
                                  <div className="bg-[#eff2f5] border-[#eff2f5] border-l-[0.39px] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2220">
                                    <div className="relative shrink-0 size-[4.678px]" data-node-id="2001:2221">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgFrame27} />
                                    </div>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-l-[0.39px] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2223">
                                    <div className="bg-white border-[#c8c8c8] border-[0.39px] border-solid relative rounded-[0.78px] shrink-0 size-[4.678px]" data-node-id="2001:2224" />
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-l-[0.39px] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2225">
                                    <div className="bg-white border-[#c8c8c8] border-[0.39px] border-solid relative rounded-[0.78px] shrink-0 size-[4.678px]" data-node-id="2001:2226" />
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-l-[0.39px] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2227">
                                    <div className="bg-white border-[#c8c8c8] border-[0.39px] border-solid relative rounded-[0.78px] shrink-0 size-[4.678px]" data-node-id="2001:2228" />
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-l-[0.39px] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2229">
                                    <div className="bg-white border-[#c8c8c8] border-[0.39px] border-solid relative rounded-[0.78px] shrink-0 size-[4.678px]" data-node-id="2001:2230" />
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-l-[0.39px] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2231">
                                    <div className="bg-white border-[#c8c8c8] border-[0.39px] border-solid relative rounded-[0.78px] shrink-0 size-[4.678px]" data-node-id="2001:2232" />
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-l-[0.39px] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2233">
                                    <div className="bg-white border-[#c8c8c8] border-[0.39px] border-solid relative rounded-[0.78px] shrink-0 size-[4.678px]" data-node-id="2001:2234" />
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-l-[0.39px] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2235">
                                    <div className="bg-white border-[#c8c8c8] border-[0.39px] border-solid relative rounded-[0.78px] shrink-0 size-[4.678px]" data-node-id="2001:2236" />
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-l-[0.39px] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2237">
                                    <div className="bg-white border-[#c8c8c8] border-[0.39px] border-solid relative rounded-[0.78px] shrink-0 size-[4.678px]" data-node-id="2001:2238" />
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-l-[0.39px] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2239">
                                    <div className="bg-white border-[#c8c8c8] border-[0.39px] border-solid relative rounded-[0.78px] shrink-0 size-[4.678px]" data-node-id="2001:2240" />
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-l-[0.39px] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2241">
                                    <div className="bg-white border-[#c8c8c8] border-[0.39px] border-solid relative rounded-[0.78px] shrink-0 size-[4.678px]" data-node-id="2001:2242" />
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-l-[0.39px] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2243">
                                    <div className="bg-white border-[#c8c8c8] border-[0.39px] border-solid relative rounded-[0.78px] shrink-0 size-[4.678px]" data-node-id="2001:2244" />
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-node-id="2001:2245">
                                  <div className="bg-[#f8f9fa] border-[#eff2f5] border-b-[0.78px] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2246">
                                    <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#9198a1] text-[4.288px] tracking-[0.0172px] uppercase whitespace-nowrap" data-node-id="2001:2247" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      username
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2248">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2249" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      akopr
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2250">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2251" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      akSUpOpr
                                    </p>
                                  </div>
                                  <div className="bg-[#eff2f5] border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2252">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2253" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Aman
                                    </p>
                                  </div>
                                  <div className="bg-[#eff2f5] border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2254">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2255" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      andy
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2256">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2257" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      apaleja-sr
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2258">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2259" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Ashish
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2260">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2261" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      geo.org.admin
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2262">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2263" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Geo_M
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2264">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2265" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Geo_M
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2266">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2267" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Geo_M
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2268">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2269" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Geo_M
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2270">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2271" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Geo_M
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2272">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2273" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Geo_M
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2274">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2275" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      geoopr
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2276">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2277" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      geoopr.orgadmin
                                    </p>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px overflow-clip relative" data-node-id="2001:2278">
                                  <div className="bg-[#f8f9fa] border-[#eff2f5] border-b-[0.78px] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2279">
                                    <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#9198a1] text-[4.288px] tracking-[0.0172px] uppercase whitespace-nowrap" data-node-id="2001:2280" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      display name
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2281">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2282" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      akopr
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2283">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2284" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      akSUpOpr
                                    </p>
                                  </div>
                                  <div className="bg-[#eff2f5] border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2285">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2286" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Aman
                                    </p>
                                  </div>
                                  <div className="bg-[#eff2f5] border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2287">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2288" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      andy
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2289">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2290" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      apaleja-sr
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2291">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2292" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Ashish
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2293">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2294" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      geo.org.admin
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2295">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2296" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Geo_M
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2297">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2298" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      geoopr
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2299">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2300" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      geoopr.orgadmin
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2301">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2302" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      geoopr.orgadmin
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2303">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2304" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      geoopr.orgadmin
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2305">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2306" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      geoopr.orgadmin
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2307">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2308" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      geoopr.orgadmin
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2309">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2310" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      geoopr.orgadmin
                                    </p>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-node-id="2001:2311">
                                  <div className="bg-[#f8f9fa] border-[#eff2f5] border-b-[0.78px] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2312">
                                    <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#9198a1] text-[4.288px] tracking-[0.0172px] uppercase whitespace-nowrap" data-node-id="2001:2313" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      sponsor
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-end justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2314">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2315" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      -
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2316">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2317" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      -
                                    </p>
                                  </div>
                                  <div className="bg-[#eff2f5] border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2318">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2319" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      -
                                    </p>
                                  </div>
                                  <div className="bg-[#eff2f5] border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2320">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2321" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      -
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2322">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2323" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      -
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2324">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2325" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      -
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2326">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2327" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      -
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2328">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2329" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      -
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2330">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2331" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      -
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2332">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2333" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      -
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2334">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2335" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      -
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2336">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2337" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      -
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2338">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2339" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      -
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2340">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2341" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      -
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2342">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2343" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      -
                                    </p>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-node-id="2001:2344">
                                  <div className="bg-[#f8f9fa] border-[#eff2f5] border-b-[0.78px] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-center justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2345">
                                    <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#9198a1] text-[4.288px] tracking-[0.0172px] uppercase whitespace-nowrap" data-node-id="2001:2346" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      mobile app
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2347">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2348" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      NA
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2349">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2350" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      NA
                                    </p>
                                  </div>
                                  <div className="bg-[#eff2f5] border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2351">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2352" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      NA
                                    </p>
                                  </div>
                                  <div className="bg-[#eff2f5] border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2353">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2354" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      NA
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2355">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2356" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      NA
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2357">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2358" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      NA
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2359">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2360" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      NA
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2361">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2362" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      NA
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2363">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2364" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      NA
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2365">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2366" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      NA
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2367">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2368" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      NA
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2369">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2370" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      NA
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2371">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2372" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      NA
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2373">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2374" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      NA
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2375">
                                    <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] w-full whitespace-nowrap" data-node-id="2001:2376" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      NA
                                    </p>
                                  </div>
                                </div>
                                <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-node-id="2001:2377">
                                  <div className="bg-[#f8f9fa] border-[#eff2f5] border-b-[0.78px] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2378">
                                    <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#9198a1] text-[4.288px] tracking-[0.0172px] uppercase whitespace-nowrap" data-node-id="2001:2379" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      L3-datetime
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2380" />
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2382" />
                                  <div className="bg-[#eff2f5] border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2384" />
                                  <div className="bg-[#eff2f5] border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2386" />
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2388" />
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2390" />
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2392" />
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2394" />
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2396" />
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2398" />
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2400" />
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2402" />
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2404" />
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2406" />
                                  <div className="bg-white border-[#eff2f5] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2408" />
                                </div>
                                <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0" data-node-id="2001:2410">
                                  <div className="bg-[#f8f9fa] border-[#eff2f5] border-b-[0.78px] border-r-[0.39px] border-solid border-t-[0.39px] content-stretch flex flex-col h-[15.592px] items-start justify-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2411">
                                    <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[#9198a1] text-[4.288px] tracking-[0.0172px] uppercase whitespace-nowrap" data-node-id="2001:2412" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Actions
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-r-[0.39px] border-solid border-t-[0.39px] content-stretch flex h-[15.592px] items-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2413">
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2414" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Block
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-r-[0.39px] border-solid border-t-[0.39px] content-stretch flex h-[15.592px] items-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2415">
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2416" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Block
                                    </p>
                                  </div>
                                  <div className="bg-[#eff2f5] border-[#eff2f5] border-r-[0.39px] border-solid border-t-[0.39px] content-stretch flex h-[15.592px] items-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2417">
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2418" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Block
                                    </p>
                                  </div>
                                  <div className="bg-[#eff2f5] border-[#eff2f5] border-r-[0.39px] border-solid border-t-[0.39px] content-stretch flex h-[15.592px] items-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2419">
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2420" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Block
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-r-[0.39px] border-solid border-t-[0.39px] content-stretch flex h-[15.592px] items-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2421">
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2422" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Block
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-r-[0.39px] border-solid border-t-[0.39px] content-stretch flex h-[15.592px] items-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2423">
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2424" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Block
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-r-[0.39px] border-solid border-t-[0.39px] content-stretch flex h-[15.592px] items-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2425">
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2426" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Block
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-r-[0.39px] border-solid border-t-[0.39px] content-stretch flex h-[15.592px] items-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2427">
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2428" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Block
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-r-[0.39px] border-solid border-t-[0.39px] content-stretch flex h-[15.592px] items-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2429">
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2430" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Block
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-r-[0.39px] border-solid border-t-[0.39px] content-stretch flex h-[15.592px] items-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2431">
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2432" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Block
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-r-[0.39px] border-solid border-t-[0.39px] content-stretch flex h-[15.592px] items-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2433">
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2434" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Block
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-r-[0.39px] border-solid border-t-[0.39px] content-stretch flex h-[15.592px] items-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2435">
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2436" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Block
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-r-[0.39px] border-solid border-t-[0.39px] content-stretch flex h-[15.592px] items-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2437">
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2438" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Block
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-r-[0.39px] border-solid border-t-[0.39px] content-stretch flex h-[15.592px] items-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2439">
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2440" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Block
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#eff2f5] border-r-[0.39px] border-solid border-t-[0.39px] content-stretch flex h-[15.592px] items-center overflow-clip p-[3.898px] relative shrink-0 w-full" data-node-id="2001:2441">
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#0059c6] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2442" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Block
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-white border-[#eff2f5] border-[0.39px] border-solid content-stretch flex flex-col gap-[9.355px] items-center overflow-clip py-[9.355px] relative rounded-[1.559px] self-stretch shrink-0 w-[109.145px]" data-node-id="2001:2443">
                                <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[normal] relative shrink-0 text-[5.457px] text-black text-center tracking-[0.0218px] whitespace-nowrap" data-node-id="2001:2444" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  Targeting Summary
                                </p>
                                <div className="flex items-center justify-center leading-[0] relative shrink-0" data-node-id="2001:2445">
                                  <div className="-scale-y-100 flex-none rotate-180">
                                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="Pie chart">
                                      <div className="col-1 ml-0 mt-0 relative row-1 size-[54.572px]" data-node-id="2001:2446">
                                        <div className="absolute bottom-0 left-0 right-1/2 top-0">
                                          <img alt="" className="block max-w-none size-full" loading="lazy" src={imgEllipse139} />
                                        </div>
                                      </div>
                                      <div className="col-1 ml-0 mt-0 relative row-1 size-[54.572px]" data-node-id="2001:2447">
                                        <div className="absolute bottom-0 left-1/2 right-0 top-0">
                                          <img alt="" className="block max-w-none size-full" loading="lazy" src={imgEllipse137} />
                                        </div>
                                      </div>
                                      <div className="col-1 flex h-[21.829px] items-center justify-center ml-[18.55px] mt-[16.37px] relative row-1 w-[17.281px]" data-node-id="2001:2448">
                                        <div className="-scale-y-100 flex-none rotate-180">
                                          <div className="[word-break:break-word] content-stretch flex flex-col font-medium h-[21.829px] items-center leading-[normal] relative text-[#171717] w-[17.281px] whitespace-nowrap" data-name="total">
                                            <p className="font-['Noto_Sans:Medium'] mb-[-1.466px] relative shrink-0 text-[10.759px]" data-node-id="2001:2449" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                                              02
                                            </p>
                                            <p className="font-['Noto_Sans:Display_Medium'] relative shrink-0 text-[5.379px] text-center" data-node-id="2001:2450" style={{ fontVariationSettings: '"CTGR" 100, "wdth" 100' }}>
                                              Total Users
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white border-0 border-[#eff2f5] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px overflow-clip px-[6.237px] relative rounded-[0.78px] w-full" data-node-id="2001:2451">
                                  <div className="bg-white border-[#e9e9e9] border-b-[0.39px] border-solid border-t-[0.39px] content-stretch flex gap-[3.118px] h-[15.592px] items-center overflow-clip p-[1.559px] relative shrink-0 w-full" data-node-id="2001:2452">
                                    <div className="relative shrink-0 size-[6.237px]" data-node-id="2001:2453" data-name="Checkmark--filled">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgCheckmarkFilled} />
                                    </div>
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2454" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Reachable user
                                    </p>
                                    <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[normal] overflow-hidden relative shrink-0 text-[#00b26e] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2455" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      01
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#e9e9e9] border-b-[0.39px] border-solid content-stretch flex gap-[3.118px] h-[15.592px] items-center overflow-clip p-[1.559px] relative shrink-0 w-full" data-node-id="2001:2456">
                                    <div className="relative shrink-0 size-[6.237px]" data-node-id="2001:2457" data-name="Error-filled">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgErrorFilled} />
                                    </div>
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2458" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Not Reachable user
                                    </p>
                                    <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[normal] overflow-hidden relative shrink-0 text-[#eb2345] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2459" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      01
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#e9e9e9] border-b-[0.39px] border-solid content-stretch flex gap-[3.118px] h-[15.592px] items-center overflow-clip p-[1.559px] relative shrink-0 w-full" data-node-id="2001:2460">
                                    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[6.237px]" data-node-id="2001:2461" data-name="Team view">
                                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="I2001:2461;297:484">
                                        <div className="col-1 h-[5.461px] ml-0 mt-0 relative row-1 w-[5.457px]" data-node-id="I2001:2461;297:485">
                                          <div className="absolute inset-[0_-5%_-5%_-5%]">
                                            <img alt="" className="block max-w-none size-full" loading="lazy" src={imgGroup5500} />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2462" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      By Groups
                                    </p>
                                    <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2463" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      00
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#e9e9e9] border-b-[0.39px] border-solid content-stretch flex gap-[3.118px] h-[15.592px] items-center overflow-clip p-[1.559px] relative shrink-0 w-full" data-node-id="2001:2464">
                                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="2001:2465">
                                      <div className="col-1 h-[5.461px] ml-0 mt-0 overflow-clip relative row-1 w-[6.237px]" data-node-id="2001:2466">
                                        <div className="absolute contents inset-[0_6.25%_0_6.24%]" data-node-id="2001:2467">
                                          <div className="absolute inset-[0_6.25%_0_6.24%]" data-node-id="2001:2468">
                                            <div className="absolute inset-[0_-5%_-5%_-5%]">
                                              <img alt="" className="block max-w-none size-full" loading="lazy" src={imgGroup5501} />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-1 ml-[3.51px] mt-[3.12px] relative row-1 size-[3.898px]" data-node-id="2001:2474">
                                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGroup1410076684} />
                                      </div>
                                    </div>
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2479" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      By Groups-Blocked
                                    </p>
                                    <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2480" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      00
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#e9e9e9] border-b-[0.39px] border-solid content-stretch flex gap-[3.118px] h-[15.592px] items-center overflow-clip p-[1.559px] relative shrink-0 w-full" data-node-id="2001:2481">
                                    <div className="overflow-clip relative shrink-0 size-[6.237px]" data-node-id="2001:2482" data-name="My view">
                                      <div className="absolute inset-[12.5%_19.44%_-8.04%_6.25%]" data-node-id="I2001:2482;297:480">
                                        <div className="absolute inset-[-4.58%_-5.89%]">
                                          <img alt="" className="block max-w-none size-full" loading="lazy" src={imgGroup5497} />
                                        </div>
                                      </div>
                                    </div>
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2483" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      By Users
                                    </p>
                                    <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2484" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      02
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#e9e9e9] border-b-[0.39px] border-solid content-stretch flex gap-[3.118px] h-[15.592px] items-center overflow-clip p-[1.559px] relative shrink-0 w-full" data-node-id="2001:2485">
                                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="2001:2486">
                                      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[6.237px]" data-node-id="2001:2487" data-name="My view">
                                        <div className="absolute contents inset-[12.5%_19.44%_-8.05%_6.24%]" data-node-id="2001:2488">
                                          <div className="absolute inset-[76.2%_19.44%_-8.05%_6.25%]" data-node-id="2001:2489" data-name="Vector">
                                            <div className="absolute inset-[-13.74%_-5.89%]">
                                              <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector35} />
                                            </div>
                                          </div>
                                          <div className="absolute inset-[12.5%_35.37%_45.04%_22.17%]" data-node-id="2001:2490" data-name="Vector">
                                            <div className="absolute inset-[-10.3%]">
                                              <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector36} />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-1 ml-[3.12px] mt-[4.29px] relative row-1 size-[3.898px]" data-node-id="2001:2491">
                                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGroup1410076685} />
                                      </div>
                                    </div>
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2496" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      By Users-Blocked
                                    </p>
                                    <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2497" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      00
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#e9e9e9] border-b-[0.39px] border-solid content-stretch flex gap-[3.118px] h-[15.592px] items-center overflow-clip p-[1.559px] relative shrink-0 w-full" data-node-id="2001:2498">
                                    <div className="relative shrink-0 size-[6.237px]" data-node-id="2001:2499" data-name="Location">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgLocation} />
                                    </div>
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2500" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      By Location
                                    </p>
                                    <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2501" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      00
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#e9e9e9] border-b-[0.39px] border-solid content-stretch flex gap-[3.118px] h-[15.592px] items-center overflow-clip p-[1.559px] relative shrink-0 w-full" data-node-id="2001:2502">
                                    <div className="relative shrink-0 size-[6.237px]" data-node-id="2001:2503" data-name="Query">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgQuery} />
                                    </div>
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2504" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      By Advanced Query
                                    </p>
                                    <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2505" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      00
                                    </p>
                                  </div>
                                  <div className="bg-white border-[#e9e9e9] border-b-[0.39px] border-solid content-stretch flex gap-[3.118px] h-[15.592px] items-center overflow-clip p-[1.559px] relative shrink-0 w-full" data-node-id="2001:2506">
                                    <div className="relative shrink-0 size-[6.237px]" data-node-id="2001:2507" data-name="Devices--apps">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgDevicesApps} />
                                    </div>
                                    <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] min-w-px overflow-hidden relative text-[#3e4042] text-[4.678px] text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2508" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      Personal Devices
                                    </p>
                                    <p className="[word-break:break-word] font-['Open_Sans:Bold'] font-bold leading-[normal] overflow-hidden relative shrink-0 text-[#3e4042] text-[4.678px] text-center text-ellipsis tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2509" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      00
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-[#f8f9fa] border-[#eff2f5] border-b-[0.39px] border-l-[0.39px] border-r-[0.39px] border-solid content-stretch flex gap-[3.118px] items-center overflow-clip px-[6.237px] py-[4.678px] relative shrink-0 w-full" data-node-id="2001:2510">
                              <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[4.678px] text-[rgba(0,0,0,0.87)] tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2511" style={{ fontVariationSettings: '"wdth" 100' }}>{`Items per page : `}</p>
                              <div className="bg-white border-[#eff2f5] border-[0.39px] border-solid content-stretch flex gap-[3.118px] h-[9.355px] items-center justify-center max-h-[12.473671913146973px] overflow-clip px-[6.237px] relative rounded-[1.559px] shrink-0 w-[18.711px]" data-node-id="2001:2512" data-name="Text Buttons">
                                <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[4.678px] whitespace-nowrap" data-node-id="2001:2514" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                                  <p className="leading-[normal]">15</p>
                                </div>
                                <div className="relative shrink-0 size-[6.237px]" data-node-id="2001:2515" data-name="Chevron--down">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgChevronDown} />
                                </div>
                              </div>
                              <div className="flex-[1_0_0] h-[7.406px] min-w-px relative" data-node-id="2001:2517" />
                              <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[4.678px] text-[rgba(0,0,0,0.87)] tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2518" style={{ fontVariationSettings: '"wdth" 100' }}>
                                1-15 of 150
                              </p>
                              <div className="bg-white border-[#eff2f5] border-[0.39px] border-solid content-stretch flex gap-[3.118px] h-[9.355px] items-center justify-center max-h-[12.473671913146973px] overflow-clip px-[6.237px] relative rounded-[1.559px] shrink-0 w-[18.711px]" data-node-id="2001:2519" data-name="Text Buttons">
                                <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#171717] text-[4.678px] whitespace-nowrap" data-node-id="2001:2521" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                                  <p className="leading-[normal]">1</p>
                                </div>
                                <div className="relative shrink-0 size-[6.237px]" data-node-id="2001:2522" data-name="Chevron--down">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgChevronDown1} />
                                </div>
                              </div>
                              <p className="[word-break:break-word] font-['Open_Sans:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[4.678px] text-[rgba(0,0,0,0.87)] tracking-[0.0187px] whitespace-nowrap" data-node-id="2001:2524" style={{ fontVariationSettings: '"wdth" 100' }}>{` of 10 pages`}</p>
                              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="2001:2525">
                                <div className="bg-[#e8e8e8] col-1 content-stretch flex h-[9.355px] items-center justify-center max-h-[18.710506439208984px] ml-0 mt-0 overflow-clip px-[6.237px] relative rounded-bl-[1.559px] rounded-tl-[1.559px] row-1 w-[12.474px]" data-node-id="2001:2526" data-name="Icon Buttons">
                                  <div className="relative shrink-0 size-[6.237px]" data-node-id="2001:2527" data-name="Chevron--left">
                                    <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgChevronLeft} />
                                  </div>
                                </div>
                                <div className="bg-white border-[#eff2f5] border-[0.39px] border-solid col-1 content-stretch flex h-[9.355px] items-center justify-center max-h-[18.710506439208984px] ml-[15.59px] mt-0 overflow-clip px-[6.237px] relative rounded-bl-[1.559px] rounded-tl-[1.559px] row-1 w-[12.474px]" data-node-id="2001:2528" data-name="Icon Buttons">
                                  <div className="relative shrink-0 size-[6.237px]" data-node-id="2001:2529" data-name="Chevron--right">
                                    <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgChevronRight} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white border-[#e7e8ef] border-b-[0.39px] border-r-[0.39px] border-solid border-t-[0.39px] content-stretch flex items-start pl-[9.355px] pr-[6.237px] py-[6.237px] relative shrink-0 w-full" data-node-id="2001:2530">
                          <div className="bg-[#eff2f5] border-[#5a7b9a] border-[0.39px] border-solid content-stretch flex gap-[3.118px] h-[15.592px] items-center justify-center max-h-[15.592090606689453px] overflow-clip px-[6.237px] relative rounded-[1.559px] shrink-0" data-node-id="2001:2531" data-name="Text Buttons">
                            <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#19191a] text-[5.457px] whitespace-nowrap" data-node-id="2001:2532" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                              <p className="leading-[normal]">Cancel</p>
                            </div>
                          </div>
                          <div className="flex-[1_0_0] h-[6.627px] min-w-px relative" data-node-id="2001:2534" />
                          <div className="content-stretch flex gap-[3.118px] items-center relative shrink-0" data-node-id="2001:2535" data-name="Main CTAs">
                            <div className="bg-white border-[#5a7b9a] border-[0.39px] border-solid content-stretch flex gap-[3.118px] h-[15.592px] items-center justify-center max-h-[15.592090606689453px] overflow-clip px-[6.237px] relative rounded-[1.559px] shrink-0" data-node-id="2001:2537" data-name="Text Buttons">
                              <div className="relative shrink-0 size-[6.237px]" data-node-id="2001:2538" data-name="Arrow--left">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgArrowLeft} />
                              </div>
                              <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#5a7b9a] text-[5.457px] whitespace-nowrap" data-node-id="2001:2539" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                                <p className="leading-[normal]">Back</p>
                              </div>
                            </div>
                            <div className="bg-[#5a7b9a] content-stretch flex gap-[3.118px] h-[15.592px] items-center justify-center max-h-[15.592090606689453px] overflow-clip px-[6.237px] relative rounded-[1.559px] shrink-0" data-node-id="2001:2541" data-name="Text Buttons">
                              <div className="[word-break:break-word] flex flex-col font-['Noto_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[5.457px] text-white whitespace-nowrap" data-node-id="2001:2543" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100' }}>
                                <p className="leading-[normal]">Next</p>
                              </div>
                              <div className="relative shrink-0 size-[6.237px]" data-node-id="2001:2544" data-name="Arrow--right">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgArrowRight} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[39.135px] items-start left-[42px] top-[71.28px] w-[402px]" data-node-id="2001:2545">
                <div className="content-stretch flex flex-col gap-[26.09px] items-start relative shrink-0 w-full" data-node-id="2001:2546">
                  <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[13.045px] py-[6.523px] relative rounded-[814.5px] shrink-0" data-node-id="2001:2547" style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.25)" }}>
                    <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#feffaf] text-[14.676px] whitespace-nowrap" data-node-id="2001:2548">
                      B2B • SAAS • EMERGENCY COMMUNICATION
                    </p>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[14.676px] items-start relative shrink-0 text-white w-full" data-node-id="2001:2549">
                    <p className="font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[16.306px] w-full" data-node-id="2001:2550">
                      Designing a clearer workflow for configuring emergency alerts
                    </p>
                    <p className="font-['Inter:Regular'] font-normal leading-[19.568px] not-italic relative shrink-0 text-[13.045px] w-full" data-node-id="2001:2551">
                      BlackBerry AtHoc is an enterprise emergency communication platform for configuring and delivering critical alerts. I designed an end-to-end workflow that helps administrators define, target, schedule, and confidently publish alerts.
                    </p>
                  </div>
                </div>
                <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[18.043px] py-[6.647px] relative rounded-[9.784px] shrink-0" data-node-id="2001:2552" style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.25)" }}>
                  <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[14.676px] text-white whitespace-nowrap" data-node-id="2001:2553">
                    View Case Study
                  </p>
                </div>
              </div>
            </div>
            <div ref={c2} className="h-[442.716px] overflow-clip rounded-[19.568px] shrink-0 w-full" data-node-id="2001:2554" data-name="Card 3" onClick={() => { window.scrollTo(0, 0); navigate("/case-study/loan-workflow"); }} style={{ cursor: "pointer", position: "sticky", top: `${STICKY_VP[2] / scale}px`, zIndex: 12, transform: `scale(${(1 - cardDepth(2) * 0.08).toFixed(4)})`, transformOrigin: "top center", filter: `brightness(${(1 - cardDepth(2) * 0.20).toFixed(4)})`, backdropFilter: "blur(50px)", WebkitBackdropFilter: "blur(50px)" }}>
              <div className="-translate-x-1/2 absolute h-[442.716px] left-1/2 rounded-[19.568px] top-0 w-[905px]" data-node-id="2001:2555" style={{ backgroundColor: "rgba(2, 99, 187, 0.5)", backdropFilter: "blur(100px)", WebkitBackdropFilter: "blur(100px)", border: "1px solid rgba(255,255,255,0.25)" }} />
              <div className="-translate-y-1/2 absolute h-[461.468px] left-[410.1px] top-[calc(50%+76.23px)] w-[757.889px]" data-node-id="2001:2556" data-name="Frame">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[461.468px] left-1/2 top-1/2 w-[757.889px]" data-node-id="2001:2557" data-name="Image">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage} />
                </div>
                <div className="absolute bg-[#f6f8fe] h-[423.149px] left-[64.41px] overflow-clip rounded-tl-[14.676px] rounded-tr-[14.676px] top-[5.71px] w-[628.608px]" data-node-id="2001:2558" data-name="New Landing Page">
                  <div className="absolute content-stretch flex items-start left-[32.61px] top-[5.71px] w-[595.995px]" data-node-id="2001:2559">
                    <div className="bg-white h-[493.265px] overflow-clip relative rounded-[7.638px] shrink-0 w-[590.645px]" data-node-id="2001:2560">
                      <div className="absolute content-stretch flex items-center justify-center left-[18.19px] top-[17.18px] w-[544.183px]" data-node-id="2001:2561" data-name="Heading">
                        <div className="content-stretch flex flex-[1_0_0] gap-[5.092px] items-center min-w-px relative" data-node-id="I2001:2561;2:4802">
                          <p className="[word-break:break-word] bg-clip-text bg-gradient-to-r flex-[1_0_0] font-['Archivo:Bold'] font-bold from-[#0e15a6] leading-[25.459px] min-w-px relative text-[20.37px] text-[transparent] to-[#6e75ff] to-[34.914%] via-[#5e65ec] via-[21.084%]" data-node-id="I2001:2561;2:4803" style={{ fontVariationSettings: '"wdth" 100' }}>
                            Hi Peter, here are our loans for this week.
                          </p>
                        </div>
                      </div>
                      <div className="absolute contents left-[7.46px] top-[107.56px]" data-node-id="2001:2562">
                        <div className="absolute contents left-[448.08px] top-[107.56px]" data-node-id="2001:2563">
                          <div className="absolute contents left-[448.08px] top-[107.56px]" data-node-id="2001:2564">
                            <div className="absolute backdrop-blur-[1.273px] h-[215.127px] left-[448.08px] opacity-90 rounded-[5.092px] top-[107.56px] w-[128.567px]" data-node-id="2001:2565" style={{ backgroundImage: "linear-gradient(104.90946363669406deg, rgb(254, 254, 255) 34.099%, rgba(241, 244, 255, 0.57) 63.969%, rgba(238, 241, 255, 0.59) 80.813%)" }} />
                          </div>
                          <div className="absolute content-stretch flex flex-col gap-[25.459px] h-[279.835px] items-start leading-[0] left-[455.68px] top-[152.12px] w-[109.402px]" data-node-id="2001:2567">
                            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-node-id="2001:2568">
                              <p className="[word-break:break-word] bg-clip-text col-1 font-['Archivo:Bold'] font-bold h-[36.279px] ml-0 mt-0 relative row-1 text-[0px] text-[transparent] w-[94.59px] whitespace-pre-wrap" data-node-id="2001:2569" style={{ fontVariationSettings: '"wdth" 100', backgroundImage: "linear-gradient(32.46567395492856deg, rgb(10, 177, 163) 46.579%, rgb(44, 218, 174) 63.552%)" }}>
                                <span className="bg-clip-text leading-[17.821px] text-[25.459px]" style={{ backgroundImage: "linear-gradient(32.46567395492856deg, rgb(10, 177, 163) 46.579%, rgb(44, 218, 174) 63.552%)" }}>
                                  2.1
                                </span>
                                <span className="bg-clip-text leading-[17.821px] text-[12.729px]" style={{ backgroundImage: "linear-gradient(32.46567395492856deg, rgb(10, 177, 163) 46.579%, rgb(44, 218, 174) 63.552%)" }}>{`x `}</span>
                                <span className="bg-clip-text font-['Archivo:SemiBold'] font-semibold leading-[17.821px] text-[12.729px]" style={{ fontVariationSettings: '"wdth" 100', backgroundImage: "linear-gradient(32.46567395492856deg, rgb(10, 177, 163) 46.579%, rgb(44, 218, 174) 63.552%)" }}>
                                  <br aria-hidden />
                                </span>
                                <span className="font-['Archivo:SemiBold'] font-semibold leading-[15.275px] text-[#0ab1a3] text-[8.911px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  Jazz Amplification
                                </span>
                              </p>
                              <div className="col-1 flex h-[15.726px] items-center justify-center ml-[47.75px] mt-[3.82px] relative row-1 w-[16.495px]" data-node-id="2001:2570">
                                <div className="-scale-y-100 flex-none">
                                  <div className="h-[15.726px] relative w-[16.495px]" data-name="AI">
                                    <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgAi} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="[word-break:break-word] bg-clip-text font-['Archivo:Bold'] font-bold min-w-full relative shrink-0 text-[0px] text-[transparent] w-[min-content]" data-node-id="2001:2573" style={{ fontVariationSettings: '"wdth" 100', backgroundImage: "linear-gradient(29.949838136937693deg, rgb(10, 177, 163) 46.579%, rgb(44, 218, 174) 63.552%)" }}>
                              <span className="bg-clip-text leading-[17.821px] text-[25.459px]" style={{ backgroundImage: "linear-gradient(29.949838136937693deg, rgb(10, 177, 163) 46.579%, rgb(44, 218, 174) 63.552%)" }}>
                                1.2
                              </span>
                              <span className="leading-[17.821px] text-[17.821px]">{` `}</span>
                              <span className="bg-clip-text leading-[17.821px] text-[12.729px]" style={{ backgroundImage: "linear-gradient(29.949838136937693deg, rgb(10, 177, 163) 46.579%, rgb(44, 218, 174) 63.552%)" }}>
                                hours
                              </span>
                              <span className="bg-clip-text font-['Archivo:SemiBold'] font-semibold leading-[17.821px] text-[12.729px]" style={{ fontVariationSettings: '"wdth" 100', backgroundImage: "linear-gradient(29.949838136937693deg, rgb(10, 177, 163) 46.579%, rgb(44, 218, 174) 63.552%)" }}>
                                <br aria-hidden />
                              </span>
                              <span className="font-['Archivo:SemiBold'] font-semibold leading-[15.275px] text-[#0ab1a3] text-[8.911px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                                Median Time to Decision
                              </span>
                            </p>
                            <p className="[word-break:break-word] bg-clip-text font-['Archivo:Bold'] font-bold min-w-full relative shrink-0 text-[0px] text-[transparent] w-[min-content]" data-node-id="2001:2574" style={{ fontVariationSettings: '"wdth" 100', backgroundImage: "linear-gradient(29.949838136937693deg, rgb(10, 177, 163) 46.579%, rgb(44, 218, 174) 63.552%)" }}>
                              <span className="bg-clip-text leading-[17.821px] text-[25.459px]" style={{ backgroundImage: "linear-gradient(29.949838136937693deg, rgb(10, 177, 163) 46.579%, rgb(44, 218, 174) 63.552%)" }}>
                                93%
                              </span>
                              <span className="bg-clip-text font-['Archivo:SemiBold'] font-semibold leading-[17.821px] text-[12.729px]" style={{ fontVariationSettings: '"wdth" 100', backgroundImage: "linear-gradient(29.949838136937693deg, rgb(10, 177, 163) 46.579%, rgb(44, 218, 174) 63.552%)" }}>
                                <br aria-hidden />
                              </span>
                              <span className="font-['Archivo:SemiBold'] font-semibold leading-[15.275px] text-[#0ab1a3] text-[8.911px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                                One-Touch Rate
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="absolute contents left-[175.01px] top-[166.1px]" data-node-id="2001:2576">
                          <div className="absolute left-[175.01px] size-[163.987px] top-[166.1px]" data-node-id="2001:2579">
                            <div className="absolute inset-[-116.44%]">
                              <img alt="" className="block max-w-none size-full" loading="lazy" src={imgEllipse38} />
                            </div>
                          </div>
                        </div>
                        <div className="absolute contents left-[7.46px] top-[118.78px]" data-node-id="2001:2640">
                          <div className="absolute contents left-[7.46px] top-[118.78px]" data-node-id="2001:2641">
                            <div className="absolute contents left-[7.46px] top-[118.78px]" data-node-id="2001:2642">
                              <div className="absolute contents left-[7.46px] top-[118.78px]" data-node-id="2001:2643">
                                <div className="absolute flex h-[54.915px] items-center justify-center left-[305.42px] top-[170.83px] w-[55.322px]" data-node-id="2001:2644">
                                  <div className="flex-none rotate-[89.76deg]">
                                    <div className="h-[55.09px] relative w-[54.681px]" data-name="Vector 48 (Stroke)">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgVector48Stroke} />
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute flex h-[96.922px] items-center justify-center left-[303.96px] top-[210.29px] w-[55.68px]" data-node-id="2001:2645">
                                  <div className="-scale-y-100 flex-none rotate-[-89.76deg]">
                                    <div className="h-[55.269px] relative w-[96.687px]" data-name="Vector 48 (Stroke)">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgVector48Stroke1} />
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute contents left-[62.22px] top-[180.69px]" data-node-id="2001:2646">
                                  <div className="absolute h-[82.972px] left-[62.22px] top-[180.69px] w-[196.833px]" data-node-id="2001:2647">
                                    <div className="absolute inset-[-9.68%_-0.99%_-9.97%_-1.01%]">
                                      <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector47} />
                                    </div>
                                  </div>
                                  <div className="absolute h-[34.417px] left-[248.26px] top-[214.61px] w-[122.603px]" data-node-id="2001:2648">
                                    <div className="absolute inset-[-24.04%_-1.86%_-23.09%_-1.88%]">
                                      <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector48} />
                                    </div>
                                  </div>
                                  <div className="absolute left-[363.49px] size-[71.399px] top-[191.4px]" data-node-id="2001:2649">
                                    <div className="absolute inset-[-21.04%]">
                                      <img alt="" className="block max-w-none size-full" loading="lazy" src={imgEllipse37} />
                                    </div>
                                  </div>
                                  <div className="absolute contents left-[349.42px] top-[213.23px]" data-node-id="2001:2650">
                                    <div className="absolute contents left-[349.42px] top-[213.23px]" data-node-id="2001:2651">
                                      <div className="-translate-x-1/2 absolute flex h-[14.065px] items-center justify-center left-[calc(50%+106.61px)] top-[calc(50%-19.73px)] w-[44.439px]" data-node-id="2001:2652">
                                        <div className="flex-none rotate-[-0.08deg]">
                                          <p className="[word-break:break-word] font-['Archivo:Italic'] font-normal italic leading-[14.002px] relative text-[#2942c2] text-[17.821px] text-center w-[44.418px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                                            40
                                          </p>
                                        </div>
                                      </div>
                                      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Archivo:Regular'] font-normal h-[11.456px] leading-[11.456px] left-[401.93px] text-[#2942c2] text-[8.911px] text-center top-[213.23px] w-[105.018px]" data-node-id="2001:2653" style={{ fontVariationSettings: '"wdth" 100' }}>
                                        Approved
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute h-[26.095px] left-[355.22px] opacity-70 top-[207.05px] w-[26.732px]" data-node-id="2001:2654">
                                  <div className="absolute contents inset-[0_28.46%_27.92%_0]" data-node-id="I2001:2654;120:225">
                                    <div className="absolute bg-gradient-to-b from-[#8b8fff] from-[11.538%] inset-[0_28.46%_27.92%_0] overflow-clip rounded-[100px] to-[#020ad4] to-[111.54%]" data-node-id="I2001:2654;120:226">
                                      <div className="absolute h-[89.742px] left-[-104.84px] top-[66.51px] w-[378.817px]" data-node-id="I2001:2654;120:227">
                                        <div className="absolute inset-[5.47%_0_1.33%_0]">
                                          <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector37} />
                                        </div>
                                      </div>
                                      <div className="absolute h-[89.742px] right-[81.66px] top-[66.51px] w-[378.817px]" data-node-id="I2001:2654;120:228">
                                        <div className="absolute inset-[5.47%_0_1.33%_0]">
                                          <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector38} />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute inset-[9.71%_38.17%_37.74%_9.68%]" data-node-id="I2001:2654;120:229">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGroup1000003904} />
                                    </div>
                                  </div>
                                  <div className="absolute flex inset-[51.55%_0_0_44.95%] items-center justify-center" data-node-id="I2001:2654;120:241" style={{ containerType: "size" }}>
                                    <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                                      <div className="relative size-full" data-name="AI">
                                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgAi1} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute flex h-[11.612px] items-center justify-center left-[297.39px] top-[217.94px] w-[13.142px]" data-node-id="2001:2655">
                                  <div className="flex-none rotate-[-37.76deg]">
                                    <div className="h-[4.527px] relative w-[13.117px]">
                                      <div className="absolute inset-[-26.52%_0_-44.3%_0]">
                                        <img alt="" className="block max-w-none size-full" loading="lazy" src={imgGroup1000004068} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute flex h-[13.8px] items-center justify-center left-[347.81px] top-[245.24px] w-[7.147px]" data-node-id="2001:2658">
                                  <div className="flex-none rotate-[78.07deg]">
                                    <div className="h-[4.527px] relative w-[13.148px]">
                                      <div className="absolute inset-[-27.88%_0_-42.93%_0]">
                                        <img alt="" className="block max-w-none size-full" loading="lazy" src={imgGroup1000004075} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute contents left-[7.46px] top-[118.78px]" data-node-id="2001:2661">
                                  <div className="absolute flex h-[60.258px] items-center justify-center left-[78.25px] top-[149.25px] w-[38.052px]" data-node-id="2001:2662">
                                    <div className="-scale-y-100 flex-none rotate-180">
                                      <div className="h-[60.258px] relative w-[38.052px]" data-name="Vector 49 (Stroke)">
                                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgVector49Stroke} />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute contents left-[7.46px] top-[118.78px]" data-node-id="2001:2663">
                                    <div className="absolute contents left-[7.46px] top-[118.78px]" data-node-id="2001:2664">
                                      <div className="absolute contents left-[7.46px] top-[132.5px]" data-node-id="2001:2665">
                                        <div className="absolute left-[7.46px] size-[67.123px] top-[132.5px]" data-node-id="2001:2666">
                                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgEllipse39} />
                                        </div>
                                        <div className="absolute contents left-[7.46px] top-[132.5px]" data-node-id="2001:2667">
                                          <div className="absolute left-[7.46px] size-[67.123px] top-[132.5px]" data-node-id="2001:2668">
                                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgEllipse39} />
                                          </div>
                                          <div className="-translate-x-1/2 absolute flex h-[14.044px] items-center justify-center left-[calc(50%-254.3px)] top-[calc(50%-74.88px)] w-[31.142px]" data-node-id="2001:2669">
                                            <div className="flex-none rotate-[-0.08deg]">
                                              <p className="[word-break:break-word] font-['Archivo:Italic'] font-normal italic leading-[14.002px] relative text-[#2942c2] text-[17.821px] text-center w-[31.122px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                                                98
                                              </p>
                                            </div>
                                          </div>
                                          <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Archivo:Regular'] font-normal leading-[0] left-[41.02px] text-[#2942c2] text-[8.911px] text-center top-[145.06px] w-[67.122px]" data-node-id="2001:2670" style={{ fontVariationSettings: '"wdth" 100' }}>
                                            <p className="leading-[11.456px] mb-0">Submitted</p>
                                            <p className="leading-[11.456px]">to Underwriting</p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="absolute contents left-[81.83px] top-[118.78px]" data-node-id="2001:2671">
                                        <div className="absolute contents left-[81.83px] top-[118.78px]" data-node-id="2001:2672">
                                          <div className="absolute left-[81.83px] size-[56.125px] top-[118.78px]" data-node-id="2001:2673">
                                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgEllipse40} />
                                          </div>
                                          <div className="-translate-x-1/2 absolute flex h-[10.579px] items-center justify-center left-[calc(50%-185.33px)] top-[calc(50%-93.16px)] w-[15.85px]" data-node-id="2001:2674">
                                            <div className="flex-none rotate-[-0.08deg]">
                                              <p className="[word-break:break-word] font-['Archivo:Italic'] font-normal h-[10.556px] italic leading-[14.002px] relative text-[#2942c2] text-[17.821px] text-center w-[15.835px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                                                3
                                              </p>
                                            </div>
                                          </div>
                                          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Archivo:Regular'] font-normal h-[17.318px] leading-[11.456px] left-[109.99px] text-[#2942c2] text-[8.911px] text-center top-[128.12px] w-[50.536px]" data-node-id="2001:2675" style={{ fontVariationSettings: '"wdth" 100' }}>
                                            Back from Closing
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute flex h-[9.814px] items-center justify-center left-[72.07px] top-[183.61px] w-[12.746px]" data-node-id="2001:2676">
                                    <div className="flex-none rotate-[32.64deg]">
                                      <div className="h-[3.322px] relative w-[13.009px]">
                                        <div className="absolute inset-[-73.44%_0_-63.82%_0]">
                                          <img alt="" className="block max-w-none size-full" loading="lazy" src={imgGroup1000004069} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute flex h-[12.762px] items-center justify-center left-[86.64px] top-[173.3px] w-[9.778px]" data-node-id="2001:2679">
                                    <div className="-scale-y-100 flex-none rotate-[122.42deg]">
                                      <div className="h-[3.322px] relative w-[13.009px]">
                                        <div className="absolute inset-[-73.43%_0_-63.84%_0]">
                                          <img alt="" className="block max-w-none size-full" loading="lazy" src={imgGroup1000004070} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute contents left-[322.63px] top-[121.82px]" data-node-id="2001:2682">
                                  <div className="absolute contents left-[322.63px] top-[121.82px]" data-node-id="2001:2683">
                                    <div className="absolute contents left-[322.63px] top-[121.82px]" data-node-id="2001:2684">
                                      <div className="absolute contents left-[322.63px] top-[121.82px]" data-node-id="2001:2685">
                                        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+56.42px)] size-[58.237px] top-[calc(50%-95.7px)]" data-node-id="2001:2686">
                                          <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgEllipse41} />
                                        </div>
                                        <div className="-translate-x-1/2 absolute flex h-[10.579px] items-center justify-center left-[calc(50%+56.42px)] top-[calc(50%-88.04px)] w-[15.85px]" data-node-id="2001:2687">
                                          <div className="flex-none rotate-[-0.08deg]">
                                            <p className="[word-break:break-word] font-['Archivo:Italic'] font-normal h-[10.556px] italic leading-[14.002px] relative text-[#2942c2] text-[17.821px] text-center w-[15.835px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                                              0
                                            </p>
                                          </div>
                                        </div>
                                        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Archivo:Regular'] font-normal h-[22.913px] leading-[11.456px] left-[351.74px] text-[#2942c2] text-[8.911px] text-center top-[133.17px] w-[50.536px]" data-node-id="2001:2688" style={{ fontVariationSettings: '"wdth" 100' }}>
                                          Return to Processor
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex h-[86.821px] items-center justify-center left-[135.32px] top-[216.11px] w-[67.977px]" data-node-id="2001:2689">
                              <div className="flex-none rotate-[3.55deg]">
                                <div className="h-[83.08px] relative w-[62.951px]" data-name="Union">
                                  <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgUnion} />
                                </div>
                              </div>
                            </div>
                            <div className="absolute contents left-[69.3px] top-[203.82px]" data-node-id="2001:2692">
                              <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-192.92px)] top-[calc(50%-9.72px)]" data-node-id="2001:2693">
                                <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-192.92px)] top-[calc(50%-9.72px)]" data-node-id="2001:2694">
                                  <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-192.92px)] top-[calc(50%-9.72px)]" data-node-id="2001:2695">
                                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-192.92px)] size-[66.197px] top-[calc(50%-9.72px)]" data-node-id="2001:2696">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgEllipse42} />
                                    </div>
                                    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%-192.92px)] top-[calc(50%-9.72px)]" data-node-id="2001:2697">
                                      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Archivo:Regular'] font-normal h-[22.913px] leading-[0] left-[calc(50%-192.92px)] text-[#2942c2] text-[8.911px] text-center top-[calc(50%-21.17px)] w-[50.536px]" data-node-id="2001:2698" style={{ fontVariationSettings: '"wdth" 100' }}>
                                        <p className="leading-[11.456px] mb-0">Assigned</p>
                                        <p className="leading-[11.456px]">to Us</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute h-[26.095px] left-[119.55px] opacity-70 top-[249.3px] w-[26.732px]" data-node-id="2001:2699">
                                <div className="absolute contents inset-[0_28.46%_27.92%_0]" data-node-id="I2001:2699;120:225">
                                  <div className="absolute bg-gradient-to-b from-[#8b8fff] from-[11.538%] inset-[0_28.46%_27.92%_0] overflow-clip rounded-[100px] to-[#020ad4] to-[111.54%]" data-node-id="I2001:2699;120:226">
                                    <div className="absolute h-[89.742px] left-[-104.84px] top-[66.51px] w-[378.817px]" data-node-id="I2001:2699;120:227">
                                      <div className="absolute inset-[5.47%_0_1.33%_0]">
                                        <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector37} />
                                      </div>
                                    </div>
                                    <div className="absolute h-[89.742px] right-[81.66px] top-[66.51px] w-[378.817px]" data-node-id="I2001:2699;120:228">
                                      <div className="absolute inset-[5.47%_0_1.33%_0]">
                                        <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector38} />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute inset-[9.71%_38.17%_37.74%_9.68%]" data-node-id="I2001:2699;120:229">
                                    <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgGroup1000003904} />
                                  </div>
                                </div>
                                <div className="absolute flex inset-[51.55%_0_0_44.95%] items-center justify-center" data-node-id="I2001:2699;120:241" style={{ containerType: "size" }}>
                                  <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                                    <div className="relative size-full" data-name="AI">
                                      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgAi2} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex h-[7.085px] items-center justify-center left-[152.69px] top-[259.05px] w-[14.158px]" data-node-id="2001:2700">
                              <div className="flex-none rotate-[-11.27deg]">
                                <div className="h-[4.527px] relative w-[13.534px]">
                                  <div className="absolute inset-[-29.43%_0_-41.39%_0]">
                                    <img alt="" className="block max-w-none size-full" loading="lazy" src={imgGroup1000004078} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute contents left-[159.33px] top-[166.45px]" data-node-id="2001:2703">
                              <div className="absolute h-[38.076px] left-[205.58px] top-[184.12px] w-[112.504px]" data-node-id="2001:2704">
                                <div className="absolute inset-[-7.67%_-1.74%_-20.06%_-6.27%]">
                                  <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector568} />
                                </div>
                              </div>
                              <div className="absolute flex h-[94.448px] items-center justify-center left-[213.34px] top-[220.72px] w-[90.58px]" data-node-id="2001:2705">
                                <div className="-scale-y-100 flex-none rotate-[-46.46deg]">
                                  <div className="h-[11.651px] relative w-[119.226px]">
                                    <div className="absolute inset-[-65.57%_-2.49%_-55.25%_-3.45%]">
                                      <img alt="" className="block max-w-none size-full" loading="lazy" src={imgVector569} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-106.87px)] size-[58.237px] top-[calc(50%-51.07px)]" data-node-id="2001:2706">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgEllipse43} />
                              </div>
                              <div className="-translate-x-1/2 absolute flex h-[10.579px] items-center justify-center left-[calc(50%-106.87px)] top-[calc(50%-41.5px)] w-[15.85px]" data-node-id="2001:2707">
                                <div className="flex-none rotate-[-0.08deg]">
                                  <p className="[word-break:break-word] font-['Archivo:Italic'] font-normal h-[10.556px] italic leading-[14.002px] relative text-[17.821px] text-center text-white w-[15.835px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                                    0
                                  </p>
                                </div>
                              </div>
                              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Archivo:Regular'] font-normal h-[22.913px] leading-[11.456px] left-[188.45px] text-[8.911px] text-center text-white top-[179.7px] w-[50.536px]" data-node-id="2001:2708" style={{ fontVariationSettings: '"wdth" 100' }}>
                                Re-approval Queue
                              </p>
                            </div>
                            <div className="absolute contents left-[166.8px] top-[285.57px]" data-node-id="2001:2709">
                              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-99.41px)] size-[58.237px] top-[calc(50%+68.06px)]" data-node-id="2001:2710">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgEllipse44} />
                              </div>
                              <div className="-translate-x-1/2 absolute flex h-[10.579px] items-center justify-center left-[calc(50%-99.41px)] top-[calc(50%+75.71px)] w-[15.85px]" data-node-id="2001:2711">
                                <div className="flex-none rotate-[-0.08deg]">
                                  <p className="[word-break:break-word] font-['Archivo:Italic'] font-normal h-[10.556px] italic leading-[14.002px] relative text-[17.821px] text-center text-white w-[15.835px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                                    0
                                  </p>
                                </div>
                              </div>
                              <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Archivo:Regular'] font-normal h-[22.913px] leading-[0] left-[195.92px] text-[8.911px] text-center text-white top-[296.92px] w-[50.536px]" data-node-id="2001:2712" style={{ fontVariationSettings: '"wdth" 100' }}>
                                <p className="leading-[11.456px] mb-0">Exception</p>
                                <p className="leading-[11.456px]">Review</p>
                              </div>
                            </div>
                            <div className="absolute contents left-[195.95px] top-[223.98px]" data-node-id="2001:2713">
                              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-70.25px)] size-[58.237px] top-[calc(50%+6.47px)]" data-node-id="2001:2714">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgEllipse44} />
                              </div>
                              <div className="-translate-x-1/2 absolute flex h-[10.579px] items-center justify-center left-[calc(50%-70.25px)] top-[calc(50%+14.13px)] w-[15.85px]" data-node-id="2001:2715">
                                <div className="flex-none rotate-[-0.08deg]">
                                  <p className="[word-break:break-word] font-['Archivo:Italic'] font-normal h-[10.556px] italic leading-[14.002px] relative text-[17.821px] text-center text-white w-[15.835px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                                    3
                                  </p>
                                </div>
                              </div>
                              <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Archivo:Regular'] font-normal h-[22.913px] leading-[11.456px] left-[225.07px] text-[8.911px] text-center text-white top-[235.33px] w-[50.536px]" data-node-id="2001:2716" style={{ fontVariationSettings: '"wdth" 100' }}>
                                Ready for Decision
                              </p>
                            </div>
                            <div className="absolute contents left-[322.63px] top-[262.75px]" data-node-id="2001:2717">
                              <div className="absolute left-[322.63px] size-[58.235px] top-[262.75px]" data-node-id="2001:2718">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgEllipse45} />
                              </div>
                              <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+56.6px)] top-[calc(50%+45.23px)]" data-node-id="2001:2719">
                                <div className="absolute contents left-[333.92px] top-[277.93px]" data-node-id="2001:2720">
                                  <div className="-translate-x-1/2 absolute flex h-[12.937px] items-center justify-center left-[calc(50%+56.42px)] top-[calc(50%+46.22px)] w-[15.811px]" data-node-id="2001:2721">
                                    <div className="flex-none rotate-[-0.08deg]">
                                      <p className="[word-break:break-word] font-['Archivo:Bold'] font-bold h-[12.914px] leading-[10.857px] relative text-[#da5154] text-[20.728px] text-center w-[15.792px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                                        5
                                      </p>
                                    </div>
                                  </div>
                                  <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Archivo:Regular'] font-normal leading-[10.184px] left-[351.92px] text-[#cd383a] text-[8.911px] text-center top-[277.93px] whitespace-nowrap" data-node-id="2001:2722" style={{ fontVariationSettings: '"wdth" 100' }}>
                                    Declined
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex h-[6.964px] items-center justify-center left-[224.97px] top-[204.54px] w-[10.718px]" data-node-id="2001:2723">
                              <div className="flex-none rotate-[27.19deg]">
                                <div className="h-[2.226px] relative w-[10.906px]">
                                  <div className="absolute inset-[-105.83%_0_-105.79%_0]">
                                    <img alt="" className="block max-w-none size-full" loading="lazy" src={imgGroup1000004139} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex h-[8.79px] items-center justify-center left-[229.52px] top-[293.45px] w-[11.178px]" data-node-id="2001:2726">
                              <div className="flex-none rotate-[144.84deg]">
                                <div className="h-[2.226px] relative w-[12.104px]">
                                  <div className="absolute inset-[-105.74%_0_-105.88%_0]">
                                    <img alt="" className="block max-w-none size-full" loading="lazy" src={imgGroup1000004140} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute contents left-[322.79px] top-[262.87px]" data-node-id="2001:2729">
                            <div className="absolute left-[322.79px] size-[58.235px] top-[262.87px]" data-node-id="2001:2730">
                              <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgEllipse45} />
                            </div>
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+56.76px)] top-[calc(50%+45.36px)]" data-node-id="2001:2731">
                              <div className="absolute contents left-[334.09px] top-[278.06px]" data-node-id="2001:2732">
                                <div className="-translate-x-1/2 absolute flex h-[12.937px] items-center justify-center left-[calc(50%+56.58px)] top-[calc(50%+46.35px)] w-[15.811px]" data-node-id="2001:2733">
                                  <div className="flex-none rotate-[-0.08deg]">
                                    <p className="[word-break:break-word] font-['Archivo:Bold'] font-bold h-[12.914px] leading-[10.857px] relative text-[#da5154] text-[20.728px] text-center w-[15.792px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                                      5
                                    </p>
                                  </div>
                                </div>
                                <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Archivo:Regular'] font-normal leading-[10.184px] left-[352.09px] text-[#cd383a] text-[8.911px] text-center top-[278.06px] whitespace-nowrap" data-node-id="2001:2734" style={{ fontVariationSettings: '"wdth" 100' }}>
                                  Declined
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col h-[421.001px] items-start left-0 overflow-clip p-[6.444px] rounded-[8.592px] top-[1.07px] w-[32.219px]" data-node-id="2001:2735" data-name="Navigation Drawer Collapsed">
                    <div className="content-stretch flex h-[16.11px] items-center justify-center relative shrink-0 w-full" data-node-id="I2001:2735;58806:3518">
                      <div className="relative shrink-0 size-[10.74px]" data-node-id="I2001:2735;58963:1083" data-name="Icon">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon4} />
                      </div>
                    </div>
                    <div className="h-[12.888px] relative rounded-[100px] shrink-0 w-full" data-node-id="I2001:2735;58806:3522" data-name="Section header 6" />
                    <div className="bg-[rgba(203,213,225,0.5)] content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="I2001:2735;58806:3529" data-name="Nav item 1">
                      <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I2001:2735;58806:3529;52034:21320">
                        <div className="content-stretch flex flex-[1_0_0] gap-[4.296px] h-full items-center justify-center min-w-px px-[2.148px] py-[4.296px] relative" data-name="state-layer">
                          <div className="relative shrink-0 size-[10.74px]" data-node-id="I2001:2735;58806:3529;51593:5256" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon5} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[0.537px] relative shrink-0 w-full" data-node-id="I2001:2735;58806:3534" data-name="Divider 1">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgDivider1} />
                    </div>
                    <div className="h-[0.537px] relative shrink-0 w-full" data-node-id="I2001:2735;58806:3535" data-name="Divider 2">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgDivider1} />
                    </div>
                    <div className="flex-[1_0_0] min-h-px relative rounded-[100px] w-full" data-node-id="I2001:2735;58806:3536" data-name="Section header 5" />
                    <div className="content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-node-id="I2001:2735;58806:3538" data-name="Nav item 10">
                      <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I2001:2735;58806:3538;51593:5268">
                        <div className="content-stretch flex flex-[1_0_0] gap-[4.296px] h-full items-center justify-center min-w-px px-[2.148px] py-[4.296px] relative" data-name="state-layer">
                          <div className="relative shrink-0 size-[10.74px]" data-node-id="I2001:2735;58806:3538;51593:5269" data-name="Icon">
                            <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgIcon6} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-node-id="I2001:2735;58808:4962">
                      <div className="relative shrink-0 size-[17.184px]" data-node-id="I2001:2735;58808:4959" data-name="avatar">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" height="17.184" loading="lazy" src={imgAvatar} width="17.184" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[39.135px] items-start left-[42px] top-[70.57px] w-[402px]" data-node-id="2001:2736">
                <div className="content-stretch flex flex-col gap-[26.09px] items-start relative shrink-0 w-full" data-node-id="2001:2737">
                  <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[13.045px] py-[6.523px] relative rounded-[814.5px] shrink-0" data-node-id="2001:2738" style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.25)" }}>
                    <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[0] not-italic relative shrink-0 text-[#feffaf] text-[14.676px] whitespace-nowrap" data-node-id="2001:2739">
                      <span className="leading-[normal]">{`B2B • AI • `}</span>
                      <span className="leading-[normal] uppercase">FinTech</span>
                    </p>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[14.676px] items-start relative shrink-0 text-white w-full" data-node-id="2001:2740">
                    <p className="font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[16.306px] w-full" data-node-id="2001:2741">
                      Designing a clearer AI-assisted workflow for loan officers to review and approve loans
                    </p>
                    <p className="font-['Inter:Regular'] font-normal leading-[19.568px] not-italic relative shrink-0 text-[13.045px] w-full" data-node-id="2001:2742">
                      JASSX is an AI-assisted loan review platform that helps loan officers understand loan readiness, verify financial evidence, resolve conditions, and confidently move toward pre-approval.
                    </p>
                  </div>
                </div>
                <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[18.043px] py-[6.647px] relative rounded-[9.784px] shrink-0" data-node-id="2001:2743" style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.25)" }}>
                  <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[14.676px] text-white whitespace-nowrap" data-node-id="2001:2744">
                    View Case Study
                  </p>
                </div>
              </div>
            </div>
            <div ref={c3} className="h-[442.716px] overflow-clip rounded-[19.568px] shrink-0 w-full" data-node-id="2001:2745" data-name="Card 4" onClick={() => { window.scrollTo(0, 0); navigate("/case-study/pediatrics"); }} style={{ cursor: "pointer", position: "sticky", top: `${STICKY_VP[3] / scale}px`, zIndex: 13 }}>
              <div className="-translate-x-1/2 absolute h-[442.716px] left-1/2 rounded-[19.568px] top-0 w-[905px]" data-node-id="2001:2746" style={{ backgroundColor: "rgba(2, 99, 187, 0.5)", backdropFilter: "blur(50px)", WebkitBackdropFilter: "blur(50px)", border: "1px solid rgba(255,255,255,0.25)" }} />
              <div className="-translate-y-1/2 absolute h-[643.284px] left-[421.52px] top-[calc(50%+145.94px)] w-[513.344px]" data-node-id="2001:2747" data-name="cb 1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[113.03%] left-[-0.2%] max-w-none top-[-7.23%] w-[100.14%]" loading="lazy" src={imgCb1} />
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[39.135px] items-start left-[42px] top-[70.85px] w-[402px]" data-node-id="2001:2748">
                <div className="content-stretch flex flex-col gap-[26.09px] items-start relative shrink-0 w-full" data-node-id="2001:2749">
                  <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[13.045px] py-[6.523px] relative rounded-[814.5px] shrink-0" data-node-id="2001:2750" style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.25)" }}>
                    <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#feffaf] text-[14.676px] whitespace-nowrap" data-node-id="2001:2751">
                      B2C • HEALTHCARE • PEDIATRICS
                    </p>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col gap-[14.676px] items-start relative shrink-0 text-white w-full" data-node-id="2001:2752">
                    <p className="font-['Space_Grotesk:Bold'] font-bold leading-[normal] relative shrink-0 text-[16.306px] w-full" data-node-id="2001:2753">
                      Simplifying Child Health Tracking with One Connected Care Experience
                    </p>
                    <p className="font-['Inter:Regular'] font-normal leading-[19.568px] not-italic relative shrink-0 text-[13.045px] w-full" data-node-id="2001:2754">
                      A mobile experience that helps parents track daily care, growth, illnesses, vaccinations, medical records, and appointments in one place.
                    </p>
                  </div>
                </div>
                <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[18.043px] py-[6.647px] relative rounded-[9.784px] shrink-0" data-node-id="2001:2755" style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.25)" }}>
                  <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[14.676px] text-white whitespace-nowrap" data-node-id="2001:2756">
                    View Case Study
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="size-[115.9px]" data-node-id="2001:2757" data-name="Rectangle" style={{ position: "sticky", top: `${STICKY_VP[1] / scale}px`, marginTop: "785.716px", zIndex: 20, transform: `translateX(${260 - 115.9 / 2 + cardDepth(1) * 1400}px) translateY(374.284px)` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" loading="lazy" src={imgRectangle} />
            </div>
          </div>
          <div className="size-[115.9px]" data-node-id="2001:2766" data-name="Rectangle" style={{ position: "sticky", top: `${STICKY_VP[0] / scale}px`, marginTop: "-658.616px", zIndex: 20, transform: `translateX(${1120 - cardDepth(0) * 1400}px) translateY(-73px)` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" loading="lazy" src={imgRectangle1} />
            </div>
          </div>
          <div className="flex items-center justify-center size-[115.9px]" data-node-id="2001:2774" style={{ position: "sticky", top: `${STICKY_VP[1] / scale}px`, marginTop: "426.816px", zIndex: 20, transform: `translateX(${1106 - cardDepth(1) * 1400}px) translateY(-54px)` }}>
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="relative size-[115.9px]" data-name="Rectangle">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" loading="lazy" src={imgRectangle2} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center size-[115.9px]" data-node-id="2001:2776" style={{ position: "sticky", top: `${STICKY_VP[0] / scale}px`, marginTop: "-658.616px", zIndex: 20, transform: `translateX(${264 - 115.9 / 2 + cardDepth(0) * 1400}px) translateY(${442.716 - 115.9 + 30}px)` }}>
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="relative size-[115.9px]" data-name="Rectangle">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" loading="lazy" src={imgRectangle3} />
                </div>
              </div>
            </div>
          </div>

        </div>
        <div style={{ position: "absolute", top: "2855.432px", left: 0, width: "1440px", height: "1500px" }}>
          <div className="size-[115.9px]" data-node-id="2001:2777" data-name="Rectangle" style={{ position: "sticky", top: `${STICKY_VP[2] / scale}px`, zIndex: 20, transform: `translateX(${1115 - cardDepth(2) * 1400}px) translateY(-57px)` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" loading="lazy" src={imgRectangle4} />
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", top: "2855.432px", left: 0, width: "1440px", height: "1500px" }}>
          <div className="flex items-center justify-center size-[115.9px]" data-node-id="2001:2778" style={{ position: "sticky", top: `${STICKY_VP[2] / scale}px`, zIndex: 20, transform: `translateX(${262 - 115.9 / 2 + cardDepth(2) * 1400}px) translateY(372.568px)` }}>
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="relative size-[115.9px]" data-name="Rectangle">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" loading="lazy" src={imgRectangle5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute contents left-1/2 top-[3976px]" data-node-id="2001:2779" data-name="Footer">
        <div className="-translate-x-1/2 absolute bg-gradient-to-b from-[#0263bb] h-[1371px] left-1/2 overflow-clip to-[#00519b] top-[3976px] w-[1440px]" data-node-id="2001:2780">
          <div className="absolute h-[685px] left-[-133px] top-[737px] w-[1742.131px]" data-node-id="2011:2979" data-name="image 295">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage295} />
          </div>
          <div className="-translate-x-1/2 absolute contents left-1/2 top-[764px]" data-node-id="2001:2949">
            <div className="absolute h-[417px] left-[271px] top-[764px] w-[898px]" data-node-id="2001:2950" data-name="Subtract">
              <img alt="" className="absolute block inset-0 max-w-none size-full" loading="lazy" src={imgSubtract1} style={{ backdropFilter: "blur(27px)", WebkitBackdropFilter: "blur(27px)" }} />
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[32px] items-center left-[calc(50%+0.5px)] top-[calc(50%+294.5px)] w-[773px]" data-node-id="2001:2953">
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center leading-[normal] relative shrink-0 text-white uppercase w-full" data-node-id="2001:2954">
                <p className="font-['Borsok:Regular'] not-italic relative shrink-0 text-[32px] text-center w-full" data-node-id="2001:2955">
                  Lets Make this Happen
                </p>
                <div className="content-stretch flex flex-col font-['Space_Grotesk:Bold'] font-bold gap-[18px] items-center relative shrink-0 text-[22px] w-full" data-node-id="2001:2956">
                  <p className="relative shrink-0 whitespace-nowrap" data-node-id="2001:2957">
                    YOUR PROBLEM + MY DESIGN THINKING = SOMETHING PEOPLE LOVE TO USE.
                  </p>
                  <p className="min-w-full relative shrink-0 text-center w-[min-content]" data-node-id="2001:2958">{`LET'S CREATE PRODUCTS THAT MAKE AN IMPACT.`}</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-node-id="2001:2959">
                <div className="bg-[#fcc6db] content-stretch drop-shadow-[2px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center px-[16px] py-[5px] relative rounded-[34px] shrink-0" data-node-id="2001:2960">
                  <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#3347ae] text-[14px] whitespace-nowrap" data-node-id="2001:2961">
                    Linkedin
                  </p>
                </div>
                <div className="bg-[#fcc6db] content-stretch drop-shadow-[2px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center px-[16px] py-[5px] relative rounded-[34px] shrink-0" data-node-id="2001:2962">
                  <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#3347ae] text-[14px] whitespace-nowrap" data-node-id="2001:2963">
                    Behance
                  </p>
                </div>
              </div>
              <div className="bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center px-[14px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="2001:2964">
                <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap" data-node-id="2001:2965">
                  Let's Talk!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute contents left-[calc(50%+0.25px)] top-[3994px]" data-node-id="2001:2967" data-name="Section 4">
          <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-center left-[calc(50%+0.25px)] py-[32px] top-[3914px] w-[746.5px]" data-node-id="2001:2968" style={{ zIndex: 50, position: "absolute" }}>
            <p className="[word-break:break-word] font-['Borsok:Regular'] leading-[normal] not-italic relative shrink-0 text-[32px] text-right text-white whitespace-nowrap" data-node-id="2001:2969">
              Want to dive deeper?
            </p>
            <div className="content-stretch flex gap-[45px] h-[266px] items-center justify-end relative shrink-0 w-full" data-node-id="2001:2970">
              <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-[366px]" data-node-id="2001:2971">
                <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] min-w-full relative shrink-0 text-[22px] text-white w-[min-content]" data-node-id="2001:2972">
                  A LITTLE BOX OF MY WORK
                </p>
                <p className="[word-break:break-word] font-['Space_Grotesk:Bold'] font-bold leading-[normal] min-w-full relative shrink-0 text-[22px] text-center text-white w-[min-content]" data-node-id="2001:2973">
                  There's more beneath the surface.
                </p>
                <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center px-[22.13px] py-[8.153px] relative rounded-[12px] shrink-0" data-node-id="2001:2974" onClick={() => { window.scrollTo(0, 0); navigate("/dive-deeper"); }} style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.3)", cursor: "pointer", position: "relative", zIndex: 50 }}>
                  <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap" data-node-id="2001:2975">
                    Dive Deeper
                  </p>
                </div>
              </div>
              <div className="absolute h-[329px] left-0 top-[-2px] w-[335px]" data-node-id="2001:2976" data-name="image 6">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[114.56%] left-0 max-w-none top-[-7.2%] w-[100.15%]" loading="lazy" src={imgImage6} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[48px] items-center left-1/2 px-[10px] py-[48px] top-[4355px] w-[1460px]" data-node-id="2001:2977" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.25)" }}>
          <p className="[word-break:break-word] font-['Borsok:Regular'] leading-[normal] not-italic relative shrink-0 text-[32px] text-right text-white whitespace-nowrap" data-node-id="2001:2978">
            Tools I Know
          </p>
          <Component336 className="h-[70px] overflow-clip relative shrink-0 w-[1440px]" />
        </div>
      </div>
      <div style={{ position: "absolute", top: "3398.148px", left: 0, width: "1440px", height: "1500px", pointerEvents: "none" }}>
        <div className="size-[115.9px]" data-node-id="2001:2980" data-name="Rectangle" style={{ position: "sticky", top: `${STICKY_VP[3] / scale}px`, zIndex: 20, transform: `translateX(${268 - 115.9 / 2 + cardDepth(3) * 1400}px) translateY(364.852px)` }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" loading="lazy" src={imgRectangle6} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", top: "3398.148px", left: 0, width: "1440px", height: "1500px", pointerEvents: "none" }}>
        <div className="flex items-center justify-center size-[115.9px]" data-node-id="2001:2981" style={{ position: "sticky", top: `${STICKY_VP[3] / scale}px`, zIndex: 20, transform: `translateX(${1102 - cardDepth(3) * 1400}px) translateY(-48px)` }}>
          <div className="-scale-x-100 flex-none">
            <div className="relative size-[115.9px]" data-name="Rectangle">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute left-0 max-w-none size-full top-0" loading="lazy" src={imgRectangle7} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[156px] top-[883px]" data-node-id="2001:2982">
        <div className="absolute h-[71px] left-[355px] top-[883px] w-[142px]" data-node-id="2001:2983" data-name="image 282" style={{ animation: "bird-soar 9s ease-in-out infinite" }}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage282} />
        </div>
        <div className="absolute h-[49px] left-[225px] top-[883px] w-[98px]" data-node-id="2001:2984" data-name="image 290" style={{ animation: "bird-soar-alt 11s ease-in-out infinite", animationDelay: "-3s" }}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage282} />
        </div>
        <div className="absolute h-[28.5px] left-[156px] top-[894px] w-[57px]" data-node-id="2001:2985" data-name="image 291" style={{ animation: "bird-soar 14s ease-in-out infinite", animationDelay: "-6s" }}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage282} />
        </div>
        <div className="absolute h-[50px] left-[718px] top-[904px] w-[100px]" data-node-id="2001:2986" data-name="image 283" style={{ animation: "bird-soar-alt 10s ease-in-out infinite", animationDelay: "-1.5s" }}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage282} />
        </div>
        <div className="absolute h-[28px] left-[870px] top-[904px] w-[56px]" data-node-id="2001:2987" data-name="image 285" style={{ animation: "bird-soar 13s ease-in-out infinite", animationDelay: "-5s" }}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage282} />
        </div>
        <div className="absolute h-[40px] left-[1021px] top-[904px] w-[80px]" data-node-id="2001:2988" data-name="image 286" style={{ animation: "bird-soar-alt 8s ease-in-out infinite", animationDelay: "-4s" }}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage282} />
        </div>
        <div className="absolute h-[28px] left-[1229px] top-[910px] w-[56px]" data-node-id="2001:2989" data-name="image 289" style={{ animation: "bird-soar 12s ease-in-out infinite", animationDelay: "-7s" }}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage282} />
        </div>
        <div className="absolute h-[26px] left-[1113px] top-[893px] w-[52px]" data-node-id="2001:2990" data-name="image 287" style={{ animation: "bird-soar-alt 15s ease-in-out infinite", animationDelay: "-2s" }}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage282} />
        </div>
        <div className="absolute h-[15.5px] left-[1180px] top-[902px] w-[31px]" data-node-id="2001:2991" data-name="image 288" style={{ animation: "bird-soar 7s ease-in-out infinite", animationDelay: "-9s" }}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage282} />
        </div>
        <div className="absolute h-[25px] left-[635px] top-[891px] w-[50px]" data-node-id="2001:2992" data-name="image 284" style={{ animation: "bird-soar-alt 16s ease-in-out infinite", animationDelay: "-11s" }}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage282} />
        </div>
        <div className="absolute h-[46.667px] left-[553px] top-[894px] w-[70px]" data-node-id="2001:2993" data-name="image 283" style={{ animation: "bird-soar 10.5s ease-in-out infinite", animationDelay: "-8s" }}>
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage283} />
        </div>
      </div>
    </div>
  );
}