import { FaCss3Alt, FaHtml5, FaReact, FaVuejs, FaNodeJs, FaPhp, FaLaravel, FaAws } from "react-icons/fa"
import { SiMongodb, SiJavascript } from "react-icons/si"
import { GrMysql } from "react-icons/gr"
import { BiLogoTailwindCss } from "react-icons/bi"

export const front = {
    'HTML': {svg: <FaHtml5 />, color: '#ff6600'},
    'CSS / SASS / BootStrap': {svg: <FaCss3Alt />, color: '#00ccff'},
    'Tailwind': {svg: <BiLogoTailwindCss />, color: '#33d6ff'},
    'JavaScript': {svg: <SiJavascript />, color: '#ffff00'},
    'Vue3': {svg: <FaVuejs />, color: '#009933'},
    'React': {svg: <FaReact />, color: '#00ccff'}
}

export const back = {
    'Node': {svg: <FaNodeJs />, color: '#009933'},
    'PHP': {svg: <FaPhp />, color: '#3366cc'},
    'SQL / MySQL': {svg: <GrMysql />, color: '#0066cc'},
    'MongoDb': {svg: <SiMongodb />, color: '#33cc33'},
    'LARAVEL': {svg: <FaLaravel />, color: '#ff3300'},
    'API REST': '',
}

export const globalSkill = [
    'Responsive',
    'MVC',
    'Git',
    'Agile',
    'Kanban',
    'SEO',
]

export const skills = {
    Front: {
        'HTML': {svg: <FaHtml5 />, color: '#ff6600'},
        'CSS / SASS / BootStrap': {svg: <FaCss3Alt />, color: '#00ccff'},
        'Tailwind': {svg: <BiLogoTailwindCss />, color: '#33d6ff'},
        'JavaScript': {svg: <SiJavascript />, color: '#ffff00'},
        'Vue3': {svg: <FaVuejs />, color: '#009933'},
        'React': {svg: <FaReact />, color: '#00ccff'}
    },

    Back: {
        'Node': {svg: <FaNodeJs />, color: '#009933'},
        'PHP': {svg: <FaPhp />, color: '#3366cc'},
        'SQL / MySQL': {svg: <GrMysql />, color: '#0066cc'},
        'MongoDb': {svg: <SiMongodb />, color: '#33cc33'},
        'LARAVEL': {svg: <FaLaravel />, color: '#ff3300'},
        'AWS': {svg: <FaAws />},
        'API REST': '',
    },

    Global: {
        'Responsive': '',
        'MVC': '',
        'Git': '',
        'Agile': '',
        'Kanban': '',
        'SEO': '',
        'CI/CD': ''
    }
}