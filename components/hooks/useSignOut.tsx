
'use client'
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/router";

const useSignOut = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  return {
    signOut,
    router,
  };
};

export default useSignOut;  