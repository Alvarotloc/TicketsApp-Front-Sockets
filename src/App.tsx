import { FC } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SocketProvider } from "./contexts";
import { TicketProvider } from "./contexts/TicketContext";
import {
  ColaTickets,
  CrearTicket,
  IngresarEscritorio,
  Escritorio,
} from "./pages";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: FC = (): JSX.Element => {
  return (
    <SocketProvider>
      <TicketProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/ingresar" element={<IngresarEscritorio />} />
            <Route path="/escritorio" element={<Escritorio />} />
            <Route path="/cola" element={<ColaTickets />} />
            <Route path="/crear" element={<CrearTicket />} />
            <Route path="*" element={<Navigate to="/ingresar" replace />} />
          </Routes>
        </BrowserRouter>
      </TicketProvider>
      <ToastContainer />
    </SocketProvider>
  );
};

export default App;
