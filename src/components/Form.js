import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h2`
  margin-bottom: 24px;
  font-family: 'Poppins';
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const Label = styled.label`
  margin-bottom: 4px;
  font-family: 'Poppins';
  font-size: 16px;
`

const Input = styled.input`
  padding: 0px 5px;
  height: 32px;
  margin-bottom: 2px;
  width: 280px;
  font-family: 'Poppins';
  font-size: 18px;
  border: 1px solid #00000044;
  border-radius: 5px;
`

const MessageError = styled.small`
  margin-bottom: ${ props => props.last ? '28px' : '20px' };
  font-family: 'Poppins';
  color: #ff392e;
`

const Button = styled.button`
  width: 100px;
  height: 48px;
  background-color: #2b72ff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Poppins';
  font-size: 18px;
  :hover {
    background-color: #2b7fff;
  }
`

const Form = () => {

  return (
    <Container>
      <Title>Sign up</Title>
      <Content>
        <Label for="firstName">First name</Label>
        <Input type="text" placeholder="First name" name="firstName"/>
        <MessageError>{}</MessageError>
        <Label for="lastName">Last name</Label>
        <Input type="text" placeholder="Last name" name="lastName"/>
        <MessageError>{}</MessageError>
        <Label for="email">Email</Label>
        <Input type="text" placeholder="email@example.com" name="email"/>
        <MessageError>{}</MessageError>
        <Label for="password">Password</Label>
        <Input type="password" placeholder="Password" name="password"/>
        <MessageError last>{}</MessageError>
        <Button>Sign up</Button>
      </Content>
    </Container>
  )
}

export default Form