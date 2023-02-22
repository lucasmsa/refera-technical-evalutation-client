import * as Input from '~/components/Input';
import * as Button from '~/components/Button';
import {
  Container,
  ExtraInformationsContainer,
  ExtraInformationsLabel,
  ExtraInformationsLink,
  FormContainer,
  Title,
} from '../auth.styles';
import { Fragment } from 'react';
import { LoginWaves } from '~/components/Waves/LoginWaves';
import { useForm } from 'react-hook-form';
import { inputOptions } from '~/util/inputOptions';

export function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  function handleRegistration(data: any) {
    console.log('Registration data:');
  }

  function handleErrors(error: any) {
    console.log('Errors:');
  }

  return (
    <Fragment>
      <Container>
        <Title>Welcome 👋</Title>
        <FormContainer onSubmit={handleSubmit(handleRegistration, handleErrors)}>
          <Input.Label>Email</Input.Label>
          <Input.FormFieldController
            type='email'
            control={control}
            name='email'
            rules={inputOptions.email}
            errorMessage={errors.email?.message}
          />
          <Input.Label>Password</Input.Label>
          <Input.FormFieldController
            type='password'
            control={control}
            name='password'
            rules={inputOptions.password}
            errorMessage={errors.password?.message}
          />
          <Button.Root onClick={() => 1}>
            <Button.Typography>Login</Button.Typography>
          </Button.Root>
        </FormContainer>
        <ExtraInformationsContainer>
          <ExtraInformationsLabel>Don&apos;t have any account?</ExtraInformationsLabel>
          <ExtraInformationsLink href='/signup'>Sign Up</ExtraInformationsLink>
        </ExtraInformationsContainer>
        <LoginWaves />
      </Container>
    </Fragment>
  );
}
