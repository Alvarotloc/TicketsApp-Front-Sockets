import { createContext, FC } from "react";
import type { IChildren, useSocketInterface } from "../interfaces";
import { useSocket } from "../hooks";

export const SocketContext = createContext({} as useSocketInterface);

export const SocketProvider: FC<IChildren> = ({ children }): JSX.Element => {
  const { online, socket } = useSocket("http://localhost:4000");
  return (
    <SocketContext.Provider
      value={{
        online,
        socket,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
