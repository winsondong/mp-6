"use client";

import styled from "styled-components";

export interface UserProfileData {
  name: string;
  email: string;
  picture: string;
}

const ProfileWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  
`;

const UserCard = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: 3rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  max-width: 480px;
  width: 90%;
  margin-top: 4rem;

`;

const CardTitle = styled.h2`
  margin: 0 0 1rem;
  font-size: 1.75rem;
  text-align: center;
  color: #333;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start; 
  gap: 6rem;              
`;


const UserImage = styled.img`
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserName = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #171717;
`;

const UserEmail = styled.p`
  margin: 0.25rem 0 0;
  font-size: 0.9rem;
  color: #666;
`;

const Provider = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.8rem;
  color: #666;
`;

const SignOutButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #7c3aed;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  align-self: start;

  &:hover {
    opacity: 0.9;
  }
`;

interface UserProfileProps {
  user: UserProfileData;
}

export default function UserProfile({ user }: UserProfileProps) {

    const handleSignOut = () => {
        window.location.href = "/";
      };

  return (
    <ProfileWrapper>
      <UserCard>
        <CardTitle>Your Information</CardTitle>
        <CardBody>
          <UserImage src={user.picture} alt={`${user.name}’s avatar`} />
          <InfoText>
            <UserName>{user.name}</UserName>
            <UserEmail>{user.email}</UserEmail>
            <Provider>Signed in with: Google</Provider>
            <SignOutButton onClick={handleSignOut}>Sign out</SignOutButton>
          </InfoText>
        </CardBody>
      </UserCard>
    </ProfileWrapper>
  );
}
