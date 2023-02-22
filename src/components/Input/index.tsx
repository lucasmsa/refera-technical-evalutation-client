import { Control, Controller, FieldValues } from 'react-hook-form';
import { Container, ControllerContainer, ErrorText, InputField, LabelField } from './styles';

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

interface FormFieldControllerProps extends FormFieldProps {
  control: Control<FieldValues, any>;
  name: string;
  rules: any;
  errorMessage?: any;
}

export function FormFieldController({
  name,
  rules,
  control,
  errorMessage,
  ...rest
}: FormFieldControllerProps) {
  function renderError() {
    return errorMessage && <ErrorText>{errorMessage}</ErrorText>;
  }

  return (
    <ControllerContainer>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Root>
            <FormField onChange={onChange} value={value || ''} {...rest} />
          </Root>
        )}
        control={control}
        name={name}
        rules={rules}
      />
      {renderError()}
    </ControllerContainer>
  );
}
