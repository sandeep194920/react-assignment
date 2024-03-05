import { useState } from 'react'
import Icon from './Icon'
import useGlobalContext from '../context/useGlobalContext'

function Votes({ voteID }: { voteID: number }) {
  const { getVote, updateVote } = useGlobalContext()

  // These state values are related to this component and not global, hence haven't defined them in useGlobalContext
  const [selected, setSelected] = useState(getVote(voteID)?.selected || false)
  const [voteCounter, setVoteCounter] = useState(
    getVote(voteID)?.voteCount || 1
  )
  const selectHandler = () => {
    setSelected((prev) => {
      updateVote(voteID, {
        selected: !prev,
      })
      return !prev
    })
  }

  const incrementCounter = () => {
    setVoteCounter((cntr) => {
      updateVote(voteID, {
        voteCount: cntr + 1,
      })
      return cntr + 1
    })
  }

  return (
    <section className="votes-row">
      <div className="votes-container">
        {/* Since we are using voteCounter which is common to all, 
        selecting one would select all the votes */}
        {[...Array(voteCounter)].map((_, index) => (
          <Icon
            key={index}
            iconType="vote"
            onClick={selectHandler}
            variant={selected ? 'selected' : 'default'}
            data-testid={`icon-${voteID}-${index}`}
          />
        ))}
      </div>
      <Icon iconType="plus" onClick={incrementCounter} />
    </section>
  )
}

export default Votes
