import { useContext } from 'react'
import { GlobalContext } from '../Context'

export function useTheme() {
    const { theme, toggleTheme } = useContext(GlobalContext)
    return { theme, toggleTheme }
}

export function useIsReady() {
  const { isReady, setIsReady } = useContext(GlobalContext)
  return { isReady, setIsReady }
}


export function useDate() {
  const { currentDate } = useContext(GlobalContext)
  return { currentDate }
}

export function useHeader() {
  const { welcome, skill , parcours, quizz , contact, sectionIntercept, setSectionIntercept} = useContext(GlobalContext)
  return { welcome, skill , parcours, quizz , contact, sectionIntercept, setSectionIntercept}
}

