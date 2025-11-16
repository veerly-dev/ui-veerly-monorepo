'use client';

import { useMutation } from 'urql';
import { useState } from 'react';
import { SignUpInput, SignUpResponse } from './types';
import { SIGN_UP_MUTATION } from './graphql';

export function useSignIn() {
  const [state, setState] = useState({
    fetching: false,
    error: null as string | null,
    data: null as SignUpResponse | null,
  });

  const [, executeMutation] = useMutation<SignUpResponse, SignUpInput>(
    SIGN_UP_MUTATION
  );

  const signIn = async (input: SignUpInput) => {
    setState({ fetching: true, error: null, data: null });

    const result = await executeMutation(input);

    if (result.error) {
      setState({ fetching: false, error: result.error.message, data: null });
      return null;
    }

    setState({ fetching: false, error: null, data: result.data ?? null });
    return result.data ?? null;
  };

  return { ...state, signIn };
}
