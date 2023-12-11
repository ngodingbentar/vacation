import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/action/getCurrentUser";
import AccountClient from "./AccountClient";
import { IUser } from "../types";

const AccountPage = async () => {
  const currentUser = await getCurrentUser() as IUser

  return (
    <ClientOnly>
      <AccountClient
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
 
export default AccountPage;
