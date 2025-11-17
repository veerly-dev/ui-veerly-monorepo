import clsx from 'clsx';
import { InputHTMLAttributes, useId } from 'react';
import { useFormContext } from 'react-hook-form';
import type { FieldError } from 'react-hook-form';

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  fieldName: string;
  error?: string;
}

export function TextField({
  fieldName,
  label,
  required,
  ...rest
}: TextFieldProps) {
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

  // Get field-specific error (properly typed)
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
