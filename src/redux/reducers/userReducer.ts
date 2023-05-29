import { IUser } from "../../types/user";
import {
  ACCOUNT_LOGIN,
  LOGOUT,
  UPDATE_LOGIN_LOADING,
} from "../actions/userActions";

export interface defaultStateType {
  user: IUser;
  isLoading: boolean;
  isAuthorized: boolean;
}

const defaultState: defaultStateType = {
  user: { accessToken: "", id: "" },
  isLoading: false,
  isAuthorized: false,
};
export const userReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case UPDATE_LOGIN_LOADING:
      return { ...state, isLoading: action.payload.isLoading };

    case `${ACCOUNT_LOGIN}_SUCCESS`:
      return {
        ...state,
        isAuthorized: true,
        user: { ...state.user, accessToken: action.payload.data.accessToken },
      };
    case LOGOUT: {
      return { ...defaultState };
    }
    default:
      return state;
  }
};
