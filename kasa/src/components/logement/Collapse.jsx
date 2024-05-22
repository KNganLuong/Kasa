import { useState } from 'react'

const Collapse = ({ title, content }) => {
  const [isShown, setIsShown] = useState(false)

  const showCollapse = () => {
    setIsShown(!isShown)
  }

  return (
    <section className='collapse-container'>
      <div className='collapse-header' onClick={() => showCollapse()}>
        <h3>{title}</h3>
        <span>{isShown ? '▼' : '▲'}</span>
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
    </section>
  )
}

export default Collapse
