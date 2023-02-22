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
import { SignUpWaves } from '~/components/Waves/SignUpWaves';

export function SignUp() {
  return (
    <Fragment>
      <Container>
        <Title>Create an account</Title>
        <FormContainer>
          <Input.Label>Name</Input.Label>
          <Input.Root>
            <Input.FormField type='text' onChange={() => 1} />
          </Input.Root>
          <Input.Label>Email</Input.Label>
          <Input.Root>
            <Input.FormField type='email' onChange={() => 1} />
          </Input.Root>
          <Input.Label>Password</Input.Label>
          <Input.Root>
            <Input.FormField type='password' onChange={() => 1} />
          </Input.Root>
          <Button.Root onClick={() => 1}>
            <Button.Typography>Create account</Button.Typography>
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
