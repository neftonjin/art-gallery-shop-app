import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";


const Logout = ( ) => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const auth = getAuth();
  
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        setIsSignedIn(false);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  auth.onAuthStateChanged((user) => {
    setIsSignedIn(Boolean(user));
    
  });

  return (
    <>
      {isSignedIn && <button onClick={handleSignOut}>Sign Out</button>}
    </>
  );
};

export default Logout;






