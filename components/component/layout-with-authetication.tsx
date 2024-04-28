import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Sidebar } from "./sidebar";

export default function LayoutWithAuthentication({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Sidebar>{children}</Sidebar>
      </SignedIn>
    </>
  );
}
