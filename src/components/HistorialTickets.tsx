import { FC } from 'react';
export const HistorialTickets:FC = ():JSX.Element => {
  return (
    <>
        <article>
            <h3 className='text-sm font-semibold'>Ticket No. 36</h3>
            <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-3 '>
                <p className='text-slate-400 text-sm'>En el escritorio: <span className='text-xs border p-1 px-3 rounded text-pink-600 bg-pink-100 border-pink-600'>2</span></p>
                <p className='text-slate-400 text-sm'>Agente: <span className='text-xs border p-1 rounded px-3 text-orange-600 bg-orange-100 border-orange-600'>Álvaro Suárez</span></p>
            </div>
            <hr className='my-5'/>
        </article>
    </>
  )
}
