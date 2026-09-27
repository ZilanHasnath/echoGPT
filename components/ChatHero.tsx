import Mascot from "./Mascot";

export default function ChatHero({ name }: { name: string }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-12 text-center w-full max-w-2xl mx-auto">
      
      <div className="relative mt-8 sm:mt-10 flex items-center justify-center gap-4 sm:gap-8 w-full">
        <div className="hidden sm:block -rotate-3 rounded-2xl rounded-bl-sm border border-line bg-white px-4 py-2.5 text-sm text-slateink shadow-card animate-rise">
          Ask me to plan your week
        </div>

        <Mascot />

        <div className="hidden sm:block rotate-3 rounded-2xl rounded-br-sm border border-line bg-white px-4 py-2.5 text-sm text-slateink shadow-card animate-rise [animation-delay:150ms]">
          Or draft that email
        </div>
      </div>

      <h1 className="font-display text-3xl sm:text-5xl pt-4 text-blue-600">
        Hi {name}, Let&apos;s jump in
      </h1>

    </div>
  );
}