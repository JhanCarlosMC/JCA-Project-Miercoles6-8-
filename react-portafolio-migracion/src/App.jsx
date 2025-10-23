import './App.css'

import Navigation from './components/Navigation.jsx'
import AboutMe from './components/AboutMe.jsx'
import MyProjects from './components/MyProjects.jsx'


function App() {

  return (
    <>
      <Navigation />

      <main>
        <AboutMe />
        <MyProjects />
      </main>
    </>
  )
}

export default App
