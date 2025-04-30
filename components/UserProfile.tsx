"use client";

import styled from "styled-components";

export interface UserProfileData {
  name: string;
  email: string;
  picture: string;
}

const ProfileWrapper = styled.main`
  background: #f3e8ff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  
`;

const UserCard = styled.div`
  background: #fff;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  max-width: 480px;
  width: 100%;
  margin-top: -20rem;
  
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

interface UserProfileProps {
  user: UserProfileData;
}

export default function UserProfile({ user }: UserProfileProps) {
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
          </InfoText>
        </CardBody>
      </UserCard>
    </ProfileWrapper>
  );
}
