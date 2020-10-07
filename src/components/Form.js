import React from 'react'
import styled from 'styled-components'

import useForm from '../hooks/useForm'
import validate from '../utils/validateForm'

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

const Content = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const Label = styled.label`
  margin-bottom: 4px;
  font-family: 'Poppins';
  font-size: 16px;
  color: #555555;
`

const Input = styled.input`
  padding: 0px 5px;
  height: 32px;
  margin-bottom: 2px;
  width: 280px;
  font-family: 'Poppins';
  font-size: 18px;
  border: 1px solid ${ props => props.error ? '#ff392e' : '#00000044' };
  border-radius: 5px;
`

const MessageError = styled.small`
  margin-bottom: ${ props => props.last ? '0px' : '20px' };
  font-family: 'Poppins';
  color: #ff392e;
`

const Button = styled.button`
  margin-top: 20px;
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

const Form = ({ submitForm }) => {

  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate)

  return (
    <Container>
      <Title>Sign up</Title>
      <Content onSubmit={handleSubmit}>
        
        <Label htmlFor="firstName">First name</Label>
        <Input 
          type="text"
          placeholder="First name"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          error={errors.firstName} />
        <MessageError>{errors.firstName && errors.firstName}</MessageError>
        
        <Label htmlFor="lastName">Last name</Label>
        <Input
          type="text"
          placeholder="Last name"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          error={errors.lastName} />
        <MessageError>{errors.lastName && errors.lastName}</MessageError>
        
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          placeholder="email@example.com"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email} />
        <MessageError>{errors.email && errors.email}</MessageError>
        
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="true"
          value={values.password}
          onChange={handleChange}
          error={errors.password} />
        <MessageError>{errors.password && errors.password}</MessageError>
        
        <Button type="submit">Sign up</Button>
      </Content>
    </Container>
  )
}

export default Form