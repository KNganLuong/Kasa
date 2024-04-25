import { useState } from 'react'
import LocationItem from './LocationItem'
import { useEffect } from 'react'

const Galerie = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('../../../logements.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
      .catch((error) =>
        console.error('Erreur lors du chargement du JSON:', error)
      )
  }, [])

  return (
    <ul className='kasa-location-list'>
      {data.map(({ id, cover, title }) => (
        <LocationItem key={id} cover={cover} title={title} />
      ))}
    </ul>
  )
}
export default Galerie
