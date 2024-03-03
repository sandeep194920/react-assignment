import { useContext } from 'react'
import { AppContext } from './Context'

// Using custom hook so that we don't have to import both useContext and AppContext in the components that we need the state. Just useGlobalContext import should be good
const useGlobalContext = () => {
  return useContext(AppContext)
}

export default useGlobalContext
