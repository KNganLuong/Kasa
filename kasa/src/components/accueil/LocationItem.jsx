const LocationItem = ({ title, cover }) => {
  return (
    <li className='kasa-location-item'>
      <img
        className='kasa-location-item-cover'
        src={cover}
        alt={`${title} cover `}
      ></img>
      <span className='kasa-location-item-title'>{title}</span>
    </li>
  )
}
export default LocationItem
