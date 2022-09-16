import { FC, useEffect, useState, useContext } from "react";
import { Sidebar } from "../components";
import { useNavigate } from "react-router";
import type { ITicket } from "../interfaces";
import { TicketContext } from "../contexts";
import { toast } from "react-toastify";

export const Escritorio: FC = (): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false);
  const [agente, setAgente] = useState<ITicket>(
    JSON.parse(localStorage.getItem("agente") || "{}")
  );

  const { generarTicket, ticket, error } = useContext(TicketContext);

  const { escritorio, agente: nombreAgente } = agente;

  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(agente).length === 0) {
      setTimeout(() => {
        navigate("/ingresar");
      }, 1);
    }
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
      return;
    }
  }, [error, ticket]);

  const salir = () => {
    setAgente({} as ITicket);
    localStorage.setItem("agente", "{}");
    navigate("/ingresar");
  };

  return (
    <div className="flex relative">
      <Sidebar setVisible={setVisible} visible={visible} />
      <div className="h-screen bg-slate-100 p-5 w-full">
        <main className="bg-white h-full pt-5 px-5 relative">
          <h1 className="text-3xl font-semibold">{nombreAgente}</h1>
          <p className="my-5 text-sm">
            Usted está trabajando en el escritorio:{" "}
            <span className="text-green-500">{escritorio}</span>
          </p>
          <hr />
          <p className="text-sm mt-10">
            Está atendiendo el ticket número:{" "}
            <span className="text-3xl text-red-500">
              {ticket.number || agente.number}
            </span>
          </p>
          <button
            type="button"
            onClick={salir}
            className="absolute top-5 right-5 flex items-center text-white bg-red-500 hover:bg-red-400 transition-colors cursor-pointer rounded-3xl py-1 px-4"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 mr-2 stroke-current stroke-2 fill-transparent"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Salir{" "}
          </button>
          <button
            type="button"
            onClick={() => generarTicket(escritorio, nombreAgente)}
            className="absolute top-64 right-5 flex items-center text-white bg-blue-500 hover:bg-blue-400 transition-colors cursor-pointer rounded-3xl py-1 px-4"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 mr-2 stroke-current stroke-2 fill-transparent"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            Siguiente
          </button>
        </main>
      </div>
    </div>
  );
};
