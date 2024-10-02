import axios from "axios";

const api = axios.create({
  baseURL: "https://webhook.site/647a6ac2-1fb2-4149-9693-30ff1bbd2cc2",
  timeout: 3000,
});

export { api };
