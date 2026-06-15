/**
 * The soft cinematic page backdrop — a faint cream-to-rose / cream-to-gold
 * wash mimicking dawn light through paper. Sits fixed behind all content.
 */
export function BackgroundGradient() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base cream wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, var(--cream) 0%, var(--cream-warm) 45%, var(--sky-pale) 100%)',
        }}
      />
      {/* Dawn-rose glow, upper left */}
      <div
        className="absolute -left-32 -top-40 h-[55vh] w-[55vh] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, var(--dawn-rose) 0%, transparent 70%)',
          opacity: 0.32,
        }}
      />
      {/* Dusk-gold glow, lower right */}
      <div
        className="absolute -bottom-48 -right-24 h-[60vh] w-[60vh] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, var(--dusk-gold) 0%, transparent 70%)',
          opacity: 0.28,
        }}
      />
    </div>
  );
}
