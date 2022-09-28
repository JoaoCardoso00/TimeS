import { signInWithPopup } from "@firebase/auth";
import { Button } from "@mantine/core";
import {
  collection,
  doc,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore";
import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { UserContext } from "../../../lib/context";
import { googleAuthProvider, auth, firestore } from "../../../lib/firebase";

export function SignInButton() {
  const authState = useAuthState(auth);
  const user = useContext(UserContext);

  const signIn = async () => {
    await signInWithPopup(auth, googleAuthProvider);

    const userDoc = doc(firestore, "users", `${authState[0]?.uid}`);

  };

  return <Button onClick={signIn}>Sign in With google</Button>;
}
