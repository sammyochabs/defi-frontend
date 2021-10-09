import { useEffect, useState } from 'react' // -
import BigNumber from 'bignumber.js' // -
import { useWeb3React } from '@web3-react/core' //-
import multicall from 'utils/oldMultiCall' ///
// import { getMasterChefAddress } from 'utils/addressHelpers'
// Replaced the getMasterChefAddress with getOldMasterChefAddress from oldAddressHelpers
import { getOldMasterChefAddress } from 'utils/oldAddressHelpers' // -
import masterChefABI from 'config/abi/masterchef.json' // -
// import { farmsConfig } from 'config/constants' // replaced the current constants with old constants value from panckake old version code.
// import {FarmConfig} from 'config/constants/type' // Added new oldTypes file from panckage old version
import { oldFarmsConfig } from 'config/constants' // -
import { FarmConfig } from 'config/constants/oldTypes' ///
import useRefresh from 'hooks/useRefresh' ///

export interface FarmWithBalance extends FarmConfig {
  balance: BigNumber
}

const useFarmsWithBalance = () => {
  const [farmsWithBalances, setFarmsWithBalances] = useState<FarmWithBalance[]>([])
  const { account } = useWeb3React()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalances = async () => {
      const calls = oldFarmsConfig.map((farm) => ({
        address: getOldMasterChefAddress(),
        name: 'pendingCake',
        params: [farm.pid, account],
      }))

      const rawResults = await multicall(masterChefABI, calls)
      const results = oldFarmsConfig.map((farm, index) => ({ ...farm, balance: new BigNumber(rawResults[index]) }))

      setFarmsWithBalances(results)
    }

    if (account) {
      fetchBalances()
    }
  }, [account, fastRefresh])

  return farmsWithBalances
}

export default useFarmsWithBalance
