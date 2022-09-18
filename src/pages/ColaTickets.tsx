import { FC, useContext, useState } from "react";
import { CardGrande, HistorialTickets } from "../components";

import { SocketContext } from "../contexts";
import type { ITicket } from "../interfaces";

export const ColaTickets: FC = (): JSX.Element => {
  const [ultimosTickets, setUltimosTickets] = useState<ITicket[]>([]);

  const { socket } = useContext(SocketContext);

  socket.on("ultimos-tickets", (resp: ITicket[]) => {
    setUltimosTickets(resp);
  });

  return (
    <div className="min-h-screen bg-slate-100 p-5">
      <main className="bg-white min-h-screen pt-5 px-5">
        {ultimosTickets.length > 0 ? (
          <>
            <h1 className="text-4xl font-semibold">Atendiendo al cliente</h1>
            <div className="flex flex-col md:flex-row md:space-x-10 mt-10">
              <section className="w-full md:w-1/2">
                {ultimosTickets.map((ticket, index) => {
                  if (index >= 0 && index <= 2) {
                    return (
                      <CardGrande
                        key={ticket.id}
                        nombreAgente={ticket.agente}
                        numeroEscritorio={ticket.escritorio}
                        numeroTicket={ticket.number}
                      />
                    );
                  }
                })}
              </section>
              <section className="w-full md:w-1/2">
                <div className="flex w-full justify-between items-center">
                  <hr className="w-1/3 bg-black" />
                  <p>Historial</p>
                  <hr className="w-1/3 bg-black" />
                </div>
                {ultimosTickets.map((ticket, index) => {
                  if (index >= 3) {
                    return (
                      <HistorialTickets
                        key={ticket.id}
                        nombreAgente={ticket.agente}
                        numeroEscritorio={ticket.escritorio}
                        numeroTicket={ticket.number}
                      />
                    );
                  }
                })}
              </section>
            </div>
          </>
        ) : (
          <h1 className="text-4xl font-semibold">No hay tickets en la cola</h1>
        )}
      </main>
    </div>
  );
};
