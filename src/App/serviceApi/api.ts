import axios from "axios";


// PEOPLE COM FALTA DE EPI
// const api = axios.create({
//   baseURL: "https://webhook.site/a35ffa4f-77b9-4eda-ab38-5dce898e9293",
//   timeout: 1000,
// });
// const apiUser = axios.create({
//   baseURL: "",
//   timeout: 1000,
// })


// PEOPLE TUDO CORRETO
// const api = axios.create({
//   baseURL: "https://webhook.site/7db9c146-695d-4334-8f0a-877c1171e60d",
//   timeout: 1000,
// });
// const apiUser = axios.create({
//   baseURL: "",
//   timeout: 1000,
// })

// USER 
// const apiUser = axios.create({
//   baseURL: "https://webhook.site/14f5b9a3-9d2e-45de-a444-34d42b29d473",
//   timeout: 1000,
// });

// const api = axios.create({
//   baseURL: "",
//   timeout: 1000,
// })


// SO FUNCIONAR 
const api = axios.create({
  baseURL: "",
  timeout: 1000,
});
const apiUser = axios.create({
  baseURL: "",
  timeout: 1000,
});

export { api, apiUser };
