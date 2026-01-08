import React from 'react'
import MenuItem from './MenuItem'

function Link() {
  return (
   <>
   <MenuItem linktext="Home" linkurl="/" />
   <MenuItem linktext="blog" linkurl="/blog" />
   <MenuItem linktext="about" linkurl="/about" />
   <MenuItem linktext="contact" linkurl="/contact" />


   </>
  )
}

export default Link