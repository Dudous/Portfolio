import './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Historico } from './components/Historico'
import { Contact } from './components/Contact'
import { Projects } from './components/Projects'

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <Historico/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
