'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignIn } from '@veerly/shared/service-hooks';
import { Textfield } from '@veerly/ui/kit';

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type FormValues = z.infer<typeof SignInSchema>;

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(SignInSchema),
  });

  const { signIn, fetching, error } = useSignIn();

  const onSubmit = async (data: FormValues) => {
    const result = await signIn(data);
    if (result?.signIn.token) {
      // redirect to module selection page
      console.log('Login success:', result);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-semibold mb-4">Sign In</h1>

        <Textfield />
        <input
          {...register('email')}
          placeholder="Email"
          className="w-full border p-2 rounded mb-2"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          {...register('password')}
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-2"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        {error && <p className="text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={fetching}
          className="w-full bg-black text-white p-2 rounded mt-2"
        >
          {fetching ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}
