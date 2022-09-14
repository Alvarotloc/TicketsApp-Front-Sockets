import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ColaTickets, CrearTicket, IngresarEscritorio } from "./pages";

const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<IngresarEscritorio />} />
          <Route path="/escritorio" element={<h1>Pagina de escritorio</h1>} />
          <Route path="/cola" element={<ColaTickets />} />
          <Route path="/crear" element={<CrearTicket />} />
          <Route path="*" element={<h1>Pagina de 404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
