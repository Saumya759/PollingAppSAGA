import { takeLatest, put } from "redux-saga/effects";
import * as constant from "../constant";
import { loginSuccess, loginErr } from "../action/index";

function* loginSaga(action) {
  const response = yield fetch(
    `${process.env.REACT_APP_BASE_URL}login?username=${action.payload.username}&password=${action.payload.password}`
  );
  const data = yield response.json();
  data.error ? yield put(loginErr(data)) : yield put(loginSuccess(data));
  localStorage.setItem("token", data.token);
}
function* loginRequest() {
  yield takeLatest(constant.LOGIN_REQ, loginSaga);
}
export default loginRequest;
