import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

const assetPathPrefix = "/assets";
const imgImage297 = `${assetPathPrefix}/cb794.png`;
const imgImage296 = `${assetPathPrefix}/998b0.png`;
const imgImage27 = `${assetPathPrefix}/ffaf9.png`;
const imgImage298 = `${assetPathPrefix}/c4ab5.png`;
const imgImage299 = `${assetPathPrefix}/1ca1d.png`;
const imgMatcha1 = `${assetPathPrefix}/6f567.png`;
const imgImage300 = `${assetPathPrefix}/e2ae7.png`;
const imgImage301 = `${assetPathPrefix}/c814a.png`;
const imgImage302 = `${assetPathPrefix}/87332.png`;
const imgImage303 = `${assetPathPrefix}/f50a6.png`;
const imgGroup3 = `${assetPathPrefix}/817a1.svg`;
const imgGroup4 = `${assetPathPrefix}/9521c.svg`;
const imgSubtract = `${assetPathPrefix}/30d62.svg`;

// Interest items for the marquee
const interests = [
  { img: imgImage299, w: "300px", h: "200px", label: "Sushi" },
  { img: imgMatcha1, w: "133.6px", h: "200.074px", label: "Matcha" },
  { img: imgImage300, w: "240px", h: "200px", label: "Photography" },
  { img: imgImage301, w: "200px", h: "200px", label: "Wildlife" },
  { img: imgImage302, w: "266.667px", h: "200px", label: "bowling" },
];

function DraggableCreature({ src, width, height, initialLeft, initialTop, alt = "" }: {
  src: string; width: number; height: number; initialLeft: number; initialTop: number; alt?: string;
}) {
  const [pos, setPos] = useState({ x: initialLeft, y: initialTop });
  const [dragging, setDragging] = useState(false);
  const [wobble, setWobble] = useState(false);
  const dragStart = useRef<{ mx: number; my: number; ox: number; oy: number } | null>(null);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    dragStart.current = { mx: e.clientX, my: e.clientY, ox: pos.x, oy: pos.y };
    setDragging(true);
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent) => {
      if (!dragStart.current) return;
      setPos({
        x: dragStart.current.ox + (e.clientX - dragStart.current.mx),
        y: dragStart.current.oy + (e.clientY - dragStart.current.my),
      });
    };
    const onUp = () => {
      setDragging(false);
      setWobble(true);
      setTimeout(() => setWobble(false), 600);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
  }, [dragging]);

  return (
    <div
      onMouseDown={onMouseDown}
      style={{
        position: "absolute",
        left: pos.x,
        top: pos.y,
        width,
        height,
        cursor: dragging ? "grabbing" : "grab",
        userSelect: "none",
        zIndex: dragging ? 50 : 2,
        transition: wobble ? "none" : undefined,
        animation: dragging ? "none" : wobble ? "creature-wobble 0.6s ease" : "creature-float 3s ease-in-out infinite",
        transformOrigin: "center bottom",
      }}
    >
      <img
        alt={alt}
        src={src}
        style={{ width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none", display: "block" }}
      />
    </div>
  );
}

// Animated bubble dot
function Bubble({ src, size, left, top, delay, scale = 1 }: {
  src: string; size: number; left: number; top: number; delay: number; scale?: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width: size * scale,
        height: size * scale,
        animation: `bubble-float 4s ease-in-out ${delay}s infinite`,
      }}
    >
      <img alt="" src={src} style={{ width: "100%", height: "100%", display: "block" }} />
    </div>
  );
}

