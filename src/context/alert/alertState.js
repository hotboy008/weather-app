import { useReducer } from 'react';
import { ALERT_HIDE, ALERT_SHOW } from '../../alert/types';
import { AlertContext } from './alertContext'
import { alertReducer } from './alertReducer';

export default function AlertState({ children }){
    const [state, dispatch] = useReducer(alertReducer, {visible: false});
    const show = text => {
        dispatch({ type: ALERT_SHOW, payload: {text} })
        setTimeout(() => hide(), 4000);
    };
    const hide = () => dispatch({ type: ALERT_HIDE });

    return (
        <AlertContext.Provider value={{ hide, show, alert: state }}>
            {children}
        </AlertContext.Provider>
    );
}