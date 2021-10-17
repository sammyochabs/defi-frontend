import React, { useState } from 'react'
import styles from '../../../../style/table.module.css'
import doddaIcon from '../../../../images/doddaIcon.svg'
import btcIcon from '../../../../images/btcIcon.svg'
import open from '../../../../images/open.svg'
import close from '../../../../images/close.svg'
import infoIcon from '../../../../images/info-icon.svg'
import { ViewProps } from './TableMenu'

interface Props extends ViewProps {
  addedClass: string
  addedBClass: boolean
}

const TableItem: React.FC<Props> = ({ showView1, setShowView1, addedClass, addedBClass }) => {
  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <>
      {showView1 ? (
        <div className={styles.tableItemContainer}>
          <ul>
            <li>
              <div>
                <div>
                  <div>
                    <img src={doddaIcon} alt="" />
                  </div>
                  <div>
                    <img src={btcIcon} alt="" />
                  </div>
                </div>
                <div>
                  <span>두다+BTC</span>
                  <span>DOODA + BTC</span>
                </div>
              </div>
            </li>
            <li className={styles.columnTwo}>
              <div>
                <span>
                  166.46<span>%</span>
                </span>
              </div>
            </li>
            <li className={styles.columnThree}>
              <div>
                <span>
                  <span>$</span> 44,601,993
                </span>
              </div>
            </li>
            <li>
              <div>
                <span>?</span>
              </div>
            </li>
            <li>
              <button type="button">참여하기</button>
            </li>
            <li style={{ cursor: 'pointer' }} onClick={toggleDetails}>
              <img className={styles.openIcon} src={!showDetails ? open : close} alt="" />
            </li>
          </ul>
          {showDetails && (
            <ul className={styles.details}>
              <li />
              <li>
                <div>
                  <span>배율</span>
                  <span>페어</span>
                  <span>내 예치 자산</span>
                  <span>내 보상 자산</span>
                </div>
              </li>
              <li>
                <div>
                  <span>40x</span>
                  <span>DOODA</span>
                  <span>~ - USD</span>
                  <span>~ 0USD</span>

                  <span>
                    <a href="/">View on BscScan</a>
                  </span>
                </div>
              </li>
              <li />
            </ul>
          )}
        </div>
      ) : (
        <div
          className={`${styles.tableItemContainerView2} ${addedClass.length > 0 ? styles.br : ''} ${
            addedBClass ? '' : styles.bb
          }`}
        >
          <div className={styles.view2Row1}>
            <div>
              <div>
                <div className={styles.cryptoIcons}>
                  <img src={doddaIcon} alt="" />
                </div>
                <div className={styles.cryptoIcons}>
                  <img src={btcIcon} alt="" />
                </div>
              </div>
              <div className={styles.cryptoTextDiv}>
                <span>두다+BTC</span>
                <span>DOODA + BTC</span>
              </div>
            </div>
            <div>
              <button type="button">참여하기</button>
            </div>
            <img
              onClick={toggleDetails}
              style={{ cursor: 'pointer' }}
              className={styles.openIcon}
              src={!showDetails ? open : close}
              alt=""
            />
          </div>

          <div className={styles.view2Row2}>
            <div>
              <span>DOODA 보상</span>
              <span>?</span>
            </div>
            <div>
              <span>예상 연 수익률</span>
              <span>
                166.46 <span>%</span>
              </span>
            </div>
          </div>

          <div className={styles.view2Row3}>
            <span>
              <span>$ </span>44,601,993
            </span>
          </div>
          {showDetails && (
            <div className={styles.view2Details}>
              <div>
                <div>
                  <span>배율</span>
                  <span>페어</span>
                  <span>내 예치 자산</span>
                  <span>내 보상 자산</span>
                </div>
                <div>
                  <span>40x</span>
                  <span>DOODA</span>
                  <span>~ - USD</span>
                  <span>~ 0USD</span>
                </div>
              </div>
              <span>View on BscScan</span>
            </div>
          )}
        </div>
      )}

      <div className={styles.tableItemContainerMobile}>
        <ul>
          <li className={styles.coinsHeader}>
            <div>
              <div>
                <div>
                  <img src={doddaIcon} alt="" />
                </div>
                <div>
                  <img src={btcIcon} alt="" />
                </div>
              </div>
              <div>
                <span>두다+BTC</span>
                <span>DOODA + BTC</span>
              </div>
            </div>
          </li>
        </ul>
        <div className={styles.earnDiv}>
          <div>
            <span>
              166.46<span>% </span>
            </span>
          </div>
          <div>
            <span>
              <span>$ </span>44,601,993
            </span>
          </div>
          <div style={{ cursor: 'pointer' }} onClick={toggleDetails} role="button">
            <img className={styles.openIcon} src={!showDetails ? open : close} alt="" />
          </div>
        </div>
        {showDetails && (
          <div className={styles.detailsMobile}>
            <div className={styles.detailsMobileInner}>
              <div>
                <span>배율</span>
                <span>페어</span>
                <span>내 예치 자산</span>
                <span>내 보상 자산</span>
              </div>
              <div>
                <span>40x</span>
                <span>DOODA</span>
                <span>~ - USD</span>
                <span>~ 0USD</span>
                <span>
                  <a href="/">View on BscScan</a>
                </span>
              </div>
            </div>
            <button type="button">참여하기</button>
          </div>
        )}
      </div>
    </>
  )
}

export default TableItem
