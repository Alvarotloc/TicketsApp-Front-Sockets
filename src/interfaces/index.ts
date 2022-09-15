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