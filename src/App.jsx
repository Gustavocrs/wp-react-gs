import React, { useEffect } from "react";
import { Container } from "./components/Container/index.jsx";
import { GlobalStyle } from "./components/GlobalStyle/index.jsx";

import { getApi, postApi, deleteApi } from "./wrapperAPI/index.jsx";

const App = () => {
  let baseUrl = "https://jsonplaceholder.typicode.com/posts?_limit=3";
  let baseUrlDelete = "https://jsonplaceholder.typicode.com/posts/";
  let conf = [
    {
      headers: {
        "Content-type": "application/json",
      },
    },
  ];
  let confPost = [
    {
      headers: {
        "Content-type": "application/json",
      },
    },
    {
      data: {
        title: "Teste Title",
        body: "Teste Body",
        userId: 1,
      },
    },
  ];
  useEffect(() => {
    getApi(baseUrl);
    postApi(baseUrl, confPost);
  }, []);

  return (
    <Container>
      <GlobalStyle />
      <h1>New Webpack App</h1>
      <button onClick={() => deleteApi(baseUrlDelete, conf, 2)}>DELETE</button>
    </Container>
  );
};

export default App;
