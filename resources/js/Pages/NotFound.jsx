import MainStyle from '../utils/Styles/Page'
import '../utils/Styles/NotFound.scss'
import {Button} from "@nextui-org/react"
import {allTheme} from '../utils/Styles/Theme'
import { useTheme } from '../utils/Hooks'


function NotFound() {

  const { color } = useTheme()

  const gradientStyle = {
    backgroundImage: allTheme[color].bg,
    backgroundClip: 'text',
    color: 'transparent',
    fontWeight: 'bold',
    WebkitBackgroundClip: 'text'
  }
  return (
    <MainStyle>
      <div className="w-full flex flex-col justify-center text-center">
        <p className="text-2xl font-semibold" style={gradientStyle}>404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 dark:text-slate-400 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="/">
          <Button className='button-bg' radius="md">
            Go back home
          </Button>
          </a>
        </div>
      </div>
    </MainStyle>
  );
}
  
export default NotFound
  