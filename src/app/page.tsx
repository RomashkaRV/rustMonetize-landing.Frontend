"use client";

import React from "react";

import {
  Header,
  MainLayer,
  TaskLayer,
  DesignLayer,
  StagesLayer,
  FeedbackLayer,
  QuestionsLayer,
  DifficultLayer,
  CooperationLayer,
  HelpLayout
} from "components/common";

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

      <QuestionsLayer />

      <HelpLayout />
    </div>
  );
}
