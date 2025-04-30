"use client";

import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 480px;
  width: 90%;
  margin-top: 4rem;
`;

const Title = styled.h1`
  margin: 0 0 1rem;
  font-size: 2rem;
  color: #333;
`;

const Subtitle = styled.p`
  margin: 0 0 2rem;
  font-size: 1.125rem;
  color: #555;
`;

const SignInButton = styled(Link)`
  display: inline-block;
  padding: 1rem 1.5rem;
  background-color: #8b5cf6;
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 500;

  &:hover { opacity: 0.9; }
`;

export default function SignIn() {
  return (
    <Container>
      <Card>
        <Title>OAuth Demo</Title>
        <Subtitle>Click the link below to sign in!</Subtitle>
        <SignInButton href="/api/auth/google">Sign in with Google</SignInButton>
      </Card>
    </Container>
  );
}
