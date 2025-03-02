//importo las imágenes
import redNube from '../assets/rednube.png'
import RentalStore from '../assets/logoRental.png'
import BolosLocos from '../assets/boloslocos.png'
import Proffy from '../assets/proffy.png'
import SPA from '../assets/spa.png'
import Pesitos from '../assets/pesitos.png'
import Netflix from '../assets/netflix.jpg'
import Galicia from '../assets/galicia.jpg'
import Quinta from '../assets/quinta.jpg'
import Lynxar from '../assets/lynxar.png'
import Burbujitas from '../assets/burbujitas.png'

//Contruyo el objeto data y defino los datos
const data  = [
  { 
    id: 1,
    nombre: 'Burbujitas - Jardín Materno Infantil',
    descripcion: 'Landing Page "Burbujitas - Jardín Materno Infantil"',
    imagen: Burbujitas,
    link: 'https://www.linkedin.com/in/alexis-joel-santos',
    tecnologias: [
      'Vite',
      'React.js',
      'Tailwind CSS',      
    ]
  },
  { 
    id: 2,
    nombre: 'Lynxar',
    descripcion: 'Aplicación para la gestión de clientes "Lynxar"',
    imagen: Lynxar,
    link: 'https://www.linkedin.com/in/alexis-joel-santos',
    tecnologias: [
      'Vite',
      'React.js',
      'Tailwind CSS',
      'Sheets'          
    ]
  },
  { 
    id: 3,
    nombre: 'Informe Gerencial',
    descripcion: 'Trabajo integrador final aplicado a la Pyme "La Quinta Sabores Entrerrianos"',
    imagen: Quinta,
    link: 'https://github.com/Melones5/MC_laquinta',
    tecnologias: [
      'Looker Studio',
      'Sheets',
      'Docs',
      'Excel',          
    ]
  },
  { 
    id: 4,
    nombre: 'Proyecto de Inversión',
    descripcion: 'Proyecto de Inversión - La Quinta Sabores Entrerrianos',
    imagen: Quinta,
    link: 'https://github.com/Melones5/PFyE_laquinta',
    tecnologias: [
      'Sheets',
      'Docs',
      'Excel'      
    ]
  },
  { 
    id: 5,
    nombre: 'Banco Galicia - Sucursal Concordia',
    descripcion: 'Un análisis profundo para optimizar la producción',
    imagen: Galicia,
    link: 'https://github.com/Melones5/galicia_repository',
    tecnologias: [
      'Sheets',
      'Docs',
      'Canvas'      
    ]
  },
  { 
    id: 6,
    nombre: 'Netflix - Dashboard',
    descripcion: 'Análisis del dataset de Netflix (películas 1942 - 2021)',
    imagen: Netflix,
    link: 'https://github.com/Melones5/reporte_powerbi_netflix',
    tecnologias: [
      'Excel',
      'Power BI',
      'DAX',
      'Figma'
    ]
  },
  { 
    id: 7,
    nombre: 'Pesitos',
    descripcion: 'Plataforma que permite llevar un control de Ingresos / Gastos',
    imagen: Pesitos,
    link: 'https://github.com/Melones5/pesitos-app',
    tecnologias: [
      'React.js',
      'Vite',
      'Tailwind CSS',
      'Chartjs',
      'DayPicker'
    ]
  },
  { 
    id: 8,
    nombre: 'red nube',
    descripcion: 'Plataforma que permite a personas / Pymes conectarse con oportunidades',
    imagen: redNube,
    tecnologias: [
      'React.js',
      'Boostrap',
      'Axios',
      'React-router-dom',
      'Sheets',
    ]
  },
  {
    id: 9,
    nombre: 'Rental Store',
    descripcion: 'Tienda de alquiler que ofrece una variedad de productos',
    imagen: RentalStore,
    link: 'https://github.com/Melones5/taller-de-integracion',
    tecnologias: [
      'React.js',
      'Boostrap',
      'Axios',
      'Firebase',
      'Nodejs',
      'PostgreSql',
      'PrimeReact',
      'ExpressJS',
      'Mercadopago',
      'Nodemailer',
      'AntDesing'        
    ]
  },    
  {
    id: 10,
    nombre: 'Bolos Locos',
    descripcion: 'Proyecto que nace como complemento a un plan de negocio (Práctica profesional II - Tec. en Adminitración)',
    imagen: BolosLocos,
    link: 'https://github.com/Melones5/BolosLocosFinal',
    tecnologias: [
      'React.js',
      'React-router-dom',
      'Boostrap',        
    ]
  },    
  {
    id: 11,
    nombre: 'Proffy',
    descripcion: 'Aplicación de profesores Mobile',
    imagen: Proffy,
    link: 'https://github.com/Melones5/ProffyMobile',
    tecnologias: [
      'React.js',
      'React-native',
      'Axios',
      'Expo'             
    ]
  },    
  {
    id: 12,
    nombre: 'SPA',
    descripcion: 'SPA (single page aplication) con consumo de API REST en formato JSON',
    imagen: SPA,
    link: 'https://github.com/Melones5/FinalAvanzada',
    tecnologias: [
      'Vue.js',
      'Nodejs',
      'Materialize'               
    ]
  }, 
]

//exporto los datos
export default data;