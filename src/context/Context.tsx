import { FC, ReactNode, createContext, useState } from 'react'

type StorageProps = {
  // localstorage holds selected prop as string, so adding here to avoid warnings
  selected: boolean | string
  voteCounter: number
  [key: string]: string | boolean | number
}

type AppContextProps = {
  voteGroups: number
  addVoteGroups: () => void
  setStorage: (voteID: number, state: StorageProps) => void
  getStorage: (voteID: number) => StorageProps
  updateStorage: (voteID: number, state: string, val: string | number) => void
}

const initialState = {
  selected: false,
  voteCounter: 1,
}

const AppContext = createContext<AppContextProps>({
  voteGroups: 2,
  addVoteGroups: () => {},
  setStorage: () => {},
  getStorage: () => initialState,
  updateStorage: () => {},
})

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [voteGroups, setVoteGroups] = useState(2)

  const addVoteGroups = () => {
    setVoteGroups((cntr) => cntr + 1)
  }

  /* localStorage utilities */

  const setStorage = (voteID: number, state: StorageProps) => {
    console.log('The new state is', state)
    localStorage.setItem(`${voteID}`, JSON.stringify(state))
  }

  // this method parses all the values and makes it usable in the app
  const getStorage = (voteID: number) => {
    const storedState = localStorage.getItem(`${voteID}` || `{}`)
    if (storedState) {
      const result: StorageProps = JSON.parse(storedState)

      // Typecasting to specific types
      result.voteCounter = Number(result.voteCounter)
      result.selected = result.selected === 'true'
      return result
    }
    return initialState
  }

  // this method gives local storage as it is without parsing the keys.
  // we need this to update the storage
  const getStorageForUpdate = (voteID: number) => {
    return JSON.parse(localStorage.getItem(`${voteID}`) || `{}`)
  }

  const updateStorage = (
    voteID: number,
    state: string,
    val: string | number
  ) => {
    const currentStorage = getStorageForUpdate(voteID)
    const newStorage = {
      ...currentStorage,
      [state]: val,
    }
    setStorage(voteID, newStorage)
  }

  return (
    <AppContext.Provider
      value={{
        voteGroups,
        addVoteGroups,
        setStorage,
        getStorage,
        updateStorage,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
