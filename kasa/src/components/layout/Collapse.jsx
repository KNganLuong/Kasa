import { useState } from 'react'

const Collapse = ({ title, content }) => {
  const [isShown, setIsShown] = useState(false)
  // const [typeCollapse, setTypeCollapse] = useState('')

  const toggleCollapse = () => {
    // setTypeCollapse(title)
    setIsShown(!isShown)
  }

  return (
    <li>
      <div className='collapse-header' onClick={toggleCollapse}>
        <h3>{title}</h3>
        <span>{isShown ? '▲' : '▼'}</span>
      </div>

      {isShown && (
        <div className='collapse-text'>
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </li>
  )
}

export default Collapse
