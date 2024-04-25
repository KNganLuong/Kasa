import Header from '../components/Header'
import Footer from '../components/Footer'
import Slideshow from '../components/logement/Slideshow'
import LogementContent from '../components/logement/LogementContent'
import Collapse from '../components/Collapse'

const Logement = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <Slideshow></Slideshow>
        <LogementContent></LogementContent>
        <Collapse></Collapse>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Logement
