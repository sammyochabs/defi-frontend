import React from 'react'
import styles from '../../../../style/table.module.css'
import TableHeader from './TableHeader'
import TableItem from './TableItem'
import { ViewProps } from './TableMenu'

const TableBody: React.FC<ViewProps> = ({ showView1, setShowView1 }) => {
  return (
    <div className={styles.tableBodyContainer}>
      <TableHeader />
      <div className={showView1 ? '' : styles.view2Container}>
        <TableItem addedBClass={false} addedClass={'noBorderRight'} showView1={showView1} setShowView1={setShowView1} />
        <TableItem addedBClass={false} addedClass={'noBorderRight'} showView1={showView1} setShowView1={setShowView1} />
        <TableItem addedBClass={false} addedClass={''} showView1={showView1} setShowView1={setShowView1} />
        <TableItem addedBClass addedClass={'noBorderRight'} showView1={showView1} setShowView1={setShowView1} />
        <TableItem addedBClass addedClass={'noBorderRight'} showView1={showView1} setShowView1={setShowView1} />
        <TableItem addedBClass addedClass={''} showView1={showView1} setShowView1={setShowView1} />
      </div>
    </div>
  )
}

export default TableBody
