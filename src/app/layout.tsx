import React from "react";

import Head from "./head";

import "style/index.scss";
import {
  CooperationLayer,
  DifficultLayer,
  Header,
  MainLayer,
  StagesLayer,
  TaskLayer
} from "components/common";

export default function RootLayout() {
  return (
    <html lang="en">
      <Head />

      <body>
        <Header />

        <MainLayer />

        <TaskLayer />

        <CooperationLayer />

        <StagesLayer />

        <DifficultLayer />

        <script src="//cdn.jsdelivr.net/npm/eruda"></script>

        <script>eruda.init();</script>
      </body>
    </html>
  );
}
