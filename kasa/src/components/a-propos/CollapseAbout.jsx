import { useState } from 'react'

const Collapse = ({ title, description }) => {
  const [isShown, setIsShown] = useState(false)
  const [typeCollapse, setTypeCollapse] = useState('')

  const showCollapse = (title) => {
    setTypeCollapse(title)
    setIsShown(!isShown)
  }

  return (
    <li key={title}>
      <div className='collapse-header' onClick={() => showCollapse(title)}>
        <h3>{title}</h3>
        <span>{isShown ? '▲' : '▼'}</span>
      </div>

      {isShown && typeCollapse === title && (
        <div className='collapse-text'>
          <span>{description}</span>
        </div>
      )}
    </li>
  )
}

export default Collapse
