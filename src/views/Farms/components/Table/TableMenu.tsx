import React, { useState } from 'react'
import styles from '../../../../style/table.module.css'
import view1Active from '../../../../images/view1-active.svg'
import view2Inactive from '../../../../images/view2-inactive.svg'
import view1Inactive from '../../../../images/view1-inactive.svg'
import view2Active from '../../../../images/view2-active.svg'

export interface ViewProps {
  setShowView1: React.Dispatch<React.SetStateAction<boolean>>
  showView1: boolean
}

const TableMenu: React.FC<ViewProps> = ({ showView1, setShowView1 }) => {
  const changeView = (isActiveButton) => {
    console.log(isActiveButton)
    if (isActiveButton) {
      if (showView1) {
        setShowView1(true)
      } else {
        setShowView1(true)
      }
    } else {
      if (showView1 === false) {
        setShowView1(false)
      }
      if (showView1 === true) {
        setShowView1(false)
      }
    }
  }

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div>
          <img onClick={() => changeView(true)} src={showView1 ? view1Active : view1Inactive} alt="" />
          <img onClick={() => changeView(false)} src={showView1 === false ? view2Active : view2Inactive} alt="" />
        </div>
        <div>
          <div>
            <input placeholder="토큰명, 심볼 검색" className={styles.searchBar} type="text" />
          </div>
          <div className={styles.activeButtons}>
            <button type="button">Active</button>
            <button type="button">InActive</button>
          </div>
          <div>
            <input id="staked" type="checkbox" checked={false} />
            <label htmlFor="staked">Staked</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableMenu
