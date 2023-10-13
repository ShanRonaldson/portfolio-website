export interface ButtonProps {
  text: string;
  ariaText?: string;
  classType: "primary" | "warn" | "accept";
  disabled?: boolean;
}

export interface LinkProps extends ButtonProps {
  link: string;
}
