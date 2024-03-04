// This class is responsible for Create, Update functionality of localStorage

export type VoteRowType = {
  selected?: boolean
  voteCount?: number
}

export type StoreType = {
  numOfRows: number
  votes: {
    [voteID: number]: VoteRowType
  }
}

export const initialStore = {
  numOfRows: 1,
  votes: {
    0: {
      selected: false,
      voteCount: 0,
    },
  },
}

class LocalStorage {
  numOfRows
  // 2 rows of upvotes to start with
  constructor(numOfRows: number = 2) {
    this.numOfRows = numOfRows
  }

  setRowCount(numOfRows: number) {
    const currentStore = this.#getStore()
    const updatedStore = {
      ...currentStore,
      numOfRows,
    }
    this.#updateStore(updatedStore)
  }

  setRow(voteID: number, vote: VoteRowType) {
    const currentStore = this.#getStore()
    const updatedStore = {
      ...currentStore,
      votes: {
        ...currentStore.votes,
        [voteID]: {
          ...currentStore.votes[voteID],
          ...vote,
        },
      },
    }
    console.log('The updated Store will be', updatedStore)
    this.#updateStore(updatedStore)
  }

  getVote(voteID: number = 0): VoteRowType {
    const votes = this.#getStore().votes
    return votes[voteID]
  }

  getRowCount(): number {
    return this.#getStore().numOfRows
  }

  // Private methods

  #getStore(): StoreType {
    const localStore = localStorage.getItem('localStore')
    if (!localStore) return this.#getInitStore()
    return JSON.parse(localStore)
  }

  #updateStore(store: StoreType) {
    console.log('REEACHED HERE')
    localStorage.setItem('localStore', JSON.stringify(store))
  }

  #getInitStore(): StoreType {
    return initialStore
  }
}

export const store = new LocalStorage()
