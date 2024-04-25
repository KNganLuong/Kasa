import { useState } from 'react'
import { proposContent } from '../data_propos'

const Collapse = () => {
  const [isShown, setIsShown] = useState({})

  const showCollapse = () => {
    setIsShown(!isShown)
  }

  return (
    <ul className='collapse-container'>
      {proposContent.map(({ titre, description }) => (
        <li key={titre}>
          <div className='collapse-header' onClick={showCollapse}>
            <h3>{titre}</h3>
            <span>{isShown ? '▲' : '▼'}</span>
          </div>

          {isShown && (
            <div className='collapse-text'>
              <span>{description}</span>
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Collapse
