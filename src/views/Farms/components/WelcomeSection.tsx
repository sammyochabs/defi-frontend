import React from 'react'
import styles from '../../../style/welcome.module.css'
import welcomeBanner from '../../../images/welcomeBanner.svg'

const WelcomeSection = () => {
  return (
    <div className={styles.container}>
      <div>
        <span>파밍</span>
        <br />
        <span>
          자산을 예치하고 <br /> DOODA 토큰을 보상 받아보세요.
        </span>
      </div>
      <div>
        <img src={welcomeBanner} alt="" />
      </div>
    </div>
  )
}

export default WelcomeSection
