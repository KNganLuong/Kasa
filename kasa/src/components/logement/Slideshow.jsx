const Slideshow = ({ picturesSrc }) => {
  return (
    <div className='slideshow-container'>
      <img className='slideshow-pictures' src={picturesSrc[0]} />
    </div>
  )
}
export default Slideshow
