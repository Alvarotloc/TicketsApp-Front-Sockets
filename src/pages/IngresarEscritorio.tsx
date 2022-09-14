import { FC, useState } from "react";
import { Sidebar } from "../components";

export const IngresarEscritorio: FC = (): JSX.Element => {
  const [visible, setVisible] = useState(true);
  return (
    <div className="flex relative">
      <Sidebar setVisible={setVisible} visible={visible} />
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
                  viewBox="0 0 24 24"
                  className="w-5 h-5 mr-2 stroke-current stroke-2 fill-transparent"
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
