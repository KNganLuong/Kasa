import logoInWhite from '../../assets/logoInWhite.png'
const Footer = () => {
  return (
    <div className='kasa-footer'>
      <img
        src={logoInWhite}
        alt='kasa-white-logo'
        className='kasa-white-logo'
      />
      <p className='kasa-footer-text'>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
