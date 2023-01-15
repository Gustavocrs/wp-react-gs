import React, { useEffect, useState } from "react";
import { Container } from "./components/Container/index.jsx";
import { GlobalStyle } from "./components/GlobalStyle/index.jsx";

import { getApi, postApi, deleteApi } from "./wrapperAPI/index.jsx";

const App = () => {
  let baseUrl1 = "https://jsonplaceholder.typicode.com/posts?_limit=3";
  let baseUrlDelete = "https://jsonplaceholder.typicode.com/posts/";
  let conf = [
    {
      headers: {
        "Content-type": "application/json",
      },
    },
  ];
  let confPost1 = [
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

  const hundlePost = (baseUrl, confPost) => {
    postApi(baseUrl, confPost);
  };
  const hundleDelete = (baseUrlDelete, conf, id) => {
    deleteApi(baseUrlDelete, conf, id);
  };
  const hundleGet = (baseUrl, confPost) => {
    let api = getApi(baseUrl, confPost);
    console.log(api);
  };

  return (
    <Container>
      <GlobalStyle />
      <h1>New Webpack App</h1>
      <button onClick={() => hundleGet(baseUrl1, confPost1)}>GET</button>
      <div>
        <ul></ul>
      </div>
      {/* <button onClick={() => hundleDelete(baseUrlDelete, conf, 2)}>
        DELETE
      </button>
      <button onClick={() => hundlePost(baseUrl, confPost)}>POST</button> */}
    </Container>
  );
};

export default App;
