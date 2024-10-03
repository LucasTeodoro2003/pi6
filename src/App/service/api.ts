import axios from "axios";

const api = axios.create({
  baseURL: "https://webhook.site/78498de1-ad5c-4fa9-a3de-34c678ba1a9b",
  timeout: 3000,
});

export { api };
