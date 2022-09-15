import { FC } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SocketProvider } from "./contexts";
import {
  ColaTickets,
  CrearTicket,
  IngresarEscritorio,
  Escritorio,
} from "./pages";

const App: FC = (): JSX.Element => {
  return (
    <SocketProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/ingresar" element={<IngresarEscritorio />} />
        <Route path="/escritorio" element={<Escritorio />} />
        <Route path="/cola" element={<ColaTickets />} />
        <Route path="/crear" element={<CrearTicket />} />
        <Route path="*" element={<Navigate to="/ingresar" replace />} />
      </Routes>
    </BrowserRouter>
    </SocketProvider>
  );
};

export default App;
