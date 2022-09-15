import { FC } from 'react';

export const CrearTicket: FC = (): JSX.Element => {
  return (
    <div className="h-screen bg-slate-100 p-5">
      <main className="bg-white h-full flex flex-col items-center">
        <h1 className="text-2xl font-semibold my-5 text-center">
          Presione el botón para un nuevo ticket
        </h1>
        <button className="bg-blue-500 hover:bg-blue-400 transition-colors cursor-pointer text-white rounded-3xl px-3 py-2 flex mb-10">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 mr-2 stroke-current stroke-2 fill-transparent"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          Nuevo Ticket
        </button>
        <div className="flex flex-col items-center">
          <p>Su número</p>
          <span className="text-4xl font-semibold text-green-500">55</span>
        </div>
      </main>
    </div>
  );
};
