import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import document from './img/document.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-100 py-6 sm:py-12">
      <div class="  sm:mx-auto sm:rounded-lg my-7 w-1152">
        <header class="flex justify-between  font-nunito">
          <div className='flex items-center gap-8'>
            <strong class="text-lg text-violet-blue">Filtrar por:</strong>
            <p>Estado</p>
            <p>Fecha</p>
            <p>Ver todo</p>
          </div>
          <input className="w-428 h-7 bg-gray-search rounded-md text-sm px-4" type="search" placeholder='Buscar'/>
        </header>
        <div class=" bg-white shadow-container ring-1 ring-gray-900/5 sm:mx-auto rounded-2xl my-7 w-1152 pb-10">
          <div class="rounded-2xl overflow-hidden">
            <table class="min-w-full divide-y">
              <thead class="bg-violet-blue">
                <tr className='text-base font-medium font-nunito text-white'>
                  <th scope="col" class="px-4 py-3">ID</th>
                  <th scope="col" class="px-4 py-3">Servicio</th>
                  <th scope="col" class="px-4 py-3">Cliente</th>
                  <th scope="col" class="px-4 py-3">Fecha</th>
                  <th scope="col" class="px-4 py-3">Reserva</th>
                  <th scope="col" class="px-4 py-3">Hora</th>
                  <th scope="col" class="px-4 py-3">Ingreso</th>
                  <th scope="col" class="px-4 py-3">Estado</th>
                  <th scope="col" class="px-4 py-3">Factura</th>
                </tr>
              </thead>
              <tbody class="">
                <tr className='h-14 border-t items-center text-sm'>
                  <td class="px-4 py-3 ">001</td>
                  <td class="px-4 py-3 ">Consulta dermatológica</td>
                  <td class="px-4 py-3 ">Luis Alfonso Gutierrez</td>
                  <td class="px-4 py-3 ">DD/MM/AA</td>
                  <td class="px-4 py-3 ">DD/MM/AA</td>
                  <td class="px-4 py-3 ">HH:MM</td>
                  <td class="px-4 py-3 ">S/.42.00</td>
                  <td class="px-4 py-3 ">
                    <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-violet-blue bg-gray-100 border-gray-300 rounded checked:bg-violet-blue focus:ring-violet-blue"/>
                    <label for="checked-checkbox" class="ms-2 text-sm font-medium">Completado</label>
                  </td>
                  <td class="flex justify-center px-4 py-3"><img src={document} alt="" /></td>
                </tr>
                <tr className='h-14 border-t items-center text-sm'>
                  <td class="px-4 py-3 ">001</td>
                  <td class="px-4 py-3 ">Consulta dermatológica</td>
                  <td class="px-4 py-3 ">Luis Alfonso Gutierrez</td>
                  <td class="px-4 py-3 ">DD/MM/AA</td>
                  <td class="px-4 py-3 ">DD/MM/AA</td>
                  <td class="px-4 py-3 ">HH:MM</td>
                  <td class="px-4 py-3 ">S/.42.00</td>
                  <td class="px-4 py-3 ">
                    <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-violet-blue bg-gray-100 border-gray-300 rounded checked:bg-violet-blue focus:ring-violet-blue"/>
                    <label for="checked-checkbox" class="ms-2 text-sm font-medium">Completado</label>
                  </td>
                  <td class="flex justify-center px-4 py-3"><img src={document} alt="" /></td>
                </tr>
                <tr className='h-14 border-t items-center text-sm'>
                  <td class="px-4 py-3 ">001</td>
                  <td class="px-4 py-3 ">Consulta dermatológica</td>
                  <td class="px-4 py-3 ">Luis Alfonso Gutierrez</td>
                  <td class="px-4 py-3 ">DD/MM/AA</td>
                  <td class="px-4 py-3 ">DD/MM/AA</td>
                  <td class="px-4 py-3 ">HH:MM</td>
                  <td class="px-4 py-3 ">S/.42.00</td>
                  <td class="px-4 py-3 ">
                    <input id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-violet-blue bg-gray-100 border-gray-300 rounded checked:bg-violet-blue focus:ring-violet-blue"/>
                    <label for="checked-checkbox" class="ms-2 text-sm font-medium">Reservado</label>
                  </td>
                  <td class="flex justify-center px-4 py-3"><img src={document} alt="" /></td>
                </tr>
                <tr className='h-14 border-t items-center text-sm'>
                  <td class="px-4 py-3 ">001</td>
                  <td class="px-4 py-3 ">Consulta dermatológica</td>
                  <td class="px-4 py-3 ">Luis Alfonso Gutierrez</td>
                  <td class="px-4 py-3 ">DD/MM/AA</td>
                  <td class="px-4 py-3 ">DD/MM/AA</td>
                  <td class="px-4 py-3 ">HH:MM</td>
                  <td class="px-4 py-3 ">S/.42.00</td>
                  <td class="px-4 py-3 ">
                    <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-violet-blue bg-gray-100 border-gray-300 rounded checked:bg-violet-blue focus:ring-violet-blue"/>
                    <label for="checked-checkbox" class="ms-2 text-sm font-medium">Completado</label>
                  </td>
                  <td class="flex justify-center px-4 py-3"><img src={document} alt="" /></td>
                </tr>
                <tr className='h-14 border-t items-center text-sm'>
                  <td class="px-4 py-3 ">001</td>
                  <td class="px-4 py-3 ">Consulta dermatológica</td>
                  <td class="px-4 py-3 ">Luis Alfonso Gutierrez</td>
                  <td class="px-4 py-3 ">DD/MM/AA</td>
                  <td class="px-4 py-3 ">DD/MM/AA</td>
                  <td class="px-4 py-3 ">HH:MM</td>
                  <td class="px-4 py-3 ">S/.42.00</td>
                  <td class="px-4 py-3 ">
                    <input id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-violet-blue bg-gray-100 border-gray-300 rounded checked:bg-violet-blue focus:ring-violet-blue"/>
                    <label for="checked-checkbox" class="ms-2 text-sm font-medium">Reservado</label>
                  </td>
                  <td class="flex justify-center px-4 py-3"><img src={document} alt="" /></td>
                </tr>
                <tr className='h-14 border-t items-center text-sm'>
                  <td class="px-4 py-3 ">001</td>
                  <td class="px-4 py-3 ">Consulta dermatológica</td>
                  <td class="px-4 py-3 ">Luis Alfonso Gutierrez</td>
                  <td class="px-4 py-3 ">DD/MM/AA</td>
                  <td class="px-4 py-3 ">DD/MM/AA</td>
                  <td class="px-4 py-3 ">HH:MM</td>
                  <td class="px-4 py-3 ">S/.42.00</td>
                  <td class="px-4 py-3 ">
                    <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-violet-blue bg-gray-100 border-gray-300 rounded checked:bg-violet-blue focus:ring-violet-blue"/>
                    <label for="checked-checkbox" class="ms-2 text-sm font-medium">Completado</label>
                  </td>
                  <td class="flex justify-center px-4 py-3"><img src={document} alt="" /></td>
                </tr>
                <tr className='h-14 border-t items-center text-sm'>
                  <td class="px-4 py-3 ">001</td>
                  <td class="px-4 py-3 ">Consulta dermatológica</td>
                  <td class="px-4 py-3 ">Luis Alfonso Gutierrez</td>
                  <td class="px-4 py-3 ">DD/MM/AA</td>
                  <td class="px-4 py-3 ">DD/MM/AA</td>
                  <td class="px-4 py-3 ">HH:MM</td>
                  <td class="px-4 py-3 ">S/.42.00</td>
                  <td class="px-4 py-3 ">
                    <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-violet-blue bg-gray-100 border-gray-300 rounded checked:bg-violet-blue focus:ring-violet-blue"/>
                    <label for="checked-checkbox" class="ms-2 text-sm font-medium">Completado</label>
                  </td>
                  <td class="flex justify-center px-4 py-3"><img src={document} alt="" /></td>
                </tr>
                <tr className='h-14 border-t items-center text-sm'>
                  <td class="px-4 py-3 ">001</td>
                  <td class="px-4 py-3 ">Consulta dermatológica</td>
                  <td class="px-4 py-3 ">Luis Alfonso Gutierrez</td>
                  <td class="px-4 py-3 ">DD/MM/AA</td>
                  <td class="px-4 py-3 ">DD/MM/AA</td>
                  <td class="px-4 py-3 ">HH:MM</td>
                  <td class="px-4 py-3 ">S/.42.00</td>
                  <td class="px-4 py-3 ">
                    <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-violet-blue bg-gray-100 border-gray-300 rounded checked:bg-violet-blue focus:ring-violet-blue"/>
                    <label for="checked-checkbox" class="ms-2 text-sm font-medium">Completado</label>
                  </td>
                  <td class="flex justify-center px-4 py-3"><img src={document} alt="" /></td>
                </tr>
                <tr className='h-14 border-t items-center text-sm'>
                  <td class="px-4 py-3 ">001</td>
                  <td class="px-4 py-3 ">Consulta dermatológica</td>
                  <td class="px-4 py-3 ">Luis Alfonso Gutierrez</td>
                  <td class="px-4 py-3 ">DD/MM/AA</td>
                  <td class="px-4 py-3 ">DD/MM/AA</td>
                  <td class="px-4 py-3 ">HH:MM</td>
                  <td class="px-4 py-3 ">S/.42.00</td>
                  <td class="px-4 py-3 ">
                    <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-violet-blue bg-gray-100 border-gray-300 rounded checked:bg-violet-blue focus:ring-violet-blue"/>
                    <label for="checked-checkbox" class="ms-2 text-sm font-medium">Completado</label>
                  </td>
                  <td class="flex justify-center px-4 py-3"><img src={document} alt="" /></td>
                </tr>
              </tbody>
            </table>
        </div>

        </div>
        <footer class="">
          <div class="font-nunito text-sm">
            <div className='inline-flex items-start gap-12'>
              <p>Servicios reservados filtrados: 8</p>
              <p>Servicios completados filtrados: 4</p>
              <p>Servicios cancelados filtrados: 8</p>
              <p>Ingresos filtrados: S/ 521.00</p>
            </div>
            <div className='inline-flex items-start gap-14'>
              <p>Servicios reservados totales: 8</p>
              <p>Servicios completados totales: 4</p>
              <p>Servicios cancelados totales: 1</p>
              <p>Ingresos filtrados: S/ 1280.00</p>
            </div>
            <div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
