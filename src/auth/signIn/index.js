import { useState } from 'react';

import firebase from 'firebase';
import 'firebase/auth';

const SignIn = () => {
  const auth = firebase.auth();

  const [userData, setUserData] = useState(null);

  const signInGoogle = async() => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);

    if (user) {
      setUserData({
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        emailVerified: user.emailVerified,
        uid: user.uid,
      })
    }
  };

  const signOut = async() =>{
    try {
      await auth.signOut();
      setUserData(null);
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <button onClick={signInGoogle}>
        Sing In with Google
      </button>
      <button onClick={signOut}>
        Sing Out
      </button>

      {
        userData
          ? <div>
              <p>{userData.name}</p>
              <p>{userData.email}</p>
              <img src={userData.photoUrl} alt="userPhoto" />
            </div>
          : null
      }
    </>
  )
}

export default SignIn;