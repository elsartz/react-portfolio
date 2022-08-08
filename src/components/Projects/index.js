
import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import '../../../src/styles.css' 

import {Button, Modal} from 'react-bootstrap';
// import Modal from 'react-bootstrap/Modal';


const cards = [
    'Scheduler.png',
    './eCommerce.png',
    './booksAndBeans.png',
    './weatherDash.png',
    './techBlog.png',
    './website1.png',
    './WatzCookin.png' ]

const work = [
      {
        id: 'p1',
        description: 'Search for movies & TV shows',
        github: 'https://github.com/elsartz/movies-tv-shows',
        liveUrl: 'https://sophoanmeas.github.io/movies-tv-shows/index.html'
      },
      {
        id: 'p2',
        description: 'Weather forecast for several cities',
        github: 'https://github.com/elsartz/Weather-dashboard',
        liveUrl: 'https://elsartz.github.io/Weather-dashboard/'
      },
      {
        id: 'p3',
        description: 'Another social chat room',
        github: 'https://github.com/elsartz/tech-blog',
        liveUrl: 'https://infinite-cove-67044.herokuapp.com/'
      },
      {
        id: 'p4',
        description: 'All-day scheduler',
        github: 'https://github.com/elsartz/What-s-today-s-plan-',
        liveUrl: 'https://elsartz.github.io/What-s-today-s-plan-/'
      },
      {
        id: 'p5',
        description: 'A social application which joins book readers with their favorite coffee shop.',
        github: 'https://github.com/elsartz/Book-Beans',
        liveUrl: 'https://book-and-beans.herokuapp.com/'
      },
      {
        id: 'p6',
        description: 'Search engine for nice recipes',
        github: 'https://github.com/elsartz/watz-cook-n',
        liveUrl: 'https://watz-cookin.herokuapp.com/'
      },
      {
        id: 'p7',
        description: 'A fully working back-end database system for a retail site.',
        github: 'https://github.com/elsartz/ecommerce-back-end',
        liveUrl: 'https://www.youtube.com/watch?v=KYfFfXbpu_4&ab_channel=VardisSartzetakis'
      }
    ]

const p1 = work[0].id;
const p2 = work[1].id;
const p3 = work[2].id;
const p4 = work[3].id;
const p5 = work[4].id;
const p6 = work[5].id;
const p7 = work[6].id;

const handlePopup = (project) => {
 
function createModal(chosenProject) {
  return (
    <Modal.Dialog>
    <Modal.Header closeButton>
      <Modal.Title>{chosenProject.description}</Modal.Title>
    </Modal.Header>

    {/* <Modal.Body>
      <p>Modal body text goes here.</p>
    </Modal.Body> */}

    <Modal.Footer>
      <Button variant="secondary" onClick={() => {document.location.href=`${chosenProject.github}`}}>GitHub</Button>
      <Button variant="primary" onClick={() => {document.location.href=`${chosenProject.liveUrl}`}}>Live</Button>
    </Modal.Footer>
  </Modal.Dialog>
  )
}

switch (project) {
  case p1:
    createModal(work[0]);
    break;
  case p2:
    createModal(work[1])
    break;
  case p3:   
    createModal(work[2])
    break;
  case p4:   
    createModal(work[3])
    break;
  case p5:   
    createModal(work[4])
    break;
  case p6:   
    createModal(work[5])
    break;
  case p7:    
    createModal(work[6])
    break;
}

}


// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Projects() {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <React.Fragment>
      <div className="flex-row space-between">
          {/* <button className="button" onClick={() => {document.location.href='https://elsartz.github.io/movies-tv-shows/'}}>Movies & Shows</button> */}
          <button className="button" onClick={() => handlePopup(p1)}>Movies & Shows</button>
          {/* <button className="button" onClick={() => {document.location.href='https://book-and-beans.herokuapp.com/'}}>Books And Beans</button> */}
          <button className="button" onClick={() => handlePopup(p2)}>Weather Dashboard</button>
          {/* <button className="button" onClick={() => {document.location.href='https://www.youtube.com/watch?v=KYfFfXbpu_4&ab_channel=VardisSartzetakis'}}>eCommerce</button> */}
          <button className="button" onClick={() => handlePopup(p3)}>techBlog</button>
          {/* <button className="button" onClick={() => {document.location.href='https://elsartz.github.io/Weather-dashboard/'}}>Weather Dashboard</button> */}
          <button className="button" onClick={() => handlePopup(p4)}>Day Scheduler</button>
          {/* <button className="button" onClick={() => {document.location.href='https://infinite-cove-67044.herokuapp.com/'}}>techBlog</button> */}
          <button className="button" onClick={() => handlePopup(p5)}>Books And Beans</button>
          {/* <button className="button" onClick={() => {document.location.href='https://elsartz.github.io/What-s-today-s-plan-/'}}>Day Scheduler</button> */}
          <button className="button" onClick={() => handlePopup(p6)}>Watz Cook'n</button>
          {/* <button className="button" onClick={() => {document.location.href='https://watz-cookin.herokuapp.com/'}}>Watz Cook'n</button> */}
          <button className="button" onClick={() => handlePopup(p7)}>eCommerce</button>
      </div> 
      <div className="root">
        { props.map(({ x, y, rot, scale }, i) => (

          <animated.div key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
            
            {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
            <animated.div {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
            
          </animated.div>
          
        ))}
        </div>
    </React.Fragment>
  )
}

export default Projects;
