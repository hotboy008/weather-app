import { useContext } from 'react';
import { FaRegWindowClose } from 'react-icons/fa'
import { AlertContext } from '../context/alert/alertContext'
import { CSSTransition } from 'react-transition-group';

const style = {
    alert:{
        background: 'linear-gradient(229.99deg, #5bb0ffe0 -26%, #7583ff 145%)',
        position: 'absolute',
        bottom: '50px',
        height: '5rem',
        width: '90%',
        borderRadius: '5px'
    },
    content:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px 10px',
    },
    h3:{
        textAlign: 'center',
        margin: '4px 0'
    },
    btnClose:{
        position: 'absolute',
        right: '10px'
    }
};

export default function Alert(){
    const { hide, alert } = useContext(AlertContext);

    return (
        <>
            <CSSTransition in={alert.visible} timeout={750} classNames='alert'
            mountOnEnter unmountOnExit>
                <div style={style.alert}>
                    <h3 style={style.h3}>Caption</h3>
                    <div style={style.content}>
                        {alert.text}
                        <FaRegWindowClose size={40} style={style.btnClose} onClick={() => hide()} className='closeBtn' />
                    </div>
                </div>
            </CSSTransition>
        </>
    );
}