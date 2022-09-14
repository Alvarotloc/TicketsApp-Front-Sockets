import { FC, useState } from "react";
import { Link } from "react-router-dom";

export const IngresarEscritorio: FC = (): JSX.Element => {
  const [visible, setVisible] = useState(true);
  return (
    <div className="flex relative">
      <aside
        className={`${
          visible ? "absolute left-0" : "absolute -left-52"
        } ${"bg-slate-900 transition-all w-56 h-full md:static md:h-auto"}`}
      >
        <nav className="text-slate-200 relative h-full">
          <button
            type="button"
            className="absolute -right-5 top-10 bg-slate-900 md:hidden"
            onClick={() => setVisible(!visible)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
          <ul>
            <Link to="/">
              <li className="py-3 flex pl-4 items-center hover:bg-blue-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
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
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
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
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
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
      <div className="h-screen bg-slate-100 p-5 w-full">
        <main className="bg-white h-full pt-5 px-5">
          <h1 className="text-3xl font-semibold">Ingresar</h1>
          <p className="my-5 font-normal text-sm">
            Ingrese su nombre y número de escritorio
          </p>
          <hr />
          <form className="w-full flex justify-center mt-5">
            <fieldset className="w-3/4 flex flex-col space-y-5">
              <div className="flex w-full items-center">
                <label htmlFor="nombre">
                  <span className="text-orange-500">*</span> Nombre del agente:
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Ingrese su nombre"
                  className="border-2 pl-2 py-1 rounded-md ml-3 w-2/3"
                />
              </div>
              <div className="flex w-full items-center">
                <label htmlFor="escritorio">
                  <span className="text-orange-500">*</span> Escritorio:
                </label>
                <input
                  type="number"
                  id="escritorio"
                  name="escritorio"
                  className="border-2 pl-2 py-1 rounded-md ml-3 w-2/6"
                />
              </div>
              <button
                type="submit"
                className="flex bg-blue-500 hover:bg-blue-400 transition-colors cursor-pointer text-white w-fit px-3 py-1 rounded-3xl items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
                Ingresar
              </button>
            </fieldset>
          </form>
        </main>
      </div>
    </div>
  );
};
