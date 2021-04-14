import firebase from 'firebase';
import { firebaseConfig } from './config';

import SignIn from './auth/signIn';

firebase.initializeApp(firebaseConfig);

function App() {
  return <SignIn />;
}

export default App;
