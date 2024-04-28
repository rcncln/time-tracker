import LayoutWithAuthentication from "@/components/component/layout-with-authetication";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <header>
      <LayoutWithAuthentication>{children}</LayoutWithAuthentication>
    </header>
  );
}
