import { FC } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AgenteProvider } from "./contexts";
import {
  ColaTickets,
  CrearTicket,
  IngresarEscritorio,
  Escritorio,
} from "./pages";

const App: FC = (): JSX.Element => {
  return (
    <AgenteProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<IngresarEscritorio />} />
            <Route path="/escritorio" element={<Escritorio />} />
            <Route path="/cola" element={<ColaTickets />} />
            <Route path="/crear" element={<CrearTicket />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AgenteProvider>
  );
};

export default App;
