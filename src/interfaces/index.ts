import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export interface ISidebarProps {
    visible    : boolean;
    setVisible : Function;
}

export interface IChildren {
    children : JSX.Element | JSX.Element[]
}

export interface IAgente {
    nombre : string;
    escritorio : number;
}

export interface useSocketInterface {
    socket : Socket<DefaultEventsMap,DefaultEventsMap>;
    online : boolean;
}

export interface ITicket {
    id : string;
    number : number;
    escritorio : number | null;
    agente :string | null;
}