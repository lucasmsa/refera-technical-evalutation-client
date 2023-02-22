import { Control, Controller, FieldValues } from 'react-hook-form';
import {
  Container,
  ControllerContainer,
  ErrorText,
  InputField,
  LabelField,
  Select,
  TextAreaField,
} from './styles';
import { Fragment } from 'react';

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

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextArea({ ...rest }: TextAreaProps) {
  return <TextAreaField {...rest} />;
}

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export function SelectField({ children }: SelectProps) {
  return <Select>{children}</Select>;
}

export function ErrorMessage({ children }: LabelProps) {
  return <ErrorText>{children}</ErrorText>;
}

interface FormFieldControllerProps extends FormFieldProps {
  control: Control<FieldValues, any>;
  name: string;
  rules: any;
  errorMessage?: any;
  label?: string;
}

export function FormFieldController({
  name,
  rules,
  control,
  errorMessage,
  label,
  ...rest
}: FormFieldControllerProps) {
  function renderError() {
    return errorMessage && <ErrorText>{errorMessage}</ErrorText>;
  }

  function renderLabel() {
    return label && <Label>{label}</Label>;
  }

  return (
    <ControllerContainer>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Fragment>
            {renderLabel()}
            <Root>
              <FormField onChange={onChange} value={value || ''} {...rest} />
            </Root>
          </Fragment>
        )}
        control={control}
        name={name}
        rules={rules}
      />
      {renderError()}
    </ControllerContainer>
  );
}
