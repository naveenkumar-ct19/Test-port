function Frame2() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] border border-white/30 shadow-[inset_0_1px_0px_rgba(255,255,255,0.5)] content-stretch flex items-center justify-center px-[32px] py-[12px] relative rounded-[34px] shrink-0">
      <p className="[word-break:break-word] font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3347ae] text-[20px] whitespace-nowrap">Home</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[32px] py-[12px] relative rounded-[34px] shrink-0">
      <p className="[word-break:break-word] font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Projects</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[32px] py-[12px] relative rounded-[34px] shrink-0">
      <p className="[word-break:break-word] font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">About me</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[32px] py-[12px] relative rounded-[34px] shrink-0">
      <p className="[word-break:break-word] font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Resume</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[32px] py-[12px] relative rounded-[34px] shrink-0">
      <p className="[word-break:break-word] font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Contact</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0 w-full">
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] border border-white/30 shadow-[inset_0_1px_0px_rgba(255,255,255,0.5)] content-stretch flex flex-col items-center justify-center relative rounded-[999px] size-full">
      <Frame />
    </div>
  );
}