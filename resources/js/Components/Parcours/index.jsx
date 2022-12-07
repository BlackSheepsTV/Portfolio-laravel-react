import { parcours } from '../../Datas/Parcours'
import '../../utils/Styles/Parcours.scss'

function Parcours() {

    return (
        <div className="box-wrapper box-parcours-wrapper">
            {parcours.map((parcour, index) => (
                <div className='parcour-row' key={index}>
                    <div className='date-wrapper'>
                        <span className='date'>{parcour.date}</span> <span className='entreprise'>{parcour.entreprise}</span>
                    </div>
                    <span className='objectif'>{parcour.objectif}</span>
                </div>
            ))}
        </div>
    );
}

export default Parcours