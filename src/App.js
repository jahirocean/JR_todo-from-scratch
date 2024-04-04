import React, { useState } from "react";
import PropTypes from "prop-types";
import { Header } from "./components/Header";
import { Content } from "./components/Layout/Content";
import { ProjectsProvider, SelectedProjectProvider } from "./context";

export const App = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <Header />
        <Content />
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

App.propTypes = {
  darkModeDefault: PropTypes.bool,
};
