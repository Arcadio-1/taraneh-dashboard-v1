// app/layout.tsx
import "@/style/globals.scss";

import { ClerkProvider } from "@clerk/nextjs";

import { ModalProviders } from "@/providers/modal-providers";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" dir="rtl">
        <body>
          <ModalProviders />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
