import React, { useState } from 'react'
import TableMenu from './TableMenu'
import styles from '../../../../style/table.module.css'
import TableBody from './TableBody'

const Table = () => {
  const [showView1, setShowView1] = useState(true)

  return (
    <>
      <TableMenu showView1={showView1} setShowView1={setShowView1} />
      <TableBody showView1={showView1} setShowView1={setShowView1} />
    </>
  )
}

export default Table
