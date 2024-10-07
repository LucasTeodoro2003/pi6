import axios from "axios";


// PEOPLE 
// const api = axios.create({
//   baseURL: "https://webhook.site/2b27cb2c-325b-48c7-802a-0aaf766f3b4d",
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
