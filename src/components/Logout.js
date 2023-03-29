import { getAuth, signOut } from "firebase/auth";
import { useState, useEffect } from "react";

const Logout = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userData, setUserData] = useState("");
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsSignedIn(Boolean(user));
      if (user) {
        setUserData(user.email);
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        setUserData("");
        localStorage.removeItem("user");
      }
    });
    return unsubscribe;
  }, [auth]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        setIsSignedIn(false);
        setUserData("");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {isSignedIn && (
        <div>
          <p>Logged-in as {userData}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </>
  );
};

export default Logout;













