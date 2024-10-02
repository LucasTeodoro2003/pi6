import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConfigPage, FormularyPage, HomePage } from "../../pages";
import { AlertPage } from "../../pages/alertas/alertPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/alertas' element={<AlertPage/>}/>
      <Route path='/Config' element={<ConfigPage />}/>
      <Route path='/formulary' element={<FormularyPage />}/>
    </Routes>
    </BrowserRouter>
  )
}

export { App };
