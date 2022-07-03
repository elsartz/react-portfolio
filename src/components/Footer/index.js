import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function Footer() {

  return (
    <footer className="App">
      <FontAwesomeIcon icon={solid('user-secret')} />
       Copyright by <a href="http://github.com/elsartz">Vardis Sartzetakis </a> 2022
    {/* <FontAwesomeIcon icon={brands('twitter')} /> */}
    <FontAwesomeIcon icon={faThumbsUp} />
  </footer>
  )
}

export default Footer