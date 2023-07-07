import {useContext} from 'react'
import { AuthContext } from '../contexts/AuthContext'
import styled from "styled-components"

const PrivateContainer = styled.div`
  width: 100%;
  height: 100vw;
  display: flex;
`

const PrivateWrapper = styled.div`
  margin: 20px auto;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PrivateTitle = styled.h1`
  margin-bottom: 20px;
`

const UserName = styled.h3`
  margin: 10px 0 8px 0;
  font-size: 22px;
`

const UserSubInfoArea = styled.div`

`

const UserSubInfo = styled.p`
  font-size: 18px;
  text-align: justify;
`

export default function PrivatePage() {
  const auth = useContext(AuthContext)

  return (
    <PrivateContainer>
        <PrivateWrapper>
          <PrivateTitle>Private Page</PrivateTitle>
          <UserName>Welcome, {auth.user?.name}!</UserName>
          <UserSubInfoArea>
            <UserSubInfo>Id: {auth.user?.id}</UserSubInfo>
            <UserSubInfo>email: {auth.user?.email}</UserSubInfo>
          </UserSubInfoArea>
        </PrivateWrapper>
    </PrivateContainer>
  )
}
