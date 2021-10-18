import React from 'react'
import '../../style/footer.css'
import telegramIcon from '../../images/sns-telegram.svg'
import footerLogo from '../../images/GH-Logo.svg'
import instagramIcon from '../../images/sns-insta.svg'
import youtubeIcon from '../../images/youtube-icon.svg'
import twitterIcon from '../../images/twitter.svg'

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <img src={footerLogo} alt="" />
        <div>
          <span>(주) 가디언 홀딩스</span>
          <span>
            (주) 가디언 홀딩스 <span>사업자 등록번호 826-81-00097</span>
          </span>
          <span>서울특별시 영등포구 양평로 116-1, 9F</span>
          <span>1670-1899</span>
        </div>
      </div>
      <div>
        <img src={telegramIcon} alt="" />
        <img src={instagramIcon} alt="" />
        <img src={youtubeIcon} alt="" />
        <img src={twitterIcon} alt="" />
      </div>
    </div>
  )
}

export default Footer
