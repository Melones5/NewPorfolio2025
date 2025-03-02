import React from 'react'

const About = () => {
  return (
    <div className='w-full pt-8 text-justify'>
      <h2 className='text-lg font-quicksand font-bold text-primary-mousse'>👋 Sobre mí</h2>
      <p className='pt-2 text-sm font-poppins text-neutralText dark:text-darkText'>
        Mi nombre es <span className='font-bold'>Alexis</span>.</p>
      <p className='pt-2 text-sm font-poppins text-neutralText dark:text-darkText'>Soy graduado de las carreras Analista de Sistemas y Técnico en Administración, en la Universidad Autónoma de Entre Rios (UADER).
      <br />
        Me encuentro en búsqueda de mi primer experiencia laboral que me permita poner en práctica mis conocimientos y habilidades,
        así como seguir aprendiendo y creciendo profesionalmente. </p>
      <p className='pt-2 text-sm font-poppins text-neutralText dark:text-darkText'>Mi objetivo es seguir capacitándome y adquiriendo conocimientos ya sea en el sector
        <span className='font-bold'> IT</span> o en el <span className='font-bold'>administrativo.</span>
      </p>
    </div>
  )
}

export default About