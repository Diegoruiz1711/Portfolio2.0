import { Route, Routes } from 'react-router-dom'
import styles from './App.module.css'
import AboutMe from './components/Navigation/AboutMe/AboutMe'
import Layout from './Layout/Layout'
import AboutMeModal from './components/modals/AboutMeModal/AboutMeModal'
import Skills from './components/Navigation/Skills/Skills'
import Education from './components/Navigation/Education/Education'
import Projects from './components/Navigation/Projects/Projects'
import StartModal from './components/modals/StartModal/StartModal'
import Contact from './components/Navigation/Contact/Contact'
import './i18n';
import Resume from './components/Navigation/CV/Resume'
import MenuMobile from './components/modals/MenuMobile/MenuMobile'
import WrongNumberModal from './components/modals/WrongNumberModal/WrongNumberModal'
import Modal from 'react-modal';


Modal.setAppElement('#root'); 

function App() {

  return (
    <div className={styles.container}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<AboutMe />} />
          <Route path='education' element={<Education />} />
          <Route path='skills' element={<Skills />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cv' element={<Resume/>}/>
        </Route>
      </Routes>
      <AboutMeModal/>
      <StartModal/>
      <MenuMobile/>
      <WrongNumberModal/>
    </div>
  )
}

export default App