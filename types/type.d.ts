export type iconName =
  | ""
  | "checkbox"
  | "text"
  | "radio"
  | "number"
  | "arrowDown"
  | "hamburger"
  | "close"
  | "html"
  | "css";

export type TForm = {
  loginPath: string;
  method: "GET" | "POST";
  submitText: string;
  children?: React.ReactNode;
  link: string;
  linkText: string;
  linkDesc: string;
  formType: "login" | "register";
};
