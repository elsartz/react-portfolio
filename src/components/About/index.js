import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'

function About() {

  return (
    <section className="my-5" >
      <h1>A few words about me</h1>
      <div className="my-2" >
        <span><FontAwesomeIcon icon={solid('user-secret')} /></span>
        <p>
          Energetic outgoing professional Business Operations Manager and Administrator and Support Director of I.T. with many years of proven results.  Currently, a new graduate of the Full Stack Coding Boot Camp. Experienced UI developer trained in HTML5, CSS3 and Javascript, with additional knowledge of MySQL and Python.  Strong team builder, mentor, facilitator and motivator.   Superb communication skills and experience in private and public milieus.
        </p>
      </div>
    </section>
  )
}

export default About