import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Slideshow from '../components/logement/Slideshow'
import LogementContent from '../components/logement/LogementContent'
import Collapse from '../components/logement/Collapse'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Logement = () => {
  const { id } = useParams()

  const [logementData, setData] = useState({})

  useEffect(() => {
    fetch('../../../logements.json')
      .then((response) => response.json())
      .then((data) => {
        const filterById = data.find((item) => item.id === id)
        setData(filterById)
      })
      .catch((error) =>
        console.error('Erreur lors de chargement du JSON :', error)
      )
  }, [id])

  return (
    <div className='logement-page'>
      <Header></Header>

      <main className='logement-container'>
        {logementData && logementData.pictures && (
          <Slideshow picturesSrc={logementData.pictures}></Slideshow>
        )}

        <LogementContent
          logementTitle={logementData.title}
          logementLocation={logementData.location}
          logementHost={logementData.host}
          logementTag={logementData.tags}
          logementRating={logementData.rating}
        ></LogementContent>

        <div className='logement-collapse'>
          {logementData && logementData.description && (
            <Collapse
              title='Description'
              content={logementData.description}
            ></Collapse>
          )}

          {logementData && logementData.equipments && (
            <Collapse
              title='Équipements'
              content={logementData.equipments}
            ></Collapse>
          )}
        </div>
      </main>

      <Footer></Footer>
    </div>
  )
}

export default Logement
