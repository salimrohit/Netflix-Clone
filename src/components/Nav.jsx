import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  //js code
  const[show,setShow] = useState(false)
  /* side effect */
  useEffect(()=>{
    window.addEventListener("scroll",()=>{/* first arg should be the event and the second arg should be the function to execute */   
      if(window.scrollY>600){
        setShow(true)
      }
      else{
        setShow(false)
      }
    })
  }) /* dependency is null */

  return (
    //jsx code
    <div className={`navig ${show && 'navig-black'}`}> {/* conditional rendering using truthy operator */}
      <img width={'150px'} src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="netflix-logo" />
      
    </div>
  )
}

export default Nav
