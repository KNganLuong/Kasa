import Banner from '../components/accueil/Banner'
import bannerHome from '../assets/bannerHome.webp'
import Galerie from '../components/accueil/Galerie'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const Accueil = () => {
  return (
    <div>
      <Header></Header>

      <main>
        <Banner>
          <img
            src={bannerHome}
            alt='Kasa Banner Home'
            className='kasa-banner-img'
          ></img>
          <h1 className='kasa-title'>Chez vous, partout et ailleurs</h1>
        </Banner>
        <Galerie></Galerie>
      </main>

      <Footer></Footer>
    </div>
  )
}

export default Accueil
