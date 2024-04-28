import { Sidebar } from "@/components/component/sidebar";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Sidebar>{children}</Sidebar>
      </SignedIn>
    </header>
  );
}
