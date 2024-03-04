import { FC, ReactNode, createContext, useState } from 'react'

import { store, initialStore, VoteRowType } from '../utils/localStorageCrud'

type AppContextType = {
  voteGroups: number
  addVoteGroups: () => void
  getVote: (voteID: number) => VoteRowType
  updateVote: (voteID: number, vote: VoteRowType) => void
}

const AppContext = createContext<AppContextType>({
  voteGroups: 2,
  addVoteGroups: () => {},
  getVote: () => initialStore.votes[0],
  updateVote: () => {},
})

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [voteGroups, setVoteGroups] = useState(store.getRowCount())

  const addVoteGroups = () => {
    setVoteGroups((cntr) => cntr + 1)
  }

  const getVote = (voteID: number): VoteRowType => {
    return store.getVote(voteID)
  }

  const updateVote = (voteID: number, vote: VoteRowType) => {
    store.setRow(voteID, vote)
  }

  return (
    <AppContext.Provider
      value={{
        voteGroups,
        addVoteGroups,
        getVote,
        updateVote,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
