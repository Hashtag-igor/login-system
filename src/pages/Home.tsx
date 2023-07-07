import React from 'react'
import styled from 'styled-components'

const HomeContainer = styled.div`
  width: 100%;
`
const HomeWrapper = styled.div`
  width: 95%;
  margin: 20px auto;
`
const HomeTitle = styled.h1`
  text-align: center;
`

export default function Home() {
  return (
    <HomeContainer>
        <HomeWrapper>
            <HomeTitle>Home Page</HomeTitle>
        </HomeWrapper>
    </HomeContainer>
  )
}
