'use client';

import { useMutation } from 'urql';
import { SIGN_IN_MUTATION } from '@/lib/graphql/mutations';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type FormValues = z.infer<typeof SignInSchema>;

export default function SignInPage() {
  const [{ fetching }, executeSignIn] = useMutation(SIGN_IN_MUTATION);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit = async (data: FormValues) => {
    console.log('Sending GraphQL Mutation:', {
      query: SIGN_IN_MUTATION.loc?.source.body, // actual textual GQL
      variables: data,
    });

    const result = await executeSignIn(data);

    console.log('GraphQL Response:', result);

    if (result.error) {
      return;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-semibold mb-4">Sign In</h1>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            {...register('email')}
            type="email"
            className="w-full border px-3 py-2 rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            {...register('password')}
            type="password"
            className="w-full border px-3 py-2 rounded-md"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          disabled={fetching}
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
        >
          {fetching ? 'Signing in…' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}
