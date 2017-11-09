import React from 'react'

import styles from './styles/about.css'

const About = () => {
  return (
    <div className="aboutBody">
      <h1 className="aboutHeader">Friends with Shoes</h1>
      <p className="aboutParagraph">Friends with Shoes is a marketplace for people who have feet of different sizes. For such persons, shoe shopping can be a hassle because they typically have to buy two pairs of the same shoe.</p>
      <p className="aboutParagraph">For instance, someone with a left foot of size 10 and a right foot of size 12 must buy two pairs of shoes - one of size 10 and another of size 12 - leaving him or her with an extra right shoe (size 12) and left shoe (size 10).</p>
      <p className="aboutParagraphLast">Here at Friends with Shoes, the reciprocally lopsided can exchange these extra shoes.</p>
      <img className="aboutImage" src="../../public/chucks-ring.png" alt="ring of sneakers"/>
    </div>
  )
}

export default About
