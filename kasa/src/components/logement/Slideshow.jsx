import { useState } from 'react'
import arrow_back from '../../assets/arrow_back.png'
import arrow_forward from '../../assets/arrow_forward.png'

const Slideshow = ({ picturesSrc }) => {
  const [currentIndexImg, setIndexImg] = useState(0)

  const handleClick = (typeClick) => {
    if (picturesSrc.length > 1) {
      if (typeClick === 'back') {
        setIndexImg(
          currentIndexImg > 0 ? currentIndexImg - 1 : picturesSrc.length - 1
        )
      }
      if (typeClick === 'forward') {
        setIndexImg(
          currentIndexImg < picturesSrc.length - 1 ? currentIndexImg + 1 : 0
        )
      }
    }
  }

  return (
    <div className='slideshow-container'>
      {picturesSrc.length > 1 && (
        <>
          <img
            className='slideshow-pictures'
            src={picturesSrc[currentIndexImg]}
            alt={`image-${currentIndexImg}`}
          />
          <img
            onClick={() => handleClick('forward')}
            className='arrow arrow-forward'
            id='arrow-forward'
            src={arrow_forward}
            alt='arrow-forward'
          />

          <img
            onClick={() => handleClick('back')}
            className='arrow arrow-back'
            id='arrow-back'
            src={arrow_back}
            alt='arrow-back'
          />
          <div className='numereting'>
            {currentIndexImg + 1} / {picturesSrc.length}
          </div>
        </>
      )}
      {picturesSrc.length === 1 && (
        <img
          className='slideshow-pictures'
          src={picturesSrc[currentIndexImg]}
          alt={`image-${currentIndexImg}`}
        ></img>
      )}
    </div>
  )
}

export default Slideshow
