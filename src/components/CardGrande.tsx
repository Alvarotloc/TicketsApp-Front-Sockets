import { FC } from 'react';
import { ICards } from '../interfaces/index';
export const CardGrande:FC<ICards> = ({nombreAgente,numeroEscritorio,numeroTicket}):JSX.Element => {
  return (
    <>
    <article className='border'>
        <h2 className='pl-3 pt-5 pb-8 w-72 text-3xl font-semibold'>Ticket No. {numeroTicket}</h2>
        <div className='border-t flex justify-between py-2 px-4'>
            <div className='w-1/2 flex justify-center border-r'>
            <p className='text-xs border p-1 rounded text-orange-600 bg-orange-100 border-orange-600'>{nombreAgente}</p>
            </div>
            <div className='w-1/2 flex justify-center'>
            <p className='text-xs border p-1 rounded text-pink-600 bg-pink-100 border-pink-600'>Escritorio {numeroEscritorio}</p>
            </div>
        </div>
    </article>
        <hr className='mt-3 mb-8'/>
    </>
  )
}
