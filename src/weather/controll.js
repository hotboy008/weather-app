import FindPanel from './findPanel'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

export default function Controll(props){
    return (
        <div className='controll'>
            <GoChevronLeft size='50px' className='prevBtn' onClick={() => props.changeCard('left')} />
            <span className='dayCaption'>{props.day}</span>
            <GoChevronRight size='50px' className='nextBtn' onClick={() => props.changeCard('right')} />

            <FindPanel searchClick={props.onClick} />
        </div>
    );
}