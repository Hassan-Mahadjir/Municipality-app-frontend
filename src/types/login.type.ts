export type LoginFormValues = {
  email: string;
  password: string;
  resetCode?:string
};

export type ForgotFormValues = {
  email: string;
};
export type ResetFormValues = {
  email:string;
  resetCode: string;
};
export type ResetPassword={
  password: string;
  confirmPassword: string;
}
export type ChangePassword={
  oldPassword: string;
  newPassword: string;
}
