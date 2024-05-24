import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Banner from '../components/a-propos/Banner'
import Collapse from '../components/layout/Collapse'
import { aboutContent } from '../data_propos'

const Propos = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <Banner></Banner>
        <ul className='collapse-container'>
          {aboutContent.map(({ title, content }) => (
            <Collapse key={title} title={title} content={content} />
          ))}
        </ul>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Propos
