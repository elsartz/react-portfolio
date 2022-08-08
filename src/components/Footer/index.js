import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function Footer() {

  return (
    <footer className="App">
      
      <p>2022 Copyright by Vardis Sartzetakis </p>  <span><h6>email:</h6><p>elsartz@gmail.com</p></span>

    <FontAwesomeIcon icon={faThumbsUp} />
    <a href="http://github.com/elsartz"> GitHub  </a> 
    <a href="https://www.linkedin.com/in/vardis-sartzetakis/">LinkedIn </a> 
    <a href="https://stackoverflow.com/users/16379388/elsartz">StackOverflow</a> 
  </footer>
  )
}

export default Footer