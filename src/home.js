import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import alertify from 'alertifyjs';
import InputMask from 'react-input-mask'
import logo from './Assets/Images/logo1.png'
import Loader from './Components/Loader';

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

function Home() {

	 const classes = useStyles();

	return (
<>
<div className="App">
      <header className="App-header2">
       <img src={logo} className="logo" />
            <h2>Tem</h2>    

         

            <div>
                <button type="button" className="botaoLaranja" /*onClick={onClick}*/>Acessar</button>
            </div>

</header>
        </div>

</>
		)
 }

 export default Home