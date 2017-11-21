import React from 'react'

import styles from './styles/about.css'

const About = () => {
  return (
    <div className="aboutBody">

      <p className="aboutParagraph aboutParagraphFirst">Friends with Shoes is a marketplace for people who have feet of different sizes. We know shoe shopping is a hassle for you because you always have to buy two pairs of the same shoe.</p>

      <p className="aboutParagraph">Say you have a size-10 left foot and a size-12 right foot, and you need some new running shoes.  You have to buy two pairs:  one in size 10 and another in size 12.</p>

      <p className="aboutParagraph">But this leaves you with two extra shoes -- the size-10 right and the size-12 left -- and it gets expensive after a while.  Plus, your precious closet space is being occupied by these unused shoes!</p>

      <p className="aboutParagraph aboutParagraphLast">At Friends with Shoes, find someone who is reciprocally lopsided -- the size-12 left to your size-12 right -- and find a home for your orphan shoes.</p>

      <img className="aboutImage" src="../../public/chucks-ring.png" alt="ring of sneakers"/>

    </div>
  )
}

export default About
