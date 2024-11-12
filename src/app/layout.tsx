import React from "react";

import {
  Header,
  MainLayer,
  TaskLayer,
  StagesLayer,
  DesignLayer,
  FeedbackLayer,
  DifficultLayer,
  CooperationLayer
} from "components/common";

import Head from "./head";

import "style/index.scss";

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

        <DesignLayer />

        <FeedbackLayer />

        <script src="//cdn.jsdelivr.net/npm/eruda"></script>

        <script>eruda.init();</script>
      </body>
    </html>
  );
}
