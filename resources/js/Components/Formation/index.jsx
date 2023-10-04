import { formations } from '../../Datas/Parcours'
import '../../utils/Styles/Parcours.scss'
import { useDate } from '../../utils/Hooks'

function Formation() {

    const { currentDate } = useDate()

    const end = new Date('2023-10-08')

    function compareDate() {
       
        if(currentDate < end) {
            return currentDate.toLocaleDateString()
        } else {
            return end.toLocaleDateString()
        }
    }

    return (
        <div>
            {formations.map((formation, index) => (
                <div className='parcour-row' key={index}>
                    <div className='date-wrapper'>
                        <span className='date'>{formation.date} {index === 0 ?  compareDate() : '' }</span> <span className=''>{formation.ecole}</span>
                    </div>
                    <span className='objectif text-slate-400 dark:text-slate-500'>{formation.etude}</span>
                </div>
            ))}
        </div>
    )
}

export default Formation