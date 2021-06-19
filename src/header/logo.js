const style = {
    logo:{
        width: '100%',
        textAlign: 'center',
        background: 'linear-gradient(229.99deg, #007beee0 -26%, #4a5cff 145%)',
        color: 'white',
        borderRadius: '5px',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
        marginTop: '10px'
    },
    h1:{
        fontSize: '55px'
    },
    hr:{
        backgroundColor: 'rgb(255, 240, 240)',
        border: 'none',
        height: '2px'
    }
};

export default function Logo(){
    return (
        <div style={style.logo}>
            <h1 style={style.h1}>Wheather App</h1>
            <hr style={style.hr}/>
        </div>
    );
}