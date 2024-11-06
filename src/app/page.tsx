import React from "react";

import {
  CooperationLayer,
  Header,
  MainLayer,
  StagesLayer,
  TaskLayer
} from "components/common";

export default function MainPage() {
  return (
    <div className="container">
      <Header />

      <MainLayer />

      <TaskLayer />

      <CooperationLayer />

      <StagesLayer />
    </div>
  );
}
