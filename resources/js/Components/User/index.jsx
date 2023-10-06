import '../../utils/Styles/User.scss'
import { allTheme } from '../../utils/Styles/Theme'
import { useTheme } from '../../utils/Hooks'
import { Button } from "@nextui-org/react"
import { FiDownload } from 'react-icons/fi'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

import { motion } from "framer-motion"

function User({user}) {

    const { color } = useTheme()

    const gradientStyle = {
        backgroundImage: allTheme[color].bg,
        backgroundClip: 'text',
        color: 'transparent',
        fontWeight: 'bold',
    }

    const calculateAge = (birthdate) => {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
    
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
    
        return age;
    };
    
    const age = calculateAge('1995-10-31');

    return (
    <div className='user'>
        <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}  className='w-full flex flex-col items-center gap-6' ref={user}>
            <div className='avatar'>
                <img src={`/storage/Gaetan_300.avif`} alt='Gaetan'/>
            </div>

            <div className='user__desc'>
                <p className='text-black dark:text-white'>Hello, I'm <span style={gradientStyle}>Gaëtan ETAME</span>, <span style={gradientStyle}>{age}</span> years old, a <span style={gradientStyle}>fullstack</span> web developpeur with 2 years of experience. </p>
                <p className='text-black dark:text-white'>My goal is to help you to have the <span style={gradientStyle}>best website</span> for your company and with the <span style={gradientStyle}>best experience</span> for all the user.</p>
            </div>

            <div className='flex items-center gap-2'>
                <a href="/storage/CV_ETAME_Gaëtan_web.pdf" download="CV_ETAME_Gaëtan.pdf">
                    <Button radius="full" className='button-bg' style={{color: 'white'}}>
                        Download CV <FiDownload></FiDownload>
                    </Button>
                </a>

                <a href='https://github.com/BlackSheepsTV' target='_blank' className='w-[40px] h-[40px] flex items-center justify-center rounded-xl bg-white hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700' aria-label="My github">
                    <BsGithub className='w-[25px] h-[25px]'></BsGithub>
                </a>
            
                <a href='https://www.linkedin.com/in/ga%C3%ABtan-etame/'  target='_blank' className='w-[40px] h-[40px] flex items-center justify-center rounded-xl bg-white hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700' aria-label="my linkedin">
                    <BsLinkedin className='w-[25px] h-[25px]'></BsLinkedin>
                </a>
            
            </div>

        </motion.div>
    </div>
    )
}

export default User