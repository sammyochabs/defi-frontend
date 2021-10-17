import React from 'react'
import styles from '../../style/header.module.css'
import logo from '../../images/logo.svg'
import logoName from '../../images/logoName.svg'
import dropDownIcon from '../../images/dropDownIcon.svg'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainerOuter}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="" />
          <img src={logoName} alt="" />
        </div>
        <div>
          <ul>
            <li>처음으로</li>
            <li>대시보드</li>
            <li>거래</li>
            <li>파밍</li>
            <li>예치</li>
            <li>IDO</li>
            <li>NFA</li>
            <li>sDOODA</li>
          </ul>
        </div>
      </div>
      <div className={styles.buttons}>
        <button type="submit">한국어</button>
        <button type="submit">지갑 연결</button>
      </div>
    </div>
  )
}

export default Header
