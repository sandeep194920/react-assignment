// This class is responsible for Create, Update functionality of localStorage

export type VoteRowType = {
  selected?: boolean
  voteCount?: number
}

export type StoreType = {
  voteGroups: number
  votes: {
    [voteID: number]: VoteRowType
  }
}

export const initialStore = {
  voteGroups: 2,
  votes: {
    0: {
      selected: false,
      voteCount: 1,
    },
    1: {
      selected: false,
      voteCount: 1,
    },
  },
}

class LocalStorage {
  voteGroups
  // 2 rows of upvotes to start with
  constructor(voteGroups: number = 2) {
    this.voteGroups = voteGroups
  }

  addVoteGroup(voteGroups: number) {
    const currentStore = this.#getStore()
    const updatedStore = {
      ...currentStore,
      votes: {
        ...currentStore.votes,
        [voteGroups - 1]: {
          selected: false,
          voteCount: 1,
        },
      },
      voteGroups,
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
    this.#updateStore(updatedStore)
  }

  getVote(voteID: number = 0): VoteRowType {
    const votes = this.#getStore().votes
    return votes[voteID]
  }

  getVoteGroups(): number {
    return this.#getStore().voteGroups
  }

  resetStore() {
    this.#updateStore(initialStore)
    window.location.reload()
  }

  // Private methods

  #getStore(): StoreType {
    const localStore = localStorage.getItem('localStore')
    if (!localStore) return this.#getInitStore()
    return JSON.parse(localStore)
  }

  #updateStore(store: StoreType) {
    localStorage.setItem('localStore', JSON.stringify(store))
  }

  #getInitStore(): StoreType {
    return initialStore
  }
}

export const store = new LocalStorage()
