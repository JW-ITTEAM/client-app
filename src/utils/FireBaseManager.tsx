import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendEmailVerification,
  createUserWithEmailAndPassword,
  User,
} from "firebase/auth";
import { FIREBASE_WEB_FMS_API_KEY } from "../config/SystemConfig";
import { stringIsNullOrEmpty } from "./CommonUtil";
import { MsgManager } from "./MsgManager";

// Declare Obj
const firebaseApp = initializeApp({
  apiKey: FIREBASE_WEB_FMS_API_KEY,
  authDomain: "fms-api-6a4cb.firebaseapp.com",
  projectId: "fms-api-6a4cb",
  storageBucket: "fms-api-6a4cb.appspot.com",
  messagingSenderId: "738534569841",
  appId: "1:738534569841:web:fb6ebe76761fb349dce8d0",
});

const actionCodeSettings = {
  url: "http://localhost:3000/",
  handleCodeInApp: true,
};

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
// Declare Obj

// Google Login
const signInGoogleEmail = async () => {
  const userCredential = await signInWithPopup(auth, provider)
    .then((result) => {
      console.log("success");
      return result;
    })
    .catch((error) => {
      MsgManager({
        error: error,
      });
      return;
    });
  return userCredential;
};
// Google Login

// Email Password Login
const signUpEmail = async (email: string, password: string) => {
  if (loginValidCheck(email, password)) {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then(async () => {
        let user = auth.currentUser;
        if (user !== null) {
          await emailVerification(user);
        } else {
          MsgManager({
            icon: "error",
            title: "Error!",
            text: "System can not load current user.",
          });
          return;
        }
      })
      .catch((error) => {
        MsgManager({
          error: error,
        });
        return;
      });
    return userCredential;
  }
};

const emailVerification = async (user: User) => {
  await sendEmailVerification(user)
    .then(() => {
      console.log("email verification sent");
    })
    .catch((error) => {
      MsgManager({
        error: error,
      });
      return;
    });
};

const loginEmail = async (email: string, password: string) => {
  if (loginValidCheck(email, password)) {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then((result) => {
        console.log(result);
        const user = result.user;
        const email = user.email;
        const uid = user.uid;
      })
      .catch((error) => {
        MsgManager({
          error: error,
        });
        return;
      });
    return userCredential;
  }
};
// Email Password Login

// Util
const loginValidCheck = (email: string, password: string) => {
  const emptyEmail = stringIsNullOrEmpty(email);
  const emptyPassword = stringIsNullOrEmpty(password);
  const emptyBoth = emptyEmail && emptyPassword;

  if (emptyBoth) {
    MsgManager({
      icon: "error",
      title: "Validation error",
      text: "Please input username and password.",
    });
    return false;
  } else if (emptyEmail) {
    MsgManager({
      icon: "error",
      title: "Validation error",
      text: "Please input username.",
    });
    return false;
  } else if (emptyPassword) {
    MsgManager({
      icon: "error",
      title: "Validation error",
      text: "Please input password.",
    });
    return false;
  }
  return true;
};
// Util

export const firebaseConn = {
  signUpEmail,
  loginEmail,
  signInGoogleEmail,
};

export default firebaseConn;
