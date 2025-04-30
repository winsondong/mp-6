"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "@/components/Header";
import SignIn from "@/components/SignIn";
import UserProfile, { UserProfileData } from "@/components/UserProfile";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function HomePage() {
  const [user, setUser] = useState<UserProfileData | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    const email = params.get("email");
    const picture = params.get("picture");

    if (name && email && picture) {
      setUser({ name, email, picture });
    }
  }, []);

  return (
    <HomeContainer>
      <Header />
      {user ? <UserProfile user={user} /> : <SignIn />}
    </HomeContainer>
  );
}
