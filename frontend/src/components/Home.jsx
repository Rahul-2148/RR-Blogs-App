import React from 'react'
import Hero from '../Home/Hero'
import Trending from '../Home/Trending'
import Devotional from '../Home/Devotional'
import PopularCreators from '../Home/PopularCreators'
import Entertainment from '../Home/Entertainment'
import Sports from '../Home/Sports'
import Coding from '../Home/Coding'
import Business from '../Home/Business'

function Home() {
  return (
    <div>
      <Hero />
      <Trending />
      <Devotional />
      <Coding />
      <Entertainment />
      <Sports />
      <Business />
      <PopularCreators />
      
     
    </div>
  )
}

export default Home;