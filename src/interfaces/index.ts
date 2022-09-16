import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export interface ISidebarProps {
    visible    : boolean;
    setVisible : Function;
}

export interface IChildren {
    children : JSX.Element | JSX.Element[]
}

export interface useSocketInterface {
    socket : Socket<DefaultEventsMap,DefaultEventsMap>;
    online : boolean;
}

export interface ITicket {
    id : string;
    number : number;
    escritorio : number;
    agente :string;
}

export interface TicketContectProps {
    generarTicket : (escritorio:number,nombre:string) => void
    ticket : ITicket;
    error : string
}