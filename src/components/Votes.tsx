import Icon from './Icon'

function Votes() {
  return (
    <section className="votes-row">
      <div className="votes-container">
        <Icon iconType="vote" variant="selected" />
        <Icon iconType="vote" />
        <Icon iconType="vote" />
        <Icon iconType="vote" />
      </div>
      <Icon iconType="plus" />
    </section>
  )
}

export default Votes
