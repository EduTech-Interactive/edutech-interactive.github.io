interface WaveformLineProps
{
  text: string
}

const WaveformLine = (props: WaveformLineProps) => {
  return (
    <div className="flex items-center justify-center w-full px-4 my-8">
      {/* Left Waveform */}
      <div className="flex-1 max-w-2xl rotate-180 opacity-60">
        <WaveformSvg color="hsl(265, 65%, 40%)" /> {/* Purple color */}
      </div>

      {/* Center Text & Dots */}
      <div className="flex items-center mx-4 space-x-3">
        <span className="w-2 h-2 rounded-full bg-edu-purple-600"></span>
        <h2 className="text-xl font-bold tracking-widest text-edu-purple-600 uppercase font-sans">
          {props.text}
        </h2>
        <span className="w-2 h-2 rounded-full bg-edu-purple-600"></span>
      </div>

      {/* Right Waveform */}
      <div className="flex-1 max-w-2xl opacity-60">
        <WaveformSvg color="hsl(265, 65%, 40%) " />
      </div>
    </div>
  );
};

// A reusable SVG that mimics fading audio bars
const WaveformSvg = ({ color }: { color: string }) => (
  <svg viewBox="0 0 100 20" className="w-full h-6" preserveAspectRatio="none">
    <path
      d="M0,10 H20 M22,10 V6 V14 M26,10 V4 V16 M30,10 V2 V18 M34,10 V5 V15 M38,10 V8 V12 M42,10 H100"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export default WaveformLine;