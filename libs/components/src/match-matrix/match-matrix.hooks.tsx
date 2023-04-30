import { selectCurrentTab, selectMatchByID, useStore } from '@omnidash/store'
import { cleanObject } from '@omnidash/utils'
import { useCallback, useState } from 'react'
import { ILineAttributes, ILineState } from './match-matrix.types'
import { MATRIX_ATTRIBUTES } from './matrix-matrix.constants'
import { getRecentTeamData } from './matrix-matrix.utils'

export const useMatchMatrix = () => {
  const [supporterToggle, setSupporterToggle] = useState(true)
  const [gamesCount, setGamesCount] = useState(10)
  const currentTab = useStore(selectCurrentTab)
  const match = useStore(selectMatchByID(currentTab?.state.resource?.id ?? ''))
  const [lines, setLines] = useState<ILineState>(
    Object.values(MATRIX_ATTRIBUTES).reduce((res, item) => {
      return { ...res, [item]: { value: 0, state: 'over' } }
    }, {})
  )

  const handleSupporterToggle = () => setSupporterToggle(state => !state)

  const handleGamesCount = (value: number) => setGamesCount(value)

  const handleLineChange = useCallback(
    (attribute: ILineAttributes, attributeState?: 'over' | 'under') =>
      (value?: number) => {
        setLines(state => ({
          ...state,
          [attribute]: {
            ...state[attribute],
            ...cleanObject({ value, state: attributeState }),
          },
        }))
      },
    []
  )

  const handleGetTeamData = useCallback(
    (index: number, side: 'home' | 'away') =>
      getRecentTeamData({ match, gamesCount, side, index }),
    [match, gamesCount]
  )

  return {
    gamesCount,
    match,
    lines,
    supporterToggle,
    handleGamesCount,
    handleLineChange,
    handleGetTeamData,
    handleSupporterToggle,
  }
}
