import axios from "axios";

const api = axios.create({
  baseURL: "https://webhook.site/f99cdb6d-f6fe-4ab0-869f-6e44737b1086",
  timeout: 3000,
});

export { api };
