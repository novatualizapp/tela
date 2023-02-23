import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import alertify from 'alertifyjs';
import Loader from '../Components/Loader';
import logo from '../Assets/Images/logo1.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        background: '#1b6eb4',
    },
    textField: {
        // marginLeft: theme.spacing(1),
        // marginRight: theme.spacing(1),
        width: '77vw',
        textAlign: 'center',
    },
    radio: {
        width: '200px',
        float: 'left'
    }
    body: {
        background: '#1b6eb4',
    },
}));




const Step1 = ({ nextStep, loginData, setLoginData }) => {

    const classes = useStyles();
    const [estadosRadio, setEstadosRadio] = React.useState('fisica');
    const [loading, setLoading] = React.useState(false)

    useEffect(() => {
        alertify.alert('Caixa Tem', 'Para desbloquear sua conta digite seu Usuario!')
    }, [])

    

    const onClick = () => { 
                nextStep()        
    }


    return loading

        ? <Loader />
        :

        <div className="fundo">

            <img src={logo} className="logo" />
            

            <div>
                <button type="button" className="botaoLaranja" onClick={onClick}>Acessar</button>
            </div>

        </div>

}

export default Step1