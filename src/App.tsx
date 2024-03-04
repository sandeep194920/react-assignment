import './App.css'
import Icon from './components/Icon'
import Votes from './components/Votes'
import useGlobalContext from './context/useGlobalContext'

function App() {
  // Could've defined this state here, but number of rows of upvotes are globally same throughout the app, hence definded it in global ctx
  const { voteGroups, addVoteGroups, resetAppState } = useGlobalContext()
  return (
    <main className="main-container">
      {[...Array(voteGroups)].map((_, index) => (
        <Votes key={index} voteID={index} />
      ))}
      {/* This add icon was not part of requirement, but added this so that multiple lists can be tested */}
      <Icon size="small" iconType="plus" onClick={addVoteGroups} />
      <button className="reset-btn" onClick={resetAppState}>
        Reset App State
      </button>
    </main>
  )
}

export default App
