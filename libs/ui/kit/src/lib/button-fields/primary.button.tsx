import { ButtonHTMLAttributes } from 'react';

export interface PrimaryButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  label: string;
  error?: string;
}

export function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <button className="w-full btn btn-active btn-primary" {...props}>
      {props.label}
    </button>
  );
}
