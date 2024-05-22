import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Banner from '../components/a-propos/Banner'
import CollapseAbout from '../components/a-propos/CollapseAbout'
import { aboutContent } from '../data_propos'

const Propos = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <Banner></Banner>
        <ul className='collapse-container'>
          {aboutContent.map(({ title, description }) => (
            <CollapseAbout
              key={title}
              title={title}
              description={description}
            />
          ))}
        </ul>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Propos
