import { ButtonHTMLAttributes } from 'react';

export interface SecondaryButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  label: string;
  error?: string;
}

export function SecondaryButton(props: SecondaryButtonProps) {
  return (
    <button className="w-full btn btn-active btn-secondary" {...props}>
      {props.label}
    </button>
  );
}
