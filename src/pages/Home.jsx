import React from 'react'
import Presentation from '../components/sections/Presentation'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import WorkExperience from '../components/sections/WorkExperience'
import Projects from '../components/sections/Projects'
import Education from '../components/sections/Education'
import Footer from '../components/sections/Footer'
import Idioms from '../components/sections/Idioms'
// import ButtonDarkMode from '../components/buttonDarkMode'

const Home = () => {
  return (
    <div className='max-w-[1280px] mx-auto'>
      <Presentation />
      <About />
      <Skills />
      <WorkExperience />
      <Projects />
      <Education />
      <Idioms />
      <Footer />
      {/* <ButtonDarkMode /> */}
    </div>
  )
}

export default Home