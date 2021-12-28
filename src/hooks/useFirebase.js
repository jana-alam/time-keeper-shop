import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import firebaseInitialization from "../firebase/firebase.init";
// firebase initialization
firebaseInitialization();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  // auth observer

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(true);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
  }, [auth]);

  // register user
  const registerUser = (name, email, password, navigate) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // set user in state with displayName
        const registeredUser = userCredential.user;
        registeredUser.displayName = name;
        setUser(registeredUser);
        // update display name to profile
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        navigate("/home");
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  // login user
  const loginUser = (email, password, location, navigate) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        let from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message))
      .finally(() => {
        setLoading(false);
      });
  };

  // log out user

  const logOut = () => {
    signOut(auth).then();
  };

  return {
    user,
    loading,
    registerUser,
    loginUser,
    logOut,
  };
};

export default useFirebase;
