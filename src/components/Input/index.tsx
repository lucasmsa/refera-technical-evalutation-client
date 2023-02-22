import { Container, InputField, LabelField } from './styles';

interface InputContainerProps {
  children: React.ReactNode;
}

export function Root({ children }: InputContainerProps) {
  return <Container>{children}</Container>;
}

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ children }: LabelProps) {
  return <LabelField>{children}</LabelField>;
}

type FormFieldProps = React.InputHTMLAttributes<HTMLInputElement>;

export function FormField({ ...rest }: FormFieldProps) {
  return <InputField {...rest} />;
}
