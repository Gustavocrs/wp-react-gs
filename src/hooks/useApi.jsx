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
