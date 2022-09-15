import { FC } from "react";
import { Link } from "react-router-dom";

import type { ISidebarProps } from "../interfaces";
export const Sidebar: FC<ISidebarProps> = ({
  setVisible,
  visible,
}): JSX.Element => {
  return (
    <aside
      className={`${
        visible ? "absolute left-0" : "absolute -left-52"
      } ${"bg-slate-900 z-10 transition-all w-56 h-full md:static md:h-auto"}`}
    >
      <nav className="text-slate-200 relative h-full">
        <button
          type="button"
          className="absolute -right-5 top-10 bg-slate-900 md:hidden"
          onClick={() => setVisible(!visible)}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-10 h-10 stroke-current stroke-1 fill-transparent"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
        <ul>
          <Link to="/ingresar">
            <li className="py-3 flex pl-4 items-center md:hover:bg-blue-500 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 mr-2 stroke-current stroke-2 fill-transparent"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              Ingresar
            </li>
          </Link>
          <Link to="/cola">
            <li className="py-3 flex pl-4 items-center hover:bg-blue-500 transition-colors">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 mr-2 stroke-current stroke-2 fill-transparent"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                />
              </svg>
              Cola de Tickets
            </li>
          </Link>
          <Link to="/crear">
            <li className="py-3 flex pl-4 items-center hover:bg-blue-500 transition-colors">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 mr-2 stroke-current stroke-2 fill-transparent"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              Crear Tickets
            </li>
          </Link>
        </ul>
      </nav>
    </aside>
  );
};
