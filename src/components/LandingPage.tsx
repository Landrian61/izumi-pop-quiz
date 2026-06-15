interface Props {
  onBegin: () => void;
}

export function LandingPage({ onBegin }: Props) {
  return (
    <div className="animate-rise-in flex flex-col items-center text-center">
      <div
        className="paper-grain mt-6 w-full rounded-2xl border border-honey-tan/60 bg-cream-warm/80 px-6 py-12 shadow-warm backdrop-blur-sm sm:px-12 sm:py-16"
      >
        <p className="mb-4 font-jp text-2xl text-honey-tan">泉</p>

        <h1 className="font-serif text-4xl leading-tight text-accent sm:text-5xl">
          Izumi Living Pop Quiz
        </h1>

        <p className="mt-4 font-serif text-lg italic text-text-soft sm:text-xl">
          A pre-arrival check on what you've learned
        </p>

        <p className="mx-auto mt-8 max-w-xl text-left text-[15px] leading-7 text-text-muted">
          Welcome. This short quiz tests your understanding of the four
          pre-arrival documents: the Welcome Guide, the Cleaning Manual, the
          Appliances &amp; Utilities Manual, and the Emergency &amp; Safety
          Guide. Each question describes a real situation you may encounter at
          Izumi. Take your time. After each answer, you will see immediate
          feedback explaining whether your choice was right or wrong, and why.
          This is preparation, not a test.
        </p>

        <p className="mt-8 text-sm font-medium tracking-wide text-text-soft">
          25 questions · ~15–20 minutes · One attempt
        </p>

        <button
          onClick={onBegin}
          className="group mt-10 inline-flex items-center justify-center rounded-full bg-accent px-12 py-4 font-serif text-lg text-cream shadow-warm transition-all duration-300 ease-cinematic hover:bg-accent-deep hover:shadow-[0_0_28px_rgba(139,46,46,0.35)] focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/30 active:scale-[0.98]"
        >
          Begin
        </button>
      </div>
    </div>
  );
}
