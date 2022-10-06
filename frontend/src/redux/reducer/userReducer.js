import {
  LOGIN_ATH_FAIL,
  LOGIN_ATH_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actiontypes/useractiontypes";
import {
  REGISTER_FAIL,
  REGISTER_LOAD,
  REGISTER_SUCCSESS,
  LOGIN_FAIL,
} from "../actiontypes/useractiontypes";

const initialState = {
  loading: false,

  error: null,
  currentuser: {},
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_LOAD:
      return { ...state, loading: true };
    case REGISTER_SUCCSESS:
      return { ...state, currentuser: payload.user, loading: false };
    case REGISTER_FAIL:
      return { ...state, error: payload, loading: false };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return { ...state, currentuser: payload.user, loading: false };
    case LOGIN_FAIL:
      return { ...state, error: payload, loading: false };
    case LOGIN_ATH_SUCCESS:
      return { ...state, currentuser: payload, loading: false };
    case LOGIN_ATH_FAIL:
      return { ...state, error: payload, loading: false };
    case LOGOUT:
      return { error: null, currentuser: {} };
    default:
      return state;
  }
};
export default userReducer;
