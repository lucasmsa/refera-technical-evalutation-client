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

export function Login() {
  return (
    <Fragment>
      <Container>
        <Title>Welcome 👋</Title>
        <FormContainer>
          <Input.Label>Email</Input.Label>
          <Input.Root>
            <Input.FormField type='email' onChange={() => 1} />
          </Input.Root>
          <Input.Label>Password</Input.Label>
          <Input.Root>
            <Input.FormField type='password' onChange={() => 1} />
          </Input.Root>
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
