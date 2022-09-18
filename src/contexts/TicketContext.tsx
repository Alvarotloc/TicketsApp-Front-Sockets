import { FC, useState, createContext, useContext, useEffect } from "react";
import { IChildren, ITicket, TicketContectProps } from "../interfaces";

import { SocketContext } from "../contexts";

export const TicketContext = createContext({} as TicketContectProps);

export const TicketProvider: FC<IChildren> = ({ children }): JSX.Element => {
  const [ticket, setTicket] = useState<ITicket>({} as ITicket);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if(error){
      setError('');
    }
  },[error])

  const { socket } = useContext(SocketContext);

  const generarTicket = (escritorio: number, nombre: string) => {
    socket.emit("asignar-tickets", { escritorio, nombre }, (resp: any) => {
      if (resp.error) {
        setError(resp.error);
        return;
      }
          setTicket(resp);
          const nuevoTicket: ITicket = resp;
          localStorage.setItem("agente", JSON.stringify(nuevoTicket));
    });
  };
  return (
    <TicketContext.Provider
      value={{
        ticket,
        error,
        generarTicket,
        setTicket
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};
