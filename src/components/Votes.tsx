import { useState } from 'react'
import Icon from './Icon'
import useGlobalContext from '../context/useGlobalContext'

function Votes({ voteID }: { voteID: number }) {
  // These state values are related to this component and not global, hence haven't defined them in useGlobalContext

  const { getStorage, updateStorage } = useGlobalContext()
  const [selected, setSelected] = useState(getStorage(voteID).selected)
  const [voteCounter, setVoteCounter] = useState(getStorage(voteID).voteCounter)

  const selectHandler = () => {
    setSelected((prev) => {
      updateStorage(voteID, 'selected', `${!prev}`)
      return !prev
    })
  }

  const incrementCounter = () => {
    setVoteCounter((cntr) => {
      updateStorage(voteID, 'voteCounter', cntr + 1)
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
