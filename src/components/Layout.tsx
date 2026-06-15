import type { ReactNode } from 'react';
import { BackgroundGradient } from './BackgroundGradient';

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <BackgroundGradient />

      <main className="flex flex-1 flex-col items-center px-4 py-8 sm:px-6 sm:py-12">
        <div className="w-full max-w-2xl">{children}</div>
      </main>

      <footer className="px-4 pb-8 pt-4 text-center">
        <p className="text-xs tracking-wide text-text-soft">
          AIBOS Uganda · Izumi Living Stream
        </p>
      </footer>
    </div>
  );
}
