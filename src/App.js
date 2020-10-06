import React, { useState } from 'react';
import styled from 'styled-components'

import Form from './components/Form'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  max-width: 290px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-family: 'Poppins';
  font-weight: 900;
  font-size: 90px;
  color: #000000;
`

const SubTitle = styled.h2`
  font-family: 'Poppins';
  font-weight: 900;
  font-size: 72px;
  color: #2b72ff;
`

function App() {
  const [ isSubmitted, setIsSubmitted ] = useState(false)

  const submitForm = () => {
    setIsSubmitted(true)
  }

  return (
    <Container>
      <Content>
        <Title>APP</Title>
        {!isSubmitted ? <Form submitForm={submitForm} /> : <SubTitle>Congrats!</SubTitle>}
      </Content>
    </Container>
  )
}

export default App
