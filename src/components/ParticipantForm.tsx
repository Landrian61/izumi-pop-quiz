import { useState } from 'react';

interface Props {
  onSubmit: (participant: { fullName: string }) => void;
}

export function ParticipantForm({ onSubmit }: Props) {
  const [fullName, setFullName] = useState('');
  const [touched, setTouched] = useState(false);

  const nameValid = fullName.trim().length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameValid) {
      setTouched(true);
      return;
    }
    onSubmit({ fullName: fullName.trim() });
  };

  const inputClass =
    'mt-2 w-full rounded-xl border border-honey-tan bg-cream px-4 py-3 text-[15px] text-text outline-none transition-all duration-200 focus:border-accent focus:shadow-[0_0_0_4px_var(--accent-soft)]';

  return (
    <div className="animate-rise-in mt-6">
      <div className="paper-grain rounded-2xl border border-honey-tan/60 bg-cream-warm/80 px-6 py-10 shadow-warm backdrop-blur-sm sm:px-10">
        <h2 className="font-serif text-3xl text-accent">Before we start</h2>
        <p className="mt-2 text-sm text-text-soft">
          Your name appears on your results PDF.
        </p>

        <form onSubmit={handleSubmit} className="mt-8" noValidate>
          <label className="block">
            <span className="text-sm font-medium text-text-muted">
              Full Name
            </span>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. John Doe"
              autoComplete="name"
              autoFocus
              className={inputClass}
            />
            {touched && !nameValid && (
              <span className="mt-1 block text-xs text-incorrect">
                Please enter your full name.
              </span>
            )}
          </label>

          <button
            type="submit"
            disabled={!nameValid}
            className="mt-10 w-full rounded-full bg-accent px-8 py-4 font-serif text-lg text-cream shadow-warm transition-all duration-300 ease-cinematic hover:bg-accent-deep hover:shadow-[0_0_28px_rgba(139,46,46,0.35)] focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/30 active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-honey-tan/50 disabled:text-cream/80 disabled:shadow-none"
          >
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
}
