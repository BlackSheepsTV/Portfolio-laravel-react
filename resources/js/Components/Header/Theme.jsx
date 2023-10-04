import '../../utils/Styles/Theme.scss'
import {allTheme} from '../../utils/Styles/Theme'
import { useTheme } from '../../utils/Hooks'

function Theme({setShowTheme}) {

    const { setColor } = useTheme()

    function toggleTheme(color) {
        setColor(color)
        localStorage.setItem('color', color)
    }

    const filteredThemes = Object.fromEntries(
        Object.entries(allTheme)
          .filter(([themeKey]) => themeKey !== 'dark' && themeKey !== 'light')
          .map(([themeKey, themeValue]) => [themeKey, themeValue])
      );

    return (
        <div className="choose-theme-wrapper" onMouseLeave={() => setShowTheme(false)}>
            {Object.keys(filteredThemes).map((colorKey,index) => (
                <div className='theme-wrapper'  key={index} onClick={() => toggleTheme(colorKey)}>
                    <div className='theme' style={{background: allTheme[colorKey].bg}}> </div>
                </div> 
            ))}
        </div>
    )
}

export default Theme;