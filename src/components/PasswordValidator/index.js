import {useState} from 'react'

import {
  MainContainer,
  CardContainer,
  MainHeading,
  PasswordDes,
  TextInput,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [lettersCount, validatePassword] = useState('')

  const onChangeText = event => {
    validatePassword(event.target.value)
  }

  return (
    <MainContainer>
      <CardContainer>
        <MainHeading>Password Validator</MainHeading>
        <PasswordDes>Check how strong and secure is your password</PasswordDes>
        <TextInput type="password" onChange={onChangeText} />
        <ErrorMsg>
          {lettersCount.length < 8 &&
            'Your password must be at least 8 characters'}
        </ErrorMsg>
      </CardContainer>
    </MainContainer>
  )
}

export default PasswordValidator
