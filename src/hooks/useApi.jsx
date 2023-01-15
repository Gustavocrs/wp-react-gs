import { useState, useEffect } from "react";
import axios from "axios";

const useApi = ({
  baseUrl = null,
  url,
  method,
  body = null,
  headers = null,
}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getApi = () => {
    axios[method](baseUrl + url, JSON.parse(headers, JSON.parse(body)))
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  };

  useEffect(() => {
    getApi();
  }, [method, baseUrl, url, body, headers]);

  return { response, error, loading };
};

export default useApi;

// export const postApi = (url, config) => {
//   let data = "";
//   if (config) {
//     axios
//       .post(url, config)
//       .then((response) => {
//         data = response.data;
//         console.log("RESPOSTA POST");
//         console.log(data);
//         return data;
//       })
//       .catch((error) => console.log(error));
//   } else {
//     console.log("VOCÊ DEVE PASSAR UM ARRAY COM OS DADOS DO BODY");
//   }
// };

// export const deleteApi = (url, config, id) => {
//   let data = "";
//   if (id) {
//     let newUrl = url + id;
//     axios
//       .delete(newUrl, config)
//       .then((response) => {
//         data = response.data;
//         console.log("RESPOSTA DELETE");
//         console.log(data);
//         return data;
//       })
//       .catch((error) => console.log(error));
//   } else {
//     console.log("VOCÊ DEVE PASSAR UM ARRAY COM OS DADOS DO BODY");
//   }
// };
