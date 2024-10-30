import type { ReactNode } from "react";

import Head from "./head";

import "style/index.scss";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head />

      <body>
        {children}

        <script src="//cdn.jsdelivr.net/npm/eruda"></script>

        <script>eruda.init();</script>
      </body>
    </html>
  );
}
