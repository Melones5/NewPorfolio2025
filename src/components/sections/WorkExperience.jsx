import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'

const WorkExperience = () => {
  return (
    <div className='pt-8 text-justify'>
      <h2 className='text-lg font-quicksand font-bold text-primary-mousse'>👷‍♂️ Experiencia Laboral</h2>
      {/* <div className='flex flex-col space-y-1.5 pt-2'> */}

      {/* FREELANCER */}
      <div className='flex items-center justify-between gap-x-2 pt-2'>
        <h3 className='text-base inline-flex items-center justify-center font-lato font-semibold leading-none dark:text-black'>Freelancer</h3>
        <div className='text-xs lg:text-base tabular-nums font-poppins text-neutralText dark:text-darkText italic'>
          Oct 2024 - Presente
        </div>
      </div>
      <div className='flex items-center justify-between gap-x-2 pt-2'>
        <div className='text-xs lg:text-sm tabular-nums font-poppins text-neutralText dark:text-darkText italic'>
          Concepción del Uruguay, Entre Ríos, Argentina
        </div>
      </div>
      <div className='flex items-center justify-between gap-x-2 pt-2'>
        <h6 className='text-sm tabular-nums font-poppins pt-2 dark:text-black'>Desarrollador Frontend Independiente</h6>
      </div>
      <div>
        <div className='pt-2'>
          <ul className='list-disc pl-4 font-poppins text-neutralText dark:text-darkText text-sm marker:text-primary-mousse'>
            <li>Desarrollo de landing pages y sistemas simples de gestión de clientes utilizando React, Vite y Tailwind CSS.</li>
            <li>Integración con Google Sheets como fuente de datos para almacenamiento y gestión de información.</li>
            <li>Optimización de interfaces para mejorar la experiencia de usuario (UI/UX).</li>
            <li>Trabajo con clientes para definir requerimientos y entregar soluciones personalizadas.</li>
          </ul>
        </div>
      </div>

      {/* RED NUBE */}
      <div className='flex flex-col space-y-1.5 pt-8'>
        <div className='flex items-center justify-between gap-x-2 pt-2'>
          <h3 className='text-base inline-flex items-center justify-center font-lato font-semibold leading-none dark:text-black'>Red Nube</h3>
          <div className='text-xs lg:text-base tabular-nums font-poppins text-neutralText dark:text-darkText italic'>
            Jul 2023 - Oct 2023
          </div>
        </div>
        <div className='flex items-center justify-between gap-x-2 pt-2'>
          <div className='text-xs lg:text-sm tabular-nums font-poppins text-neutralText dark:text-darkText italic'>
            Concepción del Uruguay, Entre Ríos, Argentina
          </div>
        </div>
        <div className='flex items-center justify-between gap-x-2 pt-2'>
          <h6 className='text-sm tabular-nums font-poppins pt-2 dark:text-black'>Pasantía en el Área de Producción, Municipalidad de Concepción del Uruguay</h6>
        </div>
        <div className='py-5 flex justify-center items-center'>
          <a href='https://red-nube.netlify.app/' target='_blank' rel="noreferrer" className='inline-flex items-center rounded-md px-2 py-1 text-sm font-bold text-neutralText bg-gray-200 font-quicksand hover:bg-primary-mousse hover:text-white hover:font-bold w-auto'>Red nube</a>
        </div>
        <div>
          <div className='pt-2'>
            <ul className='list-disc pl-4 font-poppins text-neutralText dark:text-darkText text-sm marker:text-primary-mousse'>
              <li>Colaboración en el Área de Producción - Municipalidad de Concepción del Uruguay.</li>
              <li>Recolección de información sobre proyectos para el desarrollo de negocios locales.</li>
              <li>Trabajo en equipo para gestionar novedades del sector productivo.</li>
              <li>Desarrollo de página web para centralizar y facilitar el acceso a la información para la comunidad.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* RENTAL STORE */}
      <div className='flex flex-col space-y-1.5 pt-8'>
        <div className='flex items-center justify-between gap-x-2 pt-2'>
          <h3 className='text-base inline-flex items-center justify-center font-lato font-semibold leading-none dark:text-black'>Rental Store</h3>
          <div className='text-xs lg:text-base tabular-nums font-poppins text-neutralText dark:text-darkText italic'>
            Ago 2022 - Feb 2023
          </div>
        </div>
        <div className='flex items-center justify-between gap-x-2 pt-2'>
          <div className='text-xs lg:text-sm tabular-nums font-poppins text-neutralText dark:text-darkText italic'>
            Concepción del Uruguay, Entre Ríos, Argentina
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between gap-x-2 pt-2'>
        <h6 className='text-sm tabular-nums font-poppins pt-2 dark:text-black'>Proyecto Final - Taller de Integración - UADER FCYT</h6>

      </div>
      <div className='py-5 flex justify-center items-center'>
        <a href='https://github.com/Melones5/taller-de-integracion' target='_blank' rel="noreferrer" className='inline-flex items-center rounded-md px-2 py-1 text-sm font-bold text-neutralText bg-gray-200 font-quicksand hover:bg-primary-mousse hover:text-white hover:font-bold w-auto'> https://github.com/Melones5/taller-de-integracion</a>
      </div>
      <div>
        <div>
          <div className='pt-2'>
            <ul className='list-disc pl-4 font-poppins text-neutralText dark:text-darkText text-sm marker:text-primary-mousse'>
              <li>Desarrollo de tienda online para alquiler de productos.</li>
              <li>Alquiler de artículos para vacaciones, deportes, camping, reparación del hogar, entre otros.</li>
              <li>Tecnologías utilizadas:
                <ul className='list-disc pl-4 font-poppins text-neutralText dark:text-darkText text-sm marker:text-primary-mousse'>
                  <li>Back-end: Node.js (Express.js, Node-cron, Nodemailer).</li>
                  <li>Front-end: React, Bootstrap, Ant Design, PrimeReact.</li>
                  <li>Base de datos: PostgreSQL (relacional).</li>
                  <li>Autenticación: Firebase.</li>
                  <li>Pasarela de pago: MercadoPago.</li>
                </ul>
              </li>              
            </ul>
          </div>
        </div>       
      </div>
    </div>
  )
}

export default WorkExperience