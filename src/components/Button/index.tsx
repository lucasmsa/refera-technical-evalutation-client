import { Button, IconContainer, Text } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Root({ children, ...rest }: ButtonProps) {
  return <Button {...rest}>{children}</Button>;
}

interface ButtonIconProps {
  children: any;
}

export function Icon({ children }: ButtonIconProps) {
  return <IconContainer>{children}</IconContainer>;
}

export function Typography({ children }: ButtonProps) {
  return <Text>{children}</Text>;
}
