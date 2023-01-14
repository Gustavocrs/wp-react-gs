import React from "react";
import { Container } from "./components/Container/index.jsx";
import { GlobalStyle } from "./components/GlobalStyle/index.jsx";
const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <h1>New Webpack App</h1>
    </Container>
  );
};

export default App;
