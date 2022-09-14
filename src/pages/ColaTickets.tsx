import { FC } from "react";
import { CardGrande } from "../components";
import { HistorialTickets } from "../components";
export const ColaTickets: FC = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-slate-100 p-5">
      <main className="bg-white min-h-screen pt-5 px-5">
        <h1 className="text-4xl font-semibold">Atendiendo al cliente</h1>
        <div className="flex flex-col md:flex-row md:space-x-10 mt-10">
          <section className="w-full md:w-1/2">
            <CardGrande />
            <CardGrande />
            <CardGrande />
          </section>
          <section className="w-full md:w-1/2">
            <div className="flex w-full justify-between items-center">
              <hr className="w-1/3 bg-black" />
              <p>Historial</p>
              <hr className="w-1/3 bg-black" />
            </div>
            <HistorialTickets />
            <HistorialTickets />
            <HistorialTickets />
            <HistorialTickets />
            <HistorialTickets />
          </section>
        </div>
      </main>
    </div>
  );
};
