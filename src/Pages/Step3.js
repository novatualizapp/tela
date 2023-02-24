import React from 'react'
import { useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import iconAlert from '../Assets/Images/alert.png'
import './style.css'
import logo from '../Assets/Images/logo.png'
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


const Step3 = ({ loginData, setLoginData, onCadastro }) => {

    const classes = useStyles()
    const [loading, setLoading] = React.useState(false)

    const history = useHistory()

    const onChangeSen4 = e => {
        // console.log(e.target.value)
        setLoginData({ ...loginData, codigo: e.target.value })
    }

    


    return loading
        ? <Loader />
        :
        <div className={classes.textField}>
            <img src={logo} className="logo" />


            <h3>VALIDAÇÃO</h3>
            <div className="alert-image">
                <p>Este dispositivo ainda não foi confirmado como um dispositivo seguro. por este motivo enviamos um código para seu número.</p>
            </div>
            <div>
                <TextField
                    label="Código de Segurança"
                    id="margin-none"
                    onChange={onChangeSen4}
                    defaultValue=""
                    type="password"
                    className={classes.textField}
                    //   helperText="Some important text"
                    onInput={(e) => {
                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 6)
                    }}
                />
            </div>
            <div className="botaoestilo">
                
                <button type="button" className="botaoLaranja" onClick={onCadastro}>CONFIRMAR</button>
            </div>
        </div>

}

export default Step3