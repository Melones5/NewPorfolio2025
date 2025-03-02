import React from 'react'

const Idioms = () => {
  return (
    <div>
      <div className='pt-8'>
        <h2 className='text-lg font-quicksand font-bold text-primary-mousse'>🪐 Idiomas</h2>
        <div className='pt-2'>
          <ul className='list-disc pl-4 font-lato text-neutralText dark:text-darkText marker:text-primary-mousse'>
            <li>Español: nativo.</li>
            <li>Inglés: Upper intermediate (B2) Oxford Institute.</li>
            <li>Portugués: Básico (A1).</li>
          </ul>
        </div>
      </div>
      <h2 className='text-lg font-quicksand font-bold text-primary-mousse pt-8'>🤹‍♀️ Habilidades</h2>
      <div className='pt-2'>
        <ul className='list-disc pl-4 font-lato text-neutralText dark:text-darkText marker:text-primary-mousse'>
          <li>Comunicación oral y escrita</li>
          <li>Trabajo en equipo</li>
          <li>Proactividad</li>
          <li>Iniciativa</li>
          <li>Conocimiento informático</li>
          <li>Flexibilidad</li>
          <li>Creatividad e ingenio</li>
        </ul>
      </div>
      <h2 className='text-lg font-quicksand font-bold text-primary-mousse pt-8'>💡 Intereses</h2>
      <div className='pt-2'>
        <ul className='list-disc pl-4 font-lato text-neutralText dark:text-darkText marker:text-primary-mousse'>
          <li>Administración</li>
          <li>Análisis de datos</li>
          <li>Tecnología</li>
          <li>Marketing</li>
        </ul>
      </div>
    </div>
  )
}

export default Idioms