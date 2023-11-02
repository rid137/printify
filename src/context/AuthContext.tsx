import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { GoogleAuthProvider, FacebookAuthProvider, signOut, onAuthStateChanged, signInWithRedirect } from 'firebase/auth';
import { auth } from '../Firebase-config';

interface AuthContextType {
  googleSignIn: () => void;
  user: any; // Work on the 'any' type later
  setUser: (user: any) => void; // Work on the 'any' type later
  logOut: () => void;
  facebookSignIn: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProviderProps {
  children: ReactNode;
}



export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null); // Work on the 'any' type later

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider)
    signInWithRedirect(auth, provider);
  };

  

  const facebookSignIn = () => {
    const provider = new FacebookAuthProvider();
    signInWithRedirect(auth, provider);
    // signInWithPopup(auth, provider)
  }

  const logOut = () => {
    signOut(auth);
  };

  // TO MANAGE THE LOGIN AND LOGOUT STATUS OF USERS
  useEffect(() => {
    const manageUserState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('user', currentUser);
    });
    return () => {
      manageUserState();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, user, setUser, logOut, facebookSignIn }}>
      {children}
    </AuthContext.Provider>
  )
};

export const UserAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error("useUserAuth must be used within an AuthContextProvider");
    }
    return context;
  };
  
