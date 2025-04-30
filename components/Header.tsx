"use client";

import styled from "styled-components";

const HeaderWrapper = styled.header`
  height: 5rem;              
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:rgb(0, 0, 0);  
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin: 0;
  font-size: 2.25rem;      
  font-weight: 600;
  color: white;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Title>CS391 OAuth</Title>
    </HeaderWrapper>
  );
}
