import './App.css';
import React , {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from "./components/Projects";
import Resume from './components/Resume'
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  const [contactSelected, setContactSelected] = useState(false);
  const [projectsSelected, setProjectsSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  
  const divNav = () => {
    return (
      <div className="main">
        <Nav 
                  projectsSelected={projectsSelected}
                  setProjectsSelected={setProjectsSelected}
                  resumeSelected={resumeSelected}
                  setResumeSelected={setResumeSelected}
                  contactSelected={contactSelected}
                  setContactSelected={setContactSelected} />
      </div>
    )
  }  
          if (contactSelected) {
            return (
              <div>
                {divNav()}
                <main>
                  <ContactForm/>              
                </main>
                  <Footer/>
              </div>
            )
          } else if (projectsSelected) {
            return (
              <div>
                {divNav()}
                <main >
                  <div className="rootCard">
                      <Projects/> 
                  </div>
                </main>                  
              </div>
            )
          } else if (resumeSelected) {
            return (
              <div>
                {divNav()}
                <main>
                  <Resume/>              
                </main>                 
              </div>
            )
          } else {
            return (
              <div>
                {divNav()}
                <main>
                  <About/>              
                </main>
                  <Footer/>
              </div>
            )
          }
}

export default App;
