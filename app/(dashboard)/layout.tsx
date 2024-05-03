import LayoutWithAuthentication from "@/components/component/layout-with-authetication";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <header>
      <main>
        <LayoutWithAuthentication>{children}</LayoutWithAuthentication>
      </main>
      <Toaster />
    </header>
  );
}
