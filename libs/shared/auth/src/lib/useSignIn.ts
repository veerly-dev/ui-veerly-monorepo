'use client';

import { useMutation } from 'urql';
import { SIGN_IN_MUTATION } from '@veerly/shared/graphql';
import { useState } from 'react';

interface SignInInput {
  email: string;
  password: string;
}

interface SignInResponse {
  signIn: {
    token: string;
    message: string;
  };
}

export function useSignIn() {
  const [state, setState] = useState({
    fetching: false,
    error: null as string | null,
    data: null as SignInResponse | null,
  });

  const [, executeMutation] = useMutation<SignInResponse, SignInInput>(
    SIGN_IN_MUTATION
  );

  const signIn = async (input: SignInInput) => {
    setState({ fetching: true, error: null, data: null });

    const result = await executeMutation(input);

    if (result.error) {
      setState({ fetching: false, error: result.error.message, data: null });
      return null;
    }

    setState({ fetching: false, error: null, data: result.data });
    return result.data;
  };

  return { ...state, signIn };
}
