import clsx from 'clsx';
import { InputHTMLAttributes, useId } from 'react';
import { useFormContext } from 'react-hook-form';
import type { FieldError } from 'react-hook-form';

export interface EmailFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  fieldName: string;
  error?: string;
}

export function EmailField({
  fieldName,
  label,
  required,
  ...rest
}: EmailFieldProps) {
  const form = useFormContext();

  if (!form) {
    throw new Error(
      'TextField must be used inside a <FormProvider>. Missing FormProvider.'
    );
  }
  const {
    register,
    formState: { errors },
  } = form;
  const autoId = useId();
  const finalId = fieldName || autoId;
  const fieldError = errors?.[fieldName] as FieldError | undefined;
  return (
    <label className="form-control w-full" key={finalId}>
      <div className="label">
        <span className="label-text">{label}</span>
        <span className="label-text-alt">{required && '*'}</span>
      </div>
      <input
        type="email"
        placeholder="Type here"
        className={clsx(
          'input input-bordered w-full',
          fieldError ? 'input-error' : ''
        )}
        {...register(fieldName)}
        {...rest}
      />
      {fieldError && (
        <div className="label">
          <span className="label-text-alt text-error">
            {fieldError && fieldError.message}
          </span>
        </div>
      )}
    </label>
  );
}
