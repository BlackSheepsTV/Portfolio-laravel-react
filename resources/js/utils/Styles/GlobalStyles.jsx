import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../Hooks'
import {allTheme} from './Theme'

export const StyledGlobalStyle = createGlobalStyle`
    
    #app {
      background: ${({ theme }) => (theme && allTheme[theme].bg)};
      color: ${({ theme }) => (theme === 'dark' ? 'white' : '#64748b')}
    }

    :is(.dark .dark\:bg-default),.bg-background {
      background: ${({ color }) => (color && allTheme[color].bg)};
      
    }

    .button-bg {
      background: ${({ color }) => (
        `linear-gradient(135deg, rgb(${color && allTheme[color].color1}), rgb(${color && allTheme[color].color2}), rgb(${color && allTheme[color].color2}), rgb(${color && allTheme[color].color1}))`
      )};
      background-size: 300%;
      background-position: left;
      transition: 0.5s background-position ease-in-out;

      &:hover {
        background-position: right;
        z-index: 30;
      }
    }

    .box-wrapper, .contact-wrapper {
      background: ${({ theme }) => (theme && allTheme[theme].box)};
      color: ${({ theme }) => (theme === 'dark' ? 'white' : '#1e293b')}
    }

    .contact-wrapper input, .contact-wrapper textarea {
      color: ${({ theme }) => (theme === 'dark' ? 'white' : '#1e293b')};
      border-bottom: 1px solid ${({ theme }) => (theme === 'dark' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(30, 41, 59, 0.4)')};
    }

    .contact-wrapper input:focus, .contact-wrapper textarea:focus {
      color: ${({ theme }) => (theme === 'dark' ? 'white' : '#1e293b')};
      border-bottom: 1px solid ${({ theme }) => (theme === 'dark' ? 'rgba(255, 255, 255, 1)' : 'rgba(30, 41, 59, 1)')};
    }

    .contact-wrapper input:focus::placeholder {
      color: ${({ theme }) => (theme === 'dark' ? 'rgba(255,255,255, 0.6)' : 'rgba(30, 41, 59, 0.6)')};
    }

    .skill__row, .parcour-row {
      &:hover {
        background: ${({ color }) => (color && allTheme[color].bg)};
        color: white;
      }
    }

    .parcour-row:before {
      content: '';
      position: absolute;
      bottom: -10px;
      width: 70%;
      border-bottom: 1px solid ${({ theme }) => (theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)')};
    }

    .question-number, .skill__title, .result-title {
      background: ${({ color }) => (color && allTheme[color].bg)};
      color: white;
    }

    footer, .user {
       background: ${({ theme }) => (theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : '#e2e8f0')}
    }
`

function GlobalStyle() {
  const { theme, color } = useTheme()

  return <StyledGlobalStyle theme={ theme } color={ color } />
}

export default GlobalStyle