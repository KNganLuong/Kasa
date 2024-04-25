import logo from '../assets/logo.jpg'

const Header = () => {
  return (
    <div className='kasa-header'>
      <img src={logo} alt='kasa-logo' className='Kasa-logo'></img>
      <nav>
        <a href='/'>Accueil</a>
        <a href='/a-propos_kasa'>A Propos</a>
      </nav>
    </div>
  )
}

export default Header
