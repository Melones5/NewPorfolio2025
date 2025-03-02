import React from 'react'
import EmailIcon from '../../icons/EmailIcon/EmailIcon'
import PhoneIcon from '../../icons/PhoneIcon/PhoneIcon'
import GoogleIcon from '../../icons/GoogleIcon/GoogleIcon'
import LinkedinIcon from '../../icons/LinkedinIcon/LinkedinIcon'
import GithubIcon from '../../icons/GithubIcon/GithubIcon'


const Presentation = () => {
  return (
    <div className='w-full'>
      <div className='flex items-center justify-center text-center'>
        <div>
          <h1 className='font-quicksand text-3xl lg:text-4xl dark:text-black underline decoration-primary-mousse underline-offset-8 uppercase'>Alexis Joel <strong>Santos</strong></h1>
          <p className='text-sm font-poppins text-neutralText dark:text-darkText pt-4'>Analista de sistemas | Técnico en Administración | Estudiante de Licenciatura en Administración de Empresas</p>
          <div className='flex-row xl:flex gap-1 pt-4 font-poppins'>
            <div className='flex items-center'>
              <EmailIcon/>
              <p className='text-xs text-neutralText dark:text-darkText pl-1'>alexissantos1496@gmail.com </p>
            </div>
            <div className='flex items-center'>
              <PhoneIcon />
              <p className='text-xs text-neutralText dark:text-darkText pl-1'> (+54) 3442-570829 </p>
            </div>
            <div className='flex items-center'>
              <GoogleIcon />
              <p className='text-xs text-neutralText dark:text-darkText pl-1'>Concepción del Uruguay, Entre Ríos, Argentina </p>
            </div>
            <div>              
              <a className='text-xs text-neutralText dark:text-darkText flex items-center' href="https://www.linkedin.com/in/alexis-joel-santos" target='blank'>
                <LinkedinIcon /> 
                <p className='text-xs text-neutralText dark:text-darkText pl-1'>https://www.linkedin.com/in/alexis-joel-santos</p>
              </a>
            </div>
            <div>              
              <a className='text-xs text-neutralText dark:text-darkText flex items-center' href="https://github.com/Melones5" target='blank'>
                <GithubIcon /> 
                <p className='text-xs text-neutralText dark:text-darkText pl-1'>https://github.com/Melones5</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Presentation