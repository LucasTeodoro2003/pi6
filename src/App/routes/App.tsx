import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages";
import { AlertPage } from "../../pages/alertas/alertPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/alertas' element={<AlertPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export { App };
