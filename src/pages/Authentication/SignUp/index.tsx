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
import { Controller, useForm } from 'react-hook-form';
import { SignUpWaves } from '~/components/Waves/SignUpWaves';
import { inputOptions } from '~/util/inputOptions';

export function SignUp() {
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
        <Title>Create an account</Title>
        <FormContainer onSubmit={handleSubmit(handleRegistration, handleErrors)}>
          <Input.Label>Name</Input.Label>
          <Input.FormFieldController
            control={control}
            name='name'
            rules={inputOptions.name}
            errorMessage={errors.name?.message}
          />
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
          <Button.Root>
            <Button.Typography type='submit'>Create account</Button.Typography>
          </Button.Root>
        </FormContainer>
        <ExtraInformationsContainer>
          <ExtraInformationsLabel>Already have an account?</ExtraInformationsLabel>
          <ExtraInformationsLink href='/'>Log in</ExtraInformationsLink>
        </ExtraInformationsContainer>
        <SignUpWaves />
      </Container>
    </Fragment>
  );
}
