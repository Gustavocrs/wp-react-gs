import axios from "axios";

export const getApi = async (url, config) => {
  let data = "";
  if (config) {
    await axios.get(url).then((response) => {
      data = response.data;
      console.log("RESPOSTA GET COM CONFIG");
      console.log(data);
      console.log("Configurações GET");
      console.log(config);
    });
  } else {
    await axios.get(url).then((response) => {
      data = response.data;
      console.log("RESPOSTA GET SEM CONFIG");
      console.log(data);
    });
  }
};

export const postApi = async (url, config) => {
  let data = "";
  if (config) {
    await axios.post(url, config).then((response) => {
      data = response.data;
      console.log("RESPOSTA POST");
      console.log(data);
    });
  } else {
    console.log("VOCÊ DEVE PASSAR UM ARRAY COM OS DADOS DO BODY");
  }
};

export const deleteApi = async (url, config, id) => {
  let data = "";
  if (id) {
    let newUrl = url + id;
    await axios.delete(newUrl, config).then((response) => {
      data = response.data;
      console.log("RESPOSTA DELETE");
      console.log(data);
    });
  } else {
    console.log("VOCÊ DEVE PASSAR UM ARRAY COM OS DADOS DO BODY");
  }
};
