import { FaTelegramPlane, FaInstagram, FaVk } from 'react-icons/fa'

const style = {
    footer:{
        width: '100%',
        textAlign: 'center',
        background: 'linear-gradient(229.99deg, #007beee0 -26%, #4a5cff 145%)',
        color: 'white',
        borderRadius: '5px',
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
        marginTop: '2px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '4rem'
    },
    contacts:{
        display: 'inline-block',
        verticalAlign: 'middle',
        cursor: 'pointer',
    },
};

export default function Footer(){
    return (
        <div style={style.footer}>
            <div>
                Contacts:&nbsp;
                <div style={style.contacts} className='contacts'>
                    <FaTelegramPlane size='25px' color='white' />
                    <FaInstagram size='25px' color='white' />
                    <FaVk size='25px' color='white' />
                </div>
            </div>
            <div>
                Design by Datsenko Bogdan
            </div>
            <div className='by'>
                Icons made by&nbsp;
                <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>
                &nbsp;from&nbsp;
                <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>
        </div>
    );
}