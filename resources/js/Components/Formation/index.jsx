import { formations } from '../../Datas/Parcours'
import '../../utils/Styles/Parcours.scss'
import { useDate } from '../../utils/Hooks'

function Formation() {

    const { currentDate } = useDate()

    return (
        <div className="box-wrapper box-parcours-wrapper">
            {formations.map((formation, index) => (
                <div className='parcour-row' key={index}>
                    <div className='date-wrapper'>
                        <span className='date'>{formation.date} {index === 0 ? currentDate.toLocaleDateString() : ''}</span> <span className=''>{formation.ecole}</span>
                    </div>
                    <span className='objectif'>{formation.etude}</span>
                </div>
            ))}
        </div>

        
    );
}

export default Formation