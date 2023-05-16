"use client";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Box } from "@chakra-ui/react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box bg={"gray.100"} h={"100vh"}>
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
