import {
  LOGIN_ATH_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_LOAD,
  REGISTER_SUCCSESS,
} from "../actiontypes/useractiontypes";
import axios from "axios";
import {
  LOGIN_FAIL,
  LOGIN_ATH_SUCCESS,
} from "./../actiontypes/useractiontypes";

export const signUp = (newuser, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:7000/user/signup", newuser);
    console.log(res.data);
    dispatch({
      type: REGISTER_SUCCSESS,
      payload: res.data,
    });
  
    navigate("/signein");
  } catch (error) {
    console.dir(error);

    if (error.response.data.msg) {
      alert(error.response.data.msg);
    }
    error.response.data.errors.forEach((el) => {
      alert(el.msg);
    });
    dispatch({
      type: REGISTER_FAIL,
      payload: error,
    });

    console.log(error);
  }
};
export const signIn = (user, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:7000/user/signin", user);
    console.log(res.data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    res.data.user.role === "client" ?
    navigate("/Home"):navigate("/Dshbord");
  } catch (error) {
    //console.dir(error);

    if (error.response.data.msg) {
      alert(error.response.data.msg);
    } else {
      error.response.data.errors.forEach((el) => {
        alert(el.msg);
      });
    }

    dispatch({
      type: LOGIN_FAIL,
      payload: error,
    });

    console.log(error);
  }
};
export const getUser = () => async (dispatch) => {
  //console.log("first");
  dispatch({ type: REGISTER_LOAD });
  try {
    const opts = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    //console.log(opts);
    const res = await axios.get("http://localhost:7000/user/current", opts);
    dispatch({ type: LOGIN_ATH_SUCCESS, payload: res.data.user });
   // console.log(res);
  } catch (error) {
    dispatch({
      type: LOGIN_ATH_FAIL,
      payload: error,
    });
  }
};
export const logout = (navigate) => (dispatch) => {
  //remove the token from the localstorage
  localStorage.removeItem("token");
  dispatch({
    type:LOGOUT ,
  });
  navigate("/signein");
};