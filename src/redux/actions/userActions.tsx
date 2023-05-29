export const ACCOUNT_LOGIN = "ACCOUNT_LOGIN";
export const UPDATE_LOGIN_LOADING = "UPDATE_LOGIN_LOADING";
export const LOGOUT = "LOGOUT";
interface loginUserProps {
  login: string;
  password: string;
}

export const loginUser = (data: loginUserProps) => ({
  type: ACCOUNT_LOGIN,
  payload: {
    request: {
      method: "POST",
      url: `/account/login`,
      data,
    },
  },
});
interface updateLoginLoadingProps {
  isLoading: boolean;
}

export const updateLoginLoading = ({ isLoading }: updateLoginLoadingProps) => ({
  type: UPDATE_LOGIN_LOADING,
  payload: {
    isLoading,
  },
});
