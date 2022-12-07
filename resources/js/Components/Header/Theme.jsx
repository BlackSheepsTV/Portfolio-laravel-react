import '../../utils/Styles/Theme.scss'
import {allTheme} from '../../utils/Styles/Theme'
import { useTheme } from '../../utils/Hooks'

function Theme({setShowTheme}) {

    const { toggleTheme } = useTheme()

    return (
        <div className="choose-theme-wrapper" onMouseLeave={() => setShowTheme(false)}>
            {allTheme.map((theme,index) => (
                <div className='theme-wrapper'  key={index}  onClick={() => toggleTheme(theme)}>
                    <div className='theme' style={{background: theme.bg}}> </div>
                </div> 
            ))}
           
            
        </div>

    );
}

export default Theme;