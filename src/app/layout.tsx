import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import Image from "next/legacy/image";
import { Suspense } from "react";
import Footer from "./components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoMo x ArcticWolf",
  description: "Ihr exklusives IT-Security-Event",
};

const theme = createTheme({
  fontFamily: "Glober Regular",
  headings: { fontFamily: "Glober ExtraBold" },
  primaryColor: "red",
  colors: {
    red: [
      "#fdecef",
      "#f5d6da",
      "#efa8b1",
      "#ea7884",
      "#e6515f",
      "#e33948",
      "#aa1124",
      "#c9222f",
      "#b41b29",
      "#9e1021",
    ],
  },
  defaultRadius: "0",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Suspense>
            <main className="relative z-10 min-h-screen flex flex-col justify-between overflow-hidden">
              {children}
              <Footer />
              <div className="absolute -z-1 -left-16 -top-16 opacity-20">
                <Image src="/bg2.svg" width="320" height="320" alt="Bg" />
              </div>
              <div className="absolute -z-1 -right-32 -bottom-48 opacity-20">
                <Image src="/bg.svg" width="660" height="660" alt="Bg" />
              </div>
            </main>
          </Suspense>
        </MantineProvider>
      </body>
    </html>
  );
}
