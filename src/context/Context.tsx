import { FC, ReactNode, createContext, useState } from 'react'

const defaultContextValues = {
  voteGroups: 2,
  addVoteGroups: () => {},
}

const AppContext = createContext(defaultContextValues)

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [voteGroups, setVoteGroups] = useState(2)

  const addVoteGroups = () => {
    setVoteGroups((cntr) => cntr + 1)
  }

  return (
    <AppContext.Provider value={{ voteGroups, addVoteGroups }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
