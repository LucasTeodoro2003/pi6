import axios from "axios";

const api = axios.create({
  baseURL: "https://webhook.site/7699fd93-4db8-45e9-9718-30e3940e8099",
  timeout: 3000,
});

export { api };
