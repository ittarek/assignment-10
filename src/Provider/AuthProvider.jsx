import React, { createContext } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "./../firebase/firebase.config";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const [photoUrl, setPhotoUrl] = useState(null);
  // console.log("photo", photoUrl);

  //   register provider
  const createUser = (email, password) => {
    setLoader(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login provider
  const createLogin = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   google provider

  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  // GitHub Provider
  const githubLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  //   logOut provider
  const loggedOut = () => {
    setLoader(true);
    signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("logged isn user inside auth state ", loggedUser);
      setUser(loggedUser);
      setLoader(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);


  const updateUser = (user, name,photoUrl) => {
    updateProfile(user, {
        displayName: name,
        photoURL : photoUrl
    })
        .then(() => {
            console.log('user name and photo updated')
        })
        .catch(error => {
            setError(error.message);
        })
}



  const authInfo = {
    user,
    createUser,
    createLogin,
    loggedOut,
    googleLogin,
    githubLogin,
    loader,
    photoUrl,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
