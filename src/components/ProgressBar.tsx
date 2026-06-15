interface Props {
  current: number; // 1-based
  total: number;
}

export function ProgressBar({ current, total }: Props) {
  const pct = Math.round((current / total) * 100);

  return (
    <div className="w-full">
      <div className="mb-2 flex items-baseline justify-between">
        <span className="font-serif text-sm text-accent">
          Question {current} of {total}
        </span>
        <span className="text-xs text-text-soft">{pct}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-cream-warm shadow-inner ring-1 ring-honey-tan/40">
        <div
          className="h-full rounded-full transition-all duration-500 ease-cinematic"
          style={{
            width: `${pct}%`,
            background:
              'linear-gradient(90deg, var(--honey-tan-soft), var(--honey-tan))',
          }}
        />
      </div>
    </div>
  );
}
