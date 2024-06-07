import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardContainer = styled.div`
  background-color: #383a4e;
  width: 90%;
  text-align: center;
  font-family: 'Roboto';
  padding-top: 40px;
  padding-bottom: 40px;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    width: 600px;
  }
`

export const MainHeading = styled.h1`
  font-size: 36px;
  color: #ffffff;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 4px;
  font-family: 'Roboto';
`

export const PasswordDes = styled.p`
  color: #f8fafc;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 60px;
`

export const TextInput = styled.input`
  background-color: #edeeff;
  font-size: 16px;
  outline: none;
  padding: 12px 15px 12px 15px;
  width: 60%;
  border: none;
`

export const ErrorMsg = styled.p`
  color: #ef4444;
  font-size: 16px;
  font-weight: 500;
`
