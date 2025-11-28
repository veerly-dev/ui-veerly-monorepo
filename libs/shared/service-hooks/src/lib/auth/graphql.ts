import { gql } from 'urql';

export const SIGN_IN_MUTATION = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      message
      accessToken
      refreshToken
      user {
        id
        name
        email
        role
      }
    }
  }
`;

export const SIGN_UP_MUTATION = gql`
  mutation SignUp($email: String!, $password: String!, $name: String!) {
    signUp(input: { email: $email, password: $password, name: $name }) {
      message
      accessToken
      refreshToken
      user {
        id
        name
        email
        role
      }
    }
  }
`;

export const VERIFY_TOKEN = gql`
  mutation VerifyToken($token: String!) {
    verifyAccessToken(token: $token) {
      valid
      message
      user {
        id
        name
        email
        role
      }
    }
  }
`;
