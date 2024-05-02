import { Link } from 'react-router-dom'

const LocationItem = ({ title, cover, id }) => {
  return (
    <Link to={`/logement/${id}`} className='kasa-location-item'>
      <img
        className='kasa-location-item-cover'
        src={cover}
        alt={`${title} cover `}
      ></img>
      <span className='kasa-location-item-title'>{title}</span>
    </Link>
  )
}
export default LocationItem
