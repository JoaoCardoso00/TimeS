import { auth } from "./firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export interface userData {
  email: string | null;
  username: string | null;
}

export function useUserData() {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState<userData["username"]>("hello");
  const [email, setEmail] = useState<userData["email"]>("");

  useEffect(() => {
    if (user) {
      setUsername(user.displayName);
      setEmail(user.email);
    } else {
      setUsername(null);
      setEmail(null);
    }
  }, [user]);

  return { username, email };
}
