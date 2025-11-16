export interface SignInInput {
  email: string;
  password: string;
}

export interface SignInResponse {
  signIn: {
    token: string;
    message: string;
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
