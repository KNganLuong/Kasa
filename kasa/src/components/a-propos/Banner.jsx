import bannerPropos from '../../assets/bannerPropos.jpg'

const Banner = () => {
  return (
    <div className='kasa-banner'>
      <img
        src={bannerPropos}
        alt='kasa-banner-a-propos'
        className='kasa-banner-img'
      />
    </div>
  )
}
export default Banner
