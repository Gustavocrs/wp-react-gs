import axios from "axios";

export const getApi = async (url, config) => {
  let data = "";
  if (config) {
    await axios
      .get(url)
      .then((response) => {
        data = response.data;
        console.log("RESPOSTA GET COM CONFIG");
        console.log(data);
        console.log("Configurações GET");
        console.log(config);
      })
      .catch((error) => console.log(error));
  } else {
    await axios
      .get(url)
      .then((response) => {
        data = response.data;
        console.log("RESPOSTA GET SEM CONFIG");
        console.log(data);
      })
      .catch((error) => console.log(error));
  }
};

export const postApi = (url, config) => {
  let data = "";
  if (config) {
    axios
      .post(url, config)
      .then((response) => {
        data = response.data;
        console.log("RESPOSTA POST");
        console.log(data);
      })
      .catch((error) => console.log(error));
  } else {
    console.log("VOCÊ DEVE PASSAR UM ARRAY COM OS DADOS DO BODY");
  }
};

export const deleteApi = (url, config, id) => {
  let data = "";
  if (id) {
    let newUrl = url + id;
    axios
      .delete(newUrl, config)
      .then((response) => {
        data = response.data;
        console.log("RESPOSTA DELETE");
        console.log(data);
      })
      .catch((error) => console.log(error));
  } else {
    console.log("VOCÊ DEVE PASSAR UM ARRAY COM OS DADOS DO BODY");
  }
};
