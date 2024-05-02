import { useState } from 'react'

const Collapse = ({ data }) => {
  const [isShown, setIsShown] = useState(false)
  const [typeCollapse, setTypeCollapse] = useState('')

  const showCollapse = (title) => {
    setTypeCollapse(title)
    setIsShown(!isShown)
  }

  return (
    <ul className='collapse-container'>
      {data.map(({ title, description }) => (
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
      ))}
    </ul>
  )
}

export default Collapse
