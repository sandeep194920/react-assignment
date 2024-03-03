import { useState } from 'react'
import Icon from './Icon'

function Votes() {
  // These state values are related to this component and not global, hence haven't defined them in useGlobalContext
  const [selected, setSelected] = useState(false)
  const [voteCounter, setVoteCounter] = useState(1)

  const selectHandler = () => {
    setSelected((prev) => !prev)
  }

  const incrementCounter = () => {
    setVoteCounter((cntr) => cntr + 1)
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
