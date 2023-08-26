import React from 'react'
import Marquee from "react-fast-marquee";
import "./Marquee.css"
function Marquees() {
  return (
    <div className='marq mt-2'>
        <Marquee direction='right' speed={100} pauseOnHover={true} >
  I can be a React component, multiple React components, or just some text.
</Marquee>
    </div>
  )
}

export default Marquees