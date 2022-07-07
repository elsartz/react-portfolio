import React from 'react';

function Nav(props) {
  const { 
          contactSelected,
          setContactSelected,
          projectsSelected,
          setProjectsSelected,
          resumeSelected,
          setResumeSelected
        } = props;


  return (
    <header data-testid="header" className="flex-row space-between px-1">
      <h2>
        <a data-testid="link" href="/">
          VardiS
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
             <a data-testid="about" href="#about" onClick={() => {
                setContactSelected(false)
                setResumeSelected(false)
                setProjectsSelected(false)
            }}>
              About me
            </a>
          </li>
         
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <a href="#contact" onClick={() => {
                setContactSelected(true)
                setResumeSelected(false)
                setProjectsSelected(false)
                }}>
              Contact
            </a>
          </li>
        
          <li className={`mx-2 ${projectsSelected && 'navActive'}`}>
             <a href="#Portfolio" onClick={() => {
                setContactSelected(false)
                setProjectsSelected(true)
                setResumeSelected(false)}}>
              Portfolio
            </a>
          </li>
          <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
             <a data-testid="about" href="#Resume" onClick={() => {
                setContactSelected(false)
                setProjectsSelected(false)
                setResumeSelected(true)}}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;