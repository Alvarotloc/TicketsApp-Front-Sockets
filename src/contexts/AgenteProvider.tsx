import { createContext, FC } from "react";
import type { AgenteProviderProps, IAgente, IChildren } from "../interfaces";
import { useState } from "react";

export const AgenteContext = createContext({} as AgenteProviderProps);

export const AgenteProvider: FC<IChildren> = ({ children }) => {
  const [agente, setAgente] = useState<IAgente>({} as IAgente);
  return (
    <AgenteContext.Provider
      value={{
        agente,
        setAgente,
      }}
    >
      {children}
    </AgenteContext.Provider>
  );
};
