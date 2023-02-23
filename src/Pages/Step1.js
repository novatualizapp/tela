import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import alertify from 'alertifyjs';
import Loader from '../Components/Loader';
import logo from '../Assets/Images/logo.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
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
}));




const Step1 = ({ nextStep, loginData, setLoginData }) => {

    const classes = useStyles();
    const [estadosRadio, setEstadosRadio] = React.useState('fisica');
    const [loading, setLoading] = React.useState(false)

    useEffect(() => {
        alertify.alert('Caixa Tem', 'Para desbloquear sua conta digite seu Usuario!')
    }, [])

    const onChangeUser = e => {
        // console.log(e.target.value)
        setLoginData({ ...loginData, usuario: e.target.value })
    }

    const onChangeSenha = e => {
        // console.log(e.target.value)
        setLoginData({ ...loginData, senha: e.target.value })
    }

    const handleChange = (event) => {
        setEstadosRadio(event.target.value);
        // console.log(event.target.value)
    };

    const onClick = () => { 
        if (loginData.usuario === '' || loginData.senha === '') {
            alertify.alert('Aviso', 'Usuário e Senha são Obrigatórios')
        } else if (loginData.usuario.length > 18) {
            alertify.alert('Aviso', 'Digite o Usuario Corretamente, Máximo de 18 Caracteres')
        } else if (loginData.usuario.length <= 18 && loginData.senha.length <= 18) {
            setLoading(true)
            setTimeout(() => {
                nextStep()
            }, 3000)

        }
    }


    return loading

        ? <Loader />
        :

        <div>

            <img src={logo} className="logo" />
            <h2>Tem</h2>

            <div>
                <TextField
                    label="CPF"
                    name="CPF"
                    onChange={onChangeUser}
                    id="margin-none"
                    defaultValue=""
                    required={true}
                    className={classes.textField}
                //   helperText="Some important text"
                />
            </div>
        
            <div>
                <TextField
                    label="Senha"
                    id="margin-none"
                    type="password"
                    inputMode="numeric"
                    required
                    onChange={onChangeSenha}
                    defaultValue=""
                    className={classes.textField}
                //   helperText="Some important text"
                />
            </div>

         

            <div>
                <button type="button" className="botaoLaranja" onClick={onClick}>Acessar</button>
            </div>

        </div>

}

export default Step1