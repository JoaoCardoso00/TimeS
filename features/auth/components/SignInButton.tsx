import { signInWithPopup } from "@firebase/auth";
import { Button } from "@mantine/core";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore, googleAuthProvider } from "../../../lib/firebase";

export function SignInButton() {
  const signIn = async () => {
    await signInWithPopup(auth, googleAuthProvider);
  };

  return <Button onClick={signIn}>Sign in With google</Button>;
}
