import { v4 as uuidv4 } from 'uuid'
import ScaleValue from './ScaleValue'

const LogementContent = ({
  logementTitle,
  logementLocation,
  logementHost,
  logementTag,
  logementRating,
}) => {
  return (
    <article className='logement-content'>
      <section className='logement-content-header'>
        <div className='logement-title'>
          <h2 className='logement-name'>{logementTitle}</h2>
          <h3 className='logement-location'>{logementLocation}</h3>
        </div>
        <div className='logement-tag '>
          {logementTag &&
            logementTag.map((tag) => (
              <p className='logement-tag-text ' key={uuidv4()}>
                {tag}
              </p>
            ))}
        </div>
      </section>
      <section className='logement-content-info'>
        <div className='logement-host'>
          <p className='logement-host-name'>{logementHost?.name}</p>
          <img
            className='logement-host-photo'
            src={logementHost?.picture}
            alt={logementHost?.name}
          ></img>
        </div>
        <ScaleValue logementRating={logementRating}></ScaleValue>
      </section>
    </article>
  )
}
export default LogementContent
