'use client';

import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignIn } from '@veerly/shared/service-hooks';
import {
  EmailField,
  LoadingStatus,
  PasswordField,
  PrimaryButton,
  SecondaryButton,
} from '@veerly/ui/kit';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const SignInSchema = z.object({
  email: z.email().min(6, { message: 'Email is required' }),
  password: z.string().min(6, { message: 'Password is required' }),
});

type FormValues = z.infer<typeof SignInSchema>;

export default function SignInPage() {
  const router = useRouter();
  const [toast, setToast] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const methods = useForm<FormValues>({
    mode: 'onChange',
    resolver: zodResolver(SignInSchema),
    reValidateMode: 'onBlur',
  });
  const { signIn, verifyToken } = useSignIn();

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);
      const result = await signIn(data);
      if (result?.accessToken) {
        router.push('launch-pad');
      } else if (result?.message) {
        methods.setValue('email', '');
        methods.setValue('password', '');
        setToast(result?.message);
        await methods.trigger();
      }
    } catch {
      setToast('Some thing is wrong ...!');
    } finally {
      setLoading(false);
    }
  };

  const verifyTokenStatus = async () => {
    try {
      setLoading(true);
      const tokenStatus = await verifyToken();
      if (tokenStatus?.valid) {
        router.push('launch-pad');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('-- Verify the token on SignInPage --');
    verifyTokenStatus();
  }, []);

  return (
    <>
      {toast && (
        <div className="toast">
          <div className="alert alert-error text-white">
            <span>{toast}</span>
          </div>
        </div>
      )}
      <div className="bg-slate-100 min-h-screen min-w-screen flex justify-center items-center">
        <div className="card bg-base-100 w-96 shadow-xl px-2 py-2">
          <div className="w-full text-6xl font-cursive mt-2 flex justify-center">
            <Link href="/">veerly.dev</Link>
          </div>
          <div className="card-body items-center text-center flex">
            <FormProvider {...methods}>
              <div className="w-full h-full px-2 py-2 flex flex-col justify-center items-center">
                <EmailField
                  fieldName="email"
                  required
                  label="Email"
                  placeholder="Enter your email"
                />
                <PasswordField
                  fieldName="password"
                  label="Password"
                  placeholder="Enter your password"
                />
                <div className="w-full py-4 flex flex-col gap-1">
                  <PrimaryButton
                    type="submit"
                    label="Sign In"
                    onClick={methods.handleSubmit(onSubmit)}
                    disabled={!methods.formState.isValid}
                  />
                  <Link href="/">
                    <SecondaryButton label="Cancel" />
                  </Link>
                </div>
              </div>
            </FormProvider>
          </div>
        </div>
      </div>
      {loading && <LoadingStatus />}
    </>
  );
}
