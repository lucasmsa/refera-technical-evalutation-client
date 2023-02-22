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
import { useForm } from 'react-hook-form';
import { SignUpWaves } from '~/components/Waves/SignUpWaves';
import { inputOptions } from '~/util/inputOptions';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '~/store';
import { authenicateUser, signUpUser } from '~/store/auth/actions';
import { Register } from '~/interfaces/register';
import { Dots } from 'react-activity';
import { useTheme } from 'styled-components';
import { CLIENT_URLS } from '~/routes/names';
import { useNavigate } from 'react-router-dom';

export function SignUp() {
  const { loading, error, token, success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const theme = useTheme();

  const {
    handleSubmit,
    control,
    formState: { errors: formErrors },
  } = useForm();

  function handleRegistration(data: any) {
    const { name, email, password } = data as Register;

    dispatch(signUpUser({ name, email, password }));
  }

  useEffect(() => {
    if (token) navigate(CLIENT_URLS.dashboard);
  }, [token, navigate]);

  return (
    <Fragment>
      <Container>
        <Title>Create an account</Title>
        <FormContainer onSubmit={handleSubmit(handleRegistration)}>
          <Input.Label>Name</Input.Label>
          <Input.FormFieldController
            control={control}
            name='name'
            rules={inputOptions.name}
            errorMessage={formErrors.name?.message}
          />
          <Input.Label>Email</Input.Label>
          <Input.FormFieldController
            type='email'
            control={control}
            name='email'
            rules={inputOptions.email}
            errorMessage={formErrors.email?.message}
          />
          <Input.Label>Password</Input.Label>
          <Input.FormFieldController
            type='password'
            control={control}
            name='password'
            rules={inputOptions.password}
            errorMessage={formErrors.password?.message}
          />
          <Button.Root disabled={loading}>
            <Button.Typography type='submit'>Create account</Button.Typography>
          </Button.Root>
        </FormContainer>
        <ExtraInformationsContainer>
          <ExtraInformationsLabel>Already have an account?</ExtraInformationsLabel>
          <ExtraInformationsLink href={CLIENT_URLS.login}>Log in</ExtraInformationsLink>
        </ExtraInformationsContainer>
        {loading && <Dots color={theme.palette.ternary.main} size={32} />}
        <SignUpWaves />
      </Container>
    </Fragment>
  );
}
