import logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='kasa-header'>
      <Link to='/'>
        <img src={logo} alt='kasa-logo' className='Kasa-logo'></img>
      </Link>
      <nav>
        <a href='/'>Accueil</a>
        <a href='/a-propos_kasa'>A Propos</a>
      </nav>
    </header>
  )
}

export default Header
