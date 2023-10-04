import { useContext } from 'react'
import { GlobalContext } from '../Context'

export function useTheme() {
    const { theme, setTheme, color, setColor } = useContext(GlobalContext)
    return { theme, setTheme, color , setColor }
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
  const { user, skill , parcours, quizz , contact, sectionIntercept, setSectionIntercept} = useContext(GlobalContext)
  return { user, skill , parcours, quizz , contact, sectionIntercept, setSectionIntercept}
}

