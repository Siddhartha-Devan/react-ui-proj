import React from 'react'
import './feature.css' 

const Feature = ({title, text}) => {
  return (
    <div className='gpt3__features-container-feature'>
      <div className='gpt3__features-container-feature-title'>
        <div></div>
        {title}
      </div>
      <div className='gpt3__features-container-feature-text'>
        {text}
      </div>
    </div>
  )
}

export default Feature