export default function AboutMe() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("about-me-page");
    return () => document.body.classList.remove("about-me-page");
  }, []);

  return (
    <div
      className="bg-gradient-to-b from-[#0263ba] to-[#044987] relative overflow-x-clip"
      style={{ minHeight: "100dvh" }}
      data-node-id="2054:97"
      data-name="Desktop - 19"
    >
      {/* Draggable whale */}
      <DraggableCreature src={imgImage297} width={289.5} height={193} initialLeft={139} initialTop={601} alt="whale" />

      {/* Draggable octopus */}
      <DraggableCreature src={imgImage296} width={268.654} height={215} initialLeft={1043} initialTop={612} alt="octopus" />

      {/* NAV */}
      <div
        className="-translate-x-1/2 content-stretch flex items-center justify-between left-1/2 w-[1299px]"
        data-node-id="2054:100"
        style={{ position: "fixed", top: 34, zIndex: 100 }}
      >
        <div
          className="bg-[#93001d] content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[999px] shrink-0"
          data-node-id="2054:101"
          onClick={() => { window.scrollTo(0, 0); navigate("/"); }}
          style={{ cursor: "pointer" }}
        >
          <div className="content-stretch flex items-center overflow-clip relative rounded-[99999px] shrink-0" data-node-id="2054:102">
            <div className="h-[40.028px] relative shrink-0 w-[38.75px]" data-node-id="2054:103">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage27} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-node-id="2054:104">
          <div className="bg-[#fcc6db] content-stretch drop-shadow-[2px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center px-[16px] py-[5px] relative rounded-[34px] shrink-0" data-node-id="2054:105">
            <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#3347ae] text-[14px] whitespace-nowrap" data-node-id="2054:106">About me</p>
          </div>
          <div className="bg-[#fcc6db] content-stretch drop-shadow-[2px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center px-[16px] py-[5px] relative rounded-[34px] shrink-0" data-node-id="2054:107">
            <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#3347ae] text-[14px] whitespace-nowrap" data-node-id="2054:108">Resume</p>
          </div>
        </div>
      </div>

      {/* Intro text */}
      <p
        className="-translate-x-1/2 [word-break:break-word] absolute font-['Borsok:Regular'] leading-[66px] left-[calc(50%+0.5px)] not-italic text-[#e9e9e9] text-[28px] text-center top-[269px] w-[827px]"
        data-node-id="2054:109"
      >
        this is Kavipriya, a product designer who turns messy ideas into clear, meaningful experiences, with a soft spot for bold visuals, playful interactions, thoughtful details, and stories that make people stop and feel.
      </p>

      {/* Draggable jellyfish */}
      <DraggableCreature src={imgImage298} width={171.935} height={223} initialLeft={634} initialTop={698} alt="jellyfish" />

      {/* Animated bubbles — large */}
      <Bubble src={imgGroup3} size={17.368} left={196} top={367} delay={0} />
      <Bubble src={imgGroup3} size={17.368} left={634} top={690} delay={0.7} />
      <Bubble src={imgGroup3} size={17.368} left={298} top={232} delay={1.4} />
      <Bubble src={imgGroup3} size={17.368} left={779} top={246} delay={0.3} />
      <Bubble src={imgGroup3} size={17.368} left={1237} top={269} delay={1.1} />
      <Bubble src={imgGroup3} size={17.368} left={1207} top={386} delay={0.5} />
      <Bubble src={imgGroup3} size={17.368} left={919} top={612} delay={1.8} />
      <Bubble src={imgGroup3} size={17.368} left={1312} top={558} delay={0.9} />

      {/* Animated bubbles — small */}
      <Bubble src={imgGroup4} size={10.959} left={199.95} top={469.04} delay={0.4} />
      <Bubble src={imgGroup4} size={10.959} left={525} top={249} delay={1.2} />
      <Bubble src={imgGroup4} size={10.959} left={972} top={260} delay={0.6} />
      <Bubble src={imgGroup4} size={10.959} left={1244} top={514} delay={1.6} />

      {/* "You can talk to me about" heading */}
      <p
        className="[word-break:break-word] absolute font-['Dream_Kudos:Regular'] leading-[normal] left-[calc(50%-220px)] not-italic text-[#fff884] text-[42px] text-shadow-[3px_4px_4px_rgba(0,0,0,0.25)] top-[1014px] whitespace-nowrap"
        data-node-id="2054:159"
      >
        YOU CAN TALK TO ME ABOUT
      </p>

      {/* Endless marquee interests row */}
      <div
        className="absolute top-[1129px] left-0 right-0 overflow-hidden"
        style={{ height: 260 }}
        data-node-id="2054:160"
      >
        <div style={{ display: "flex", gap: 83, animation: "interests-marquee 18s linear infinite", width: "max-content" }}>
          {[...interests, ...interests].map((item, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, flexShrink: 0 }}>
              <div style={{ width: item.w, height: item.h, position: "relative", flexShrink: 0 }}>
                <img alt="" src={item.img} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }} />
              </div>
              <p className="font-['Borsok:Regular'] text-[24px] text-white whitespace-nowrap">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Seabed */}
      <div className="-translate-x-1/2 absolute h-[677.03px] left-[calc(50%+0.5px)] top-[1343px] w-[1457px]" data-node-id="2054:176" data-name="image 303">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" loading="lazy" src={imgImage303} />
      </div>

      {/* CTA stamp — glass: blur layer + tint layer, both clipped to stamp shape */}
      {/* Blur layer: backdrop-filter on a masked element */}
      <div
        className="absolute h-[417px] left-[271px] top-[1473px] w-[898px]"
        data-node-id="2054:177"
        style={{
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          maskImage: `url(${imgSubtract})`,
          WebkitMaskImage: `url(${imgSubtract})`,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      />
      {/* Tint + border on same stamp shape */}
      <div
        className="absolute h-[417px] left-[271px] top-[1473px] w-[898px]"
        data-node-id="2054:178"
        data-name="Subtract"
        style={{
          backgroundColor: "rgba(255,255,255,0.18)",
          border: "1.5px solid rgba(255,255,255,0.55)",
          maskImage: `url(${imgSubtract})`,
          WebkitMaskImage: `url(${imgSubtract})`,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      />
      <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[334px] top-[1554px] w-[773px]" data-node-id="2054:181">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center leading-[normal] relative shrink-0 text-white uppercase w-full" data-node-id="2054:182">
            <p className="font-['Borsok:Regular'] not-italic relative shrink-0 text-[32px] text-center w-full" data-node-id="2054:183">Lets Make this Happen</p>
            <div className="content-stretch flex flex-col font-['Space_Grotesk:Bold'] font-bold gap-[18px] items-center relative shrink-0 text-[22px] w-full" data-node-id="2054:184">
              <p className="relative shrink-0 whitespace-nowrap" data-node-id="2054:185">YOUR PROBLEM + MY DESIGN THINKING = SOMETHING PEOPLE LOVE TO USE.</p>
              <p className="min-w-full relative shrink-0 text-center w-[min-content]" data-node-id="2054:186">{`LET'S CREATE PRODUCTS THAT MAKE AN IMPACT.`}</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-node-id="2054:187">
            <a className="bg-[#fcc6db] content-stretch drop-shadow-[2px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center px-[16px] py-[5px] relative rounded-[34px] shrink-0" data-node-id="2054:188" href="https://www.linkedin.com/in/kavipriyathirumurugan" target="_blank" rel="noreferrer">
              <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#3347ae] text-[14px] whitespace-nowrap" data-node-id="2054:189">Linkedin</p>
            </a>
            <a className="bg-[#fcc6db] content-stretch drop-shadow-[2px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center px-[16px] py-[5px] relative rounded-[34px] shrink-0" data-node-id="2054:190" href="https://www.behance.net/kavipriyauiux" target="_blank" rel="noreferrer">
              <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[#3347ae] text-[14px] whitespace-nowrap" data-node-id="2054:191">Behance</p>
            </a>
          </div>
          <a className="bg-[rgba(0,0,0,0.5)] content-stretch flex items-center justify-center px-[14px] py-[4px] relative rounded-[999px] shrink-0" data-node-id="2054:192" href="mailto:uxbykavipriya@gmail.com">
            <p className="[word-break:break-word] font-['Space_Mono:Bold'] leading-[normal] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap" data-node-id="2054:193">{"Let's Talk!"}</p>
          </a>
        </div>
    </div>
  );
}
