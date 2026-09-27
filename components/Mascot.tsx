import Image from "next/image";

export default function Mascot() {
  return (
    <div className="group relative flex items-center justify-center p-6 cursor-pointer select-none">
      <div className="absolute h-28 w-28 rounded-full bg-gradient-to-tr from-sky-500/25 via-indigo-500/20 to-purple-500/25 blur-xl opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 pointer-events-none animate-pulse" />

      <div className="relative transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
        <Image
          src="/logo.svg"
          alt="AI Mascot"
          width={48}
          height={48}
          priority
          className="h-12 w-12 object-contain drop-shadow-[0_8px_20px_rgba(79,107,255,0.3)] group-hover:drop-shadow-[0_12px_28px_rgba(99,102,241,0.5)] transition-all duration-300"
        />
      </div>
    </div>
  );
}