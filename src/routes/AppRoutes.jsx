import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

import MainLayout from "./components/layout/MainLayout";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectDetail />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
