import type { ReactNode, SyntheticEvent } from 'react';
import { memo } from 'react';

export interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick: (event: SyntheticEvent) => void;
}

export const Button = memo(function ToggleButton({ onClick, children, className }: ButtonProps) {
  return (
    <button
      className={className + ' ' + 'font-bold mt-4 py-1 px-4 rounded shadow hover:scale-105 bg-black text-white'}
      onClick={onClick}>
      {children}
    </button>
  );
});
