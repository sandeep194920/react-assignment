import { useState } from 'react'
import Icon from './Icon'

type VoteProps = {
  voteID: number
}

type StorageProps = {
  // localstorage holds selected prop as string, so adding here to avoid warnings
  selected: boolean | string
  voteCounter: number
  [key: string]: string | boolean | number
}

const initialState = {
  selected: false,
  voteCounter: 1,
}

function Votes({ voteID }: VoteProps) {
  // localStorage utilities
  const setStorage = (voteID: number, state: StorageProps) => {
    localStorage.setItem(`${voteID}`, JSON.stringify(state))
  }

  const getStorage = (voteID: number): StorageProps => {
    const storedState = localStorage.getItem(`${voteID}`)
    if (storedState) {
      const result: StorageProps = JSON.parse(storedState)
      result.voteCounter = +result.voteCounter

      // Typecasting to specific types
      result.voteCounter = Number(result.voteCounter)
      result.selected = result.selected === 'true'

      return result
    }
    return initialState
  }

  // These state values are related to this component and not global, hence haven't defined them in useGlobalContext

  const [selected, setSelected] = useState(getStorage(voteID).selected)

  // converting the result to number (+) as localStorage parse gives string
  const [voteCounter, setVoteCounter] = useState(
    +getStorage(voteID).voteCounter
  )

  const updateStorage = (state: string, val: string) => {
    const currentStorage = getStorage(voteID)
    currentStorage[state] = val
    setStorage(voteID, currentStorage)
  }

  const selectHandler = () => {
    setSelected((prev) => {
      updateStorage('selected', `${!prev}`)
      return !prev
    })
  }

  const incrementCounter = () => {
    setVoteCounter((cntr) => {
      updateStorage('voteCounter', `${cntr + 1}`)
      return cntr + 1
    })
  }

  return (
    <section className="votes-row">
      <div className="votes-container">
        {/* Since we are using voteCounter which is common to all, selecting one would select all the votes */}
        {[...Array(voteCounter)].map((_, index) => (
          <Icon
            key={index}
            iconType="vote"
            onClick={selectHandler}
            variant={selected ? 'selected' : 'default'}
          />
        ))}
      </div>
      <Icon iconType="plus" onClick={incrementCounter} />
    </section>
  )
}

export default Votes
