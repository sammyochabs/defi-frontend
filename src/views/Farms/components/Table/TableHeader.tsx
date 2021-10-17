import React from 'react'
import styles from '../../../../style/table.module.css'

const TableHeader = () => {
  return (
    <div className={styles.tableHeaderContainer}>
      <ul>
        <li>페어명</li>
        <li>예상 연 수익률</li>
        <li>예치 자산</li>
        <li>DOODA 보상</li>
      </ul>
    </div>
  )
}

export default TableHeader
