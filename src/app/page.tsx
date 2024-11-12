"use client";

import React from "react";

import {
  CooperationLayer,
  DesignLayer,
  DifficultLayer,
  FeedbackLayer,
  Header,
  MainLayer,
  StagesLayer,
  TaskLayer
} from "../components/common";

export default function MainPage() {
  return (
    <div>
      <Header />

      <MainLayer />

      <TaskLayer />

      <CooperationLayer />

      <StagesLayer />

      <DifficultLayer />

      <DesignLayer />

      <FeedbackLayer />
    </div>
  );
}
