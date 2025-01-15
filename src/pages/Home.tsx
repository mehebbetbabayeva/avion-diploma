import React from 'react'

import Introduction from '../components/Introduction/Introduction'
import Brandcards from '../components/Brandcards/Brandcards'
import Ceramiccards from '../components/Ceramiccards/Ceramiccards'
import Accordion from '../components/Accordion/Accordion'
import Popularcards from '../components/Popularcards/Popularcards'
import London from '../components/London/London'
import Benefit from '../components/Benefit/Benefit'

const Home = () => {
  return (
    <div>
        <Introduction/>
        <Brandcards/>
        <Ceramiccards/>
        <Popularcards/>
        <Accordion/>
        <Benefit/>
        <London/>
    </div>
  )
}

export default Home