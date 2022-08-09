import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_UZER_DATA = "SET-UZER-DATA";

export type InitialStateType = {
  id: null | number;
  email: null | string;
  login: null | string;
  isAuth: boolean;
};

const initialState: InitialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReduce = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_UZER_DATA:
      return {
        ...state,
        ...action.data,
        //id: action.id , email: action.email, login: action.login
      };
    default:
      return state;
  }
};
type setUzerDataActionDataType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};
type setUzerDataActionType = {
  type: typeof SET_UZER_DATA;
  data: setUzerDataActionDataType;
};

export const setUzerData = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): setUzerDataActionType => ({
  type: SET_UZER_DATA,
  data: { id, email, login, isAuth },
});

export const authMe = () => (dispatch) => {
  return authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setUzerData(id, email, login, true));
    }
  });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(authMe());
    } else {
      let messeg =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Неизвестная ошибка";
      dispatch(stopSubmit("login", { _error: messeg }));
    }
  });
};
export const logOut = () => {
  return (dispatch) => {
    authAPI.logOut().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUzerData(null, null, null, false));
      }
    });
  };
};

export default authReduce;

// redux-toolkit
