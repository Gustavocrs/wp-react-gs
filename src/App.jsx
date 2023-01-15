import React, { useEffect, useState } from "react";
import { Container } from "./components/Container/index.jsx";
import { GlobalStyle } from "./components/GlobalStyle/index.jsx";

import useApi from "./hooks/useApi.jsx";

const App = () => {
  const { response, loading, error } = useApi({
    method: "get",
    baseUrl: "https://jsonplaceholder.typicode.com/posts/",
    url: "?_limit=3",
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    if (response !== null) {
      setData(response);
    }
  }, [response]);

  const hundleGet = () => (
    <ul>{data && data.map((e) => <li key={e.id}>{e.title}</li>)}</ul>
  );

  return (
    <Container>
      <GlobalStyle />
      <h1>New Webpack App</h1>
      <br/><br/><br/>
      {loading ? <p>Carregando...</p> : hundleGet()}
    </Container>
  );
};

export default App;














// let conf = [
//   {
//     headers: {
//       "Content-type": "application/json",
//     },
//   },
// ];

// let baseUrlDelete = "https://jsonplaceholder.typicode.com/posts/";
// let confPost1 = [
//   {
//     headers: {
//       "Content-type": "application/json",
//     },
//   },
//   {
//     data: {
//       title: "Teste Title",
//       body: "Teste Body",
//       userId: 1,
//     },
//   },
// ];

// const hundlePost = (baseUrl, confPost) => {
//   postApi(baseUrl, confPost);
// };
// const hundleDelete = (baseUrlDelete, conf, id) => {
//   deleteApi(baseUrlDelete, conf, id);
// };
