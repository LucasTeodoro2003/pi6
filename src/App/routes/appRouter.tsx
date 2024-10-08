import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AlertPage } from "../../pages/alertas";
import { ConfigPage } from "../../pages/config";
import { FormularyPage } from "../../pages/formulary";
import { HomePage } from "../../pages/home";
import { Login } from "../../widgets/login";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/alertas" element={<AlertPage />} />
        <Route path="/Config" element={<ConfigPage />} />
        <Route path="/formulary" element={<FormularyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export { AppRouter };
