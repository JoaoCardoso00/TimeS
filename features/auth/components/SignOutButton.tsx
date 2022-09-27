import { Button } from "@mantine/core";
import { auth } from "../../../lib/firebase";

export function SignOutButton() {
  return <Button onClick={() => auth.signOut()}>Sign Out</Button>;
}
