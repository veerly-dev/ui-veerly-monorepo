export interface SignInInput {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}
export interface SignInResponse {
  signIn: {
    message: string;
    accessToken: string;
    refreshToken: string;
    user?: User;
  };
}

export interface RefreshTokenResponse {
  refreshToken: {
    accessToken: string;
    refreshToken: string;
  };
}
export interface VerifyTokenResponse {
  verifyToken: {
    valid: boolean;
    message: string;
    user: User;
  };
}

export interface SignUpInput {
  email: string;
  password: string;
  name: string;
}

export interface SignUpResponse {
  signUp: {
    userId: string;
    message: string;
  };
}
