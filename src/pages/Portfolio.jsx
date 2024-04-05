import React from 'react'
import { Hero } from '../components/hero/Hero'
import { Resume } from '../components/Resume/Resume'
import { Example } from '../components/Services/Services'
import { Skills } from '../components/Skills/Skills'
import { Works } from '../components/Works/Works'

export const Portfolio = () => {
  return (
    <div className='porftolio'>
    <Hero/>
    <Example/>
    <Works/>
    <Resume/>
    <Skills/>
    </div>

  )
}
