import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../Hooks'

export const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
      
      background: ${({ theme }) => theme.bg};
      color: ${({ theme }) => theme.text};
    }

    .front-back-wrapper {

      &:before {
        background: linear-gradient(135deg, ${({ theme }) => theme.slide[0]}, ${({ theme}) => theme.slide[1]});
      }
    }

    .skill-frontback-wrapper {
      .button {
        background: ${({ theme }) => theme.button[0]}; 

        &:hover {
            background: ${({ theme }) => theme.button[1]};
        }
    }
    }
    
`

function GlobalStyle() {
  const { theme } = useTheme()

  return <StyledGlobalStyle theme={theme }/>
}

export default GlobalStyle