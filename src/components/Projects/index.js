import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../../src/styles.css' 

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
        id: 'Movies & Shows',
        description: 'Search for movies & TV shows',
        tech: [
          'Node.js',
          'Rest API Http request protocol',
          'HTML 5',
          'CCS',
          'jQuery',
          'Bulma',
          'FontAwesomeIcon'
        ],
        github: 'https://github.com/elsartz/movies-tv-shows',
        liveUrl: 'https://sophoanmeas.github.io/movies-tv-shows/index.html'
      },
      {
        id: 'Weather Dashboard',
        description: 'Weather forecast for several cities',
        tech: [
          'VS Code',
          'Javascript',
          'OpenWeather API',
          'CSS3',
          'Google fonts',
          'moment.js'
        ],
        github: 'https://github.com/elsartz/Weather-dashboard',
        liveUrl: 'https://elsartz.github.io/Weather-dashboard/'
      },
      {
        id: 'Tech Blog',
        description: 'Another social chat room',
        tech: [
          'Node.js',
          'ExpressJS',
          'MySQL2',
          'Sequelize',
          'Handlebars',
          'BCrypt'
        ],
        github: 'https://github.com/elsartz/tech-blog',
        liveUrl: 'https://infinite-cove-67044.herokuapp.com/'
      },
      {
        id: 'Day Scheduler',
        description: 'All-day scheduler',
        tech: [
          'Node',
          'VS',
          'HTML5',
          'CSS3',
          'bootstrap'
        ],
        github: 'https://github.com/elsartz/What-s-today-s-plan-',
        liveUrl: 'https://elsartz.github.io/What-s-today-s-plan-/'
      },
      {
        id: 'Book & Beans',
        description: 'A social application which joins book readers with their favorite coffee shop.',
        tech: [
          'Javascript',
          'Handlebars',
          'Express-session',
          'nodemon',
          'dotenv',
          'Heroku'
        ],
        github: 'https://github.com/elsartz/Book-Beans',
        liveUrl: 'https://book-and-beans.herokuapp.com/'
      },
      {
        id: "Watz Cook'n",
        description: 'Search engine for nice recipes',
        tech: [
          'React',
          'Concurrently',
          'Herokuapp',
          'Apollo server',
          'GraphQL',
          'Material-ui',
          'Bootstrap',
          'JWT-decode',
          'Splidejs',
          'Emotion'          
        ],
        github: 'https://github.com/elsartz/watz-cook-n',
        liveUrl: 'https://watz-cookin.herokuapp.com/'
      },
      {
        id: 'eCommerce',
        description: 'A fully working back-end database system for a retail site.',
        tech: [
          'Javascript 100%',
          'ExpressJS',
          'MySQL2',
          'Sequelize - ORM',
          'Insomnia',
          'YouTube'
        ],
        github: 'https://github.com/elsartz/ecommerce-back-end',
        liveUrl: 'https://www.youtube.com/watch?v=KYfFfXbpu_4&ab_channel=VardisSartzetakis'
      }
    ]

let chosenProject = {};
let technologies = [];

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Projects() {
  const [showModal, setShowModal] = useState(false);

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
    <>
    <React.Fragment>
      <div className="flex-row space-between">         
          <button className="button" onClick={() => {
            chosenProject = work[0];
            technologies = work[0].tech; 
            setShowModal(true)}}
            >Movies & Shows
            </button>         
          <button className="button" onClick={() => {
            chosenProject = work[1]; 
            technologies = work[1].tech;
            setShowModal(true)}}
            >Weather Dashboard
            </button>         
          <button className="button" onClick={() => {
            chosenProject = work[2]; 
            technologies = work[2].tech;
            setShowModal(true)}}
            >techBlog
            </button>         
          <button className="button" onClick={() => {
            chosenProject = work[3]; 
            technologies = work[3].tech;
            setShowModal(true)}}
            >Day Scheduler
            </button>         
          <button className="button" onClick={() => {
            chosenProject = work[4]; 
            technologies = work[4].tech;
            setShowModal(true)}}
            >Books And Beans
            </button>         
          <button className="button" onClick={() => {
            chosenProject = work[5];
            technologies = work[5].tech; 
            setShowModal(true)}}
            >Watz Cook'n
            </button>         
          <button className="button" onClick={() => {
            chosenProject = work[6]; 
            technologies = work[6].tech;
            setShowModal(true)}}
            >eCommerce
            </button>
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
    <Modal
        size='lg'
        show={showModal}
        onHide={() => {console.log(chosenProject); setShowModal(false)}}
        >
        
          <Modal.Header>
            <Modal.Title className="mx-2">{chosenProject.id}</Modal.Title>
            
            <button className="btn-close" onClick={() => setShowModal(false)}>←</button>
          </Modal.Header>
    
          <Modal.Body>
            <p>{chosenProject.description}</p>
            <h5>Technologies</h5>
            <ul>
              {technologies.map(tech =>{
                return (
                  <li>{tech}</li>
                )
              })}
            </ul>
          </Modal.Body>
    
          <Modal.Footer>
            <Button variant="secondary" onClick={() => {console.log(chosenProject);
              document.location.href=`${chosenProject.github}`; setShowModal(false)}}
              >
                GitHub
            </Button>
            <Button className="mx-1" variant="secondary" onClick={() => {
              document.location.href=`${chosenProject.liveUrl}`; setShowModal(false)}}
              >            
                Live
            </Button>
          </Modal.Footer>
        </Modal>
    </>
  )
}

export default Projects;
