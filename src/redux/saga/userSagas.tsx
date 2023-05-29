import { put, takeEvery } from "redux-saga/effects";
import { ACCOUNT_LOGIN, updateLoginLoading } from "../actions/userActions";
import { toast } from "react-toastify";

const userSagas = [
  takeEvery(`${ACCOUNT_LOGIN}`, handleLogin),
  takeEvery(`${ACCOUNT_LOGIN}_FAIL`, handleLoginFail),
  takeEvery(`${ACCOUNT_LOGIN}_SUCCESS`, handleLoginSuccess),
];

function* handleLogin() {
  yield put(updateLoginLoading({ isLoading: true }));
}

function* handleLoginFail() {
  yield toast.error("Login failed");
  yield put(updateLoginLoading({ isLoading: false }));
}

function* handleLoginSuccess() {
  yield toast.success("Login success");
  yield put(updateLoginLoading({ isLoading: false }));
}

export default userSagas;
