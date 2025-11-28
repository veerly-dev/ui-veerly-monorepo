'use client';

import { useMutation } from 'urql';
import { useState } from 'react';
import { useLocalStorage } from 'react-storage-complete';
import {
  SignInInput,
  SignInResponse,
  VerifyTokenResponse,
  RefreshTokenResponse,
} from './types';
import { SIGN_IN_MUTATION, VERIFY_TOKEN } from './graphql';

export function useSignIn() {
  const [token, setToken] = useLocalStorage<string>('authToken', undefined, {
    prefix: 'veerly',
  });
  const [refreshTokenStr, setRefreshTokenStr] = useLocalStorage<string>(
    'refreshToken',
    undefined,
    {
      prefix: 'veerly',
    }
  );
  const [state, setState] = useState({
    fetching: false,
    error: null as string | null,
    data: null as SignInResponse | null,
  });

  const [, executeMutation] = useMutation<SignInResponse, SignInInput>(
    SIGN_IN_MUTATION
  );
  const [, executeVerifyTokenMutation] = useMutation<
    VerifyTokenResponse,
    { token: string }
  >(VERIFY_TOKEN);
  const [, refreshTokenMutation] = useMutation<
    RefreshTokenResponse,
    { refreshToken: string }
  >(VERIFY_TOKEN);

  const signIn = async (input: SignInInput) => {
    setState({ fetching: true, error: null, data: null });

    const { data }: any = await executeMutation(input);
    if (data.error) {
      setState({ fetching: false, error: data.error.message, data: null });
      return null;
    }
    setToken(data?.signIn.accessToken);
    setRefreshTokenStr(data?.signIn.refreshToken);
    setState({ fetching: false, error: null, data: data ?? null });
    return data.signIn ?? null;
  };

  const verifyToken = async () => {
    if (token) {
      const { data }: any = await executeVerifyTokenMutation({ token });
      return data?.verifyAccessToken ?? null;
    }
  };
  const refreshToken = async () => {
    if (refreshTokenStr) {
      const { data }: any = await refreshTokenMutation({
        refreshToken: refreshTokenStr,
      });
      return data?.refreshToken ?? null;
    }
  };

  return { ...state, signIn, verifyToken, refreshToken };
}
