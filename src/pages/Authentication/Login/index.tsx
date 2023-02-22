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
import { Fragment, useEffect } from 'react';
import { LoginWaves } from '~/components/Waves/LoginWaves';
import { useForm } from 'react-hook-form';
import { inputOptions } from '~/util/inputOptions';
import { CLIENT_URLS } from '~/routes/names';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '~/store';
import { Dots } from 'react-activity';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '~/store/auth/actions';
import { Authenticate } from '~/interfaces/Authenticate';

export function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { loading, token, success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const theme = useTheme();

  function handleAuthentication(data: any) {
    const { email, password } = data as Authenticate;

    dispatch(authenticateUser({ email, password }));
  }

  useEffect(() => {
    if (token) {
      navigate(CLIENT_URLS.dashboard);
    }
  }, [navigate, success, token]);

  return (
    <Fragment>
      <Container>
        <Title>Welcome 👋</Title>
        <FormContainer onSubmit={handleSubmit(handleAuthentication)}>
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
          <Button.Root type='submit' disabled={loading}>
            <Button.Typography>Login</Button.Typography>
          </Button.Root>
        </FormContainer>
        <ExtraInformationsContainer>
          <ExtraInformationsLabel>Don&apos;t have any account?</ExtraInformationsLabel>
          <ExtraInformationsLink href={CLIENT_URLS.signup}>Sign Up</ExtraInformationsLink>
        </ExtraInformationsContainer>
        {loading && <Dots color={theme.palette.ternary.main} size={32} />}
        <LoginWaves />
      </Container>
    </Fragment>
  );
}
