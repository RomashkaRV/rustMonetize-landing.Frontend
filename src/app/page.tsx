import React from "react";

import { Header, MainLayer, TaskLayer } from "components/common";

export default function MainPage() {
  return (
    <div className="container">
      <Header />

      <MainLayer />

      <TaskLayer />
    </div>
  );
}
