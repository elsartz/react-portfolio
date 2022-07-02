import './App.css';
import React , {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from "./components/Projects";
import ContactForm from './components/Contact';

function App() {
  const  [categories] = useState([
    { name: 'About', description: 'a few words about me' },
    { name: 'Portfolio', description: 'My projects so far...' },
    { name: 'Contact', description: '... to keep in touch' },
    { name: 'Resume', description: 'my bio in general' }
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected} />
      <main>
         {!contactSelected ? (
                <>
                  {/* <Gallery currentCategory={currentCategory}></Gallery> */}
                  {/* <Projects />
                  <About></About> */}
                </>
              ) : (
                  <ContactForm></ContactForm>
            )}      
      </main>
    </div>
  );
}

export default App;
