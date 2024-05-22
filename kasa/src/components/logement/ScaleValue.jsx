import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const star = <FontAwesomeIcon icon={faStar} />
const starGrey = <FontAwesomeIcon icon={faStar} />

const ScaleValue = ({ logementRating }) => {
  const range = [1, 2, 3, 4, 5]

  return (
    <div className='logement-rate'>
      {range.map((rangeElem) =>
        logementRating >= rangeElem ? (
          <span key={rangeElem.toString()} className='rating-star'>
            {star}
          </span>
        ) : (
          <span
            key={rangeElem.toString()}
            className='rating-star rating-star-grey'
          >
            {starGrey}
          </span>
        )
      )}
    </div>
  )
}
export default ScaleValue
