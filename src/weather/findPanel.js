import { useContext, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { AlertContext } from '../context/alert/alertContext';

const style = {
    div:{
        display: 'flex',
        justifyContent: 'center',
        width: '50%',
        flex: '0.5',
        borderBottomLeftRadius: '4px'
    }
};

export default function FindPanel({ searchClick }){
    const { show } = useContext(AlertContext);
    const [value, setValue] = useState('Черкассы');

    return (
        <div style={style.div}>
            <input onChange={e => setValue(e.target.value)} onKeyDown={e => (e.key === 'Enter') && searchClick(value)} placeholder='City name' className='searchInput' />
            <GoSearch size={25} color='white' onClick={() => {
                show(`The weather forecast for ${value} is loaded`);
                searchClick(value);
            }} className='searchBtn' />
        </div>
    )
}