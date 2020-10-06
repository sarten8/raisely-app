import React from 'react';
import styled from 'styled-components'

import Form from './components/Form'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-family: 'Poppins';
  font-weight: 900;
  font-size: 90px;
`

function App() {
  return (
    <Container>
      <Title>APP</Title>
      <Form />
    </Container>
  )
}

export default App
