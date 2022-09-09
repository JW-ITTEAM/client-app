import { makeAutoObservable } from "mobx";
import { UserLoginProps } from "../models/UserLoginProps";

export default class LoginStore {
  userLoginProps: UserLoginProps = {
    username: "",
    password: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  setUserLoginProps = (value: any) => {
    this.userLoginProps.username = value.username;
    this.userLoginProps.password = value.password;
  };
}
