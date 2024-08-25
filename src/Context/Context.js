import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';

export const Authcontext = createContext();
const auth = getAuth(app)
const Context = ({ children }) => {
  const [user, setuser] = useState([])
  const [loading,setloading]=useState(true)


  const createuser = (email, password) => {
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const login = (email, password) => {
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logout = () => {
    setloading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, currentuser => {
      setuser(currentuser);
      setloading(false)
    })

    return () => unsubcribe();

  }, [])

  const Authinfo = { user,loading,createuser, login, logout }
  return (
    <div>
      <Authcontext.Provider value={Authinfo}>
        {
          children
        }
      </Authcontext.Provider>
    </div>
  );
};

export default Context;